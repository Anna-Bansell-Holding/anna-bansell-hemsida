import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Figma assets
const imgAnnaBansellHero = "/anna-bansell-hero.png";
const imgBasilPhoneSolid = "/ico-navbar-phone.svg";
const imgFlowbiteGlobeOutline = "/ico-navbar-globe.png";

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

  return (
    <section id="home" className="hero-section">
      {/* Forest Background */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-overlay-2"></div>
      <div className="hero-overlay-3"></div>
      
      {/* Navigation */}
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/anna-bansell-logo.svg" alt="Anna Bansell" className="w-full h-full" />
        </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-item active">Hem</a>
          <a href="#turnarounds" className="nav-item">TurnaRounds</a>
          <a href="#uppdrag" className="nav-item">Uppdrag</a>
          <a href="#method" className="nav-item">Metod</a>
          <a href="#contact" className="nav-item">
            <img src={imgBasilPhoneSolid} alt="Phone" />
            Contact
          </a>
          <a href="#language" className="nav-item">
            <img src={imgFlowbiteGlobeOutline} alt="Globe" />
            English
          </a>
        </nav>
      </div>
      
      {/* Spacer to push content to bottom */}
      <div className="hero-spacer"></div>
      
      {/* Hero Content */}
      <div className="hero-content">
        {/* Left - Profile Picture */}
        <div className="hero-profile-container">
          <div className="hero-profile">
            <img src={imgAnnaBansellHero} alt="Anna Bansell" />
          </div>
        </div>
        
        {/* Right - Text Content */}
        <div className="hero-text">
          <h1 className="hero-title">
            {currentLanguage === 'se' ? 'Genuin framgångskultur på småländska.' : 'Genuine success culture the Småland way.'}
          </h1>
          <p className="hero-description">
            {currentLanguage === 'se' 
              ? 'En organisation som mår bra, levererar bra. Jag hjälper gärna till när det är dags att höja blicken, få fram snabba förändringar och samordna de gemensamma processerna för att organisationen ska flyga!'
              : 'An organization that feels good, delivers good. I am happy to help when it\'s time to raise the bar, create rapid changes and coordinate the common processes so that the organization can fly!'
            }
          </p>
          <button 
            onClick={() => scrollToSection('method')}
            className="hero-button"
          >
            {currentLanguage === 'se' ? 'Är det dags för din turnaround?' : 'Is it time for your turnaround?'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;