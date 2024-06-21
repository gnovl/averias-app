import BlogNavigation from "@/components/BlogNavigation";
import BlogPostList from "@/components/BlogPostList";
import Footer from "@/components/BlogFooter";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BlogNavigation />
      <div className="container mx-auto px-4 py-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">{children}</div>
          <div className="lg:col-span-1">
            {/* Render the BlogPostList component */}
            <BlogPostList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
