
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CasesSection = () => {
  const achievements = [
    {
      icon: "🎯",
      title: "Transformerad organisationskultur",
      description: "Lyckad omstrukturering av 200-personers organisation med 75% förbättring av medarbetarengagemang inom 6 månader.",
      testimonial: {
        quote: "Anna hjälpte oss att skapa en helt ny dynamik i organisationen. Hennes metodiska approach gav oss verktyg som vi fortfarande använder idag.",
        author: "Maria Lindström",
        position: "VD, Växjö Energi"
      }
    },
    {
      icon: "📈",
      title: "Effektiviserad försäljningsprocess",
      description: "Utvecklade ny försäljningsstrategi som resulterade i 40% ökning av konverteringsgraden och förkortade säljcykeln med 60%.",
      testimonial: {
        quote: "Annas fokus på både människor och processer gav oss genombrottet vi behövde. Resultaten talade för sig själva.",
        author: "Lars Persson",
        position: "Försäljningschef, Nordic Solutions"
      }
    },
    {
      icon: "⚡",
      title: "Accelererad digital transformation",
      description: "Ledde förändringsarbete som möjliggjorde snabb digitalisering av nyckelprocesser med 90% minskning av manuellt arbete.",
      testimonial: {
        quote: "Anna förstod att teknisk förändring handlar om människor. Hon fick hela teamet att omfamna den digitala resan.",
        author: "Elisabeth Andersson",
        position: "CTO, Kalmar Innovation"
      }
    }
  ];

  return (
    <section id="cases" className="bg-gray-50 section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 font-sans text-sm uppercase tracking-wide mb-4">
            Tre case där metoden skapat värde
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
                    {achievement.title}
                  </h3>
                  <p className="body-text">
                    {achievement.description}
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
                        "{achievement.testimonial.quote}"
                      </blockquote>
                      <cite className="text-gray-900 font-semibold not-italic text-sm">
                        {achievement.testimonial.author}
                      </cite>
                      <p className="text-gray-500 text-xs">
                        {achievement.testimonial.position}
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
