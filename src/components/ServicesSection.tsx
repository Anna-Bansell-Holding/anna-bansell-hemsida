
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: "Mentor",
      description: "Stötta och utveckla ledare genom personlig vägledning och strategisk rådgivning för hållbar organisationsförändring.",
      icon: "👥",
      color: "blue"
    },
    {
      title: "Interim",
      description: "Tillfällig ledning med fokus på snabba förändringar och strukturella förbättringar för omedelbar påverkan.",
      icon: "⚡",
      color: "purple"
    },
    {
      title: "Föreläsare",
      description: "Inspirerande presentationer om turnaround-metodik och organisatorisk transformation baserat på småländsk arbetsmoral.",
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
            Hur kan jag hjälpa dig i din Turnaround
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Anpassade lösningar för hållbar organisationsförändring
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div key={index} className="modern-card modern-card-hover text-center">
                <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className={`${colorClasses.text} text-2xl`}>{service.icon}</span>
                </div>
                <h3 className="heading-md mb-4">{service.title}</h3>
                <p className="body-text">{service.description}</p>
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
            Kontakta mig
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
