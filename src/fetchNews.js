import fetch from "node-fetch";
import fs from "fs";
import { formatNews } from "./formatNews.js";   
import { updateReadme } from "./updateReadme.js"; 

const SOURCES = {
  devto: "https://dev.to/api/articles?per_page=50",
  hackernews: "https://hn.algolia.com/api/v1/search?query=AI&tags=story"
};

async function fetchDevTo() {
  try {
    const res = await fetch(SOURCES.devto);
    const data = await res.json();
    return data
      .filter(post =>
        post.title.toLowerCase().includes("ai") ||
        post.title.toLowerCase().includes("javascript") ||
        post.title.toLowerCase().includes("tool") ||
        post.title.toLowerCase().includes("code")
      )
      .slice(0, 5);
  } catch (error) {
    console.error("Error fetching DevTo:", error);
    return [];
  }
}

async function fetchHackerNews() {
  try {
    const res = await fetch(SOURCES.hackernews);
    const data = await res.json();
    return data.hits.slice(0, 5).map(post => ({
      title: post.title,
      url: post.url,
      published_at: post.created_at,
      description: "HackerNews Discussion"
    }));
  } catch (error) {
    console.error("Error fetching HackerNews:", error);
    return [];
  }
}

(async function () {
  try {
    const devto = await fetchDevTo();
    const hackernews = await fetchHackerNews();
    const combined = [...devto, ...hackernews];

    const formatted = formatNews(combined);

    if (!fs.existsSync("data")) {
      fs.mkdirSync("data");
    }

    fs.appendFileSync("data/news_log.md", formatted.fullLog);

    updateReadme(formatted.summary);

    console.log("News updated successfully.");
  } catch (err) {
    console.error("Error in main execution:", err);
    process.exit(1);
  }
})();