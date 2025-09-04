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
      icon: "⚡",
      title: "Snabba självklara förändringar",
      description: "Förändring behöver bli synlig snabbt: Därför blir det både snabba och konkreta åtgärder och tydliga symbolhandlingar. Vi fokuserar på det som ger energi och vilja för att samtidigt kunna prioritera det som flyttar fram positionerna mot målet."
    },
    {
      icon: "🤝",
      title: "Forma en gemenskap",
      description: "Här sker det strategiska skiftet: Vi identifierar tillväxtpotential och bromsklossar för att kunna behålla de som bär energi och potential. Samlar insikter för att kunna forma konkreta åtgärder."
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
    <section id="method" className="bg-gray-50 section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Sju steg till framgång</h2>
          <p className="body-large max-w-3xl mx-auto">
            En beprövad metodik för organisatorisk transformation
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="modern-card modern-card-hover">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="heading-md mb-4">{step.title}</h3>
              <p className="body-text">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Final note */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="heading-md text-center mb-8">
            När förändringen är på plats är det dags att släppa taget:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🎯</span>
              </div>
              <p className="body-text font-medium">
                Lämna över ansvaret till organisationen
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">⚙️</span>
              </div>
              <p className="body-text font-medium">
                Säkerställa att det nya fungerar utan extern kraft
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🚀</span>
              </div>
              <p className="body-text font-medium">
                Resultat: Självdrivande organisation med förnyad riktning och förmåga
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
