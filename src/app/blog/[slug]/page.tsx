import { getPostBySlug } from "@/lib/posts";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogLayout from "../blog-layout";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  const { content } = await compileMDX({
    source: post.content,
    options: { mdxOptions: { remarkPlugins: [], rehypePlugins: [] } },
  });

  return (
    <BlogLayout>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-0 py-0">
          <article className="bg-gray-100 overflow-hidden">
            <div className="px-6 py-8">
              <div className="mb-8 flex items-center">
                <Link
                  href="/blog"
                  className="text-black hover:text-blue-700 flex items-center"
                >
                  <FaArrowLeft className="mr-2" aria-hidden="true" />
                  Volver
                </Link>
              </div>
              <h1 className="text-lg font-bold mb-0">{post.title}</h1>
              <p className="text-gray-500 mb-8 text-sm">{post.date}</p>
              <div className="prose max-w-none">{content}</div>
            </div>
          </article>
        </div>
      </div>
    </BlogLayout>
  );
}
