/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

type Language = "pt-br" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: <T>(pt: T, en: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function isLanguage(value: string | null): value is Language {
  return value === "pt-br" || value === "en";
}

// Ordem: ?lang=en na URL (link para recrutadores), escolha salva, português (idioma principal do site)
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt-br";

  const fromUrl = new URLSearchParams(window.location.search).get("lang")?.toLowerCase() ?? null;
  if (isLanguage(fromUrl)) return fromUrl;

  const stored = window.localStorage.getItem("language");
  if (isLanguage(stored)) return stored;

  return "pt-br";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("language", language);
  }, [language]);

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
