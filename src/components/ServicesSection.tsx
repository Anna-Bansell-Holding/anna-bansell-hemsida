
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: "Konsult",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Interim",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Föreläsare",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-warmBrown-50 section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Hur kan jag hjälpa dig i din Turnaround
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center border-warmBrown-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-warmBrown-700 mb-6">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="warm-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Kontakta mig
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
