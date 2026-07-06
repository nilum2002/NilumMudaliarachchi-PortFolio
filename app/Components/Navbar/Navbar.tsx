"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/#hero" },
  { label: "Projects", href: "/UI-Components/Projects/project" },
  { label: "Articles", href: "/UI-Components/Blogs/blog" },
  { label: "About", href: "/UI-Components/pages/About" },
  { label: "Contact", href: "/UI-Components/pages/Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
  const [openDropDowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );
  const [isFixed, setisFixed] = useState(false);
  const [darkMod, setDarkMode] = useState(true);

  const toggleTheme = () => {
    const newMode = !darkMod;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setisFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => (prev[label] ? {} : { [label]: true }));
  };

  return (
    <>
      <div
        className={`w-full max-w-full transition-all duration-500 ${isFixed
            ? "fixed top-0 left-0 z-50 bg-[var(--bg-color)] backdrop-blur-lg"
            : ""
          }`}
      >
        <div className="flex items-center justify-between px-[8%] lg:px-[16%] py-5 max-w-full">
          {/*logo*/}
          <Link
            href="/"
            className="text-3xl font-bold font-geist-mono text-[var(--prim-color)] lg:shrink-0"
          >
            Nilum{" "}
            <span className="text-[var(--white)] hidden md:inline">
              Mudaliarachchi
            </span>
            <span className="text-[var(--white)] inline md:hidden">M.</span>
          </Link>

          {/*Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 menu-link relative lg:flex-1 lg:justify-center lg:mx-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group z-50">
                  <Link
                    href={link.href}
                    className="flex menu-links items-center gap-1"
                  >
                    {link.label} <i className="ri-arrow-down-s-line"></i>
                  </Link>
                  <div className="absolute left-0 top-10 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:transition-all duration-300 bg-[var(--bg-color)] z-50 shadow-xl border border-gray-50/10 rounded-lg min-w-[200px]">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover:text-[var(--prim-color)] transition-all whitespace-nowrap"
                      >
                        <i className="bi bi-gear text-xs"></i> {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              )
            )}
          </nav>
          {/*right section*/}
          <div className="flex items-center gap-4 lg:shrink-0">
            <button
              onClick={toggleTheme}
              className={`relative flex items-center justify-between w-14 h-7 p-1 rounded-full cursor-pointer transition-all duration-300 focus:outline-none border border-[var(--prim-color)] shadow-[0_0_8px_rgba(14,165,234,0.45)] ${
                darkMod
                  ? "bg-[#0b0f19]"
                  : "bg-slate-100"
              }`}
              aria-label="Toggle theme"
            >
              {/* Sun/Moon icons on background track */}
              <i className="bi bi-brightness-high-fill text-[11px] text-amber-500/70 pl-1 z-0"></i>
              <i className="bi bi-moon-stars-fill text-[11px] text-indigo-400/70 pr-1 z-0"></i>

              {/* Sliding Thumb */}
              <div
                className={`absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                  darkMod
                    ? "left-[32px] bg-slate-900 border border-indigo-400 text-indigo-400"
                    : "left-[4px] bg-white border border-amber-400 text-amber-500"
                }`}
              >
                <i
                  className={`bi ${
                    darkMod ? "bi-moon-stars-fill" : "bi-brightness-high-fill"
                  } text-[10px]`}
                ></i>
              </div>
            </button>
            <Link
              href="https://github.com/nilum2002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={darkMod ? "/github-mark-white.png" : "/github-mark.svg"}
                alt="GitHub"
                className="w-7 h-7 object-contain hover:scale-110 transition-transform duration-200"
              />
            </Link>
            <button
              onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[var(--white)] text-2xl"
            >
              <i
                className={`ri-${mobileMenuOpen ? "close-line" : "menu-3-line"
                  }`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-[var(--bg-color)] border-t border-gray-700 transition-all duration-500 ease-in-out ${mobileMenuOpen
              ? "max-h-[1000px] opacity-100 py-4 overflow-y-auto"
              : "max-h-0 opacity-0 py-0 overflow-hidden"
            }`}
        >
          <div className="px-[4%] sm:px-[6%] md:px-[8%] space-y-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="z-50">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full text-left flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-50/10 bg-[var(--bg-color)] hover:border-[var(--prim-color)] transition active:scale-98"
                  >
                    <span className="menu-links text-sm sm:text-base">
                      {link.label}
                    </span>
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-200 ${openDropDowns[link.label] ? "rotate-180" : "rotate-0"
                        }`}
                    ></i>
                  </button>

                  <div
                    className={`mt-2 pl-2 sm:pl-4 flex-col gap-2 transition-all duration-300 ${openDropDowns[link.label] ? "flex" : "hidden"
                      }`}
                    role="menu"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-2 sm:px-3 py-2 text-sm sm:text-base rounded-md hover:text-[var(--prim-color)] hover:bg-gray-50/5 transition-all"
                        role="menuitem"
                      >
                        <i className="bi bi-gear text-xs"></i> {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-50/10 bg-[var(--bg-color)] hover:border-[var(--prim-color)] transition"
                >
                  <span className="menu-links text-sm sm:text-base">
                    {link.label}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
