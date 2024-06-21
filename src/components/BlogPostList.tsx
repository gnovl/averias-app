import { getAllPosts } from "@/lib/posts";
import { PostMeta } from "@/lib/types";
import Link from "next/link";

export default async function BlogPostList() {
  const posts = await getAllPosts();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <h2 className="text-xl font-semibold p-4 bg-gray-100">Blog Posts</h2>
      <ul className="divide-y divide-gray-200">
        {posts.map((post: PostMeta) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <li className="py-4 px-6 hover:bg-gray-100 flex items-center">
              <div className="flex-1">
                <span className="text-sm font-medium">{post.title}</span>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
              {post.image && (
                <div className="ml-4 w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={`/${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
