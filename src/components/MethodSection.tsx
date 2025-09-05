import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MethodSection = () => {
  const { currentLanguage } = useLanguage();
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());

  const toggleExpanded = (stepId: number) => {
    setExpandedSteps(prev => {
      const newSet = new Set(prev);
      const wasExpanded = newSet.has(stepId);
      
      if (wasExpanded) {
        newSet.delete(stepId);
        // Scroll to step when closing to ensure it's visible
        setTimeout(() => {
          const stepElement = document.getElementById(`step-${stepId}`);
          if (stepElement) {
            const headerOffset = 150;
            const elementPosition = stepElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  const scrollToStep = (stepIndex: number) => {
    const nextStepElement = document.getElementById(`step-${stepIndex + 1}`);
    if (nextStepElement) {
      const headerOffset = 150; // Account for fixed header height
      const elementPosition = nextStepElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const methodologySteps = [
    {
      id: 1,
      icon: "👁️",
      title: { 
        se: "Höja blicken", 
        en: "Raise the Vision" 
      },
      description: { 
        se: "Grunden för allt förändringsarbete är en tydlig riktning. Här formuleras en gemensam bild av vart vi ska. Tillsammans utforskar vi, tänker dynamiskt, skapar samsyn och mening för att slutligen identifiera nyckelfrågor och mål.",
        en: "The foundation for all change work is a clear direction. Here we formulate a common picture of where we are going. Together we explore, think dynamically, create consensus and meaning to finally identify key issues and goals."
      },
      expansion: {
        se: "Det första steget i varje turnaround är att skapa tydlighet kring vart organisationen ska. Anna arbetar med att formulera en gemensam bild som alla kan förstå och känna sig delaktiga i. Detta handlar inte om abstrakta visioner utan om konkreta, uppnåeliga mål med rötter i verkligheten. Med sin småländska pragmatism fokuserar hon på vad som faktiskt är möjligt att uppnå, inte på vackra ord utan substans.\n\nGenom systematisk utforskning av organisationens potential identifierar Anna de verkliga tillväxtmöjligheterna. Hon använder en dynamisk ansats där hon tillsammans med teamet tänker i spiraler snarare än cirklar - alltid med framåtrörelse som mål. Detta innebär att man vågar ifrågasätta befintliga antaganden och öppnar upp för nya möjligheter som tidigare inte synts.\n\nSlutresultatet av detta steg är en riktning som skapar mening och engagemang i organisationen. Anna säkerställer att alla förstår inte bara vad som ska göras, utan varför det ska göras. Genom att förankra målen i både affärslogik och människors drivkrafter skapas en kraft som bär organisationen framåt även när motgångarna kommer.",
        en: "The first step in every turnaround is to create clarity about where the organization is heading. Anna works to formulate a shared vision that everyone can understand and feel part of. This is not about abstract visions but about concrete, achievable goals rooted in reality. With her Småland pragmatism, she focuses on what is actually possible to achieve, not on beautiful words without substance.\n\nThrough systematic exploration of the organization's potential, Anna identifies the real growth opportunities. She uses a dynamic approach where she and the team think in spirals rather than circles - always with forward movement as the goal. This means daring to question existing assumptions and opening up to new possibilities that were previously unseen.\n\nThe end result of this step is a direction that creates meaning and engagement in the organization. Anna ensures that everyone understands not just what needs to be done, but why it needs to be done. By anchoring the goals in both business logic and people's motivations, a force is created that carries the organization forward even when setbacks come."
      },
      thinkAbout: {
        se: [
          "Håll målen konkreta och mätbara",
          "Förankra riktningen i verkligheten",
          "Skapa delaktighet i visionsarbetet"
        ],
        en: [
          "Keep goals concrete and measurable",
          "Anchor direction in reality",
          "Create participation in vision work"
        ]
      }
    },
    {
      id: 2,
      icon: "👂",
      title: { 
        se: "Lyssna in människorna", 
        en: "Listen to the People" 
      },
      description: { 
        se: "För att förstå vad som krävs för att lyckas behöver vi förstå nuläget – på riktigt och det görs genom djupgående analys av både hårda och mjuka signaler (t.ex. energi, engagemang, mobbning), gemensam information och insikt.",
        en: "To understand what is required to succeed, we need to understand the current situation - for real, and this is done through in-depth analysis of both hard and soft signals (e.g. energy, engagement, bullying), shared information and insight."
      },
      expansion: {
        se: "Anna förstår att verklig förändring börjar med att förstå nuläget på riktigt, inte som man önskar att det vore. Hon gräver djupt i organisationen för att förstå både de hårda fakta och de mjuka signalerna som berättar sanningen om vad som faktiskt händer. Detta inkluderar allt från energinivåer och engagemang till dolda konflikter och informella maktstrukturer som kan bromsa eller driva utvecklingen.\n\nGenom systematisk analys kartlägger Anna hela organisationens tillstånd. Hon lyssnar inte bara på vad som sägs officiellt, utan förstår vad som händer i korridorerna, vid kaffemaskinen och i de informella nätverken. Med sin erfarenhet av småländsk rakt-på-sak-kommunikation skapar hon trygghet för människor att berätta sanningen, även när den är obehaglig.\n\nDetta djupa lyssnande resulterar i en komplett nulägesanalys som ger rätt grund för alla kommande förändringar. Anna tydliggör också roller och ansvar så att alla vet vad som förväntas av dem. Genom att skapa gemensam information och insikt bygger hon den transparens som krävs för att människor ska våga engagera sig i förändringsarbetet.",
        en: "Anna understands that real change begins with understanding the current situation for real, not as one wishes it were. She digs deep into the organization to understand both the hard facts and the soft signals that tell the truth about what is actually happening. This includes everything from energy levels and engagement to hidden conflicts and informal power structures that can slow down or drive development.\n\nThrough systematic analysis, Anna maps the entire organization's condition. She doesn't just listen to what is said officially, but understands what happens in the corridors, at the coffee machine, and in the informal networks. With her experience of Småland straight-talking communication, she creates safety for people to tell the truth, even when it's uncomfortable.\n\nThis deep listening results in a complete current state analysis that provides the right foundation for all upcoming changes. Anna also clarifies roles and responsibilities so everyone knows what is expected of them. By creating shared information and insight, she builds the transparency required for people to dare engage in the change work."
      },
      thinkAbout: {
        se: [
          "Lyssna efter det som inte sägs",
          "Kartlägg informella maktstrukturer", 
          "Ge exakt samma information till alla"
        ],
        en: [
          "Listen to what is not said",
          "Map informal power structures",
          "Share the same picture to everyone"
        ]
      }
    },
    {
      id: 3,
      icon: "⚡",
      title: { 
        se: "Snabba självklara förändringar", 
        en: "Quick Obvious Changes" 
      },
      description: { 
        se: "Förändring behöver bli synlig snabbt: Därför blir det både snabba och konkreta åtgärder och tydliga symbolhandlingar. Vi fokuserar på det som ger energi och vilja för att samtidigt kunna prioritera det som flyttar fram positionerna mot målet.",
        en: "Change needs to become visible quickly: Therefore there are both quick and concrete actions and clear symbolic acts. We focus on what gives energy and will while being able to prioritize what moves the positions towards the goal."
      },
      expansion: {
        se: "Anna vet att förändring måste bli synlig snabbt för att människor ska tro på den. Hon identifierar de åtgärder som ger störst synlig effekt med minst möjliga motstånd - de \"självklara\" förändringarna som alla egentligen vet behöver göras men som av olika anledningar inte blivit genomförda. Dessa snabba vinster bygger momentum och visar att förändring faktiskt är möjlig.\n\nFörutom konkreta åtgärder använder Anna medvetet symbolhandlingar som kommunicerar tydligt att nya tider är här. Detta kan vara allt från att ändra mötesstrukturer till att ta bort onödiga processer som alla irriterat sig på. Varje förändring väljs noggrant för att den ska ge energi och vilja snarare än skapa rädsla eller motstånd.\n\nGenom att fokusera på det som flyttar nålen mot de uppsatta målen skapar Anna en positiv spiral. Människor ser att deras ansträngningar ger resultat, vilket gör dem redo för större förändringar. Med sin småländska praktiskhet prioriterar hon alltid insatser som ger verklig effekt framför aktiviteter som bara ser bra ut på papperet.",
        en: "Anna knows that change must become visible quickly for people to believe in it. She identifies the measures that give the greatest visible effect with the least possible resistance - the \"obvious\" changes that everyone really knows need to be done but which for various reasons have not been implemented. These quick wins build momentum and show that change is actually possible.\n\nIn addition to concrete measures, Anna consciously uses symbolic actions that clearly communicate that new times are here. This can be anything from changing meeting structures to removing unnecessary processes that everyone has been annoyed about. Each change is carefully chosen so that it gives energy and will rather than creates fear or resistance.\n\nBy focusing on what moves the needle toward the set goals, Anna creates a positive spiral. People see that their efforts produce results, which makes them ready for bigger changes. With her Småland practicality, she always prioritizes efforts that have real effect over activities that just look good on paper."
      },
      thinkAbout: {
        se: [
          "Välj enkla förändringar med stor effekt",
          "Fokusera på självklara förbättringar",
          "Kommunicera framsteg tydligt"
        ],
        en: [
          "Choose simple changes with big impact",
          "Focus on obvious improvements",
          "Communicate progress clearly"
        ]
      }
    },
    {
      id: 4,
      icon: "🤝",
      title: { 
        se: "Forma en gemenskap", 
        en: "Form a Community" 
      },
      description: { 
        se: "Här sker det strategiska skiftet: Vi identifierar tillväxtpotential och bromsklossar för att kunna behålla de som bär energi och potential. Samlar insikter för att kunna forma konkreta åtgärder.",
        en: "Here the strategic shift happens: We identify growth potential and obstacles to retain those who carry energy and potential. Gather insights to form concrete actions."
      },
      expansion: {
        se: "Detta är steget där Anna gör det verkligt strategiska skiftet från att förstå problemen till att bygga lösningarna. Hon identifierar vilka personer i organisationen som bär energi och potential, och säkerställer att dessa människor får rätt förutsättningar att blomma. Samtidigt hanterar hon de faktorer som håller tillbaka organisationen - det kan vara allt från destruktiva personer till utdaterade processer.\n\nMed sin djupa förståelse för informella strukturer förstår Anna att det är människor, inte processer, som driver verklig förändring. Hon arbetar systematiskt för att frigöra den positiva energin i organisationen samtidigt som hon hanterar de krafter som bromsar utvecklingen. Detta kräver modet att fatta svåra beslut om personer som inte längre passar in i den nya riktningen.\n\nGenom att samla alla insikter från tidigare steg formar Anna konkreta åtgärdsplaner som är både realistiska och ambitiösa. Hon bygger team och skapar strukturer som förstärker den positiva utvecklingen. Resultatet är en fokuserad plan för omställning där rätt människor är på rätt plats för att driva organisationen framåt.",
        en: "This is the step where Anna makes the truly strategic shift from understanding the problems to building the solutions. She identifies which people in the organization carry energy and potential, and ensures that these people get the right conditions to flourish. At the same time, she handles the factors that hold back the organization - this can be anything from destructive people to outdated processes.\n\nWith her deep understanding of informal structures, Anna understands that it is people, not processes, that drive real change. She works systematically to release the positive energy in the organization while handling the forces that slow down development. This requires the courage to make difficult decisions about people who no longer fit into the new direction.\n\nBy gathering all insights from previous steps, Anna forms concrete action plans that are both realistic and ambitious. She builds teams and creates structures that strengthen the positive development. The result is a focused plan for transformation where the right people are in the right place to drive the organization forward."
      },
      thinkAbout: {
        se: [
          "Identifiera energibärare och bromsare",
          "Våga fatta svåra personalbeslut",
          "Bygg stöttande strukturer"
        ],
        en: [
          "Identify energy drivers and blockers",
          "Dare to make difficult people decisions",
          "Build supporting structures"
        ]
      }
    },
    {
      id: 5,
      icon: "⚙️",
      title: { 
        se: "Gemensamma processer", 
        en: "Shared Processes" 
      },
      description: { 
        se: "För att förändring ska hålla måste den bli vardag så snabbt som möjligt: Därför skapar vi enkla, smarta arbetsflöden, automatiserar och delegerar, eliminerar det som stör. Sist men inte minst skapas forum för synlig framgång.",
        en: "For change to last, it must become everyday as quickly as possible: Therefore we create simple, smart workflows, automate and delegate, eliminate what disturbs. Last but not least, forums for visible success are created."
      },
      expansion: {
        se: "För Anna är det avgörande att förändringen inte bara sker utan att den också håller över tid. Hon förstår att för att förändring ska bli bestående måste den bli en naturlig del av vardagen så snabbt som möjligt. Detta innebär att skapa enkla, smarta arbetsflöden som människor faktiskt vill använda - inte komplicerade system som bara skapar frustration.\n\nMed sin småländska effektivitetstänk arbetar Anna systematiskt för att automatisera det som kan automatiseras och delegera det som kan delegeras. Hon eliminerar allt som stör och skapar merarbete utan att tillföra värde. Samtidigt bygger hon strukturer som gör det enkelt för människor att göra rätt saker på rätt sätt.\n\nAnna säkerställer att framgångar blir synliga för alla i organisationen. Hon skapar forum där bra resultat kan lyftas fram och firas, vilket förstärker de beteenden som leder framåt. Genom att göra framgång synlig och påtaglig bygger hon en kultur där alla vill vara en del av den positiva utvecklingen.",
        en: "For Anna, it is crucial that the change not only happens but also lasts over time. She understands that for change to become lasting, it must become a natural part of everyday life as quickly as possible. This means creating simple, smart workflows that people actually want to use - not complicated systems that just create frustration.\n\nWith her Småland efficiency thinking, Anna works systematically to automate what can be automated and delegate what can be delegated. She eliminates everything that disturbs and creates extra work without adding value. At the same time, she builds structures that make it easy for people to do the right things in the right way.\n\nAnna ensures that successes become visible to everyone in the organization. She creates forums where good results can be highlighted and celebrated, which reinforces the behaviors that lead forward. By making success visible and tangible, she builds a culture where everyone wants to be part of the positive development."
      },
      thinkAbout: {
        se: [
          "Skapa processer människor vill använda",
          "Automatisera rutinuppgifter",
          "Bygg in framgångsfirande"
        ],
        en: [
          "Create processes people want to use",
          "Automate routine tasks",
          "Build in success celebration"
        ]
      }
    },
    {
      id: 6,
      icon: "📈",
      title: { 
        se: "Säljorganisation som levererar", 
        en: "Sales Organization Excellence" 
      },
      description: { 
        se: "En stark säljorganisation är ofta nyckeln till bestående framgång. När säljteamet har självförtroende, tydliga processer och rätt verktyg blir försäljningen en naturlig del av organisationens tillväxtmotor.",
        en: "A strong sales organization is often the key to lasting success. When the sales team has confidence, clear processes and the right tools, sales becomes a natural part of the organization's growth engine."
      },
      expansion: {
        se: "Anna förstår att en effektiv säljorganisation inte bara handlar om individuella säljare utan om hela systemet som stöttar dem. Hon arbetar systematiskt för att bygga en säljkultur där alla förstår sin roll i försäljningsprocessen - från första intryck till långsiktig kundrelation. Med sin småländska praktiskhet fokuserar hon på att skapa enkla, tydliga processer som gör det lätt att sälja.\n\nGenom att kartlägga hela kundresan och identifiera var i processen som energi går förlorad eller där kunder hoppar av, skapar Anna strukturer som förstärker framgången. Hon bygger system för kunskapsdelning inom säljteamet så att bästa praxis sprids naturligt. Samtidigt säkerställer hon att säljorganisationen har rätt verktyg och den information de behöver för att vara trovärdiga och professionella i varje kundmöte.\n\nSlutresultatet är en säljorganisation som inte bara når sina mål utan som konsekvent överträffar dem. Anna skapar en miljö där säljarna känner sig stöttade och trygga, vilket leder till äkta entusiasm som kunderna känner av. När hela organisationen förstår hur de bidrar till försäljningsframgången blir det en naturlig del av företagskulturen att alla hjälper till att skapa värde för kunderna.",
        en: "Anna understands that an effective sales organization is not just about individual salespeople but about the entire system that supports them. She works systematically to build a sales culture where everyone understands their role in the sales process - from first impression to long-term customer relationship. With her Småland practicality, she focuses on creating simple, clear processes that make it easy to sell.\n\nBy mapping the entire customer journey and identifying where in the process energy is lost or where customers drop off, Anna creates structures that reinforce success. She builds systems for knowledge sharing within the sales team so that best practices spread naturally. At the same time, she ensures that the sales organization has the right tools and information they need to be credible and professional in every customer meeting.\n\nThe end result is a sales organization that not only reaches its goals but consistently exceeds them. Anna creates an environment where salespeople feel supported and secure, which leads to genuine enthusiasm that customers can sense. When the entire organization understands how they contribute to sales success, it becomes a natural part of the company culture for everyone to help create value for customers."
      },
      thinkAbout: {
        se: [
          "Kartlägg hela kundresan",
          "Bygg kunskapsdelningssystem",
          "Engagera hela organisationen"
        ],
        en: [
          "Map the entire customer journey",
          "Build knowledge sharing systems",
          "Engage the entire organization"
        ]
      }
    },
    {
      id: 7,
      icon: "🚀",
      title: { 
        se: "Låt organisationen flyga", 
        en: "Let the Organization Fly" 
      },
      description: { 
        se: "Nu gäller det att hålla i och förstärka: Här bygger vi vanor och förväntningar i vardagen och utmed vägen premierar vi rätt beteenden. Resultat: En ny kultur börjar ta form – i praktiken.",
        en: "Now it's about holding on and strengthening: Here we build habits and expectations in everyday life and along the way we reward the right behaviors. Result: A new culture begins to take shape - in practice."
      },
      expansion: {
        se: "I det sjunde och sista steget av Annas metod handlar det om att bygga ihop allt till en sammanhängande kultur som fungerar utan extern styrning. Hon arbetar systematiskt för att skapa vanor och förväntningar som blir en naturlig del av vardagen. Det handlar om att premirera rätt beteenden så konsekvent att de blir organisationens nya normaltillstånd.\n\nAnna förstår att verklig framgång kommer när organisationen kan driva sig själv framåt. Hon bygger ledarskap på alla nivåer så att den nya kulturen inte är beroende av enskilda personer. Med sin småländska långsiktighet fokuserar hon på att skapa strukturer och beteenden som står sig över tid, även när yttre förutsättningar förändras.\n\nSlutresultatet är en organisation som inte bara fungerar utan som kontinuerligt utvecklas och förbättras på egen hand. Anna har byggt en kultur där människor tar ansvar, driver utveckling och levererar resultat eftersom det känns naturligt och meningsfullt. Organisationen har fått både riktning och förmåga att navigera framtida utmaningar själv.",
        en: "In the seventh and final step of Anna's method, it's about building everything together into a cohesive culture that functions without external control. She works systematically to create habits and expectations that become a natural part of everyday life. It's about rewarding the right behaviors so consistently that they become the organization's new normal state.\n\nAnna understands that real success comes when the organization can drive itself forward. She builds leadership at all levels so that the new culture is not dependent on individual people. With her Småland long-term thinking, she focuses on creating structures and behaviors that stand the test of time, even when external conditions change.\n\nThe end result is an organization that not only functions but continuously develops and improves on its own. Anna has built a culture where people take responsibility, drive development and deliver results because it feels natural and meaningful. The organization has gained both direction and the ability to navigate future challenges independently."
      },
      thinkAbout: {
        se: [
          "Bygg ledarskap på alla nivåer",
          "Skapa system som förstärker beteenden",
          "Säkerställ fortsatt utveckling"
        ],
        en: [
          "Build leadership at all levels",
          "Create behavior-reinforcing systems",
          "Ensure continued development"
        ]
      }
    }
  ];

  return (
    <section id="method" className="bg-white py-20">
        {/* Header */}
      <div className="text-center mb-16 px-6">
        {/* Pre-header */}
        <p className="text-gray-500 font-sans text-sm uppercase tracking-wide mb-4">
          {currentLanguage === 'se' ? 'Från ord till handling' : "Let's get to work"}
        </p>
        
        <h2 className="heading-lg mb-6">
          {currentLanguage === 'se' ? 'Metoden för turnaround som funkar' : 'The Method for Turnaround that Works'}
        </h2>
        <p className="body-large max-w-4xl mx-auto text-gray-600">
          {currentLanguage === 'se' 
            ? 'En systematisk approach för hållbar organisationsförändring' 
            : 'A systematic approach for sustainable organizational transformation'
          }
          </p>
        </div>

      {/* Vertical Method Flow */}
      <div className="max-w-6xl mx-auto px-6">
        {methodologySteps.map((step, index) => {
          const isExpanded = expandedSteps.has(step.id);
          
          return (
            <div key={step.id} id={`step-${step.id}`} className="mb-12">
              {/* Step Container */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Icon (Circle) */}
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200">
                    <span className="text-2xl">{step.icon}</span>
            </div>
        </div>

                {/* Center: Main Content */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="heading-md text-gray-900">
                    {step.title[currentLanguage]}
          </h3>
                  <p className="body-text text-gray-700 leading-relaxed">
                    {step.description[currentLanguage]}
                  </p>

                  {/* Expand Button (only when collapsed) */}
                  {!isExpanded && (
                    <button
                      onClick={() => toggleExpanded(step.id)}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-sm"
                    >
                      <ChevronDown className="w-4 h-4" />
                      {currentLanguage === 'se' ? 'Läs mer' : 'Read more'}
                    </button>
                  )}

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-400 animate-in slide-in-from-top-2 duration-300">
                      <div className="text-sm text-gray-600 leading-relaxed space-y-4">
                        {step.expansion[currentLanguage].split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                      
                      {/* Close Button inside expanded content */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <button
                          onClick={() => toggleExpanded(step.id)}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-sm"
                        >
                          <ChevronUp className="w-4 h-4" />
                          {currentLanguage === 'se' ? 'Stäng' : 'Close'}
                        </button>
                      </div>
              </div>
                  )}
            </div>

                {/* Right: Think About Section */}
                <div className="lg:col-span-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3 text-sm uppercase tracking-wide">
                      {currentLanguage === 'se' ? 'Tänk på det:' : 'Think about:'}
                    </h4>
                    <ul className="space-y-2">
                      {step.thinkAbout[currentLanguage].map((point, pointIndex) => (
                        <li key={pointIndex} className="text-sm text-blue-800 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
              </div>
            </div>
              </div>

              {/* Clickable Arrow Down (except for last step) */}
              {index < methodologySteps.length - 1 && (
                <div className="flex justify-center my-8">
                  <button
                    onClick={() => scrollToStep(index + 1)}
                    className="group flex flex-col items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors duration-200"
                    title={currentLanguage === 'se' ? 'Gå till nästa steg' : 'Go to next step'}
                  >
                    <ChevronDown className="w-8 h-8 group-hover:transform group-hover:translate-y-1 transition-transform duration-200" />
                    <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {currentLanguage === 'se' ? 'Nästa steg' : 'Next step'}
                    </span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MethodSection;
