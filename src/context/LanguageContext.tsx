"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  toggleLanguage: () => {},
  setLanguage: () => {},
});

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt";
  const saved = localStorage.getItem("portfolio_lang");
  if (saved === "pt" || saved === "en") return saved;
  return "pt";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
