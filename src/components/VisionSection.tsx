
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    preHeader: {
      se: "Min största insikt:",
      en: "My greatest insight:"
    },
    mainHeader: {
      se: "Det går att vända en organisation!",
      en: "It's possible to turn around an organization!"
    },
    subHeader: {
      se: "Nyckeln ligger i den informella strukturen",
      en: "The key lies in the informal structure"
    },
    introduction: {
      se: "Når förändringarna ända ner till de informella strukturerna? De flesta förändringar i företag sker genom att modifiera och styra om i den formella strukturen. Risken är då att gamla mönster kvarstår och inga större förändringar sker. För att få en beständig förändring behövs modet att se de faktiska faktorer som bromsar organisationen och ger kraft åt de människor som tar företaget till en ny nivå.",
      en: "Do changes reach all the way down to the informal structures? Most changes in companies occur by modifying and redirecting the formal structure. The risk is then that old patterns remain and no major changes occur. To achieve lasting change, we need the courage to see the actual factors that slow down the organization and empower the people who take the company to the next level."
    }
  };

  const values = [
    {
      title: {
        se: "Ärlighet & omtanke",
        en: "Honesty & Care"
      },
      description: {
        se: "Förtroendet inom gruppen stärks när alla känner och upplever att de behandlas lika.",
        en: "Trust within the group is strengthened when everyone feels and experiences being treated equally."
      }
    },
    {
      title: {
        se: "Handling istället för rädsla",
        en: "Action instead of fear"
      },
      description: {
        se: "När vi fattar beslut som är långsiktigt hållbara och genomför dem med kraft skapas förtroende och trygghet i organisationen.",
        en: "When we make long-term sustainable decisions and implement them with force, trust and security are created in the organization."
      }
    },
    {
      title: {
        se: "Värdera varje person",
        en: "Value every person"
      },
      description: {
        se: "Se bortom det uppenbara och se potentialen i varje person utifrån arbetsmiljö och individens egna drivkrafter.",
        en: "Look beyond the obvious and see the potential in each person based on work environment and the individual's own driving forces."
      }
    },
    {
      title: {
        se: "Samma bild till alla",
        en: "Same picture to everyone"
      },
      description: {
        se: "När alla har tillgång till samma information samtidigt, kan vi bygga gemensamma värderingar och kraften kan frigöras för tillväxt.",
        en: "When everyone has access to the same information simultaneously, we can build common values and the power can be released for growth."
      }
    }
  ];

  const outcomes = [
    {
      title: {
        se: "Överträffa försäljningsmål",
        en: "Exceed sales targets"
      },
      description: {
        se: "Gång på gång har jag sett när säljorganisationen har självförtroende och förståelse för processerna hur försäljningen utvecklas och stärks.",
        en: "Time and again I have seen when the sales organization has confidence and understanding of the processes how sales develops and strengthens."
      },
      icon: TrendingUp
    },
    {
      title: {
        se: "Entusiastiska medarbetare",
        en: "Enthusiastic employees"
      },
      description: {
        se: "Med tydligt definierade spelregler blir det både roligt och enkelt att axla ett ansvar och utföra sitt uppdrag.",
        en: "With clearly defined rules, it becomes both fun and easy to take responsibility and carry out your mission."
      },
      icon: Users
    },
    {
      title: {
        se: "Värdefulla leveranser",
        en: "Valuable deliveries"
      },
      description: {
        se: "Med en effektiv organisation blir det större marginaler och nöjda kunder vilket leder till en positiv spiral.",
        en: "With an efficient organization, there are larger margins and satisfied customers which leads to a positive spiral."
      },
      icon: Star
    }
  ];

  return (
    <section id="vision" className="bg-white section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 font-sans text-sm uppercase tracking-wide mb-4">
            {content.preHeader[currentLanguage]}
          </p>
          <h2 className="heading-lg mb-8">
            {content.mainHeader[currentLanguage]}
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Values */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-md mb-6">
                {content.subHeader[currentLanguage]}
              </h3>
              <p className="body-large mb-8">
                {content.introduction[currentLanguage]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {value.title[currentLanguage]}
                  </h4>
                  <p className="body-text">
                    {value.description[currentLanguage]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Outcomes */}
          <div className="space-y-6">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <div key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {outcome.title[currentLanguage]}
                      </h4>
                      <p className="body-text">
                        {outcome.description[currentLanguage]}
                      </p>
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
