import { getAllPosts } from "@/lib/api";
import BlogCard from "@/components/BlogCard";
import { Post } from "@/lib/types";
import BlogNavigation from "@/components/BlogNavigation";

export default async function BlogIndex() {
  const posts: Post[] = await getAllPosts();
  console.log("Number of posts:", posts.length);

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogNavigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              meta={post.meta}
              isPriority={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
