import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations, DEFAULT_LOCALE, SUPPORTED_LOCALES } from './translations.js';

const LocaleContext = createContext(null);
const STORAGE_KEY = 'nyra:locale';

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LOCALES.includes(saved) ? saved : DEFAULT_LOCALE;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t: translations[locale],
  }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>');
  return ctx;
}
