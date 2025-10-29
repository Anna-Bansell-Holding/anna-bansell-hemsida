import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Local assets downloaded from Figma
const imgFlowbiteCheckOutline = "/1627f3a870e9b56d751d07f53392d7a84aa55817.png";
const imgFlowbiteCheckOutline1 = "/d9295352fc08a04c070e415a77ae8cfe609bab92.png";
const imgFlowbiteCheckOutline2 = "/d973b17b466355ffd7ff2084d3977dcc86ddbc11.png";
const imgGroup = "/34088c1b58f28c5cf1f9a99ecd3274f2ceb48e34.svg";
const imgQuote = "/c5d35b30613d0d606ea1db4de147c492c1970d55.svg";

const CasesSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    subtitle: {
      se: "Nöjda kunder",
      en: "Case studies",
      hr: "Studije slučaja"
    },
    title: {
      se: "Tre case där metoden skapat värde",
      en: "Three cases where the method created value",
      hr: "Tri primjera gdje je metoda stvorila vrijednost"
    }
  };

  const cases = [
    {
      icon: imgGroup,
      title: {
        se: "Transformerad organisationskultur",
        en: "Transformed organizational culture",
        hr: "Transformirana organizacijska kultura"
      },
      description: {
        se: "Lyckad omstrukturering av 200-personers organisation med 75% förbättring av medarbetarengagemang inom 6 månader.",
        en: "Successful restructuring of 200-person organization with 75% improvement in employee engagement within 6 months.",
        hr: "Uspješno restrukturiranje organizacije sa 200 zaposlenika, pri čemu je anžiranost zaposlenika porasla za 75% u samo šest mjeseci."
      },
      testimonial: {
        image: imgFlowbiteCheckOutline,
        quote: {
          se: "Anna hjälpte oss att skapa en helt ny dynamik i organisationen. Hennes metodiska approach gav oss verktyg som vi fortfarande använder idag.",
          en: "Anna helped us create a completely new dynamic in the organization. Her methodical approach gave us tools that we still use today.",
          hr: "Anna nam je pomogla stvoriti potpuno novu dinamiku unutar organizacije. Njezin metodičan pristup dao nam je alate koje i danas koristimo."
        },
        author: "Maria Lindström",
        position: {
          se: "VD, Växjö Energi",
          en: "CEO, Växjö Energy",
          hr: "Izvršna direktorica, Växjö Energi"
        }
      }
    },
    {
      icon: imgGroup,
      iconRotation: "180deg",
      title: {
        se: "Effektiviserad försäljningsprocess",
        en: "Streamlined sales process",
        hr: "Učinkovitiji prodajni process"
      },
      description: {
        se: "Utvecklade ny försäljningsstrategi som resulterade i 40% ökning av konverteringsgraden och förkortade säljcykeln med 60%.",
        en: "Developed new sales strategy that resulted in 40% increase in conversion rate and shortened sales cycle by 60%.",
        hr: "Razvili smo novu prodajnu strategiju koja je povećala stopu konverzije za 40 % i skratila prodajni ciklus za 60 %."
      },
      testimonial: {
        image: imgFlowbiteCheckOutline1,
        quote: {
          se: "Annas fokus på både människor och processer gav oss genombrottet vi behövde. Resultaten talade för sig själva.",
          en: "Anna's focus on both people and processes gave us the breakthrough we needed. The results spoke for themselves.",
          hr: "Annina fokusiranost na ljude i procese donio nam je proboj koji nam je bio potreban. Rezultati govore sami za sebe."
        },
        author: "Lars Persson",
        position: {
          se: "Försäljningschef, Nordic Solutions",
          en: "Sales Manager, Nordic Solutions",
          hr: "Direktor prodaje, Nordic Solutions"
        }
      }
    },
    {
      icon: imgGroup,
      iconRotation: "270deg",
      title: {
        se: "Accelererad digital transformation",
        en: "Accelerated digital transformation",
        hr: "Ubrzana digitalna transformacija"
      },
      description: {
        se: "Ledde förändringsarbete som möjliggjorde snabb digitalisering av nyckelprocesser med 90% minskning av manuellt arbete.",
        en: "Led change work that enabled rapid digitization of key processes with 90% reduction in manual work.",
        hr: "Vodila je proces promjena koji je omogućio brzu digitalizaciju ključnih procesa te smanjio manuelni rad za 90 %."
      },
      testimonial: {
        image: imgFlowbiteCheckOutline2,
        quote: {
          se: "Anna förstod att teknisk förändring handlar om människor. Hon fick hela teamet att omfamna den digitala resan.",
          en: "Anna understood that technical change is about people. She got the whole team to embrace the digital journey.",
          hr: "Anna je razumjela da su tehnološke promjene prije svega pitanje ljudi. Potaknula je cijeli tim da prigrli digitalnu transformaciju."
        },
        author: "Elisabeth Andersson",
        position: {
          se: "CTO, Kalmar Innovation",
          en: "CTO, Kalmar Innovation",
          hr: "Tehnička direktorica, Kalmar Innovation"
        }
      }
    }
  ];

  return (
    <section id="cases" className="cases-section">
      <div className="cases-container">
        {/* Header */}
        <div className="cases-header">
          <p className="cases-subtitle">
            {content.subtitle[currentLanguage]}
          </p>
          <h2 className="cases-title">
            {content.title[currentLanguage]}
          </h2>
        </div>

        {/* Cases Grid */}
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-column">
              {/* Main Case Card */}
              <div className="case-card">
                <div className="case-header">
                  <div className="case-icon-container">
                    <div 
                      className="case-icon"
                      style={{ transform: `rotate(${caseItem.iconRotation || '0deg'})` }}
                    >
                      <img src={caseItem.icon} alt="Success icon" className="case-icon-image" />
                    </div>
                  </div>
                  <h3 className="case-title">
                    {caseItem.title[currentLanguage]}
                  </h3>
                </div>
                <div className="case-description-container">
                  <p className="case-description">
                    {caseItem.description[currentLanguage]}
                  </p>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={caseItem.testimonial.image} alt="Profile" className="testimonial-image" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-quote-container">
                    <p className="testimonial-quote">
                      {caseItem.testimonial.quote[currentLanguage]}
                    </p>
                  </div>
                  <p className="testimonial-attribution">
                    <span className="testimonial-author">{caseItem.testimonial.author}</span>
                    <br />
                    <span className="testimonial-position">{caseItem.testimonial.position[currentLanguage]}</span>
                  </p>
                </div>
                <div className="testimonial-quote-mark">
                  <img src={imgQuote} alt="Quote" className="quote-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;