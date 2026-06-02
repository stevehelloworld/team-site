"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

type Language = "en" | "zh";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (page: string, key: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load language from localStorage after mounting to avoid hydration mismatch
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "en" || savedLang === "zh") {
      setLanguageState(savedLang);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.includes("zh")) {
        setLanguageState("zh");
      }
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (page: string, key: string): any => {
    const pageDict = translations[page];
    if (!pageDict) return key;
    
    const value = pageDict[key];
    if (!value) return key;

    return value[language] !== undefined ? value[language] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
