export function formatNews(categorized, topArticles) {
  const now = new Date();
  const catTime = new Date(now.getTime() + (2 * 60 * 60 * 1000));
  const date = catTime.toISOString().split("T")[0];
  const hour = catTime.getUTCHours();
  const catFullString = catTime.toUTCString().replace("GMT", "CAT");

  // Full log with all categories
  let fullLog = `\n\n## 📰 DevTech News — ${date} ${hour}:00 CAT\n\n`;
  fullLog += `_Comprehensive update with ${Object.keys(categorized).length} categories_\n\n`;
  fullLog += `---\n\n`;

  // Add articles by category
  for (const [category, articles] of Object.entries(categorized)) {
    if (articles.length === 0) continue;
    
    fullLog += `### 🏷️ ${category} (${articles.length} articles)\n\n`;
    
    articles.slice(0, 10).forEach((post, index) => {
      fullLog += `#### ${index + 1}. [${post.title}](${post.url})\n`;
      fullLog += `📅 ${new Date(post.published_at).toUTCString()}\n`;
      fullLog += `👤 By: ${post.user || 'Unknown'} | 📌 Source: ${post.source}\n`;
      
      if (post.cover_image) {
        fullLog += `\n![${post.title}](${post.cover_image})\n`;
      }
      
      fullLog += `\n${post.description || ""}\n`;
      
      if (post.tags && post.tags.length > 0) {
        fullLog += `\n🏷️ Tags: ${post.tags.slice(0, 5).map(tag => `\`${tag}\``).join(", ")}\n`;
      }
      
      if (post.stars) {
        fullLog += `\n⭐ Stars: ${post.stars.toLocaleString()}\n`;
      }
      
      fullLog += `\n---\n\n`;
    });
  }

  // Summary for README (top articles with images)
  let summaryList = [];
  
  topArticles.slice(0, 20).forEach((post) => {
    let item = `- [${post.title}](${post.url})`;
    if (post.source) {
      item += ` _[${post.source}]_`;
    }
    summaryList.push(item);
  });

  // Create visual summary with images
  let imageSection = "\n### 🖼️ Featured Articles\n\n";
  const articlesWithImages = topArticles.filter(a => a.cover_image).slice(0, 6);
  
  if (articlesWithImages.length > 0) {
    imageSection += '<table>\n';
    for (let i = 0; i < articlesWithImages.length; i += 3) {
      imageSection += '<tr>\n';
      for (let j = i; j < Math.min(i + 3, articlesWithImages.length); j++) {
        const article = articlesWithImages[j];
        imageSection += `  <td align="center" width="33%">
    <a href="${article.url}">
      <img src="${article.cover_image}" width="200" alt="${article.title}" />
      <br/>
      <b>${article.title.substring(0, 50)}${article.title.length > 50 ? '...' : ''}</b>
    </a>
    <br/>
    <sub>${article.source}</sub>
  </td>\n`;
      }
      imageSection += '</tr>\n';
    }
    imageSection += '</table>\n\n';
  }

  const summary = `
# 🚀 DevTech Auto News - Enhanced Edition

## 📅 Latest Updates (${date} ${hour}:00 CAT)

${imageSection}

### 📰 Top Headlines

${summaryList.join("\n")}

_Last automated update: ${catFullString}_
`;

  return { fullLog, summary };
}