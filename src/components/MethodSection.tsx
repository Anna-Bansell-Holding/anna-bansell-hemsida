
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MethodSection = () => {
  const steps = [
    {
      icon: "👁️",
      title: "Höja blicken",
      description: "Grunden för allt förändringsarbete är en tydlig riktning. Här formuleras en gemensam bild av vart vi ska. Tillsammans utforskar vi, tänker dynamiskt, skapar samsyn och mening för att slutligen identifiera nyckelfrågor och mål."
    },
    {
      icon: "👂",
      title: "Lyssna in människorna", 
      description: "För att förstå vad som krävs för att lyckas behöver vi förstå nuläget – på riktigt och det görs genom djupgående analys av både hårda och mjuka signaler (t.ex. energi, engagemang, mobbning), gemensam information och insikt. Vi tydliggör också roller och ansvar."
    },
    {
      icon: "🤝",
      title: "Forma en gemenskap",
      description: "Här sker det strategiska skiftet: Vi identifierar tillväxtpotential och bromsklossar för att kunna behålla de som bär energi och potential. Samlar insikter för att kunna forma konkreta åtgärder."
    },
    {
      icon: "⚡",
      title: "Snabba självklara förändringar",
      description: "Förändring behöver bli synlig snabbt: Därför blir det både snabba och konkreta åtgärder och tydliga symbolhandlingar. Vi fokuserar på det som ger energi och vilja för att samtidigt kunna prioritera det som flyttar fram positionerna mot målet."
    },
    {
      icon: "⚙️",
      title: "Gemensamma processer",
      description: "För att förändring ska hålla måste den bli vardag så snabbt som möjligt: Därför skapar vi enkla, smarta arbetsflöden, automatiserar och delegerar, eliminerar det som stör. Sist men inte minst skapas forum för synlig framgång."
    },
    {
      icon: "🚀",
      title: "Låt organisationen flyga",
      description: "Nu gäller det att hålla i och förstärka: Här bygger vi vanor och förväntningar i vardagen och utmed vägen premierar vi rätt beteenden. Resultat: En ny kultur börjar ta form – i praktiken."
    }
  ];

  return (
    <section id="method" className="bg-white section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-warmBrown-600 font-sans text-sm uppercase tracking-wide mb-4">
            Metoden för turnaround som funkar
          </p>
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
                      <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-warmBrown-700 leading-relaxed">
                        {step.description}
                      </p>
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
              <h3 className="text-xl font-semibold text-primary mb-4">
                När förändringen är på plats är det dags att släppa taget:
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-warmBrown-700">
                <div>
                  <p className="font-medium">Lämna över ansvaret till organisationen</p>
                </div>
                <div>
                  <p className="font-medium">Säkerställa att det nya fungerar utan extern kraft</p>
                </div>
                <div>
                  <p className="font-medium">Resultat: Självdrivande organisation med förnyad riktning och förmåga.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
