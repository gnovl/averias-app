"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaBlog } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react"; // Import the Hamburger component

const BlogNavigation: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path)
      ? "md:relative after:content-[''] md:after:absolute md:after:-bottom-1 md:after:h-0.5 md:after:bg-customNav px-2 md:after:left-0 md:after:right-0 md:before:hidden relative before:content-['•'] before:text-black before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2"
      : "text-customInactiveColor md:hover:bg-customBGHover md:hover:text-black hover:rounded-3xl px-2";
  };

  return (
    <nav className="bg-customBGNav p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-center md:justify-start">
        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <div className={`text-black ${isOpen ? "absolute right-4" : ""}`}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              label="Toggle menu" // Add ARIA label
              rounded // Make the icon bars rounded
              hideOutline // Hide the default browser focus style
            />
          </div>
        </div>
        <ul
          className={`flex flex-col lg:flex-row lg:gap-4 ${
            isOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-customInactiveColor md:hover:bg-customBGHover md:hover:text-black hover:rounded-3xl px-2 mr-4"
            >
              <FaHome className="mr-2 text-xl" />
              Inicio
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="/blog"
              className={`flex items-center mt-4 md:mt-0 ${isActive("/blog")}`}
            >
              <FaBlog className="mr-2 text-xl" />
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BlogNavigation;
