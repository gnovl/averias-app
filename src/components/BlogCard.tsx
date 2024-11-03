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
    <Link href={`/blog/${slug}`} className="block group h-full">
      <div className="h-full border rounded-sm overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md bg-white">
        {meta.image && (
          <div className="relative h-52 md:h-48 lg:h-44">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              priority={isPriority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
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
