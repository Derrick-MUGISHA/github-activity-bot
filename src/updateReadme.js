import fs from "fs";

export function updateReadme(content) {
  const now = new Date();
  
  const readme = `# 🚀 DevTech Auto News

## Latest Updates
${content}

---
_Last automated update: ${now.toUTCString()}_
`;

  fs.writeFileSync("README.md", readme);
}