
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from '@/contexts/LanguageContext';

const SmalandSection = () => {
  const { currentLanguage } = useLanguage();
  
  const content = {
    title: {
      se: "Småland?",
      en: "Småland?"
    }
  };

  const messages = [
    {
      title: {
        se: "Ihärdighet & Disciplin",
        en: "Persistence & Discipline"
      },
      text: {
        se: "Smålänningarna har förstått att framgång nås bäst genom ihärdighet, idogt arbete och disciplin. Vårda tid och resurser är en stabil bas för att få bästa möjliga utfall.",
        en: "The people of Småland have understood that success is best achieved through persistence, diligent work and discipline. Caring for time and resources is a stable foundation for achieving the best possible outcome."
      }
    },
    {
      title: {
        se: "Enkelhet & Effektivitet",
        en: "Simplicity & Efficiency"
      },
      text: {
        se: "I Småland värdesätts enkla lösningar som fungerar. Inget onödigt krångel - bara rak kommunikation och praktiska metoder som ger resultat.",
        en: "In Småland, simple solutions that work are valued. No unnecessary complications - just straightforward communication and practical methods that deliver results."
      }
    },
    {
      title: {
        se: "Långsiktigt Tänkande",
        en: "Long-term Thinking"
      },
      text: {
        se: "Småländsk affärsfilosofi bygger på hållbara relationer och långsiktiga investeringar. Det handlar om att bygga något som står sig över tid.",
        en: "Småland business philosophy builds on sustainable relationships and long-term investments. It's about building something that stands the test of time."
      }
    }
  ];

  return (
    <section id="smaland" className="bg-blue-50 section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-8">
            {content.title[currentLanguage]}
          </h2>
          
          {/* Carousel */}
          <div className="mb-12 relative px-16">
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {messages.map((message, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <h3 className="heading-md mb-4">
                        {message.title[currentLanguage]}
                      </h3>
                      <p className="body-large">
                        {message.text[currentLanguage]}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-blue-100 border-blue-200 text-blue-600 hover:bg-blue-200 hover:text-blue-700" />
              <CarouselNext className="right-0 bg-blue-100 border-blue-200 text-blue-600 hover:bg-blue-200 hover:text-blue-700" />
            </Carousel>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-8">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmalandSection;
