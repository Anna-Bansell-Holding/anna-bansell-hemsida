
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Local background image downloaded from Figma
const imgFrame2147237582 = "/b653747b7b6bd3425029d484f776cb799c69dffc.png";

const StructuresSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    title: {
      se: "Formella & informella strukturer",
      en: "Formal & informal structures",
      hr: "Formalne i neformalne strukture"
    },
    description: {
      se: "De mesta framgångsrika och snabbaste turnarounds jag har upplevt kommer när vi har lyckats säkerställa att informella och formella strukturen går hand i hand.",
      en: "The most successful and fastest turnarounds I have experienced come when we have managed to ensure that informal and formal structures go hand in hand.",
      hr: "Najuspješniji i najbrži poslovni preokreti koje sam doživjela dogodili su se kada smo uspjeli osigurati da neformalne i formalne strukture idu ruku pod ruku."
    }
  };

  return (
    <section className="structures-section">
      {/* Background Image with Overlays */}
      <div className="structures-background">
        <img src={imgFrame2147237582} alt="Structures background" className="structures-bg-image" />
        <div className="structures-overlay-1"></div>
        <div className="structures-overlay-2"></div>
        <div className="structures-overlay-3"></div>
      </div>
      
      {/* Content positioned at bottom-left */}
      <div className="structures-content">
        <div className="structures-text-container">
          <h2 className="structures-title">
            {content.title[currentLanguage]}
          </h2>
          <div className="structures-description-container">
            <p className="structures-description">
              {content.description[currentLanguage]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructuresSection;
