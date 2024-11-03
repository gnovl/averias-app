"use client";

import { FaHome, FaBriefcase, FaEnvelope, FaBlog } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Hamburger from "hamburger-react"; // Import the Hamburger component
import Image from "next/image";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>("home");
  const [isOpen, setOpen] = useState<boolean>(false);

  //useEffect for to scroll to top of the page upon page load or refreshing
  useEffect(() => {
    // Check if window is defined (to prevent SSR errors)
    if (typeof window !== "undefined") {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth", // Smooth scroll behavior
      });
    }
  }, []);

  //useEffect for currently active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["home", "pastprojects", "contact"];
      const sectionTops: Record<string, number> = {};
      const sectionHeights: Record<string, number> = {};

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          sectionTops[sectionId] = element.offsetTop;
          sectionHeights[sectionId] = element.offsetHeight;
        }
      });

      let currentActiveSection: string | null = activeSection; // Use the previous active section as the initial value

      for (const sectionId in sectionTops) {
        const sectionTop = sectionTops[sectionId];
        const sectionHeight = sectionHeights[sectionId];
        const sectionBottom = sectionTop + sectionHeight;

        const thresholdTop = Math.max(sectionTop - sectionHeight * 0.1, 0);
        const thresholdBottom = sectionBottom + sectionHeight * 0.1;

        if (
          scrollPosition >= thresholdTop &&
          scrollPosition < thresholdBottom
        ) {
          currentActiveSection = sectionId;
        }
      }

      setActiveSection(currentActiveSection);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const getOffset = (sectionId: string) => {
    // Check if window is defined (to prevent SSR errors)
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Set different offsets based on section and screen size
      switch (sectionId) {
        case "home":
          return screenWidth <= 768 && screenHeight <= 600
            ? -250
            : screenWidth <= 768 && screenHeight > 600
            ? -180
            : -60;
        case "pastprojects":
          return screenWidth <= 768 && screenHeight <= 600
            ? 0
            : screenWidth <= 768 && screenHeight > 600
            ? -100
            : 20;
        case "contact":
          return screenWidth <= 768 && screenHeight <= 600
            ? 150
            : screenWidth <= 768 && screenHeight > 600
            ? -100
            : 20;
        default:
          return -60; // Default offset for other sections
      }
    }
    return -60; // Default offset if window is undefined
  };

  const isActive = (sectionId: string) => {
    return sectionId === activeSection
      ? "md:relative after:content-[''] md:after:absolute md:after:-bottom-1 md:after:h-0.5 md:after:bg-customNav px-2 md:after:left-0 md:after:right-0 md:before:hidden relative before:content-['•'] before:text-black before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2"
      : "text-customInactiveColor md:hover:bg-customBGHover md:hover:text-black hover:rounded-3xl px-2"; // Change 'customColor' to your desired color
  };

  const inactiveStyle =
    "flex items-center text-red-300 md:hover:bg-customBGHover md:hover:text-black hover:rounded-3xl px-2";

  return (
    <nav className="bg-customBGNav p-4 sticky top-0 z-10">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between relative">
        {/* Logo for larger screens */}
        <div className="hidden lg:block lg:absolute lg:left-4 md:w-32">
          <Image
            src="/Logo-1.png"
            alt="Logo"
            width={200}
            height={400}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden self-end">
          <div className={`text-black ${isOpen ? "fixed right-4" : ""}`}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              label="Toggle menu"
              rounded
              hideOutline
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`lg:mx-auto ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <li className="mt-4 lg:mt-0">
              <ScrollLink
                to="home"
                smooth={true}
                offset={getOffset("home")}
                className={`flex items-center ${isActive(
                  "home"
                )} cursor-pointer`}
                onClick={() => setOpen(false)}
              >
                <FaHome className="mr-2 text-xl" />
                Inicio
              </ScrollLink>
            </li>
            <li className="mt-4 lg:mt-0">
              <ScrollLink
                to="pastprojects"
                smooth={true}
                offset={getOffset("pastprojects")}
                className={`flex items-center ${isActive(
                  "pastprojects"
                )} cursor-pointer`}
                onClick={() => setOpen(false)}
              >
                <FaBriefcase className="mr-2 text-xl" />
                Proyectos
              </ScrollLink>
            </li>
            <li className="mt-4 lg:mt-0">
              <Link href="/blog" className={`${inactiveStyle} cursor-pointer`}>
                <span className="flex items-center">
                  <FaBlog className="mr-2 text-xl" />
                  Blog
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className={`mt-4 lg:mt-0 ${isOpen ? "block" : "hidden"} lg:block`}>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={getOffset("contact")}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <FaEnvelope className="mr-2 text-xl" />
            Solicitar presupuesto
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
