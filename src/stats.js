// Generate statistics and data for visualizations
export function generateStats(articles, categorized) {
  const stats = {
    total: articles.length,
    by_source: {},
    by_category: {},
    by_language: {},
    by_date: {},
    top_tags: {},
    trending_topics: []
  };

  // Count by source
  articles.forEach(article => {
    stats.by_source[article.source] = (stats.by_source[article.source] || 0) + 1;
  });

  // Count by category
  for (const [category, items] of Object.entries(categorized)) {
    stats.by_category[category] = items.length;
  }

  // Extract language mentions
  const languageKeywords = {
    JavaScript: ["javascript", "js", "typescript", "node", "react", "vue", "angular"],
    Python: ["python", "django", "flask", "pandas"],
    Java: ["java", "spring", "kotlin"],
    Go: ["golang", "go"],
    Rust: ["rust"],
    Ruby: ["ruby", "rails"],
    PHP: ["php", "laravel"],
    CSharp: ["c#", "csharp", ".net", "dotnet"],
    Swift: ["swift", "ios"],
    Kotlin: ["kotlin", "android"]
  };

  articles.forEach(article => {
    const text = `${article.title} ${article.description} ${article.tags.join(' ')}`.toLowerCase();
    
    for (const [lang, keywords] of Object.entries(languageKeywords)) {
      if (keywords.some(kw => text.includes(kw))) {
        stats.by_language[lang] = (stats.by_language[lang] || 0) + 1;
      }
    }

    // Count tags
    article.tags.forEach(tag => {
      stats.top_tags[tag] = (stats.top_tags[tag] || 0) + 1;
    });

    // Group by date
    const date = new Date(article.published_at).toISOString().split('T')[0];
    stats.by_date[date] = (stats.by_date[date] || 0) + 1;
  });

  // Get top tags
  stats.top_tags = Object.entries(stats.top_tags)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 20)
    .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

  // Calculate percentages for languages
  const totalLangMentions = Object.values(stats.by_language).reduce((a, b) => a + b, 0);
  stats.language_percentages = {};
  for (const [lang, count] of Object.entries(stats.by_language)) {
    stats.language_percentages[lang] = ((count / totalLangMentions) * 100).toFixed(1);
  }

  return stats;
}

// Generate ASCII bar chart for README
export function generateBarChart(data, maxWidth = 30) {
  const entries = Object.entries(data).sort(([, a], [, b]) => b - a);
  const maxValue = Math.max(...entries.map(([, v]) => v));
  
  let chart = "";
  entries.forEach(([key, value]) => {
    const barLength = Math.round((value / maxValue) * maxWidth);
    const bar = "█".repeat(barLength);
    chart += `${key.padEnd(15)} ${bar} ${value}%\n`;
  });
  
  return chart;
}

// Generate Mermaid diagram code
export function generateMermaidDiagram(stats) {
  const topLanguages = Object.entries(stats.by_language)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8);

  let diagram = "```mermaid\n";
  diagram += "pie title Programming Languages Distribution\n";
  
  topLanguages.forEach(([lang, count]) => {
    diagram += `    "${lang}" : ${count}\n`;
  });
  
  diagram += "```\n";
  
  return diagram;
} 