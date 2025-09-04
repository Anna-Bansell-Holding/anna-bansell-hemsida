
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BilingualText from './ui/BilingualText';
import { websiteContent } from '../lib/bilingual-content';

const CasesSection = () => {
  const cases = websiteContent.cases.cases;
  const testimonials = websiteContent.cases.testimonials;

  return (
    <section id="cases" className="bg-white section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <BilingualText 
            content={websiteContent.cases.subtitle}
            tag="p"
            className="text-warmBrown-600 font-sans text-sm uppercase tracking-wide mb-4"
          />
        </div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <Card key={index} className="text-center border-warmBrown-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">
                    {caseItem.percentage}
                  </span>
                </div>
                <BilingualText 
                  content={caseItem.title}
                  tag="h3"
                  className="text-xl font-semibold text-primary mb-4"
                />
                <BilingualText 
                  content={caseItem.description}
                  tag="p"
                  className="text-warmBrown-700"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-warmBrown-200">
              <CardContent className="p-6">
                <blockquote className="text-lg text-warmBrown-700 italic mb-4">
                  "<BilingualText content={testimonial.quote} />"
                </blockquote>
                <cite className="text-primary font-semibold not-italic">
                  - <BilingualText content={testimonial.author} />
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
