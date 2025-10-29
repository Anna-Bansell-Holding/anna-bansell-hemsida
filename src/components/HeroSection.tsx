import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { scrollToSection } from '@/lib/utils';
import AnchorLink from './AnchorLink';

// Figma assets
const imgAnnaBansellHero = "/anna-bansell-hero.png";
const imgBasilPhoneSolid = "/ico-navbar-phone.svg";
const imgFlowbiteGlobeOutline = "/ico-navbar-globe.svg";

const HeroSection = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = React.useState('home');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = React.useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);

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
    let throttleTimeout: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      const sections = ['home', 'vision', 'cases', 'method', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Handle nav-logo-spacer inactive class
      const navLogoSpacer = document.querySelector('.nav-logo-spacer');
      if (navLogoSpacer) {
        if (scrollPosition >= 72) {
          navLogoSpacer.classList.add('inactive');
        } else {
          navLogoSpacer.classList.remove('inactive');
        }
      }
      
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
          if (scrollPosition >= offsetTop - 128) { // 100px offset for better UX
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

    const throttledHandleScroll = () => {
      if (throttleTimeout) {
        return;
      }
      
      throttleTimeout = setTimeout(() => {
        handleScroll();
        throttleTimeout = null;
      }, 100);
    };

    // Add scroll listener
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, []);


  const handleLanguageSelect = (language: 'se' | 'en') => {
    setLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isLanguageDropdownOpen && !target.closest('.language-selector')) {
        setIsLanguageDropdownOpen(false);
      }
      if (isHamburgerMenuOpen && !target.closest('.hamburger-menu')) {
        setIsHamburgerMenuOpen(false);
      }
    };

    if (isLanguageDropdownOpen || isHamburgerMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen, isHamburgerMenuOpen]);

  return (
    <section id="home" className="hero-section">
      {/* Forest Background */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-overlay-2"></div>
      <div className="hero-overlay-3"></div>
      
      {/* Navigation */}
      <div className="nav-logo">
        <img src="/anna-bansell-logo.svg" alt="Anna Bansell" />
      </div>
      <div className="nav-container">
        <div className="nav-logo-spacer"></div>
        
        {/* Desktop Navigation */}
        <nav className="nav-menu nav-menu-desktop">
          <AnchorLink href="#home" className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
            {currentLanguage === 'se' ? 'Hem' : 'Home'}
          </AnchorLink>
          <AnchorLink href="#vision" className={`nav-item ${activeSection === 'vision' ? 'active' : ''}`}>
            {currentLanguage === 'se' ? 'Turnaround' : 'Turnaround'}
          </AnchorLink>
          <AnchorLink href="#cases" className={`nav-item ${activeSection === 'cases' ? 'active' : ''}`}>
            {currentLanguage === 'se' ? 'Uppdrag' : 'Services'}
          </AnchorLink>
          <AnchorLink href="#method" className={`nav-item ${activeSection === 'method' ? 'active' : ''}`}>
            {currentLanguage === 'se' ? 'Metod' : 'Method'}
          </AnchorLink>
          <AnchorLink href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <img src={imgBasilPhoneSolid} alt="Phone" />
            {currentLanguage === 'se' ? 'Kontakt' : 'Contact'}
          </AnchorLink>
          <div className="language-selector">
            <button 
              onClick={toggleLanguageDropdown}
              className="nav-item nav-item-button language-button"
              type="button"
              aria-label={currentLanguage === 'se' ? 'Switch to English' : 'Växla till svenska'}
              aria-expanded={isLanguageDropdownOpen}
              aria-haspopup="listbox"
            >
              <img src={imgFlowbiteGlobeOutline} alt="Globe" />
              <span className="language-text">
                {currentLanguage === 'se' ? 'Svenska' : 'English'}
              </span>
            </button>
            <div 
              className={`language-dropdown ${isLanguageDropdownOpen ? 'open' : ''}`}
              role="listbox"
              aria-label="Language options"
            >
              <button
                onClick={() => handleLanguageSelect('se')}
                className={`language-option ${currentLanguage === 'se' ? 'selected' : ''}`}
                role="option"
                aria-selected={currentLanguage === 'se'}
                type="button"
              >
                Svenska
              </button>
              <button
                onClick={() => handleLanguageSelect('en')}
                className={`language-option ${currentLanguage === 'en' ? 'selected' : ''}`}
                role="option"
                aria-selected={currentLanguage === 'en'}
                type="button"
              >
                English
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="nav-menu nav-menu-mobile">
          <div className="hamburger-menu">
            <button 
              onClick={toggleHamburgerMenu}
              className="nav-item nav-item-button hamburger-button"
              type="button"
              aria-label="Open menu"
              aria-expanded={isHamburgerMenuOpen}
            >
              <div className={`hamburger-icon ${isHamburgerMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div 
              className={`hamburger-dropdown ${isHamburgerMenuOpen ? 'open' : ''}`}
              role="menu"
              aria-label="Navigation menu"
            >
              <AnchorLink 
                href="#home" 
                className={`hamburger-option ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                {currentLanguage === 'se' ? 'Hem' : 'Home'}
              </AnchorLink>
              <AnchorLink 
                href="#vision" 
                className={`hamburger-option ${activeSection === 'vision' ? 'active' : ''}`}
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                {currentLanguage === 'se' ? 'Turnaround' : 'Turnaround'}
              </AnchorLink>
              <AnchorLink 
                href="#cases" 
                className={`hamburger-option ${activeSection === 'cases' ? 'active' : ''}`}
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                {currentLanguage === 'se' ? 'Uppdrag' : 'Services'}
              </AnchorLink>
              <AnchorLink 
                href="#method" 
                className={`hamburger-option ${activeSection === 'method' ? 'active' : ''}`}
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                {currentLanguage === 'se' ? 'Metod' : 'Method'}
              </AnchorLink>
              <AnchorLink 
                href="#contact" 
                className={`hamburger-option ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                <img src={imgBasilPhoneSolid} alt="Phone" />
                {currentLanguage === 'se' ? 'Kontakt' : 'Contact'}
              </AnchorLink>
              <div className="hamburger-language-section">
                <button
                  onClick={() => {
                    handleLanguageSelect('se');
                    setIsHamburgerMenuOpen(false);
                  }}
                  className={`hamburger-language-option ${currentLanguage === 'se' ? 'selected' : ''}`}
                  type="button"
                >
                  Svenska
                </button>
                <button
                  onClick={() => {
                    handleLanguageSelect('en');
                    setIsHamburgerMenuOpen(false);
                  }}
                  className={`hamburger-language-option ${currentLanguage === 'en' ? 'selected' : ''}`}
                  type="button"
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Spacer to push content to bottom */}
      <div className="hero-spacer"></div>
      
      {/* Profile Picture - Positioned independently */}
      <div className="hero-profile-container">
        <img className="hero-profile" src={imgAnnaBansellHero} alt="Anna Bansell" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Text Content */}
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
            onClick={() => scrollToSection('method')}
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