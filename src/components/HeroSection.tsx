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

  const content = {
    navHome: {
      se: "Hem",
      en: "Home"
    },
    navTurnaround: {
      se: "Turnaround",
      en: "Turnaround"
    },
    navServices: {
      se: "Uppdrag",
      en: "Services"
    },
    navMethod: {
      se: "Metod",
      en: "Method"
    },
    navContact: {
      se: "Kontakt",
      en: "Contact"
    },
    languageSwedish: {
      se: "Svenska",
      en: "Svenska"
    },
    languageEnglish: {
      se: "English",
      en: "English"
    },
    languageSwitchLabel: {
      se: "Växla till svenska",
      en: "Switch to English"
    },
    heroTitle: {
      se: "Framgångskultur på småländska",
      en: "Success culture the Småland way"
    },
    heroDescription: {
      se: "En organisation som mår bra, levererar bra. Är det dags att höja blicken, få fram snabba och långsiktiga förändringar, samordna de gemensamma processerna och låta organisationen flyga! Som vi gör hemma i Småland!",
      en: "An organization that feels good, delivers good. Is it time to raise your sights, bring about rapid and long-term changes, coordinate common processes and let the organization soar! As we do at home in Småland!"
    },
    heroButton: {
      se: "Är du redo för din turnaround?",
      en: "Are you ready for your turnaround?"
    }
  };

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
            {content.navHome[currentLanguage]}
          </AnchorLink>
          <AnchorLink href="#vision" className={`nav-item ${activeSection === 'vision' ? 'active' : ''}`}>
            {content.navTurnaround[currentLanguage]}
          </AnchorLink>
          <AnchorLink href="#cases" className={`nav-item ${activeSection === 'cases' ? 'active' : ''}`}>
            {content.navServices[currentLanguage]}
          </AnchorLink>
          <AnchorLink href="#method" className={`nav-item ${activeSection === 'method' ? 'active' : ''}`}>
            {content.navMethod[currentLanguage]}
          </AnchorLink>
          <AnchorLink href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <img src={imgBasilPhoneSolid} alt="Phone" />
            {content.navContact[currentLanguage]}
          </AnchorLink>
          <div className="language-selector">
            <button 
              onClick={toggleLanguageDropdown}
              className="nav-item nav-item-button language-button"
              type="button"
              aria-label={content.languageSwitchLabel[currentLanguage]}
              aria-expanded={isLanguageDropdownOpen}
              aria-haspopup="listbox"
            >
              <img src={imgFlowbiteGlobeOutline} alt="Globe" />
              <span className="language-text">
                {currentLanguage === 'se' ? content.languageSwedish.se : content.languageEnglish.en}
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
                {content.languageSwedish.se}
              </button>
              <button
                onClick={() => handleLanguageSelect('en')}
                className={`language-option ${currentLanguage === 'en' ? 'selected' : ''}`}
                role="option"
                aria-selected={currentLanguage === 'en'}
                type="button"
              >
                {content.languageEnglish.en}
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
                {content.navHome[currentLanguage]}
              </AnchorLink>
              <AnchorLink 
                href="#vision" 
                className={`hamburger-option ${activeSection === 'vision' ? 'active' : ''}`}
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                {content.navTurnaround[currentLanguage]}
              </AnchorLink>
              <AnchorLink 
                href="#cases" 
                className={`hamburger-option ${activeSection === 'cases' ? 'active' : ''}`}
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                {content.navServices[currentLanguage]}
              </AnchorLink>
              <AnchorLink 
                href="#method" 
                className={`hamburger-option ${activeSection === 'method' ? 'active' : ''}`}
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                {content.navMethod[currentLanguage]}
              </AnchorLink>
              <AnchorLink 
                href="#contact" 
                className={`hamburger-option ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setIsHamburgerMenuOpen(false)}
              >
                {content.navContact[currentLanguage]}
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
                  {content.languageSwedish.se}
                </button>
                <button
                  onClick={() => {
                    handleLanguageSelect('en');
                    setIsHamburgerMenuOpen(false);
                  }}
                  className={`hamburger-language-option ${currentLanguage === 'en' ? 'selected' : ''}`}
                  type="button"
                >
                  {content.languageEnglish.en}
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
            {content.heroTitle[currentLanguage]}
          </h1>
          <p className="hero-description">
            {content.heroDescription[currentLanguage]}
          </p>
          <button 
            onClick={() => scrollToSection('method')}
            className="hero-button"
          >
            {content.heroButton[currentLanguage]}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;