
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    header: {
      se: "Hur kan jag hjälpa dig i din turnaround",
      en: "How can I help you in your Turnaround"
    },
    subtitle: {
      se: "Anpassade lösningar för hållbar organisationsförändring",
      en: "Customized solutions for sustainable organizational change"
    },
    ctaButton: {
      se: "Kontakta mig",
      en: "Contact me"
    }
  };

  const services = [
    {
      title: {
        se: "Mentor",
        en: "Mentor"
      },
      description: {
        se: "Långsiktig utvecklingspartner för ledningsgrupper som vill bygga hållbar förändring. Tillsammans skapar vi strategier och verktyg för att stärka organisationens informella strukturer.",
        en: "Long-term development partner for management teams wanting to build sustainable change. Together we create strategies and tools to strengthen the organization's informal structures."
      },
      benefit: {
        se: "Perfekt när du behöver kontinuerlig stöttning genom hela förändringsresan.",
        en: "Perfect when you need continuous support throughout the entire change journey."
      },
      icon: "👥",
      color: "blue"
    },
    {
      title: {
        se: "Interim",
        en: "Interim"
      },
      description: {
        se: "Operativ ledare som kliver in och driver förändringsarbetet inifrån organisationen. Jag tar ansvar för genomförandet medan jag bygger intern kapacitet för framtiden.",
        en: "Operational leader who steps in and drives change work from within the organization. I take responsibility for implementation while building internal capacity for the future."
      },
      benefit: {
        se: "Rätt val när du behöver snabba resultat och samtidigt utveckla ditt team.",
        en: "Right choice when you need rapid results while developing your team."
      },
      icon: "⚡",
      color: "purple"
    },
    {
      title: {
        se: "Föreläsare",
        en: "Speaker"
      },
      description: {
        se: "Inspirerande föredrag om organisationsförändring med fokus på praktiska metoder och småländska värderingar. Delar verkliga case och konkreta verktyg.",
        en: "Inspiring presentations on organizational change focusing on practical methods and Småland values. Shares real cases and concrete tools."
      },
      benefit: {
        se: "Ideal för konferenser, ledningsgrupper och utbildningsprogram som vill ha äkta innehåll.",
        en: "Ideal for conferences, management teams and training programs that want authentic content."
      },
      icon: "🎯",
      color: "green"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-100', text: 'text-blue-600' };
      case 'purple':
        return { bg: 'bg-purple-100', text: 'text-purple-600' };
      case 'green':
        return { bg: 'bg-green-100', text: 'text-green-600' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600' };
    }
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            {content.header[currentLanguage]}
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            {content.subtitle[currentLanguage]}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div key={index} className="modern-card text-center">
                <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className={`${colorClasses.text} text-2xl`}>{service.icon}</span>
                </div>
                <h3 className="heading-md mb-4">{service.title[currentLanguage]}</h3>
                <p className="body-text mb-3">{service.description[currentLanguage]}</p>
                <p className="text-sm text-gray-600 italic">{service.benefit[currentLanguage]}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="modern-button modern-button-primary button-press px-8 py-4 text-lg"
          >
            {content.ctaButton[currentLanguage]}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
