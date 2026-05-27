"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/first", label: "FIRST & FTC" },
    { href: "/story", label: "Story" },
    { href: "/members", label: "Members" },
    { href: "/alumni", label: "Alumni" },
    { href: "/robots", label: "Robots" },
    { href: "/notes", label: "Notes" },
    { href: "/resources", label: "Resources" },
    { href: "/calendar", label: "Calendar" },
    { href: "/season", label: "Season" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] bg-[rgba(13,17,23,0.85)] backdrop-blur-[20px] border-b border-white/[0.06] z-[1000] transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-[var(--font-heading)] text-[1.1rem] font-extrabold text-white! tracking-[2px] flex items-center gap-2.5 no-underline"
          style={{ fontFamily: "var(--font-heading)" }}
          onClick={() => setIsMenuOpen(false)}
        >
          VIS MARS{" "}
          <span className="bg-[#ff6b35] text-[#0d1117] px-2.5 py-0.5 rounded text-[0.85rem] font-bold">
            #32760
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 px-4 py-2 rounded-lg text-[0.85rem] font-medium tracking-[0.5px] transition-colors hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.15)] no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white focus:outline-none z-[1001] flex flex-col gap-1.5 p-1.5 bg-transparent border-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-[26px] h-0.5 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-[26px] h-0.5 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[26px] h-0.5 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-[1000]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-400 hover:text-[#ff6b35] transition-colors no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
