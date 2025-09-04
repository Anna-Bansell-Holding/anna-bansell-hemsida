
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BilingualText from './ui/BilingualText';
import { websiteContent } from '../lib/bilingual-content';

const SmalandSection = () => {
  const messages = websiteContent.smaland.messages;

  return (
    <section id="smaland" className="bg-warmBrown-50 section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <BilingualText 
            content={websiteContent.smaland.title}
            tag="h2"
            className="text-3xl lg:text-4xl font-bold text-primary mb-8"
          />
          
          {/* Carousel */}
          <div className="mb-12 relative px-16">
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {messages.map((message, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <BilingualText 
                        content={message.title}
                        tag="h3"
                        className="text-xl lg:text-2xl font-semibold text-primary mb-4"
                      />
                      <BilingualText 
                        content={message.text}
                        tag="p"
                        className="text-lg lg:text-xl text-warmBrown-700 leading-relaxed"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-8">
            <div className="w-3 h-3 bg-warmBrown-400 rounded-full"></div>
            <div className="w-3 h-3 bg-warmBrown-600 rounded-full"></div>
            <div className="w-3 h-3 bg-warmBrown-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmalandSection;
