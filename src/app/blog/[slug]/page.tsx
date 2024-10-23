import { getPostBySlug, getAllPosts } from "@/lib/api";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/MDXComponents";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Post } from "@/lib/types";
import BlogSidebar from "@/components/BlogSidebar";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post: Post = await getPostBySlug(slug);

  const components = {
    ...MDXComponents,
    img: (props: any) => MDXComponents.img({ ...props }),
  };

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {post.meta.title}
          </h1>
          <p className="text-gray-600">{post.meta.date}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-sm">
              <MDXRemote source={post.content} components={components} />
            </div>

            <div className="mt-8 pt-4 border-t">
              <Link
                href="/blog"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>

          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              <BlogSidebar posts={await getAllPosts()} currentSlug={slug} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
