'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import {
  defaultLanguage,
  messages,
  type Language,
  type MessageKey,
} from '../i18n/messages';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: MessageKey | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('language') as Language | null;
    if (saved === 'en' || saved === 'es') {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('language', language);
    }
  }, [language, isMounted]);

  useEffect(() => {
    document.documentElement.lang = language === 'es' ? 'es' : 'en';
  }, [language]);

  const t = useCallback(
    (key: MessageKey | string) =>
      messages[language][key as string] ??
      messages.en[key as string] ??
      String(key),
    [language]
  );

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
