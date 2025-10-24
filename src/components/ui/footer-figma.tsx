import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnchorLink from '../AnchorLink';

// Local assets downloaded from Figma
const imgFa6BrandsSquareXTwitter = "/c54c24010f3176dedf5d0885af1f26212bd833f7.svg";
const imgFa6BrandsSquareXTwitter1 = "/63ba206d6d0c189f1aa30ce0fee70eae0f3bdf93.svg";

export const FooterFigma = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    description: {
      se: "Genuin framgångskultur på småländska. Organisationskonsult specialiserad på turnarounds och kulturell förändring.",
      en: "Genuine success culture the Småland way. Organizational consultant specialized in turnarounds and cultural change."
    },
    about: {
      se: "Om mig",
      en: "About"
    },
    contact: {
      se: "Kontakt", 
      en: "Contact"
    },
    copyright: {
      se: "© 2024 Anna Bansell. Alla rättigheter förbehållna.",
      en: "© 2024 Anna Bansell. All rights reserved."
    }
  };

  const aboutLinks = {
    se: [
      { text: "Hem", href: "#home" },
      { text: "Turnaround", href: "#vision" }, 
      { text: "Uppdrag", href: "#cases" },
      { text: "Metod", href: "#method" }
    ],
    en: [
      { text: "Home", href: "#home" },
      { text: "Turnaround", href: "#vision" },
      { text: "Services", href: "#cases" }, 
      { text: "Method", href: "#method" }
    ]
  };

  const contactLinks = {
    se: [
      { text: "Mentorskap", href: "#mentoring" },
      { text: "Interim-uppdrag", href: "#interim-assignments" },
      { text: "Föreläsningar", href: "#speaking" },
      { text: "LinkedIn", href: "https://www.linkedin.com/in/annabansell", external: true }
    ],
    en: [
      { text: "Mentoring", href: "#mentoring" },
      { text: "Interim Assignments", href: "#interim-assignments" }, 
      { text: "Speaking", href: "#speaking" },
      { text: "LinkedIn", href: "https://www.linkedin.com/in/annabansell", external: true }
    ]
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-company">
            <h2 className="footer-company-name">Anna Bansell</h2>
            <div className="footer-company-info">
              <p className="footer-description">
                {content.description[currentLanguage]}
              </p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/annabansell" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <img src={imgFa6BrandsSquareXTwitter} alt="LinkedIn" className="footer-social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/annabansell" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <img src={imgFa6BrandsSquareXTwitter1} alt="LinkedIn" className="footer-social-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-navigation">
            {/* About Column */}
            <div className="footer-column">
              <div className="footer-column-header">
                <h3 className="footer-column-title">{content.about[currentLanguage]}</h3>
              </div>
              {aboutLinks[currentLanguage].map((link, index) => (
                <div key={index} className="footer-link-item">
                  <AnchorLink href={link.href} className="footer-link-text">
                    {link.text}
                  </AnchorLink>
                </div>
              ))}
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <div className="footer-column-header">
                <h3 className="footer-column-title">{content.contact[currentLanguage]}</h3>
              </div>
              {contactLinks[currentLanguage].map((link, index) => (
                <div key={index} className="footer-link-item">
                  {link.external ? (
                    <a 
                      href={link.href} 
                      className="footer-link-text"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <AnchorLink href={link.href} className="footer-link-text">
                      {link.text}
                    </AnchorLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright">
        <div className="footer-copyright-container">
          <p className="footer-copyright-text">
            {content.copyright[currentLanguage]}
          </p>
        </div>
      </div>
    </footer>
  );
};

