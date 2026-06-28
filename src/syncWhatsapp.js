import fetch from "node-fetch";

// ─────────────────────────────────────────────
// WhatsApp Business API (Meta) Sync Module
// ─────────────────────────────────────────────
// Required environment variables (set in GitHub Actions secrets):
//   WHATSAPP_PHONE_NUMBER_ID   → Your WhatsApp Business phone number ID
//   WHATSAPP_ACCESS_TOKEN      → Permanent / long-lived access token
//   WHATSAPP_RECIPIENT_NUMBER  → Recipient phone number in E.164 format (e.g. +250712345678)
// ─────────────────────────────────────────────

const WA_API_VERSION = "v19.0";
const WA_BASE_URL = `https://graph.facebook.com/${WA_API_VERSION}`;

const {
  WHATSAPP_PHONE_NUMBER_ID,
  WHATSAPP_ACCESS_TOKEN,
  WHATSAPP_RECIPIENT_NUMBER,
} = process.env;

// ── Low-level sender ──────────────────────────────────────────────────────────

async function sendWhatsAppMessage(payload) {
  if (!WHATSAPP_PHONE_NUMBER_ID || !WHATSAPP_ACCESS_TOKEN || !WHATSAPP_RECIPIENT_NUMBER) {
    console.warn(
      "WhatsApp sync skipped: missing env vars " +
      "(WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_ACCESS_TOKEN, WHATSAPP_RECIPIENT_NUMBER)"
    );
    return null;
  }

  const url = `${WA_BASE_URL}/${WHATSAPP_PHONE_NUMBER_ID}/messages`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: WHATSAPP_RECIPIENT_NUMBER,
      ...payload,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      `WhatsApp API error ${res.status}: ${JSON.stringify(data?.error ?? data)}`
    );
  }

  return data;
}

// ── Rate-limit helper: 1-second gap between messages ─────────────────────────

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function sendWithDelay(payload, delayMs = 1200) {
  const result = await sendWhatsAppMessage(payload);
  await sleep(delayMs);
  return result;
}

// ── Message builders ──────────────────────────────────────────────────────────

/**
 * Build the "header" intro message.
 */
function buildHeaderMessage(stats, now) {
  const catTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  const dateStr = catTime.toISOString().split("T")[0];
  const timeStr = catTime.toTimeString().slice(0, 5);

  const topCategory = Object.entries(stats.by_category ?? {})
    .sort(([, a], [, b]) => b - a)[0];

  return {
    type: "text",
    text: {
      body:
        `🤖 *DevTech Auto News Update*\n` +
        `📅 ${dateStr} at ${timeStr} CAT\n\n` +
        `📊 *Quick Stats*\n` +
        `• Total articles: *${stats.total ?? 0}*\n` +
        `• Categories: *${Object.keys(stats.by_category ?? {}).length}*\n` +
        `• Sources: *${Object.keys(stats.by_source ?? {}).length}*\n` +
        (topCategory
          ? `• 🔥 Hottest topic: *${topCategory[0]}* (${topCategory[1]} articles)\n`
          : "") +
        `\n_Full digest below_ 👇`,
    },
  };
}

/**
 * Build top-headlines message (up to 5 articles).
 */
function buildHeadlinesMessage(categorized) {
  // Pick top articles across all categories, prioritise AI & JS
  const priorityOrder = ["AI", "JavaScript", "Python", "WebDev", "Tools", "DevOps", "Cloud"];
  let topArticles = [];

  for (const cat of priorityOrder) {
    const articles = categorized[cat] ?? [];
    topArticles.push(...articles.slice(0, 2));
    if (topArticles.length >= 6) break;
  }

  // Deduplicate by URL
  topArticles = Array.from(new Map(topArticles.map((a) => [a.url, a])).values()).slice(0, 5);

  if (topArticles.length === 0) return null;

  let body = `📰 *Top Headlines*\n\n`;
  topArticles.forEach((article, i) => {
    const title =
      article.title.length > 70
        ? article.title.slice(0, 67) + "..."
        : article.title;
    body += `*${i + 1}.* ${title}\n`;
    body += `   🔗 ${article.url}\n`;
    body += `   📌 _${article.source}_\n\n`;
  });

  return { type: "text", text: { body } };
}

/**
 * Build the statistics summary message.
 */
function buildStatsMessage(stats) {
  // Top 5 languages
  const topLangs = Object.entries(stats.by_language ?? {})
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Top 5 categories
  const topCats = Object.entries(stats.by_category ?? {})
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  let body = `📊 *Stats Dashboard*\n\n`;

  body += `*🗂️ Categories*\n`;
  for (const [cat, count] of topCats) {
    const pct = stats.total ? ((count / stats.total) * 100).toFixed(0) : 0;
    const bar = "▓".repeat(Math.round(pct / 10)) + "░".repeat(10 - Math.round(pct / 10));
    body += `${bar} *${cat}* — ${count} (${pct}%)\n`;
  }

  body += `\n*💻 Language Trends*\n`;
  for (const [lang, count] of topLangs) {
    const pct = stats.language_percentages?.[lang] ?? "?";
    body += `• ${lang}: ${count} mentions (${pct}%)\n`;
  }

  body += `\n*📡 Sources*\n`;
  for (const [src, count] of Object.entries(stats.by_source ?? {})) {
    body += `• ${src}: ${count} articles\n`;
  }

  return { type: "text", text: { body } };
}

/**
 * Build the interview questions message (3 random questions).
 */
function buildInterviewMessage(interviewQuestions) {
  const categories = Object.keys(interviewQuestions);
  if (categories.length === 0) return null;

  // Pick 3 unique random categories
  const picked = new Set();
  while (picked.size < Math.min(3, categories.length)) {
    picked.add(categories[Math.floor(Math.random() * categories.length)]);
  }

  let body = `💡 *Daily Interview Questions*\n_Sharpen those skills!_\n\n`;
  let idx = 1;

  for (const cat of picked) {
    const questions = interviewQuestions[cat];
    if (!questions?.length) continue;
    const q = questions[Math.floor(Math.random() * questions.length)];

    const diffEmoji = { Easy: "🟢", Medium: "🟡", Hard: "🔴" }[q.difficulty] ?? "⚪";

    body += `*Q${idx}: [${cat}]* ${q.question}\n`;
    body += `${diffEmoji} *${q.difficulty}* | Topics: ${q.topics.join(", ")}\n`;
    body += `💭 _Hint: ${q.answer_hint}_\n\n`;
    idx++;
  }

  return { type: "text", text: { body } };
}

/**
 * Build the closing footer message.
 */
function buildFooterMessage() {
  return {
    type: "text",
    text: {
      body:
        `✅ *Update Complete!*\n\n` +
        `📚 Full archive: https://github.com/Derrick-MUGISHA/github-activity-bot\n` +
        `⚙️ Powered by GitHub Actions · Updates every 15 min\n\n` +
        `_Next update coming soon 🚀_`,
    },
  };
}

// ── Main exported function ────────────────────────────────────────────────────

/**
 * Syncs the latest news, stats, and interview questions to WhatsApp.
 *
 * @param {object} categorized  - Categorized articles from categorizeArticles()
 * @param {object} stats        - Stats object from generateStats()
 * @param {object} interviewQuestions - Questions from fetchInterviewQuestions()
 */
export async function syncWhatsapp(categorized, stats, interviewQuestions) {
  console.log("📱 Starting WhatsApp sync...");

  const now = new Date();
  const messages = [];

  // 1. Header / summary intro
  messages.push(buildHeaderMessage(stats, now));

  // 2. Top news headlines
  const headlinesMsg = buildHeadlinesMessage(categorized);
  if (headlinesMsg) messages.push(headlinesMsg);

  // 3. Stats dashboard
  messages.push(buildStatsMessage(stats));

  // 4. Interview questions
  const interviewMsg = buildInterviewMessage(interviewQuestions);
  if (interviewMsg) messages.push(interviewMsg);

  // 5. Footer
  messages.push(buildFooterMessage());

  // Send all messages sequentially with a small delay to avoid rate-limiting
  let sent = 0;
  for (const payload of messages) {
    try {
      const result = await sendWithDelay(payload);
      if (result) {
        sent++;
        console.log(`✅ WhatsApp message ${sent}/${messages.length} sent (id: ${result.messages?.[0]?.id ?? "?"})`);
      }
    } catch (err) {
      console.error(`❌ Failed to send WhatsApp message ${sent + 1}:`, err.message);
      // Continue sending remaining messages even if one fails
    }
  }

  console.log(`📱 WhatsApp sync complete: ${sent}/${messages.length} messages sent.`);
}