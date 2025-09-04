import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BilingualText from './ui/BilingualText';
import { websiteContent } from '../lib/bilingual-content';

const MethodSection = () => {
  const steps = websiteContent.method.steps;

  return (
    <section id="method" className="bg-white section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <BilingualText 
            content={websiteContent.method.subtitle}
            tag="p"
            className="text-warmBrown-600 font-sans text-sm uppercase tracking-wide mb-4"
          />
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-warmBrown-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <BilingualText 
                        content={step.title}
                        tag="h3"
                        className="text-xl lg:text-2xl font-semibold text-primary mb-4"
                      />
                      <BilingualText 
                        content={step.description}
                        tag="p"
                        className="text-warmBrown-700 leading-relaxed"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-1 h-8 bg-warmBrown-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final note */}
        <div className="mt-16 text-center">
          <Card className="border-primary bg-warmBrown-50">
            <CardContent className="p-8">
              <BilingualText 
                content={websiteContent.method.finalNote.title}
                tag="h3"
                className="text-xl font-semibold text-primary mb-4"
              />
              <div className="grid md:grid-cols-3 gap-6 text-warmBrown-700">
                {websiteContent.method.finalNote.items.map((item, index) => (
                  <div key={index}>
                    <BilingualText 
                      content={item.content}
                      tag="p"
                      className="font-medium"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
