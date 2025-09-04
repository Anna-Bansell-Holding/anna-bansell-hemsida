
import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import BilingualText from './ui/BilingualText';
import { websiteContent } from '../lib/bilingual-content';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { currentLanguage, setLanguage } = useLanguage();

  const menuItems = useMemo(() => [
    { id: 'home', content: websiteContent.navigation.home, href: '#home' },
    { id: 'vision', content: websiteContent.navigation.turnarounds, href: '#vision' },
    { id: 'smaland', content: websiteContent.navigation.turnarounds, href: '#smaland' },
    { id: 'cases', content: websiteContent.navigation.assignments, href: '#cases' },
    { id: 'method', content: websiteContent.navigation.method, href: '#method' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLanguageChange = (language: 'se' | 'en') => {
    setLanguage(language);
    // Add smooth transition to prevent content jumping
    document.body.style.transition = 'opacity 0.2s ease-in-out';
    document.body.style.opacity = '0.95';
    setTimeout(() => {
      document.body.style.opacity = '1';
      document.body.style.transition = '';
    }, 200);
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 backdrop-blur-sm border-warmBrown-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </Button>
      </div>

      {/* Desktop sticky navigation */}
      <nav className="hidden lg:block fixed top-8 right-8 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-warmBrown-200 shadow-lg p-2">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={item.id === 'home' ? scrollToTop : () => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors min-w-[120px] ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-warmBrown-700 hover:bg-warmBrown-50'
                  }`}
                >
                  <BilingualText content={item.content} />
                </button>
              </li>
            ))}
            
            {/* Contact menu item with phone icon */}
            <li>
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors min-w-[120px] text-warmBrown-700 hover:bg-warmBrown-50 flex items-center gap-2"
              >
                <Phone size={16} />
                <BilingualText content={websiteContent.navigation.contact} />
              </button>
            </li>

            {/* Language selector with globe icon */}
            <li>
              <div className="px-4 py-2">
                <div className="flex items-center gap-2 text-sm font-medium text-warmBrown-700">
                  <Globe size={16} />
                  <span className="text-xs uppercase tracking-wide">
                    {currentLanguage === 'se' ? 'Språk' : 'Language'}
                  </span>
                </div>
                <div className="flex gap-1 mt-2">
                  <button
                    onClick={() => handleLanguageChange('se')}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                      currentLanguage === 'se'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-transparent text-warmBrown-600 hover:bg-warmBrown-50 border border-warmBrown-200 hover:border-warmBrown-300'
                    }`}
                    aria-pressed={currentLanguage === 'se'}
                    aria-label="Välj svenska"
                  >
                    Svenska
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                      currentLanguage === 'en'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-transparent text-warmBrown-600 hover:bg-warmBrown-50 border border-warmBrown-200 hover:border-warmBrown-300'
                    }`}
                    aria-pressed={currentLanguage === 'en'}
                    aria-label="Select English"
                  >
                    English
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute top-16 right-4 bg-white rounded-lg border border-warmBrown-200 shadow-xl p-4 min-w-[200px]">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={item.id === 'home' ? scrollToTop : () => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-warmBrown-700 hover:bg-warmBrown-50'
                    }`}
                  >
                    <BilingualText content={item.content} />
                  </button>
                </li>
              ))}
              
              {/* Contact menu item with phone icon */}
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors text-warmBrown-700 hover:bg-warmBrown-50 flex items-center gap-2"
                >
                  <Phone size={16} />
                  <BilingualText content={websiteContent.navigation.contact} />
                </button>
              </li>

              {/* Language selector for mobile */}
              <li>
                <div className="px-2 py-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-warmBrown-700 mb-2">
                    <Globe size={16} />
                    <span className="text-xs uppercase tracking-wide">
                      {currentLanguage === 'se' ? 'Språk' : 'Language'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLanguageChange('se')}
                      className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all duration-200 ${
                        currentLanguage === 'se'
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-transparent text-warmBrown-600 hover:bg-warmBrown-50 border border-warmBrown-200 hover:border-warmBrown-300'
                      }`}
                      aria-pressed={currentLanguage === 'se'}
                      aria-label="Välj svenska"
                    >
                      Svenska
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all duration-200 ${
                        currentLanguage === 'en'
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-transparent text-warmBrown-600 hover:bg-warmBrown-50 border border-warmBrown-200 hover:border-warmBrown-300'
                      }`}
                      aria-pressed={currentLanguage === 'en'}
                      aria-label="Select English"
                    >
                      English
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
