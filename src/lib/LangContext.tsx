"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, translations } from "@/lib/translations";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.fr;
};

const LangContext = createContext<LangContextType>({
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
