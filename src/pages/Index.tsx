
import React from 'react';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import SmalandSection from '@/components/SmalandSection';
import CasesSection from '@/components/CasesSection';
import StructuresSection from '@/components/StructuresSection';
import MethodSection from '@/components/MethodSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
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
