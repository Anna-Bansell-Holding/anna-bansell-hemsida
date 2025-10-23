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
      // Check session storage first
      const storedLanguage = sessionStorage.getItem('preferredLanguage');
      if (storedLanguage === 'se' || storedLanguage === 'en') {
        setCurrentLanguage(storedLanguage);
        return;
      }

      // Default to Swedish as specified in requirements
      // Swedish is the primary language for Anna's consulting business
      setCurrentLanguage('se');
      // Store the default language in session storage
      sessionStorage.setItem('preferredLanguage', 'se');
    };

    initializeLanguage();
  }, []);

  const setLanguage = useCallback((language: 'se' | 'en') => {
    setCurrentLanguage(language);
    
    // Persist to session storage
    sessionStorage.setItem('preferredLanguage', language);

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

