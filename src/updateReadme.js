import fs from "fs";

export function updateReadme(content) {
  const now = new Date();
  
  // Static documentation text
  const staticHeader = `# 🚀 DevTech Auto News

![Auto News Bot](https://github.com/Derrick-MUGISHA/github-activity-bot/actions/workflows/auto-news.yml/badge.svg)

**DevTech Auto News** is an automated bot that scrapes the latest trending topics in **Artificial Intelligence**, **JavaScript**, and **Software Development** from [Dev.to](https://dev.to) and [HackerNews](https://news.ycombinator.com).

The bot runs automatically on a schedule using **GitHub Actions**, keeping this README updated with the freshest links.

## 🛠️ How It Works
1. **Fetches Data**: Pulls articles via public APIs from Dev.to and HackerNews.
2. **Filters Content**: Selects only relevant topics (AI, JS, Tools).
3. **Updates README**: Regenerates this file with the latest news summary.
4. **Logs History**: Appends full details to \`data/news_log.md\`.

## 📦 Installation & Usage
If you want to run this locally:
\`\`\`bash
# 1. Clone the repository
git clone https://github.com/Derrick-MUGISHA/github-activity-bot.git

# 2. Install dependencies
npm install

# 3. Run the bot manually
npm start
\`\`\`
`;

  // Combine static header + dynamic news content + footer
  const readme = `${staticHeader}

## 📰 Latest Tech Headlines
${content}

---
<p align="center">
  _Last automated update: ${now.toUTCString()} • Powered by GitHub Actions_
</p>
`;

  fs.writeFileSync("README.md", readme);
}