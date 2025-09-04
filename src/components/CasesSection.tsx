
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const CasesSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    preHeader: {
      se: "Tre case där metoden skapat värde",
      en: "Three cases where the method created value"
    }
  };

  const achievements = [
    {
      icon: "🎯",
      title: {
        se: "Transformerad organisationskultur",
        en: "Transformed organizational culture"
      },
      description: {
        se: "Lyckad omstrukturering av 200-personers organisation med 75% förbättring av medarbetarengagemang inom 6 månader.",
        en: "Successful restructuring of 200-person organization with 75% improvement in employee engagement within 6 months."
      },
      testimonial: {
        quote: {
          se: "Anna hjälpte oss att skapa en helt ny dynamik i organisationen. Hennes metodiska approach gav oss verktyg som vi fortfarande använder idag.",
          en: "Anna helped us create a completely new dynamic in the organization. Her methodical approach gave us tools that we still use today."
        },
        author: "Maria Lindström",
        position: {
          se: "VD, Växjö Energi",
          en: "CEO, Växjö Energy"
        }
      }
    },
    {
      icon: "📈",
      title: {
        se: "Effektiviserad försäljningsprocess",
        en: "Streamlined sales process"
      },
      description: {
        se: "Utvecklade ny försäljningsstrategi som resulterade i 40% ökning av konverteringsgraden och förkortade säljcykeln med 60%.",
        en: "Developed new sales strategy that resulted in 40% increase in conversion rate and shortened sales cycle by 60%."
      },
      testimonial: {
        quote: {
          se: "Annas fokus på både människor och processer gav oss genombrottet vi behövde. Resultaten talade för sig själva.",
          en: "Anna's focus on both people and processes gave us the breakthrough we needed. The results spoke for themselves."
        },
        author: "Lars Persson",
        position: {
          se: "Försäljningschef, Nordic Solutions",
          en: "Sales Manager, Nordic Solutions"
        }
      }
    },
    {
      icon: "⚡",
      title: {
        se: "Accelererad digital transformation",
        en: "Accelerated digital transformation"
      },
      description: {
        se: "Ledde förändringsarbete som möjliggjorde snabb digitalisering av nyckelprocesser med 90% minskning av manuellt arbete.",
        en: "Led change work that enabled rapid digitization of key processes with 90% reduction in manual work."
      },
      testimonial: {
        quote: {
          se: "Anna förstod att teknisk förändring handlar om människor. Hon fick hela teamet att omfamna den digitala resan.",
          en: "Anna understood that technical change is about people. She got the whole team to embrace the digital journey."
        },
        author: "Elisabeth Andersson",
        position: {
          se: "CTO, Kalmar Innovation",
          en: "CTO, Kalmar Innovation"
        }
      }
    }
  ];

  return (
    <section id="cases" className="bg-gray-50 section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 font-sans text-sm uppercase tracking-wide mb-4">
            {content.preHeader[currentLanguage]}
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              {/* Achievement card */}
              <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow mb-6">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">
                      {achievement.icon}
                    </span>
                  </div>
                  <h3 className="heading-md mb-4">
                    {achievement.title[currentLanguage]}
                  </h3>
                  <p className="body-text">
                    {achievement.description[currentLanguage]}
                  </p>
                </CardContent>
              </Card>

              {/* Testimonial below each achievement */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-500 text-sm">👤</span>
                    </div>
                    <div className="text-left">
                      <blockquote className="text-sm text-gray-600 italic mb-3">
                        "{achievement.testimonial.quote[currentLanguage]}"
                      </blockquote>
                      <cite className="text-gray-900 font-semibold not-italic text-sm">
                        {achievement.testimonial.author}
                      </cite>
                      <p className="text-gray-500 text-xs">
                        {achievement.testimonial.position[currentLanguage]}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
