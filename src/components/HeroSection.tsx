
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">Genuin framgångskultur på småländska</h1>
              <p className="text-lg lg:text-xl text-warmBrown-700 leading-relaxed mb-8">
                En organisation som mår bra, levererar bra. Är det dags att höja blicken, få fram snabba förändringar, 
                samordna de gemensamma processerna och låta organisationen flyga!
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
                Är det dags för din turnaround?
              </h2>
              <div className="space-y-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="warm-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Låt oss prata
                </Button>
                <div>
                  <a 
                    href="https://www.linkedin.com/in/annabansell" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-warmBrown-700 hover:text-primary transition-colors inline-flex items-center space-x-2 text-lg"
                  >
                    <span>LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Decorative elements */}
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
