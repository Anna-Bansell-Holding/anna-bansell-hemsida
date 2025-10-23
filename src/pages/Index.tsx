
import React from 'react';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import SmalandSection from '@/components/SmalandSection';
import CasesSection from '@/components/CasesSection';
import StructuresSection from '@/components/StructuresSection';
import MethodSection from '@/components/MethodSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import FigmaStartPage from '@/components/FigmaStartPage';

const Index = () => {
  const handleNavClick = (item: string, href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show Figma implementation if URL contains "figma"
  const showFigmaVersion = window.location.search.includes('figma');

  if (showFigmaVersion) {
    return <FigmaStartPage />;
  }

  return (
    <div className="min-h-screen">
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
