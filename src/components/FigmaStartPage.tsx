import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Hero Section Component
const HeroSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    title: {
      se: "Genuin framgångskultur på småländska.",
      en: "Genuine success culture the Småland way."
    },
    subtitle: {
      se: "En organisation som mår bra, levererar bra. Jag hjälper gärna till när det är dags att höja blicken, få fram snabba förändringar och samordna de gemensamma processerna för att organisationen ska flyga!",
      en: "An organization that feels good, delivers well. I'm happy to help when it's time to raise your sights, bring about rapid changes and coordinate common processes so the organization can soar!"
    },
    cta: {
      se: "Är det dags för din turnaround?",
      en: "Is it time for your turnaround?"
    }
  };

  return (
    <div className="h-[960px] overflow-clip relative w-full">
      <div className="absolute box-border content-stretch flex flex-col h-[960px] items-end justify-between left-1/2 pb-[140px] pt-0 px-0 top-0 translate-x-[-50%] w-[1600px]">
        {/* Hero Background */}
        <div className="absolute h-[960px] left-0 top-0 w-[1600px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img 
              alt="" 
              className="absolute max-w-none object-50%-50% object-cover size-full" 
              src="/images/hero-background.jpg" 
            />
            <div className="absolute bg-[rgba(0,131,212,0.6)] inset-0 mix-blend-multiply" />
            <div className="absolute bg-[#040f26] inset-0 mix-blend-exclusion" />
            <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 mix-blend-overlay" />
          </div>
        </div>

        {/* Anna's Hero Image */}
        <div className="absolute h-[880px] left-[70px] top-[80px] w-[712px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img 
              alt="Anna Bansell" 
              className="absolute h-[113.82%] left-[-73.19%] max-w-none top-[-6.07%] w-[268.39%]" 
              src="/images/anna-bansell-hero.png" 
            />
          </div>
        </div>

        {/* Navigation Header */}
        <div className="box-border content-stretch flex items-center justify-between px-[40px] py-[24px] relative shrink-0 w-full">
          <div className="h-[30.44px] relative shrink-0 w-[270.027px]">
            <img 
              alt="Anna Bansell" 
              className="block max-w-none size-full" 
              src="/images/Anna Bansell.svg" 
            />
          </div>
          
          {/* Navigation Menu */}
          <div className="bg-[rgba(255,255,255,0.8)] box-border content-stretch flex gap-[4px] items-center justify-end px-[10px] py-[8px] relative rounded-[40px] shrink-0">
            <div aria-hidden="true" className="absolute border-2 border-[#22396a] border-solid inset-0 pointer-events-none rounded-[40px]" />
            
            <div className="bg-[#eb7100] box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-[12px] relative rounded-[46px] shrink-0">
              <div className="font-['Ubuntu:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[17px] text-nowrap text-white uppercase">
                <p className="leading-[24px] whitespace-pre">
                  {currentLanguage === 'se' ? 'Hem' : 'Home'}
                </p>
              </div>
            </div>
            
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-[12px] relative shrink-0">
              <div className="font-['Ubuntu:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#22396a] text-[17px] text-nowrap uppercase">
                <p className="leading-[24px] whitespace-pre">
                  {currentLanguage === 'se' ? 'TurnaRounds' : 'TurnaRounds'}
                </p>
              </div>
            </div>
            
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-[12px] relative shrink-0">
              <div className="font-['Ubuntu:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#22396a] text-[17px] text-nowrap uppercase">
                <p className="leading-[24px] whitespace-pre">
                  {currentLanguage === 'se' ? 'Uppdrag' : 'Assignments'}
                </p>
              </div>
            </div>
            
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-[12px] relative shrink-0">
              <div className="font-['Ubuntu:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#22396a] text-[17px] text-nowrap uppercase">
                <p className="leading-[24px] whitespace-pre">
                  {currentLanguage === 'se' ? 'Metod' : 'Method'}
                </p>
              </div>
            </div>
            
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[18px] py-[12px] relative shrink-0">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-[24px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5.5C3 5.10218 3.15804 4.72064 3.43934 4.43934C3.72064 4.15804 4.10218 4 4.5 4H19.5C19.8978 4 20.2794 4.15804 20.5607 4.43934C20.842 4.72064 21 5.10218 21 5.5V18.5C21 18.8978 20.842 19.2794 20.5607 19.5607C20.2794 19.842 19.8978 20 19.5 20H4.5C4.10218 20 3.72064 19.842 3.43934 19.5607C3.15804 19.2794 3 18.8978 3 18.5V5.5Z" stroke="#22396a" strokeWidth="2"/>
                    <path d="M3 9L12 15L21 9" stroke="#22396a" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="font-['Ubuntu:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#22396a] text-[17px] text-nowrap uppercase">
                  <p className="leading-[24px] whitespace-pre">Contact</p>
                </div>
              </div>
            </div>
            
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[18px] py-[12px] relative shrink-0">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-[24px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L9 7V9H21ZM2 11H4V13H2V11ZM20 11H22V13H20V11ZM6.37 7.43L7.79 6.02L9.21 7.43L7.79 8.85L6.37 7.43ZM14.79 7.43L16.21 6.02L17.62 7.43L16.21 8.85L14.79 7.43Z" fill="#22396a"/>
                  </svg>
                </div>
                <div className="font-['Ubuntu:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#22396a] text-[17px] text-nowrap uppercase">
                  <p className="leading-[24px] whitespace-pre">
                    {currentLanguage === 'se' ? 'Svenska' : 'English'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[104px] py-0 relative shrink-0">
          <div className="font-['Romans_Story:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[60px] text-white w-[610px]">
            <p className="leading-[70px]">{content.title[currentLanguage]}</p>
          </div>
          
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
            <div className="font-['Ubuntu:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[610px]">
              <p className="leading-[1.45]">{content.subtitle[currentLanguage]}</p>
            </div>
            
            <button className="bg-[#eb7100] box-border content-stretch flex gap-[10px] items-center justify-center px-[44px] py-[20px] relative rounded-[70px] shrink-0 hover:bg-[#d93a00] transition-colors">
              <div className="font-['Ubuntu:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
                <p className="leading-[1.45] whitespace-pre">{content.cta[currentLanguage]}</p>
              </div>
              <div className="absolute h-[75px] left-0 rounded-[50px] top-0 w-[448px]">
                <div aria-hidden="true" className="absolute border border-[#d93a00] border-solid inset-0 pointer-events-none rounded-[50px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Figma Start Page Component
const FigmaStartPage = () => {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex flex-col items-start relative size-full">
      <HeroSection />
      
      {/* Demo Section - Unified Icons */}
      <div className="min-h-[400px] flex items-center justify-center w-full bg-white">
        <div className="text-center max-w-4xl px-8">
          <h2 className="text-2xl font-bold text-[#22396a] mb-6">
            🎯 Figma Design Successfully Integrated!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#22396a] mb-4">✅ Fixed: Unified Rocket Icon</h3>
              <div className="flex justify-center mb-4">
                <img src="/images/rocket-icon.svg" alt="Unified Rocket" className="w-20 h-20"/>
              </div>
              <p className="text-sm text-[#484b4f]">
                Complex icons now export as unified SVG/PNG files with proper backgrounds
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#22396a] mb-4">🚀 Method Section Icons</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl">👥</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
              </div>
              <p className="text-sm text-[#484b4f]">
                Ready for full 7-step method implementation
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-[#22396a] mb-4">📋 How to Fix Figma Exports</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#484b4f]">
              <div>
                <strong className="text-[#22396a]">1. Group Elements</strong><br/>
                Select all icon parts → Ctrl+G → Name the group
              </div>
              <div>
                <strong className="text-[#22396a]">2. Export as PNG</strong><br/>
                For complex icons, use PNG instead of SVG
              </div>
              <div>
                <strong className="text-[#22396a]">3. Use Frames</strong><br/>
                Create frames around complete icons before export
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaStartPage;
