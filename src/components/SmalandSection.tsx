
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Clean Småland background without embedded text
const imgFrame1000001918 = "/bg-img-smaland-clean.png";

const SmalandSection = () => {
  const { currentLanguage } = useLanguage();
  
  const content = {
    title: {
      se: "Småland?",
      en: "Småland?"
    },
    description: {
      se: "Smålänningarna har förstått att framgång nås bäst genom ihärdighet, idogt arbete och disciplin. Vårda tid och resurser är en stabil bas för att få bästa möjliga utfall. Något som jag haft stor nytta av i mitt arbete med utvecklingsprocesser.",
      en: "The people of Småland have understood that success is best achieved through persistence, diligent work and discipline. Caring for time and resources is a stable foundation for achieving the best possible outcome. Something I have found very useful in my work with development processes."
    }
  };

  return (
    <section id="smaland" className="smaland-section">
      {/* Background Image with Overlays */}
      <div className="smaland-background">
        <img src={imgFrame1000001918} alt="Småland forest" className="smaland-bg-image" />
        <div className="smaland-overlay-1"></div>
        <div className="smaland-overlay-2"></div>
        <div className="smaland-overlay-3"></div>
      </div>
      
      {/* Content */}
      <div className="smaland-content">
        <div className="smaland-text-container">
          <h2 className="smaland-title">
            {content.title[currentLanguage]}
          </h2>
          <div className="smaland-description-container">
            <p className="smaland-description">
              {content.description[currentLanguage]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmalandSection;
