import fetch from "node-fetch";
import fs from "fs";
import { formatNews } from "./formatNews.js";
import { updateReadme } from "./updateReadme.js";
import { generateStats } from "./stats.js";
import { fetchInterviewQuestions } from "./interviewQuestions.js";

const SOURCES = {
  devto: "https://dev.to/api/articles",
  hackernews: "https://hn.algolia.com/api/v1/search",
  githubTrending: "https://api.github.com/search/repositories"
};


const CATEGORIES = {
  AI: ["ai", "artificial intelligence", "machine learning", "deep learning", "neural", "gpt", "llm", "chatgpt"],
  JavaScript: ["javascript", "js", "typescript", "node", "react", "vue", "angular", "next.js"],
  Python: ["python", "django", "flask", "pandas", "numpy", "fastapi"],
  DevOps: ["devops", "docker", "kubernetes", "ci/cd", "jenkins", "terraform"],
  WebDev: ["web development", "frontend", "backend", "full stack", "css", "html"],
  Mobile: ["mobile", "ios", "android", "flutter", "react native", "swift", "kotlin"],
  Cloud: ["aws", "azure", "gcp", "cloud", "serverless", "lambda"],
  Database: ["database", "sql", "nosql", "mongodb", "postgresql", "redis"],
  Security: ["security", "cybersecurity", "encryption", "authentication", "oauth"],
  Tools: ["tool", "productivity", "vscode", "git", "github", "testing"]
};


async function fetchDevTo(page = 1, perPage = 30) {
  try {
    const url = `${SOURCES.devto}?per_page=${perPage}&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.map(post => ({
      title: post.title,
      url: post.url,
      published_at: post.published_at,
      description: post.description || post.title,
      tags: post.tag_list || [],
      cover_image: post.cover_image || post.social_image || null,
      source: "Dev.to",
      user: post.user?.name || "Unknown"
    }));
  } catch (error) {
    console.error("Error fetching DevTo:", error);
    return [];
  }
}


async function fetchHackerNews(query = "AI", page = 0) {
  try {
    const url = `${SOURCES.hackernews}?query=${query}&tags=story&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.hits.slice(0, 10).map(post => ({
      title: post.title,
      url: post.url || `https://news.ycombinator.com/item?id=${post.objectID}`,
      published_at: post.created_at,
      description: "HackerNews Discussion",
      tags: [query],
      cover_image: null,
      source: "HackerNews",
      user: post.author
    }));
  } catch (error) {
    console.error("Error fetching HackerNews:", error);
    return [];
  }
}


async function fetchGitHubTrending(language = "javascript") {
  try {
    const today = new Date();
    const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const dateStr = lastWeek.toISOString().split('T')[0];
    
    const url = `${SOURCES.githubTrending}?q=language:${language}+created:>${dateStr}&sort=stars&order=desc&per_page=5`;
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'DevTech-Auto-News'
      }
    });
    const data = await res.json();
    
    return (data.items || []).map(repo => ({
      title: `${repo.full_name} - ${repo.description || 'GitHub Repository'}`,
      url: repo.html_url,
      published_at: repo.created_at,
      description: repo.description || "Trending GitHub Repository",
      tags: [language, "github", "open-source"],
      cover_image: repo.owner?.avatar_url || null,
      source: "GitHub",
      stars: repo.stargazers_count,
      user: repo.owner?.login
    }));
  } catch (error) {
    console.error("Error fetching GitHub:", error);
    return [];
  }
}


function categorizeArticles(articles) {
  const categorized = {};
  
  for (const [category, keywords] of Object.entries(CATEGORIES)) {
    categorized[category] = articles.filter(article => {
      const searchText = `${article.title} ${article.description} ${article.tags.join(' ')}`.toLowerCase();
      return keywords.some(keyword => searchText.includes(keyword.toLowerCase()));
    });
  }
  
  return categorized;
}


(async function () {
  try {
    console.log("Starting enhanced news fetch...");
    
    const [
      devtoPage1,
      devtoPage2,
      hackerNewsAI,
      hackerNewsJS,
      hackerNewsPython,
      githubJS,
      githubPython,
      githubGo
    ] = await Promise.all([
      fetchDevTo(1, 30),
      fetchDevTo(2, 30),
      fetchHackerNews("AI", 0),
      fetchHackerNews("JavaScript", 0),
      fetchHackerNews("Python", 0),
      fetchGitHubTrending("javascript"),
      fetchGitHubTrending("python"),
      fetchGitHubTrending("go")
    ]);


    const allArticles = [
      ...devtoPage1,
      ...devtoPage2,
      ...hackerNewsAI,
      ...hackerNewsJS,
      ...hackerNewsPython,
      ...githubJS,
      ...githubPython,
      ...githubGo
    ];

    console.log(`Fetched ${allArticles.length} articles total`);


    const uniqueArticles = Array.from(
      new Map(allArticles.map(item => [item.url, item])).values()
    );

    console.log(`${uniqueArticles.length} unique articles after deduplication`);

    // Categorize articles
    const categorized = categorizeArticles(uniqueArticles);

    // Fetch interview questions
    const interviewQuestions = await fetchInterviewQuestions();

    // Generate statistics
    const stats = generateStats(uniqueArticles, categorized);

    // Create data directory if it doesn't exist
    if (!fs.existsSync("data")) {
      fs.mkdirSync("data");
    }

    // Format and save news
    const formatted = formatNews(categorized, uniqueArticles.slice(0, 50));
    fs.appendFileSync("data/news_log.md", formatted.fullLog);

    // Save statistics
    fs.writeFileSync("data/stats.json", JSON.stringify(stats, null, 2));

    // Save categorized data
    fs.writeFileSync("data/categorized.json", JSON.stringify(categorized, null, 2));

    // Save interview questions
    fs.writeFileSync("data/interview_questions.json", JSON.stringify(interviewQuestions, null, 2));

    // Update README
    updateReadme(formatted.summary, stats, interviewQuestions);

    console.log("News updated successfully!");
    console.log(`Saved ${Object.keys(categorized).length} categories`);
    console.log(`Total articles in log: ${uniqueArticles.length}`);

    // synchronisation on whatsapp
    
    await syncWhatsapp(categorized, stats, interviewQuestions);

  } catch (err) {
    console.error("Error in main execution:", err);
    process.exit(1);
  }
})();