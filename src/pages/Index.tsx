import React from 'react';
import Navigation from '@/components/Navigation';
import NavHeader from '@/components/ui/nav-header';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import SmalandSection from '@/components/SmalandSection';
import CasesSection from '@/components/CasesSection';
import StructuresSection from '@/components/StructuresSection';
import MethodSection from '@/components/MethodSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const handleNavClick = (item: string, href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky animated navigation at top right */}
      <div className="fixed top-4 right-4 z-50">
        <NavHeader onItemClick={handleNavClick} />
      </div>
      
      {/* Keep existing navigation for mobile fallback */}
      <Navigation />
      <HeroSection />
      <VisionSection />
      <SmalandSection />
      <CasesSection />
      <StructuresSection />
      <MethodSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
