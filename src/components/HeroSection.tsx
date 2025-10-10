import React from 'react';
import { Button } from '@/components/ui/button';
import BilingualText from './ui/BilingualText';
import { websiteContent } from '../lib/bilingual-content';

const HeroSection = () => {

  const { currentLanguage, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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

>>>>>>> Stashed changes
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
<<<<<<< Updated upstream
    <section id="home" className="hero-gradient min-h-screen flex items-center section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <BilingualText 
                content={websiteContent.hero.headline}
                tag="h1"
                className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
              />
              <BilingualText 
                content={websiteContent.hero.subheading}
                tag="p"
                className="text-lg lg:text-xl text-warmBrown-700 leading-relaxed mb-8"
              />
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">
                Är det dags för din turnaround?
              </h2>
              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/annabansell" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="warm-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300">
                    <BilingualText content={websiteContent.hero.cta} />
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
=======
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
        
        {/* Mobile Hamburger Button */}
        <button 
          className={`nav-hamburger block md:hidden ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Desktop Navigation */}
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
      
      {/* Mobile Navigation Menu */}
      <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-list">
          <a 
            href="#home" 
            className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {currentLanguage === 'se' ? 'Hem' : 'Home'}
          </a>
          <a 
            href="#vision" 
            className={`nav-item ${activeSection === 'vision' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {currentLanguage === 'se' ? 'Turnaround' : 'Turnaround'}
          </a>
          <a 
            href="#cases" 
            className={`nav-item ${activeSection === 'cases' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {currentLanguage === 'se' ? 'Uppdrag' : 'Services'}
          </a>
          <a 
            href="#method" 
            className={`nav-item ${activeSection === 'method' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {currentLanguage === 'se' ? 'Metod' : 'Method'}
          </a>
          <a 
            href="#contact" 
            className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src={imgBasilPhoneSolid} alt="Phone" />
            {currentLanguage === 'se' ? 'Kontakt' : 'Contact'}
          </a>
          <button 
            onClick={() => {
              setLanguage(currentLanguage === 'se' ? 'en' : 'se');
              setMobileMenuOpen(false);
            }} 
            className="nav-item nav-item-button"
            type="button"
            aria-label={currentLanguage === 'se' ? 'Switch to English' : 'Växla till svenska'}
          >
            <img src={imgFlowbiteGlobeOutline} alt="Globe" />
            {currentLanguage === 'se' ? 'Svenska' : 'English'}
          </button>
        </div>
      </div>
      
      {/* Spacer to push content to bottom */}
      <div className="hero-spacer"></div>
      
      {/* Hero Content */}
      <div className="hero-content">
        {/* Left - Profile Picture */}
        <div className="hero-profile-container">
          <div className="hero-profile">
            <img src={imgAnnaBansellHero} alt="Anna Bansell" />
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;