
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Star } from 'lucide-react';
import BilingualText from './ui/BilingualText';
import { websiteContent } from '../lib/bilingual-content';

const VisionSection = () => {
  const values = websiteContent.vision.values;
  const outcomes = websiteContent.vision.outcomes;

  return (
    <section id="vision" className="bg-white section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <BilingualText 
            content={websiteContent.vision.subtitle}
            tag="p"
            className="text-warmBrown-600 font-sans text-sm uppercase tracking-wide mb-4"
          />
          <BilingualText 
            content={websiteContent.vision.insight}
            tag="h2"
            className="text-3xl lg:text-5xl font-bold text-primary mb-8"
          />
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Values */}
          <div className="space-y-8">
            <div>
              <BilingualText 
                content={websiteContent.vision.keyTitle}
                tag="h3"
                className="text-2xl lg:text-3xl font-semibold text-primary mb-6"
              />
              <BilingualText 
                content={websiteContent.vision.keyContent}
                tag="p"
                className="text-lg text-warmBrown-700 leading-relaxed mb-8"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <BilingualText 
                    content={value.title}
                    tag="h4"
                    className="text-lg font-semibold text-primary"
                  />
                  <BilingualText 
                    content={value.description}
                    tag="p"
                    className="text-warmBrown-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Outcomes */}
          <div className="space-y-6">
            {outcomes.map((outcome, index) => {
              const IconComponent = [TrendingUp, Users, Star][index];
              return (
                <div key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <BilingualText 
                        content={outcome.title}
                        tag="h4"
                        className="text-lg font-semibold text-primary mb-2"
                      />
                      <BilingualText 
                        content={outcome.description}
                        tag="p"
                        className="text-warmBrown-700"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
