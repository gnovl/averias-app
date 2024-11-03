import React from "react";

interface BlogContentWrapperProps {
  children: React.ReactNode;
}

const BlogContentWrapper: React.FC<BlogContentWrapperProps> = ({
  children,
}) => {
  return (
    <div
      className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-sm
      prose-headings:text-gray-900
      prose-p:text-base prose-p:leading-relaxed
      prose-img:max-h-[500px] prose-img:w-auto prose-img:mx-auto
      prose-img:object-contain prose-img:rounded-lg
      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
      lg:prose-img:max-w-[80%]"
    >
      {children}
    </div>
  );
};

export default BlogContentWrapper;
