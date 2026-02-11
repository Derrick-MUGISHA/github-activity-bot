export function formatNews(articles) {
  const now = new Date();

  const catTime = new Date(now.getTime() + (2 * 60 * 60 * 1000));

  const date = catTime.toISOString().split("T")[0];

  const hour = catTime.getUTCHours();

  const catFullString = catTime.toUTCString().replace("GMT", "CAT");

  let fullLog = `\n\n## 📰 DevTech News — ${date} ${hour}:00 CAT\n\n`;
  let summaryList = [];

  articles.forEach((post, index) => {
    fullLog += `### ${index + 1}. [${post.title}](${post.url})\n`;
    fullLog += `🕒 ${new Date(post.published_at).toUTCString()}\n\n`;
    fullLog += `${post.description || ""}\n\n---\n\n`;

    summaryList.push(`- [${post.title}](${post.url})`);
  });

  const summary = `
# 🚀 DevTech Auto News

## Latest Updates (${date} ${hour}:00 CAT)

${summaryList.join("\n")}

_Last automated update: ${catFullString}_
`;

  return { fullLog, summary };
}