import React from 'react';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  currentLanguage: 'se' | 'en';
  onLanguageChange: (language: 'se' | 'en') => void;
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  className
}) => {
  const trackLanguageChange = (language: 'se' | 'en') => {
    // Analytics tracking implementation
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'language_change', {
        language: language,
        timestamp: Date.now()
      });
    }
  };

  const handleLanguageChange = (language: 'se' | 'en') => {
    onLanguageChange(language);
    trackLanguageChange(language);
  };

  return (
    <div 
      className={cn("language-selector flex gap-2 p-2 rounded-md bg-white/10 backdrop-blur-sm", className)}
      role="group"
      aria-label="Select language / Välj språk"
    >
      <button
        onClick={() => handleLanguageChange('se')}
        className={cn(
          "lang-button px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 border border-transparent",
          "hover:bg-blue-500/10 hover:text-blue-600",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          "min-w-[44px] min-h-[44px] flex items-center justify-center",
          currentLanguage === 'se' 
            ? "bg-blue-600 text-white border-blue-600" 
            : "bg-transparent text-slate-600"
        )}
        aria-pressed={currentLanguage === 'se'}
        aria-label="Svenska / Swedish"
        type="button"
      >
        SE
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={cn(
          "lang-button px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 border border-transparent",
          "hover:bg-blue-500/10 hover:text-blue-600",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          "min-w-[44px] min-h-[44px] flex items-center justify-center",
          currentLanguage === 'en' 
            ? "bg-blue-600 text-white border-blue-600" 
            : "bg-transparent text-slate-600"
        )}
        aria-pressed={currentLanguage === 'en'}
        aria-label="English"
        type="button"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
