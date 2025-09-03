import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: 'se' | 'en';
  setLanguage: (language: 'se' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<'se' | 'en'>('se');

  // Initialize language on mount
  useEffect(() => {
    const initializeLanguage = () => {
      // Check URL parameter first
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      
      if (urlLang === 'se' || urlLang === 'en') {
        setCurrentLanguage(urlLang);
        localStorage.setItem('preferredLanguage', urlLang);
        return;
      }

      // Check localStorage
      const storedLanguage = localStorage.getItem('preferredLanguage');
      if (storedLanguage === 'se' || storedLanguage === 'en') {
        setCurrentLanguage(storedLanguage);
        return;
      }

      // Check browser language
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith('sv') || browserLanguage.startsWith('se')) {
        setCurrentLanguage('se');
      } else {
        setCurrentLanguage('en');
      }
      
      // Store the detected language
      localStorage.setItem('preferredLanguage', currentLanguage);
    };

    initializeLanguage();
  }, []);

  const setLanguage = useCallback((language: 'se' | 'en') => {
    setCurrentLanguage(language);
    
    // Persist to localStorage
    localStorage.setItem('preferredLanguage', language);
    
    // Update URL parameter for shareability
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState({}, '', url.toString());

    // Announce language change to screen readers
    const announcement = language === 'se' 
      ? 'Språk ändrat till svenska' 
      : 'Language changed to English';
    
    // Create announcement for screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = announcement;
    document.body.appendChild(announcer);
    
    // Remove announcement after screen reader has had time to announce it
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }, []);

  const value = {
    currentLanguage,
    setLanguage
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

export default LanguageContext;
