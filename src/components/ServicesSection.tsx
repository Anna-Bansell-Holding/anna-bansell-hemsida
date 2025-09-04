
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BilingualText from './ui/BilingualText';
import { websiteContent } from '../lib/bilingual-content';

const ServicesSection = () => {
  const services = websiteContent.services.services;

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
          <BilingualText 
            content={websiteContent.services.title}
            tag="h2"
            className="text-3xl lg:text-4xl font-bold text-primary mb-8"
          />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center border-warmBrown-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <BilingualText 
                  content={service.title}
                  tag="h3"
                  className="text-2xl font-semibold text-primary mb-4"
                />
                <BilingualText 
                  content={service.description}
                  tag="p"
                  className="text-warmBrown-700 mb-6"
                />
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
            <BilingualText content={websiteContent.services.cta} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
