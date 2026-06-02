"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  const navGroups = [
    {
      labelKey: "about",
      items: [
        { href: "/story", labelKey: "story" },
        { href: "/members", labelKey: "members" },
      ],
    },
    {
      labelKey: "technical",
      items: [
        { href: "/robots", labelKey: "robots" },
        { href: "/notes", labelKey: "notes" },
        { href: "/resources", labelKey: "resources" },
      ],
    },
    {
      labelKey: "schedule",
      items: [
        { href: "/calendar", labelKey: "calendar" },
        { href: "/season", labelKey: "season" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] bg-[rgba(13,17,23,0.85)] backdrop-blur-[20px] border-b border-white/[0.06] z-[1000] transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo with interactive menu animations */}
        <Link
          href="/"
          className={`font-[var(--font-heading)] text-[1.1rem] font-extrabold tracking-[2px] flex items-center gap-2.5 no-underline transition-all duration-500 origin-left ${
            isMenuOpen 
              ? "text-[#ff6b35]! scale-110 translate-x-2" 
              : "text-white!"
          }`}
          style={{ fontFamily: "var(--font-heading)" }}
          onClick={() => setIsMenuOpen(false)}
        >
          <span>VIS MARS</span>
          <span className={`bg-[#ff6b35] text-[#0d1117] px-2.5 py-0.5 rounded text-[0.85rem] font-bold transition-all duration-500 ${
            isMenuOpen ? "shadow-[0_0_15px_rgba(255,107,53,0.6)] scale-105" : ""
          }`}>
            #32760
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {/* Dropdown Groups */}
          {navGroups.map((group) => (
            <div key={group.labelKey} className="relative group py-2">
              <button
                className="text-gray-400 hover:text-[#ff6b35] px-4 py-2 rounded-lg text-[0.85rem] font-medium tracking-[0.5px] transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent border-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t("navbar", group.labelKey)}
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className="transition-transform duration-300 group-hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              {/* Dropdown Panel */}
              <div className="absolute top-full left-0 pt-2 w-48 hidden group-hover:block animate-fade-in z-[1100]">
                <div className="bg-[rgba(13,17,23,0.95)] backdrop-blur-xl border border-white/[0.08] rounded-xl p-2 shadow-2xl flex flex-col gap-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-400 hover:text-[#ff6b35] hover:bg-white/[0.03] px-4 py-2.5 rounded-lg text-[0.85rem] transition-all font-medium block no-underline"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {t("navbar", item.labelKey)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Standalone Link: Media */}
          <Link
            href="/media"
            className="text-gray-400 hover:text-[#ff6b35] px-4 py-2 rounded-lg text-[0.85rem] font-medium tracking-[0.5px] transition-colors no-underline"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("navbar", "media")}
          </Link>

          {/* Standalone Link: FIRST & FTC */}
          <Link
            href="/first"
            className="text-gray-400 hover:text-[#ff6b35] px-4 py-2 rounded-lg text-[0.85rem] font-medium tracking-[0.5px] transition-colors no-underline"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("navbar", "first")}
          </Link>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="ml-4 flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] hover:border-[#ff6b35]/30 hover:text-[#ff6b35] text-gray-300 text-xs font-mono font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {language === "en" ? "ZH" : "EN"}
          </button>
        </div>

        {/* Mobile menu trigger & Lang trigger */}
        <div className="flex items-center gap-3 md:hidden z-[1001]">
          {/* Language Toggle for mobile */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] hover:border-[#ff6b35]/30 text-gray-300 text-xs font-mono font-bold px-2.5 py-1.5 rounded-lg cursor-pointer"
          >
            {language === "en" ? "ZH" : "EN"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-400 hover:text-white focus:outline-none flex flex-col gap-1.5 p-1.5 bg-transparent border-none cursor-pointer"
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
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col p-8 pt-24 gap-6 z-[1000] overflow-y-auto">
          {navGroups.map((group) => (
            <div key={group.labelKey} className="flex flex-col gap-2 text-left">
              <span className="text-[#ff6b35] text-[0.7rem] font-bold tracking-[2px] uppercase font-mono border-b border-white/[0.04] pb-1">
                {t("navbar", group.labelKey)}
              </span>
              <div className="flex flex-col gap-3 pl-3 py-1">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-[#ff6b35] text-lg font-semibold no-underline"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t("navbar", item.labelKey)}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Standalone Mobile items */}
          <div className="flex flex-col gap-4 text-left border-t border-white/[0.04] pt-4">
            <Link
              href="/media"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 hover:text-[#ff6b35] text-xl font-bold no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("navbar", "media")}
            </Link>
            <Link
              href="/first"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 hover:text-[#ff6b35] text-xl font-bold no-underline"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("navbar", "first")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
