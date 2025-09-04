
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import BilingualText from './ui/BilingualText';
import { websiteContent } from '../lib/bilingual-content';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', content: websiteContent.navigation.home, href: '#home' },
    { id: 'vision', content: websiteContent.navigation.turnarounds, href: '#vision' },
    { id: 'smaland', content: websiteContent.navigation.turnarounds, href: '#smaland' },
    { id: 'cases', content: websiteContent.navigation.assignments, href: '#cases' },
    { id: 'method', content: websiteContent.navigation.method, href: '#method' },
  ];

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
  }, []);

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
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
