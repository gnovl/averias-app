import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-customBGNav p-4 sticky bottom-0 z-5">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="mb-0 md:mb-0">
          <Link href="/"></Link>
        </div>
        <ul className="flex flex-col lg:flex-row lg:gap-4">
          <li className="mb-0 md:mb-0">
            <Link href="https://github.com/yourusername"></Link>
          </li>
        </ul>
      </div>
      <div className="mt-2 text-center text-sm">
        © {new Date().getFullYear()} AveríasHogar.
      </div>
      <div className="mt-4 text-center text-xs flex justify-center space-x-4">
        <Link href="/privacy" className="hover:underline">
          Politica de privacidad
        </Link>
        <Link href="/cookies" className="hover:underline">
          Politica de cookies
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
