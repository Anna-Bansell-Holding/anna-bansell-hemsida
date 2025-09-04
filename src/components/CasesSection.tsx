
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CasesSection = () => {
  const cases = [
    {
      percentage: "90%",
      title: "Ökad medarbetarengagemang",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      percentage: "75%",
      title: "Förbättrad försäljning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      percentage: "85%",
      title: "Effektivare processer", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      author: "Tidigare samarbetspartner"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      author: "Tidigare samarbetspartner"
    }
  ];

  return (
    <section id="cases" className="bg-white section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 font-sans text-sm uppercase tracking-wide mb-4">
            Tre case där metoden skapat värde
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <Card key={index} className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">
                    {caseItem.percentage}
                  </span>
                </div>
                <h3 className="heading-md mb-4">
                  {caseItem.title}
                </h3>
                <p className="body-text">
                  {caseItem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200">
              <CardContent className="p-6">
                <blockquote className="text-lg text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-gray-900 font-semibold not-italic">
                  - {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
