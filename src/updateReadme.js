import fs from "fs";
import { generateBarChart, generateMermaidDiagram } from "./stats.js";

// shields.io badge syntax: literal dashes/underscores must be escaped
function badgeText(text) {
  return encodeURIComponent(String(text).replace(/-/g, "--").replace(/_/g, "__"));
}

function progressBar(count, max, width = 20) {
  const filled = Math.round((count / max) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}

export function updateReadme(newsContent, stats, interviewQuestions) {
  const now = new Date();
  const dateStr = now.toISOString().split("T")[0];

  // Generate language statistics chart
  const languageChart = generateBarChart(stats.language_percentages || {});
  const mermaidDiagram = generateMermaidDiagram(stats);

  // Category breakdown as a clean table
  const sortedCategories = Object.entries(stats.by_category)
    .sort(([, a], [, b]) => b - a)
    .filter(([, count]) => count > 0);

  let categoryBreakdown = "#### 🗂 Articles by Category\n\n";
  categoryBreakdown += "| Category | Articles | Share | |\n";
  categoryBreakdown += "|----------|---------:|------:|---|\n";
  const maxCount = sortedCategories.length > 0 ? sortedCategories[0][1] : 1;
  for (const [category, count] of sortedCategories) {
    const percentage = ((count / stats.total) * 100).toFixed(1);
    categoryBreakdown += `| **${category}** | ${count} | ${percentage}% | \`${progressBar(count, maxCount)}\` |\n`;
  }
  categoryBreakdown += "\n<sub>Articles can match more than one category, so shares may sum to over 100%.</sub>\n";

  // Source breakdown as a table
  let sourceBreakdown = "#### 📡 Articles by Source\n\n";
  sourceBreakdown += "| Source | Articles |\n|--------|---------:|\n";
  for (const [source, count] of Object.entries(stats.by_source)) {
    sourceBreakdown += `| ${source} | ${count} |\n`;
  }

  // Select random interview questions
  const randomQuestions = [];
  const categories = Object.keys(interviewQuestions);
  for (let i = 0; i < 3 && i < categories.length; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const questions = interviewQuestions[category];
    if (questions && questions.length > 0) {
      const question = questions[Math.floor(Math.random() * questions.length)];
      randomQuestions.push({ category, ...question });
    }
  }

  let interviewSection = "## 💡 Interview Question of the Hour\n\n";
  interviewSection += "> Sharpen your skills — new questions selected on every update. Try answering before opening the hint!\n\n";

  randomQuestions.forEach((q, idx) => {
    interviewSection += `**${idx + 1}. \`${q.category}\` — ${q.question}**\n\n`;
    interviewSection += `&nbsp;&nbsp;&nbsp;&nbsp;🎯 ${q.difficulty} · 🏷 ${q.topics.join(", ")}\n\n`;
    interviewSection += `<details>\n`;
    interviewSection += `<summary>&nbsp;&nbsp;&nbsp;&nbsp;💡 Show hint</summary>\n\n`;
    interviewSection += `> ${q.answer_hint}\n\n`;
    interviewSection += `</details>\n\n`;
  });

  // Trending tags — dedupe case-insensitively, keep the most frequent casing
  let tagsSection = "#### 🏷 Trending Topics\n\n";
  const seenTags = new Map();
  for (const [tag, count] of Object.entries(stats.top_tags)) {
    const key = tag.toLowerCase();
    if (seenTags.has(key)) {
      seenTags.get(key).count += count;
    } else {
      seenTags.set(key, { tag, count });
    }
  }
  const topTags = [...seenTags.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);
  topTags.forEach(({ tag, count }) => {
    tagsSection += `![${tag}](https://img.shields.io/badge/${badgeText(tag)}-${count}-0969da?style=flat-square) `;
  });
  tagsSection += "\n";

  const header = `<div align="center">

# 📰 DevTech Auto News

**Your always-fresh digest of developer & AI tech news — curated automatically, around the clock.**

![Auto News Bot](https://github.com/Derrick-MUGISHA/github-activity-bot/actions/workflows/auto-news.yml/badge.svg)
![Total Articles](https://img.shields.io/badge/Articles-${stats.total}-2ea44f?style=flat-square)
![Categories](https://img.shields.io/badge/Categories-${sortedCategories.length}-blue?style=flat-square)
![Languages](https://img.shields.io/badge/Languages-${Object.keys(stats.by_language).length}-blueviolet?style=flat-square)
![Last Update](https://img.shields.io/badge/Updated-${badgeText(dateStr)}-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

Aggregating [Dev.to](https://dev.to) · [Hacker News](https://news.ycombinator.com) · [GitHub Trending](https://github.com/trending) · [Lobste.rs](https://lobste.rs) · [Stack Overflow](https://stackoverflow.com) · [TechCrunch](https://techcrunch.com) · [freeCodeCamp](https://www.freecodecamp.org/news) — refreshed by GitHub Actions around the clock.

**[📰 Headlines](#-latest-headlines) · [💡 Interview Prep](#-interview-question-of-the-hour) · [📊 Statistics](#-statistics) · [⚙️ How It Works](#%EF%B8%8F-how-it-works)**

</div>

---
`;

  const statsSection = `## 📊 Statistics

${categoryBreakdown}

${sourceBreakdown}

#### 💻 Programming Language Trends

\`\`\`
${languageChart}
\`\`\`

${mermaidDiagram}

${tagsSection}
`;

  const aboutSection = `## ⚙️ How It Works

This repository is a fully automated news pipeline. On every run, GitHub Actions:

1. **Fetches** the latest articles from seven sources: Dev.to, Hacker News, GitHub Trending, Lobste.rs, Stack Overflow, TechCrunch, and freeCodeCamp
2. **Deduplicates and categorizes** them across ${sortedCategories.length}+ topics using keyword matching
3. **Extracts cover images** and computes language & category statistics
4. **Rebuilds this README** and appends everything to the [full archive](./data/news_log.md)
5. **Commits and pushes** the result — no human intervention needed

<details>
<summary><b>🚀 Run it yourself</b></summary>

\`\`\`bash
git clone https://github.com/Derrick-MUGISHA/github-activity-bot.git
cd github-activity-bot
npm install
npm start
\`\`\`

Fork the repo, enable GitHub Actions, and you have your own self-updating news feed.

</details>

<details>
<summary><b>📚 Data & resources</b></summary>

- [Full news archive](./data/news_log.md) — complete history of every fetched article
- [Statistics](./data/stats.json) — raw stats data (JSON)
- [Categorized articles](./data/categorized.json) — articles grouped by topic
- [Interview question bank](./data/interview_questions.json) — the full question set

</details>
`;

  const footer = `## 🤝 Contributing

Ideas for new sources, categories, or interview questions are welcome — [open an issue](https://github.com/Derrick-MUGISHA/github-activity-bot/issues/new) or submit a pull request.

## 📄 License

Released under the [MIT License](https://opensource.org/licenses/MIT) — free to use, fork, and modify.

---

<div align="center">
  <sub>🤖 Last automated update: <b>${now.toUTCString()}</b></sub><br/>
  <sub>Powered by GitHub Actions · Built with ❤️ by <a href="https://github.com/Derrick-MUGISHA">Derrick MUGISHA</a></sub>
</div>
`;

  const readme = `${header}
${newsContent}

---

${interviewSection}
---

${statsSection}
---

${aboutSection}
---

${footer}`;

  fs.writeFileSync("README.md", readme);
}
