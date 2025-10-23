import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Local assets downloaded from Figma
const imgA05MZi = "/cd3e534288cb5682546290fc04bd4811739f479f.svg";
const imgGroup = "/f4fe96202059242bc987ff58da16a3741ed1330f.png";
const img0 = "/e13a2a6b10eb5717662dd462e57f07f84dbbc314.svg";

const ServicesSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    subtitle: {
      se: "Nu är det din tur",
      en: "Now it's your turn"
    },
    title: {
      se: "Hur kan jag hjälpa dig i din turnaround",
      en: "How can I help you in your turnaround"
    },
    ctaButton: {
      se: "Kontakta mig",
      en: "Contact me"
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
        se: "Långsiktig utvecklingspartner för ledningsgrupper som vill bygga hållbar förändring. Tillsammans skapar vi strategier och verktyg för att stärka organisationens informella strukturer.",
        en: "Long-term development partner for management teams wanting to build sustainable change. Together we create strategies and tools to strengthen the organization's informal structures."
      },
      details: {
        se: "Perfekt när du behöver kontinuerlig stöttning genom hela förändringsresan.",
        en: "Perfect when you need continuous support throughout the entire change journey."
      }
    },
    {
      icon: imgGroup,
      title: {
        se: "Interim",
        en: "Interim"
      },
      description: {
        se: "Operativ ledare som kliver in och driver förändringsarbetet inifrån organisationen. Jag tar ansvar för genomförandet medan jag bygger intern kapacitet för framtiden.",
        en: "Operational leader who steps in and drives change work from within the organization. I take responsibility for implementation while building internal capacity for the future."
      },
      details: {
        se: "Rätt val när du behöver snabba resultat och samtidigt utveckla ditt team.",
        en: "Right choice when you need rapid results while developing your team."
      }
    },
    {
      icon: img0,
      title: {
        se: "Föreläsare",
        en: "Speaker"
      },
      description: {
        se: "Inspirerande föredrag om organisationsförändring med fokus på praktiska metoder och småländska värderingar. Delar verkliga case och konkreta verktyg.",
        en: "Inspiring presentations on organizational change focusing on practical methods and Småland values. Shares real cases and concrete tools."
      },
      details: {
        se: "Ideal för konferenser, ledningsgrupper och utbildningsprogram som vill ha äkta innehåll.",
        en: "Ideal for conferences, management teams and training programs that want authentic content."
      }
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      // Calculate offset to account for fixed navigation
      const navHeight = 80; // Approximate height of navigation
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
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
                  {service.details && (
                    <p className="service-details">
                      {service.details[currentLanguage]}
                    </p>
                  )}
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