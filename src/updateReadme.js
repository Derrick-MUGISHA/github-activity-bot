import fs from "fs";
import path from "path";

export function updateReadme() {
  const files = fs.readdirSync("data").filter(f => f.startsWith("article_"));
  const summary = files.slice(-10).map(f => {
    const content = fs.readFileSync(path.join("data", f), "utf-8");
    const titleMatch = content.match(/## 📰 (.+)/);
    const urlMatch = content.match(/_Source: (.+)_/);
    if(titleMatch && urlMatch) return `- [${titleMatch[1]}](${urlMatch[1]})`;
  }).filter(Boolean).join("\n");

  const now = new Date();
  const readme = `# 🚀 DevTech Auto News

## Latest Updates

${summary}

_Last update: ${now.toUTCString()}_
`;

  fs.writeFileSync("README.md", readme);
}
