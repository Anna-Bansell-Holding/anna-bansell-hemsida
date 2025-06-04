
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const VisionSection = () => {
  const values = [
    {
      title: "Ärlighet & omtanke",
      description: "Förtroendet inom gruppen stärks när alla känner och upplever att de behandlas lika."
    },
    {
      title: "Handling istället för rädsla", 
      description: "När vi fattar beslut som är långsiktigt hållbara och genomför dem med kraft skapas förtroende och trygghet i organisationen."
    },
    {
      title: "Värdera varje person",
      description: "Se bortom det uppenbara och se potentialen i varje person utifrån arbetsmiljö och individens egna drivkrafter."
    },
    {
      title: "Samma bild till alla",
      description: "När alla har tillgång till samma information samtidigt, kan vi bygga gemensamma värderingar och kraften kan frigöras för tillväxt."
    }
  ];

  const outcomes = [
    {
      title: "Överträffa försäljningsmål",
      description: "Gång på gång har jag sett när säljorganisationen har självförtroende och förståelse för processerna hur försäljningen utvecklas och stärks."
    },
    {
      title: "Entusiastiska medarbetare",
      description: "Med tydligt definierade spelregler blir det både roligt och enkelt att axla ett ansvar och utföra sitt uppdrag."
    },
    {
      title: "Värdefulla leveranser", 
      description: "Med en effektiv organisation blir det större marginaler och nöjda kunder vilket leder till en positiv spiral."
    }
  ];

  return (
    <section id="vision" className="bg-white section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-warmBrown-600 font-sans text-sm uppercase tracking-wide mb-4">
            Min största insikt:
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-8">
            Det går att vända en organisation!
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Values */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Nyckeln ligger i den informella strukturen
              </h3>
              <p className="text-lg text-warmBrown-700 leading-relaxed mb-8">
                Når förändringarna ända ner till de informella strukturerna? De flesta förändringar i företag 
                sker genom att modifiera och styra om i den formella strukturen. Risken är då att gamla mönster 
                kvarstår och inga större förändringar sker. För att få en beständig förändring behövs modet att 
                se de faktiska faktorer som bromsar organisationen och ger kraft åt de människor som tar företaget 
                till en ny nivå.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-lg font-semibold text-primary">
                    {value.title}
                  </h4>
                  <p className="text-warmBrown-700">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Outcomes */}
          <div className="space-y-6">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-warmBrown-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {outcome.title}
                      </h4>
                      <p className="text-warmBrown-700">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
