
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Hem', href: '#home' },
    { id: 'vision', label: 'Turnaround', href: '#vision' },
    { id: 'cases', label: 'Uppdrag', href: '#cases' },
    { id: 'method', label: 'Metod', href: '#method' },
    { id: 'contact', label: 'Kontakt', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Calculate offset to account for fixed navigation
      const navHeight = 80; // Approximate height of navigation
      const elementPosition = (element as HTMLElement).offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
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
          className="bg-white/90 backdrop-blur-sm border-gray-200"
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
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-lg p-2">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={item.id === 'home' ? scrollToTop : () => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
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
          <div className="absolute top-16 right-4 bg-white rounded-lg border border-gray-200 shadow-xl p-4 min-w-[200px]">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={item.id === 'home' ? scrollToTop : () => scrollToSection(item.href)}
                    className="w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-50"
                  >
                    {item.label}
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
