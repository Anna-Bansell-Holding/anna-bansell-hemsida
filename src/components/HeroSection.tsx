import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Figma assets
const imgAnnaBansellHero = "/anna-bansell-hero.png";
const imgBasilPhoneSolid = "/ico-navbar-phone.svg";
const imgFlowbiteGlobeOutline = "/ico-navbar-globe.png";

const HeroSection = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = React.useState('home');

  // Update active section based on URL hash
  React.useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
    };

    // Update on hash change
    window.addEventListener('hashchange', updateActiveSection);
    
    // Update on initial load
    updateActiveSection();

    return () => window.removeEventListener('hashchange', updateActiveSection);
  }, []);

  // Update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'vision', 'cases', 'method', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Special case: if user is at the bottom of the page, always show contact
      if (scrollPosition + windowHeight >= documentHeight - 10) {
        setActiveSection('contact');
        if (window.location.hash !== '#contact') {
          window.history.replaceState(null, '', '#contact');
        }
        return;
      }
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const { offsetTop } = element;
          // Check if we've scrolled past the top of this section
          if (scrollPosition >= offsetTop - 100) { // 100px offset for better UX
            setActiveSection(sections[i]);
            // Update URL hash without triggering page jump
            if (window.location.hash !== `#${sections[i]}`) {
              window.history.replaceState(null, '', `#${sections[i]}`);
            }
            break;
          }
        }
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <a href="#home" className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
            {currentLanguage === 'se' ? 'Hem' : 'Home'}
          </a>
          <a href="#vision" className={`nav-item ${activeSection === 'vision' ? 'active' : ''}`}>
            {currentLanguage === 'se' ? 'Turnaround' : 'Turnaround'}
          </a>
          <a href="#cases" className={`nav-item ${activeSection === 'cases' ? 'active' : ''}`}>
            {currentLanguage === 'se' ? 'Uppdrag' : 'Services'}
          </a>
          <a href="#method" className={`nav-item ${activeSection === 'method' ? 'active' : ''}`}>
            {currentLanguage === 'se' ? 'Metod' : 'Method'}
          </a>
          <a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <img src={imgBasilPhoneSolid} alt="Phone" />
            {currentLanguage === 'se' ? 'Kontakt' : 'Contact'}
          </a>
          <button 
            onClick={() => setLanguage(currentLanguage === 'se' ? 'en' : 'se')} 
            className="nav-item nav-item-button"
            type="button"
            aria-label={currentLanguage === 'se' ? 'Switch to English' : 'Växla till svenska'}
          >
            <img src={imgFlowbiteGlobeOutline} alt="Globe" />
            {currentLanguage === 'se' ? 'Svenska' : 'English'}
          </button>
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
            {currentLanguage === 'se' ? 'Framgångskultur på småländska' : 'Success culture the Småland way'}
          </h1>
          <p className="hero-description">
            {currentLanguage === 'se' 
              ? 'En organisation som mår bra, levererar bra. Är det dags att höja blicken, få fram snabba och långsiktiga förändringar, samordna de gemensamma processerna och låta organisationen flyga! Som vi gör hemma i Småland!'
              : 'An organization that feels good, delivers good. Is it time to raise your sights, bring about rapid and long-term changes, coordinate common processes and let the organization soar! As we do at home in Småland!'
            }
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hero-button"
          >
            {currentLanguage === 'se' ? 'Är du redo för din turnaround?' : 'Are you ready for your turnaround?'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;