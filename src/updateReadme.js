import fs from "fs";

export function updateReadme(content) {
  fs.writeFileSync("README.md", content);
}
