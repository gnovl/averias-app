import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Post, PostMeta } from "./types";

const postsDirectory = path.join(process.cwd(), "src/app/posts");

export async function getAllPosts(): Promise<PostMeta[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        ...(matterResult.data as PostMeta),
        slug,
        image: matterResult.data.image || null,
      };
    })
  );

  return allPostsData;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    ...(matterResult.data as PostMeta),
    slug,
    content: matterResult.content,
  };
}
