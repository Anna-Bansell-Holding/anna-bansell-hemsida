import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Local assets - replaced Figma localhost URLs
const imgWeuiArrowFilled = "/ico-info-check.svg";
const imgFlowbiteCheckOutline = "/ico-info-check.svg";
const imgVector2 = "/ico-info-start.svg";
const imgGroup = "/ico-handshake.png";
const imgFlowbiteCheckOutline1 = "/ico-info-start.svg";
const imgGroup1 = "/ico-cup-of-coffee.png";

const VisionSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    header: {
      se: 'Min största insikt',
      en: 'My biggest insight'
    },
    title: {
      se: 'Det går att vända en organisation!',
      en: 'It is possible to turn around an organization!'
    },
    subtitle: {
      se: 'Nyckeln ligger i den informella strukturen',
      en: 'The key lies in the informal structure'
    },
    description: {
      se: 'Når förändringarna ända ner till de informella strukturerna? De flesta förändringar i företag sker genom att modifiera och styra om i den formella strukturen. Risken är då att gamla mönster kvarstår och inga större förändringar sker. För att få en beständig förändring behövs modet att se de faktiska faktorer som bromsar organisationen och ger kraft åt de människor som tar företaget till en ny nivå.',
      en: 'Do the changes reach all the way down to the informal structures? Most changes in companies occur by modifying and redirecting the formal structure. The risk is that old patterns remain and no major changes occur. To achieve lasting change, you need the courage to see the actual factors that are holding back the organization and give power to the people who take the company to a new level.'
    },
    principles: [
      {
        title: {
          se: 'Ärlighet & omtanke',
          en: 'Honesty & care'
        },
        description: {
          se: 'Förtroendet inom gruppen stärks när alla känner och upplever att de behandlas lika.',
          en: 'Trust within the group is strengthened when everyone feels and experiences that they are treated equally.'
        }
      },
      {
        title: {
          se: 'Handling istället för rädsla',
          en: 'Action instead of fear'
        },
        description: {
          se: 'När vi fattar beslut som är långsiktigt hållbara och genomför dem skapas förtroende och trygghet i för alla.',
          en: 'When we make decisions that are long-term sustainable and implement them, trust and security are created for everyone.'
        }
      },
      {
        title: {
          se: 'Värdera varje person',
          en: 'Value each person'
        },
        description: {
          se: 'Se bortom det uppenbara och se potentialen i varje person utifrån arbetsmiljö och individens egna drivkrafter.',
          en: 'Look beyond the obvious and see the potential in each person based on the work environment and the individual\'s own drivers.'
        }
      },
      {
        title: {
          se: 'Samma bild till alla',
          en: 'Same picture for everyone'
        },
        description: {
          se: 'När alla har tillgång till samma information samtidigt, kan vi bygga gemensamma värderingar och kraften kan frigöras för tillväxt.',
          en: 'When everyone has access to the same information at the same time, we can build common values and the power can be released for growth.'
        }
      }
    ],
    results: [
      {
        title: {
          se: 'Överträffa försäljningsmål',
          en: 'Exceed sales targets'
        },
        description: {
          se: 'Gång på gång har jag sett när säljorganisationen har självförtroende och förståelse för processerna hur försäljningen utvecklas och stärks.',
          en: 'Time and time again I have seen when the sales organization has self-confidence and understanding of the processes how sales develops and strengthens.'
        }
      },
      {
        title: {
          se: 'Entusiastiska medarbetare',
          en: 'Enthusiastic employees'
        },
        description: {
          se: 'Med tydligt definierade spelregler blir det både roligt och enkelt att axla ett ansvar och utföra sitt uppdrag. Add some text',
          en: 'With clearly defined rules of the game, it becomes both fun and easy to take on responsibility and perform your mission. Add some text'
        }
      },
      {
        title: {
          se: 'Värdefulla leveranser',
          en: 'Valuable deliveries'
        },
        description: {
          se: 'Med en effektiv organisation blir det större marginaler och nöjda kunder vilket leder till en positiv spiral. Add som text',
          en: 'With an efficient organization, there are larger margins and satisfied customers which leads to a positive spiral. Add som text'
        }
      },
      {
        title: {
          se: 'Let\'s have a cup of coffee!',
          en: 'Let\'s have a cup of coffee!'
        },
        description: {
          se: 'Lorem ipsum dolor sit amet consectetur. Bibendum enim massa ut urna scelerisque. add some text add some te',
          en: 'Lorem ipsum dolor sit amet consectetur. Bibendum enim massa ut urna scelerisque. add some text add some te'
        }
      }
    ]
  };

  return (
    <section id="vision" className="vision-section">
      <div className="vision-container">
        <div className="vision-header">
          <p className="vision-subtitle">
            {content.header[currentLanguage]}
          </p>
          <h2 className="vision-title">
            {content.title[currentLanguage]}
          </h2>
        </div>

        <div className="vision-content">
          {/* Left Column - Principles */}
          <div className="vision-left">
            <div className="vision-main-text">
              <h3 className="vision-subtitle-text">
                {content.subtitle[currentLanguage]}
              </h3>
              <p className="vision-description">
                {content.description[currentLanguage]}
              </p>
            </div>

            <div className="vision-principles">
              <div className="vision-principles-row">
                <div className="vision-principle">
                  <h4 className="vision-principle-title">
                    {content.principles[0].title[currentLanguage]}
                  </h4>
                  <div className="vision-principle-content">
                    <p className="vision-principle-text">
                      {content.principles[0].description[currentLanguage]}
                    </p>
                    <div className="vision-read-more">
                      <span className="vision-read-more-text">Läs mer</span>
                      <img src={imgWeuiArrowFilled} alt="Arrow" className="vision-arrow" />
                    </div>
                  </div>
                </div>

                <div className="vision-principle">
                  <h4 className="vision-principle-title">
                    {content.principles[1].title[currentLanguage]}
                  </h4>
                  <div className="vision-principle-content">
                    <p className="vision-principle-text">
                      {content.principles[1].description[currentLanguage]}
                    </p>
                    <div className="vision-read-more">
                      <span className="vision-read-more-text">Läs mer</span>
                      <img src={imgWeuiArrowFilled} alt="Arrow" className="vision-arrow" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="vision-principles-row">
                <div className="vision-principle">
                  <h4 className="vision-principle-title">
                    {content.principles[2].title[currentLanguage]}
                  </h4>
                  <div className="vision-principle-content">
                    <p className="vision-principle-text">
                      {content.principles[2].description[currentLanguage]}
                    </p>
                    <div className="vision-read-more">
                      <span className="vision-read-more-text">Läs mer</span>
                      <img src={imgWeuiArrowFilled} alt="Arrow" className="vision-arrow" />
                    </div>
                  </div>
                </div>

                <div className="vision-principle">
                  <h4 className="vision-principle-title">
                    {content.principles[3].title[currentLanguage]}
                  </h4>
                  <div className="vision-principle-content">
                    <p className="vision-principle-text">
                      {content.principles[3].description[currentLanguage]}
                    </p>
                    <div className="vision-read-more">
                      <span className="vision-read-more-text">Läs mer</span>
                      <img src={imgWeuiArrowFilled} alt="Arrow" className="vision-arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="vision-right">
            <div className="vision-result">
              <div className="vision-result-icon">
                <img src={imgFlowbiteCheckOutline} alt="Check" className="vision-icon" />
              </div>
              <div className="vision-result-content">
                <h4 className="vision-result-title">
                  {content.results[0].title[currentLanguage]}
                </h4>
                <p className="vision-result-text">
                  {content.results[0].description[currentLanguage]}
                </p>
              </div>
            </div>

            <div className="vision-result">
              <div className="vision-result-icon vision-result-icon-white">
                <div className="vision-icon-container">
                  <img src={imgGroup} alt="Handshake" className="vision-icon-small" />
                </div>
              </div>
              <div className="vision-result-content">
                <h4 className="vision-result-title">
                  {content.results[1].title[currentLanguage]}
                </h4>
                <p className="vision-result-text">
                  {content.results[1].description[currentLanguage]}
                </p>
              </div>
            </div>

            <div className="vision-result">
              <div className="vision-result-icon">
                <img src={imgFlowbiteCheckOutline1} alt="Rocket" className="vision-icon" />
              </div>
              <div className="vision-result-content">
                <h4 className="vision-result-title">
                  {content.results[2].title[currentLanguage]}
                </h4>
                <p className="vision-result-text">
                  {content.results[2].description[currentLanguage]}
                </p>
              </div>
            </div>

            <div className="vision-result">
              <div className="vision-result-icon vision-result-icon-white">
                <div className="vision-icon-container">
                  <img src={imgGroup1} alt="Coffee" className="vision-icon-small" />
                </div>
              </div>
              <div className="vision-result-content">
                <h4 className="vision-result-title">
                  {content.results[3].title[currentLanguage]}
                </h4>
                <p className="vision-result-text">
                  {content.results[3].description[currentLanguage]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;