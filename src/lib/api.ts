import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import sizeOf from "image-size";
import { Post, PostMeta } from "./types";

const postsDirectory = path.join(process.cwd(), "src", "app", "posts");
const publicDirectory = path.join(process.cwd(), "public");

export async function getPostSlugs() {
  const files = await fs.readdir(postsDirectory);
  return files.filter((file) => file.endsWith(".mdx"));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const meta: PostMeta = {
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    image: data.image || undefined,
  };

  if (meta.image) {
    const imagePath = path.join(publicDirectory, meta.image);
    try {
      const dimensions = sizeOf(imagePath);
      if (dimensions.width && dimensions.height) {
        meta.imageWidth = dimensions.width;
        meta.imageHeight = dimensions.height;
      }
    } catch (err) {
      console.error(`Can't get dimensions for ${meta.image}:`, err);
    }
  }

  return { slug: realSlug, meta, content };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts.sort((post1, post2) =>
    post1.meta.date > post2.meta.date ? -1 : 1
  );
}
