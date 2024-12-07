import { getServerSideSitemap } from "next-sitemap";
import type { ISitemapField } from "next-sitemap";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    const postsDirectory = path.join(process.cwd(), "src", "app", "posts");

    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.error("Posts directory not found:", postsDirectory);
      return new Response("Posts directory not found", { status: 404 });
    }

    const files = fs.readdirSync(postsDirectory);
    const baseUrl = process.env.NEXT_WEBSITE_URL || "https://averiashogar.es";

    const fields: ISitemapField[] = files
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => ({
        loc: `${baseUrl}/blog/${filename.replace(".mdx", "")}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.7,
      }));

    // Add main pages with higher priority
    const mainPages: ISitemapField[] = [
      {
        loc: `${baseUrl}/blog`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.8,
      },
      {
        loc: baseUrl,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 1.0,
      },
    ];

    return getServerSideSitemap([...mainPages, ...fields]);
  } catch (e) {
    console.error("Error generating sitemap:", e);
    return new Response("Something went wrong", { status: 500 });
  }
}
