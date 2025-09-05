import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
const HeroSection = () => {
  const { currentLanguage } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="hero-gradient min-h-screen flex items-center section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="heading-xl">
                {currentLanguage === 'se' ? 'Framgångskultur på småländska' : 'Success culture the Småland way'}
              </h1>
              <p className="body-large max-w-xl">
                {currentLanguage === 'se' 
                  ? 'En organisation som mår bra, levererar bra. Modern helomvändnings-metodik för hållbar organisationsförändring.'
                  : 'An organization that feels good, delivers good. Modern turnaround methodology for sustainable organizational transformation.'
                }
              </p>
              
              {/* Call-to-Action Question - Clickable */}
              <a 
                href="#method"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('method');
                }}
                className="inline-block text-2xl font-semibold text-blue-700 hover:text-blue-900 transition-colors duration-300 cursor-pointer"
              >
                {currentLanguage === 'se' ? 'Är du redo för din helomvändning?' : 'Are you ready for your turnaround?'}
              </a>
            </div>
          </div>

          {/* Right content - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 text-lg">Anna Bansell Portrait</span>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full opacity-40 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;