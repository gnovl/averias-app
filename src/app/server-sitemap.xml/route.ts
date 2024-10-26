import { getServerSideSitemap } from "next-sitemap";
import type { ISitemapField } from "next-sitemap";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    // Get the absolute path to your MDX files
    const postsDirectory = path.join(process.cwd(), "src", "app", "posts"); // Adjust this path to where your MDX files are stored

    // Read all MDX files from the directory
    const files = fs.readdirSync(postsDirectory);

    // Create sitemap entries for each blog post
    const fields: ISitemapField[] = files
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => ({
        loc: `${process.env.NEXT_WEBSITE_URL}/blog/${filename.replace(
          ".mdx",
          ""
        )}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily" as const, // This fixes the TypeScript error
        priority: 0.7,
      }));

    // Add the main blog page to the sitemap
    fields.push({
      loc: `${process.env.NEXT_WEBSITE_URL}/blog`,
      lastmod: new Date().toISOString(),
      changefreq: "daily" as const, // This fixes the TypeScript error
      priority: 0.8,
    });

    return getServerSideSitemap(fields);
  } catch (e) {
    console.log(e);
    return new Response("Something went wrong", { status: 500 });
  }
}
