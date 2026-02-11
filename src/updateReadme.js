import fs from "fs";
import { generateBarChart, generateMermaidDiagram } from "./stats.js";

export function updateReadme(newsContent, stats, interviewQuestions) {
  const now = new Date();
  
  // Generate language statistics chart
  const languageChart = generateBarChart(stats.language_percentages || {});
  const mermaidDiagram = generateMermaidDiagram(stats);
  
  // Create category breakdown
  let categoryBreakdown = "### 📊 Articles by Category\n\n";
  const sortedCategories = Object.entries(stats.by_category)
    .sort(([, a], [, b]) => b - a)
    .filter(([, count]) => count > 0);
  
  for (const [category, count] of sortedCategories) {
    const percentage = ((count / stats.total) * 100).toFixed(1);
    const barLength = Math.round((count / sortedCategories[0][1]) * 20);
    const bar = "🟦".repeat(barLength);
    categoryBreakdown += `**${category}**: ${bar} ${count} (${percentage}%)\n\n`;
  }

  // Create source breakdown
  let sourceBreakdown = "### 📡 Sources\n\n";
  for (const [source, count] of Object.entries(stats.by_source)) {
    sourceBreakdown += `- **${source}**: ${count} articles\n`;
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

  let interviewSection = "\n## 💡 Daily Interview Questions\n\n";
  interviewSection += "_Sharpen your skills with these curated questions_\n\n";
  
  randomQuestions.forEach((q, idx) => {
    interviewSection += `### ${idx + 1}. ${q.category}: ${q.question}\n\n`;
    interviewSection += `**Difficulty**: ${q.difficulty} | `;
    interviewSection += `**Topics**: ${q.topics.join(", ")}\n\n`;
    interviewSection += `<details>\n`;
    interviewSection += `<summary>💡 Hint</summary>\n\n`;
    interviewSection += `${q.answer_hint}\n\n`;
    interviewSection += `</details>\n\n`;
  });

  // Top tags section
  let tagsSection = "\n### 🏷️ Trending Tags\n\n";
  const topTags = Object.entries(stats.top_tags).slice(0, 15);
  topTags.forEach(([tag, count]) => {
    tagsSection += `![${tag}](https://img.shields.io/badge/${encodeURIComponent(tag)}-${count}-blue) `;
  });
  tagsSection += "\n\n";

  const staticHeader = `# 🚀 DevTech Auto News - Enhanced Edition

![Auto News Bot](https://github.com/Derrick-MUGISHA/github-activity-bot/actions/workflows/auto-news.yml/badge.svg)
![Total Articles](https://img.shields.io/badge/Total%20Articles-${stats.total}-brightgreen)
![Languages](https://img.shields.io/badge/Languages-${Object.keys(stats.by_language).length}-blue)
![Last Update](https://img.shields.io/badge/Last%20Update-${now.toISOString().split('T')[0]}-orange)

**DevTech Auto News Enhanced** is an advanced automated bot that aggregates trending topics in **AI**, **Web Development**, **Mobile**, **Cloud**, **DevOps**, and more from multiple sources including:

- 📰 [Dev.to](https://dev.to) - Developer community articles
- 🔥 [HackerNews](https://news.ycombinator.com) - Tech news discussions  
- 💻 [GitHub Trending](https://github.com/trending) - Trending repositories
- 🎯 Curated Interview Questions from multiple languages

## ✨ Features

✅ **Multi-Source Aggregation**: Combines articles from Dev.to, HackerNews, and GitHub  
✅ **Smart Categorization**: Automatically categorizes content into 10+ topics  
✅ **Image Support**: Displays cover images for visual appeal  
✅ **Pagination**: Fetches 50+ articles per update with deduplication  
✅ **Language Statistics**: Tracks programming language trends with charts  
✅ **Interview Questions**: Daily coding interview questions in multiple languages  
✅ **GitHub Actions**: Runs every 15 minutes automatically  

---

## 📊 Statistics Dashboard

${categoryBreakdown}

${sourceBreakdown}

### 💻 Programming Language Trends

\`\`\`
${languageChart}
\`\`\`

${mermaidDiagram}

${tagsSection}

---

## 🛠️ How It Works

1. **Multi-Source Fetch**: Pulls from Dev.to (2 pages), HackerNews (3 topics), GitHub (3 languages)
2. **Smart Filter**: Uses keyword matching across 10+ categories  
3. **Deduplication**: Removes duplicate URLs  
4. **Image Extraction**: Captures cover images when available  
5. **Statistics**: Generates language trends and category breakdowns  
6. **Update Files**: Regenerates README and appends to comprehensive log  

---

## 📦 Installation & Usage

\`\`\`bash
# Clone the repository
git clone https://github.com/Derrick-MUGISHA/github-activity-bot.git
cd github-activity-bot

# Install dependencies  
npm install

# Run manually
npm start

# Test mode
npm run test
\`\`\`

---
`;

  const readme = `${staticHeader}

${newsContent}

${interviewSection}

---

## 📚 Resources

- [Full News Archive](./data/news_log.md) - Complete history of all fetched articles
- [Statistics JSON](./data/stats.json) - Raw statistics data
- [Categorized Data](./data/categorized.json) - Articles organized by category
- [Interview Questions](./data/interview_questions.json) - Complete question bank

---

## 🤝 Contributing

Want to add more sources, categories, or interview questions? Feel free to:

1. Fork this repository
2. Add your improvements
3. Submit a pull request

---

## 📄 License

MIT License - Feel free to use and modify!

---

<p align="center">
  <b>Last automated update: ${now.toUTCString()}</b><br/>
  <sub>Powered by GitHub Actions | Made with ❤️ for developers</sub>
</p>

---

## 🔗 Quick Links

- [View Workflow](https://github.com/Derrick-MUGISHA/github-activity-bot/actions)
- [Report Issue](https://github.com/Derrick-MUGISHA/github-activity-bot/issues)
- [Suggest Feature](https://github.com/Derrick-MUGISHA/github-activity-bot/issues/new)
`;

  fs.writeFileSync("README.md", readme);
}