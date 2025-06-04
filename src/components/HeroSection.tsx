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
                <a 
                  href="https://www.linkedin.com/in/annabansell" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="warm-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Låt oss prata
                  </Button>
                </a>
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
