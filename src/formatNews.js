export function formatNews(articles) {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const hour = now.getUTCHours();

  let fullLog = `\n\n## 📰 DevTech News — ${date} ${hour}:00 UTC\n\n`;
  let summaryList = [];

  articles.forEach((post, index) => {
    fullLog += `### ${index + 1}. [${post.title}](${post.url})\n`;
    fullLog += `🕒 ${new Date(post.published_at).toUTCString()}\n\n`;
    fullLog += `${post.description || ""}\n\n---\n\n`;

    summaryList.push(`- [${post.title}](${post.url})`);
  });

  const summary = `
# 🚀 DevTech Auto News

## Latest Updates (${date} ${hour}:00 UTC)

${summaryList.join("\n")}

_Last automated update: ${now.toUTCString()}_
`;

  return { fullLog, summary };
}
