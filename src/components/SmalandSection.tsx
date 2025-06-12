
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SmalandSection = () => {
  const messages = [
    {
      title: "Ihärdighet & Disciplin",
      text: "Smålänningarna har förstått att framgång nås bäst genom ihärdighet, idogt arbete och disciplin. Vårda tid och resurser är en stabil bas för att få bästa möjliga utfall."
    },
    {
      title: "Enkelhet & Effektivitet", 
      text: "I Småland värdesätts enkla lösningar som fungerar. Ingen onödig krångel - bara rak kommunikation och praktiska metoder som ger resultat."
    },
    {
      title: "Långsiktigt Tänkande",
      text: "Småländsk affärsfilosofi bygger på hållbara relationer och långsiktiga investeringar. Det handlar om att bygga något som står sig över tid."
    }
  ];

  return (
    <section id="smaland" className="bg-warmBrown-50 section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Småland?
          </h2>
          
          {/* Carousel */}
          <div className="mb-12 relative px-16">
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {messages.map((message, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-4">
                        {message.title}
                      </h3>
                      <p className="text-lg lg:text-xl text-warmBrown-700 leading-relaxed">
                        {message.text}
                      </p>
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
