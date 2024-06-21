import { getAllPosts } from "@/lib/posts";
import { PostMeta } from "@/lib/types";
import Link from "next/link";
import BlogLayout from "./blog-layout";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <BlogLayout>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(await posts).map((post: PostMeta) => (
              <div
                key={post.slug}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:bg-gray-200 hover:shadow-2xl hover:text-blue-600"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-col h-full">
                    {post.image && (
                      <div className="w-full h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-2 flex-grow">
                      <h2 className="text-lg font-semibold mb-1">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-xs">{post.date}</p>
                    </div>
                    <div className="bg-gray-200 p-4 mt-auto">
                      <p className="text-gray-700 text-sm underline">
                        Leer más...
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
