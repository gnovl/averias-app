import Link from "next/link";
import Image from "next/image";
import { PostMeta } from "@/lib/types";

interface BlogCardProps {
  slug: string;
  meta: PostMeta;
  isPriority?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  meta,
  isPriority = false,
}) => {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <div className="border rounded-lg overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1">
        {meta.image && (
          <div className="relative h-40">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              priority={isPriority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover w-full h-auto"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {meta.title}
          </h2>
          <p className="text-sm text-gray-600 mb-2">{meta.date}</p>
          <p className="text-sm text-gray-700 line-clamp-2">
            {meta.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
