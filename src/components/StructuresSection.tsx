
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const StructuresSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    header: {
      se: "Formella & informella strukturer",
      en: "Formal & informal structures"
    },
    text: {
      se: "De mesta framgångsrika och snabbaste helomvandlingar jag har upplevt kommer när vi har lyckats säkerställa att informella och formella strukturen går hand i hand.",
      en: "The most successful and fastest turnarounds I have experienced come when we have managed to ensure that informal and formal structures go hand in hand."
    }
  };

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 font-sans text-sm uppercase tracking-wide mb-4">
            {content.header[currentLanguage]}
          </p>
          <p className="body-large">
            {content.text[currentLanguage]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StructuresSection;
