import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/types";

interface BlogSidebarProps {
  posts: Post[];
  currentSlug?: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ posts, currentSlug }) => {
  return (
    <div className="w-full lg:w-80 bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Other Posts</h3>
      <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`block group ${
              post.slug === currentSlug ? "bg-gray-50" : ""
            }`}
          >
            <div className="flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50">
              {post.meta.image && (
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={post.meta.image}
                    alt={post.meta.title}
                    fill
                    sizes="64px"
                    className="rounded-md object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {post.meta.title}
                </h4>
                <p className="text-xs text-gray-500">{post.meta.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
