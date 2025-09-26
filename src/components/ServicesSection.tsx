import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Local assets downloaded from Figma
const imgA05MZi = "/cd3e534288cb5682546290fc04bd4811739f479f.svg";
const imgGroup = "/f4fe96202059242bc987ff58da16a3741ed1330f.svg";
const img0 = "/e13a2a6b10eb5717662dd462e57f07f84dbbc314.svg";

const ServicesSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    subtitle: {
      se: "Nu är det din tur",
      en: "Now it's your turn"
    },
    title: {
      se: "Hur kan jag hjälpa dig i din Turnaround",
      en: "How can I help you in your Turnaround"
    },
    ctaButton: {
      se: "Kontakta mig!",
      en: "Contact me!"
    }
  };

  const services = [
    {
      icon: imgA05MZi,
      title: {
        se: "Mentor",
        en: "Mentor"
      },
      description: {
        se: "Lorem ipsum dolor sit amet consectetur. Bibendum enim massa ut urna scelerisque.",
        en: "Lorem ipsum dolor sit amet consectetur. Bibendum enim massa ut urna scelerisque."
      }
    },
    {
      icon: imgGroup,
      title: {
        se: "Interim",
        en: "Interim"
      },
      description: {
        se: "In morbi at facilisis tortor integer malesuada a euismod rutrum. Etiam neque eget eros amet.",
        en: "In morbi at facilisis tortor integer malesuada a euismod rutrum. Etiam neque eget eros amet."
      }
    },
    {
      icon: img0,
      title: {
        se: "Speaker",
        en: "Speaker"
      },
      description: {
        se: "Etiam neque eget eros amet facilisis proin purus at. Vitae aqu morbi at facilitis.",
        en: "Etiam neque eget eros amet facilisis proin purus at. Vitae aqu morbi at facilitis."
      }
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <p className="services-subtitle">
            {content.subtitle[currentLanguage]}
          </p>
          <h2 className="services-title">
            {content.title[currentLanguage]}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon-container">
                    <img src={service.icon} alt={service.title[currentLanguage]} className="service-icon" />
                  </div>
                  <h3 className="service-title">
                    {service.title[currentLanguage]}
                  </h3>
                </div>
                <div className="service-description-container">
                  <p className="service-description">
                    {service.description[currentLanguage]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="services-cta">
          <button 
            onClick={scrollToContact}
            className="services-button"
          >
            {content.ctaButton[currentLanguage]}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;