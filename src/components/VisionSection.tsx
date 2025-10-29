import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnchorLink from './AnchorLink';

// Local assets - replaced Figma localhost URLs
const imgFlowbiteCheckOutline = "/ico-info-check.svg";
const imgGroup = "/ico-handshake.svg";
const imgFlowbiteCheckOutline1 = "/ico-info-start.svg";
const imgGroup1 = "/ico-cup-of-coffee.svg";

const VisionSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    header: {
      se: 'Min största insikt:',
      en: 'My greatest insight:',
      hr: 'Moj ključni uvid:'
    },
    title: {
      se: 'Det går att vända en organisation!',
      en: 'It is possible to turn around an organization!',
      hr: 'Poslovni preokret je moguć!'
    },
    subtitle: {
      se: 'Nyckeln ligger i den informella strukturen',
      en: 'The key lies in the informal structure',
      hr: 'Ključ je u neformalnim strukturama'
    },
    readMore: {
      se: 'Läs mer',
      en: 'Read more',
      hr: 'Pročitaj više'
    },
    description: {
      se: 'Når förändringarna ända ner till de informella strukturerna? De flesta förändringar i företag sker genom att modifiera och styra om i den formella strukturen. Risken är då att gamla mönster kvarstår och inga större förändringar sker. För att få en beständig förändring behövs modet att se de faktiska faktorer som bromsar organisationen och ge kraft och utrymme åt de människor som tar företaget till en ny nivå.',
      en: 'Do changes reach all the way down to the informal structures? Most changes in companies occur by modifying and redirecting the formal structure. The risk is then that old patterns remain and no major changes occur. To achieve lasting change, we need the courage to see the actual factors that slow down the organization and empower and give space to the people who take the company to the next level.',
      hr: 'Dopiru li promjene do neformalnih struktura? Većina organizacijskih preinaka u tvrtkama svodi se na korekcije i preusmjeravanja unutar formalne strukture. Postoji opasnost da se zadrže stari obrasci te da ne dođe do značajnijih promjena. Za održivu promjenu potrebno je imati hrabrosti prepoznati stvarne čimbenike koji usporavaju organizaciju te osnažiti i dati prostor ljudima koji će tvrtku podići na višu razinu.'
    },
    principles: [
      {
        title: {
          se: 'Ärlighet & omtanke',
          en: 'Honesty & care',
          hr: 'Iskrenost i međusobno uvažavanje'
        },
        description: {
          se: 'Förtroendet inom gruppen stärks när alla känner och upplever att de behandlas lika.',
          en: 'Trust within the group is strengthened when everyone feels and experiences that they are treated equally.',
          hr: 'Povjerenje unutar tima raste kada svi imaju osjećaj da ih se tretira jednako i s poštovanjem.'
        },
        anchorLink: 'listen-to-people'
      },
      {
        title: {
          se: 'Handling istället för rädsla',
          en: 'Action instead of fear',
          hr: 'Odaberite djelovanje, a ne strah.'
        },
        description: {
          se: 'När vi fattar beslut som är långsiktigt hållbara och genomför dem med kraft skapas förtroende och trygghet i organisationen.',
          en: 'When we make long-term sustainable decisions and implement them with force, trust and security are created in the organization.',
          hr: 'Kada donosimo dugoročno održive odluke i provodimo ih odlučno i dosljedno, u organizaciji jačaju povjerenje i sigurnost.'
        },
        anchorLink: 'quick-changes'
      },
      {
        title: {
          se: 'Värdera varje person',
          en: 'Value every person',
          hr: 'Uvažavajte svakog pojedinca'
        },
        description: {
          se: 'Se bortom det uppenbara och se potentialen i varje person utifrån arbetsmiljö och individens egna drivkrafter.',
          en: 'See beyond the obvious and see the potential in each person based on work environment and individual motivations.',
          hr: 'Gledajte dalje od onoga što se vidi na prvi pogled i prepoznajte potencijal svakog pojedinca, uzimajući u obzir radno okruženje i njihove osobne pokretače.'
        },
        anchorLink: 'form-community'
      },
      {
        title: {
          se: 'Samma bild till alla',
          en: 'Same picture to everyone',
          hr: 'Jednake informacije. Jedna priča.'
        },
        description: {
          se: 'När alla har tillgång till samma information samtidigt, kan vi bygga gemensamma värderingar och kraften kan frigöras för tillväxt.',
          en: 'When everyone has access to the same information simultaneously, we can build common values and power can be released for growth.',
          hr: 'Ukoliko svi u isto vrijeme imamo pristup istim informacijama, možemo izgraditi zajedničke vrijednosti i osloboditi snagu za rast.'
        },
        anchorLink: 'raise-the-gaze'
      }
    ],
    results: [
      {
        title: {
          se: 'Överträffa försäljningsmål',
          en: 'Exceed sales targets',
          hr: 'Nadmašite prodajne ciljeve'
        },
        description: {
          se: 'Gång på gång har jag sett när säljorganisationen har självförtroende och förståelse för processerna hur försäljningen utvecklas och stärks.',
          en: 'Time and time again I have seen when the sales organization has self-confidence and understanding of the processes how sales develops and strengthens.',
          hr: 'Iz iskustva znam da prodaja raste i jača kada prodajna organizacija ima samopouzdanje i razumije vlastite procese.'
        }
      },
      {
        title: {
          se: 'Entusiastiska medarbetare',
          en: 'Enthusiastic employees',
          hr: 'Entuzijastični zaposlenici'
        },
        description: {
          se: 'Med tydligt definierade spelregler blir det både roligt och enkelt att axla ett ansvar och utföra sitt uppdrag.',
          en: 'With clearly defined rules of the game, it becomes both fun and easy to shoulder responsibility and carry out your mission.',
          hr: 'Kada su pravila igre jasno definirana, preuzimanje odgovornosti i izvršavanje uloge postaje i jednostavno i motivirajuće.'
        }
      },
      {
        title: {
          se: 'Värdefulla leveranser',
          en: 'Valuable deliveries',
          hr: 'Vrijednost u svakoj isporuci'
        },
        description: {
          se: 'Med en effektiv organisation blir det större marginaler och nöjda kunder vilket leder till en positiv spiral.',
          en: 'With an efficient organization, there are greater margins and satisfied customers which leads to a positive spiral.',
          hr: 'Učinkovita organizacija donosi veće marže i zadovoljne klijente te pokreće uzlaznu spiralu rasta.'
        }
      },
      {
        title: {
          se: 'Låt oss ta en fika',
          en: 'Let\'s have a cup of coffee',
          hr: 'Popijmo kavu zajedno'
        },
        description: {
          se: 'Varje framgångsrik turnaround börjar med ett öppet samtal. Låt oss träffas över en kopp kaffe och prata om din situation utan förpliktelser.',
          en: 'Every successful turnaround starts with an open conversation. Let\'s meet over a cup of coffee and discuss your situation without commitments.',
          hr: 'Svaki uspješan poslovni preokret počinje otvorenim razgovorom. Sastanimo se uz šalicu kave i porazgovarajmo o Vašoj situaciji – bez ikakvih obveza.'
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
                      <AnchorLink href={`#${content.principles[0].anchorLink}`} className="vision-read-more-text">
                        {content.readMore[currentLanguage]}
                      </AnchorLink>
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
                      <AnchorLink href={`#${content.principles[1].anchorLink}`} className="vision-read-more-text">
                        {content.readMore[currentLanguage]}
                      </AnchorLink>
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
                      <AnchorLink href={`#${content.principles[2].anchorLink}`} className="vision-read-more-text">
                        {content.readMore[currentLanguage]}
                      </AnchorLink>
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
                      <AnchorLink href={`#${content.principles[3].anchorLink}`} className="vision-read-more-text">
                        {content.readMore[currentLanguage]}
                      </AnchorLink>
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