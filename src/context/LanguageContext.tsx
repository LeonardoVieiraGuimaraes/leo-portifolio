import { createContext, useContext, useEffect, useState } from "react";

export type Language = "pt-br" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: <T>(pt: T, en: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-br");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("language") as Language | null;
      if (stored === "pt-br" || stored === "en") {
        setLanguage(stored);
      } else {
        const prefersPt = navigator.language.toLowerCase().startsWith("pt");
        setLanguage(prefersPt ? "pt-br" : "en");
      }
    } catch (error) {
      console.warn("Language storage error:", error);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      localStorage.setItem("language", language);
    } catch (error) {
      console.warn("Language storage error:", error);
    }

    document.documentElement.lang = language;
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt-br" ? "en" : "pt-br"));
  };

  const t = <T,>(pt: T, en: T): T => (language === "en" ? en : pt);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
