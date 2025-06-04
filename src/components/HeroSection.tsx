
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Genuin framgångskultur på småländska.
              </h1>
              <p className="text-lg lg:text-xl text-warmBrown-700 leading-relaxed mb-8">
                En organisation som mår bra, levererar bra. Är det dags att höja blicken, få fram snabba förändringar, 
                samordna de gemensamma processerna och låta organisationen flyga!
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
                Är det dags för din turnaround?
              </h2>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="warm-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Låt oss prata
              </Button>
            </div>
          </div>

          {/* Right content - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-warmBrown-100 rounded-full border-8 border-white shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/24a150fd-5edd-460f-8c76-5fb55e786ea3.png" 
                  alt="Anna Bansell - Organisationskonsult"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-warmBrown-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
