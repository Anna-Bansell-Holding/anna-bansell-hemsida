import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Local assets downloaded from Figma
const imgWeywgy = "/c8c7af74a960665d310bd09d720252662511472d.svg";
const imgWeuiArrowFilled = "/531cee49478c0c799476b4e3dedf6eac5af27f6b.svg";
const imgAivXy7 = "/1a4258bcb3d37aa4a139bd315a9a739b4eb3f956.svg";
const imgWeuiArrowFilled1 = "/3d932e494fde8cd04aabe273709cf23985692152.svg";
const imgGroup = "/ceb1fdc3627748a8016151858813ca8aa6adb5e2.svg";
const imgZDi38M = "/78d13a142ad267c4ce920520b84ab7e3c4e7b462.svg";
const imgNGXbfO = "/b8135b14ee9b1e96912c23da29542836b5d018f7.svg";
const imgGroup1 = "/3eb5825f98e078e351b49622befbf4ca5b3eb147.svg";
const imgRnpiwd = "/ba68d08cd6dcaed2eb90b63aad99cfbba99c96e8.svg";

const MethodSection = () => {
  const { currentLanguage } = useLanguage();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const content = {
    subtitle: {
      se: "Från ord till handling",
      en: "Let's get things done",
      hr: "Od riječi do djelovanja"
    },
    title: {
      se: "Metoden för turnaround som funkar",
      en: "The turnaround method that works",
      hr: "Metoda za poslovni preokret koja funkcionira"
    },
    description: {
      se: "En systematisk approach för hållbar organisationsförändring",
      en: "A systematic approach for sustainable organizational transformation",
      hr: "Sustavni pristup održivoj organizacijskoj transformaciji"
    },
    readMore: {
      se: "Läs mer",
      en: "Read more",
      hr: "Pročitaj više"
    },
    close: {
      se: "Stäng",
      en: "Close",
      hr: "Zatvori"
    },
    thinkAbout: {
      se: "Tänk på att:",
      en: "Think about:",
      hr: "Imajte na umu:"
    }
  };

  const steps = [
    {
      id: 1,
      anchor: "raise-the-gaze",
      icon: imgWeywgy,
      title: {
        se: "Höja blicken",
        en: "Raise the Gaze",
        hr: "Podignimo pogled"
      },
      description: {
        se: "Grunden för allt förändringsarbete är en tydlig riktning. Här formuleras en gemensam bild av vart vi ska. Tillsammans utforskar vi, tänker dynamiskt, skapar samsyn och mening för att slutligen identifiera nyckelfrågor och mål.",
        en: "The foundation for all change work is a clear direction. Here, a common vision of where we are going is formulated. Together we explore, think dynamically, create consensus and meaning to finally identify key issues and goals.",
        hr: "Temelj svake promjene je jasan smjer. Tu se oblikuje zajednička vizija kamo želimo stići. Zajedno istražujemo, razmišljamo dinamično, postižemo suglasje i izgrađujemo smisao i svrhu — kako bismo na kraju jasno definirali ključna pitanja i ciljeve."
      },
      expandedContent: {
        se: "I denna fas arbetar vi intensivt med att skapa en gemensam förståelse för var organisationen befinner sig idag och vart den ska. Vi använder strukturerade workshops, djupintervjuer och analysverktyg för att identifiera nyckelfrågor och möjligheter. Målet är att alla ska förstå riktningen och känna sig delaktiga i den kommande förändringen.",
        en: "In this phase, we work intensively to create a common understanding of where the organization is today and where it should go. We use structured workshops, in-depth interviews and analysis tools to identify key issues and opportunities. The goal is for everyone to understand the direction and feel involved in the upcoming change.",
        hr: "Prvi korak u svakom poslovnom preokretu je stvaranje jasnoće o tome kamo organizacija ide. Anna radi na formuliranju zajedničke vizije koju svi mogu razumjeti i u kojoj se mogu osjećati kao dio. Ovo se ne radi o apstraktnim vizijama već o konkretnim, ostvarivim ciljevima ukorijenjenima u stvarnosti. Sa svojim småländskim pragmatizmom, ona se fokusira na ono što je stvarno moguće postići, a ne na lijepe riječi bez supstance.\n\nKroz sustavno istraživanje potencijala organizacije, Anna identificira stvarne mogućnosti rasta. Koristi dinamički pristup gdje ona i tim razmišljaju u spiralama, a ne u krugovima - uvijek s napretkom kao ciljem. To znači odvažnost da se postave pitanja postojećih pretpostavki i otvore nove mogućnosti koje prije nisu bile vidljive.\n\nKrajnji rezultat ovog koraka je smjer koji stvara smisao i angažman u organizaciji. Anna osigurava da svi razumiju ne samo što treba učiniti, već zašto se to treba učiniti. Ukotavljanjem ciljeva i u poslovnoj logici i u motivaciji ljudi, stvara se snaga koja nosi organizaciju naprijed čak i kada dođu neuspjesi."
      },
      tips: [
        {
          se: "Håll målen konkreta och mätbara",
          en: "Keep goals concrete and measurable",
          hr: "Definirajte ciljeve konkretno i mjerljivo"
        },
        {
          se: "Förankra riktningen i verkligheten",
          en: "Anchor direction in reality",
          hr: "Utemeljite smjer na stvarnosti"
        },
        {
          se: "Skapa delaktighet i visionsarbetet",
          en: "Create participation in vision work",
          hr: "Uključite ljude u proces stvaranja vizije kako bi se stvorio osjećaj zajedničkog sudjelovanja"
        }
      ]
    },
    {
      id: 2,
      anchor: "listen-to-people",
      icon: imgAivXy7,
      title: {
        se: "Lyssna in människorna",
        en: "Listen to the people",
        hr: "Slušajte ljude"
      },
      description: {
        se: "För att förstå vad som krävs för att lyckas behöver vi förstå nuläget – på riktigt och det görs genom djupgående analys av både hårda och mjuka signaler (t.ex. energi, engagemang, mobbning), gemensam information och insikt. Vi tydliggör också roller och ansvar.",
        en: "To understand what is required to succeed, we need to understand the current situation – for real, and this is done through in-depth analysis of both hard and soft signals (e.g. energy, engagement, bullying), shared information and insight. We also clarify roles and responsibilities.",
        hr: "Da bismo razumjeli što je potrebno za uspjeh, moramo doista razumjeti trenutno stanje i to postižemo dubinskom analizom i \"tvrdih\" i \"mekih\" pokazatelja, kao i zajedničkih informacija i uvida. Također precizno definiramo uloge i područja odgovornosti."
      },
      expandedContent: {
        se: "Anna förstår att verklig förändring börjar med att förstå nuläget på riktigt, inte som man önskar att det vore. Hon gräver djupt i organisationen för att förstå både de hårda fakta och de mjuka signalerna som berättar sanningen om vad som faktiskt händer. Detta inkluderar allt från energinivåer och engagemang till dolda konflikter och informella maktstrukturer som kan bromsa eller driva utvecklingen.\n\nGenom systematisk analys kartlägger Anna hela organisationens tillstånd. Hon lyssnar inte bara på vad som sägs officiellt, utan förstår vad som händer i korridorerna, vid kaffemaskinen och i de informella nätverken. Med sin erfarenhet av småländsk rakt-på-sak-kommunikation skapar hon trygghet för människor att berätta sanningen, även när den är obehaglig.\n\nDetta djupa lyssnande resulterar i en komplett nulägesanalys som ger rätt grund för alla kommande förändringar. Anna tydliggör också roller och ansvar så att alla vet vad som förväntas av dem. Genom att skapa gemensam information och insikt bygger hon den transparens som krävs för att människor ska våga engagera sig i förändringsarbetet.",
        en: "Anna understands that real change begins with understanding the current situation for real, not as one wishes it were. She digs deep into the organization to understand both the hard facts and the soft signals that tell the truth about what is actually happening. This includes everything from energy levels and engagement to hidden conflicts and informal power structures that can slow down or drive development.\n\nThrough systematic analysis, Anna maps the entire organization's condition. She doesn't just listen to what is said officially, but understands what happens in the corridors, at the coffee machine, and in the informal networks. With her experience of Småland straight-talking communication, she creates safety for people to tell the truth, even when it's uncomfortable.\n\nThis deep listening results in a complete current state analysis that provides the right foundation for all upcoming changes. Anna also clarifies roles and responsibilities so everyone knows what is expected of them. By creating shared information and insight, she builds the transparency required for people to dare engage in the change work.",
        hr: "Anna razumije da prava promjena počinje razumijevanjem trenutne situacije kakva doista jest, a ne kako bismo željeli da bude. Ona duboko ulazi u organizaciju kako bi razumjela i tvrde činjenice i meke signale koji govore istinu o tome što se stvarno događa. To uključuje sve od razine energije i angažiranosti do skrivenih sukoba i neformalnih struktura moći koje mogu usporavati ili pokretati razvoj.\n\nSustavnom analizom Anna mapira cijelo stanje organizacije. Ne sluša samo ono što se kaže službeno, već razumije što se događa u hodnicima, kod aparata za kavu i u neformalnim mrežama. Svojim iskustvom smålandske iskrene komunikacije stvara sigurnost za ljude da kažu istinu, čak i kada je neugodna.\n\nOvo duboko slušanje rezultira potpunom analizom trenutnog stanja koja pruža pravu osnovu za sve buduće promjene. Anna također pojašnjava uloge i odgovornosti tako da svi znaju što se od njih očekuje. Stvaranjem zajedničkih informacija i uvida gradi transparentnost potrebnu da se ljudi usude uključiti u rad na promjenama."
      },
      tips: [
        {
          se: "Lyssna efter det som inte sägs",
          en: "Listen to what is not said",
          hr: "Slušajte i ono što nije izgovoreno"
        },
        {
          se: "Kartlägg informella maktstrukturer",
          en: "Map informal power structures",
          hr: "Mapirajte neformalne strukture moći"
        },
        {
          se: "Ge exakt samma information till alla",
          en: "Share the same picture to everyone",
          hr: "Dajte svima potpuno iste informacije"
        }
      ]
    },
    {
      id: 3,
      anchor: "quick-changes",
      icon: imgZDi38M,
      title: {
        se: "Snabba självklara förändringar",
        en: "Quick obvious changes",
        hr: "Brze i očite promjene"
      },
      description: {
        se: "Förändring behöver bli synlig snabbt: Därför blir det både snabba och konkreta åtgärder och tydliga symbolhandlingar. Vi fokuserar på det som ger energi och vilja för att samtidigt kunna prioritera det som flyttar fram positionerna mot målet.",
        en: "Change needs to become visible quickly: Therefore there are both quick and concrete actions and clear symbolic acts. We focus on what gives energy and will to simultaneously prioritize what moves the positions toward the goal.",
        hr: "Promjena mora brzo postati vidljiva: stoga poduzimamo i brze, konkretne mjere i jasne simbolične geste. Fokus stavljamo na ono što donosi energiju i volju kako bismo istodobno mogli prioritetno usmjeriti napore na ono što nas pomiče naprijed prema cilju."
      },
      expandedContent: {
        se: "Vi implementerar snabba, synliga förändringar som skapar momentum och visar att organisationen verkligen är på väg någonstans. Detta kan inkludera allt från miljöförändringar till nya rutiner och ceremonier. Varje åtgärd är noggrant vald för att skicka rätt signaler och bygga förtroende för den större förändringen.",
        en: "We implement quick, visible changes that create momentum and show that the organization is really going somewhere. This can include everything from environmental changes to new routines and ceremonies. Each action is carefully chosen to send the right signals and build confidence in the larger change.",
        hr: "Anna zna da promjena mora postati vidljiva brzo da bi ljudi vjerovali u nju. Identificira mjere koje daju najveći vidljivi efekt s najmanje moguće otpora - \"očite\" promjene koje svi stvarno znaju da treba napraviti, ali koje iz raznih razloga nisu implementirane. Ove brze pobjede grade momentum i pokazuju da je promjena stvarno moguća.\n\nOsim konkretnih mjera, Anna svjesno koristi simboličke radnje koje jasno komuniciraju da su nova vremena tu. To može biti sve od promjene strukture sastanaka do uklanjanja nepotrebnih procesa na koje su se svi ljutili. Svaka promjena je pažljivo odabrana tako da daje energiju i volju, a ne stvara strah ili otpor.\n\nFokusirajući se na ono što pomiče igle prema postavljenim ciljevima, Anna stvara pozitivnu spiralu. Ljudi vide da njihovi napori daju rezultate, što ih čini spremnima za veće promjene. Sa svojom smålandskom praktičnošću, uvijek prioritetno daje napore koji imaju stvarni efekt nad aktivnostima koje samo lijepo izgledaju na papiru."
      },
      tips: [
        {
          se: "Välj enkla förändringar med stor effekt",
          en: "Choose simple changes with big impact",
          hr: "Odaberite jednostavne promjene koje donose veliki učinak"
        },
        {
          se: "Fokusera på självklara förbättringar",
          en: "Focus on obvious improvements",
          hr: "Usredotočite se na očita poboljšanja"
        },
        {
          se: "Kommunicera framsteg tydligt",
          en: "Communicate progress clearly",
          hr: "Jasno komunicirajte ostvareni napredak"
        }
      ]
    },
    {
      id: 4,
      anchor: "form-community",
      icon: imgGroup,
      title: {
        se: "Forma en gemenskap",
        en: "Form a community",
        hr: "Stvorite zajednicu"
      },
      description: {
        se: "Här sker det strategiska skiftet: Vi identifierar tillväxtpotential och bromsklossar för att kunna behålla de som bär energi och potential. Samlar insikter för att kunna forma konkreta åtgärder.",
        en: "Here the strategic shift occurs: We identify growth potential and obstacles to be able to retain those who carry energy and potential. We gather insights to be able to form concrete measures.",
        hr: "Tu se događa strateška promjena: identificiramo potencijal rasta i prepreke kako bismo mogli zadržati one koji nose energiju i potencijal. Skupljamo uvide kako bismo mogli formirati konkretne mjere."
      },
      expandedContent: {
        se: "Vi bygger en stark gemenskap genom att identifiera och stärka de informella nätverk som redan finns. Genom fokusgrupper och teambuilding-aktiviteter skapar vi sammanhållning och gemensamma värderingar. Vi arbetar systematiskt med att eliminera silos och bygga broar mellan olika delar av organisationen.",
        en: "We build a strong community by identifying and strengthening the informal networks that already exist. Through focus groups and team-building activities, we create cohesion and shared values. We work systematically to eliminate silos and build bridges between different parts of the organization.",
        hr: "Ovo je korak u kojem Anna čini istinsku stratešku promjenu od razumijevanja problema prema izgradnji rješenja. Identificira koje osobe u organizaciji nose energiju i potencijal, te osigurava da ti ljudi dobiju prave uvjete za cvjetanje. Istovremeno se bavi čimbenicima koji koče organizaciju - to može biti sve od destruktivnih osoba do zastarjelih procesa.\n\nSa svojim dubokim razumijevanjem neformalnih struktura, Anna razumije da su to ljudi, a ne procesi, koji pokreću pravu promjenu. Sustavno radi na oslobađanju pozitivne energije u organizaciji dok se bavi silama koje usporavaju razvoj. To zahtijeva hrabrost za donošenje teških odluka.\n\nSkupljajući sve uvide iz prethodnih koraka, Anna oblikuje konkretne akcijske planove koji su i realistični i ambiciozni. Gradi timove i stvara strukture koje jačaju pozitivni razvoj. Rezultat je fokusiran plan za transformaciju u kojem su pravi ljudi na pravom mjestu za pokretanje organizacije naprijed."
      },
      tips: [
        {
          se: "Identifiera energibärare och bromsare",
          en: "Identify energy drivers and blockers",
          hr: "Identificirajte nositelje energije i one koji koče"
        },
        {
          se: "Våga fatta svåra personalbeslut",
          en: "Dare to make difficult people decisions",
          hr: "Imajte hrabrosti donijeti teške odluke o ljudima"
        },
        {
          se: "Bygg stöttande strukturer",
          en: "Build supporting structures",
          hr: "Izgradite podržavajuće strukture"
        }
      ]
    },
    {
      id: 5,
      anchor: "common-processes",
      icon: imgNGXbfO,
      title: {
        se: "Gemensamma processer",
        en: "Common processes",
        hr: "Uobičajeni procesi"
      },
      description: {
        se: "För att förändring ska hålla måste den bli vardag så snabbt som möjligt: Därför skapar vi enkla, smarta arbetsflöden, automatiserar och delegerar, eliminerar det som stör. Sist men inte minst skapas forum för synlig framgång.",
        en: "For change to last, it must become everyday as quickly as possible: Therefore we create simple, smart workflows, automate and delegate, eliminate what disturbs. Last but not least, forums for visible success are created.",
        hr: "Da bi promjena bila trajna, mora što brže postati svakodnevnica: stoga stvaramo jednostavne, pametne tijekove rada, automatiziramo i delegiramo, ukidamo ono što smeta. Konačno, stvaraju se i forumi za vidljiv uspjeh."
      },
      expandedContent: {
        se: "Vi utvecklar robusta processer och system som gör den nya arbetssättet naturligt och effektivt. Genom automation av rutinuppgifter och tydliga beslutsvägar minskar vi friktion och ökar produktiviteten. Vi etablerar regelbundna uppföljningar och framgångsmätningar som håller alla fokuserade på målen.",
        en: "We develop robust processes and systems that make the new way of working natural and efficient. Through automation of routine tasks and clear decision paths, we reduce friction and increase productivity. We establish regular follow-ups and success measurements that keep everyone focused on the goals.",
        hr: "Za Annu je ključno da se promjena ne samo dogodi već i da traje kroz vrijeme. Razumije da da bi promjena postala trajna, mora što brže postati prirodni dio svakodnevnog života. To znači stvaranje jednostavnih, pametnih tijekova rada koje ljudi stvarno žele koristiti - a ne kompliciranih sustava koji samo stvaraju frustraciju.\n\nSa svojim smålandskim načinom razmišljanja o efikasnosti, Anna sustavno radi na tome da automatizira ono što se može automatizirati i delegira ono što se može delegirati. Uklanja sve što smeta i stvara dodatni rad bez dodavanja vrijednosti. Istovremeno gradi strukture koje ljudima olakšavaju da čine prave stvari na pravi način.\n\nAnna osigurava da uspjesi postanu vidljivi svima u organizaciji. Stvara forume gdje se dobri rezultati mogu istaknuti i proslaviti, što jača ponašanja koja vode naprijed. Čineći uspjeh vidljivim i opipljivim, gradi kulturu u kojoj svi žele biti dio pozitivnog razvoja."
      },
      tips: [
        {
          se: "Skapa processer människor vill använda",
          en: "Create processes people want to use",
          hr: "Stvorite procese koje ljudi žele koristiti"
        },
        {
          se: "Automatisera rutinuppgifter",
          en: "Automate routine tasks",
          hr: "Automatizirajte rutinske zadatke"
        },
        {
          se: "Bygg in framgångsfirande",
          en: "Build in success celebration",
          hr: "Ugradite proslavu uspjeha"
        }
      ]
    },
    {
      id: 6,
      anchor: "sales-excellence",
      icon: imgGroup1,
      title: {
        se: "Säljorganisation som levererar",
        en: "Sales Organization Excellence",
        hr: "Izvrsnost prodajne organizacije"
      },
      description: {
        se: "En stark säljorganisation är ofta nyckeln till bestående framgång. När säljteamet har självförtroende, tydliga processer och rätt verktyg blir försäljningen en naturlig del av organisationens tillväxtmotor.",
        en: "A strong sales organization is often the key to lasting success. When the sales team has confidence, clear processes and the right tools, sales becomes a natural part of the organization's growth engine.",
        hr: "Snažna prodajna organizacija često je ključ trajnog uspjeha. Kada prodajni tim ima samopouzdanje, jasne procese i prave alate, prodaja postaje prirodni dio motora rasta organizacije."
      },
      expandedContent: {
        se: "Vi bygger upp säljorganisationen från grunden med fokus på kompetens, verktyg och motivation. Genom säljtränig, CRM-implementation och prestationsuppföljning skapar vi en säljkultur som levererar resultat. Vi arbetar också med att integrera säljprocessen med övriga affärsprocesser för maximal effektivitet.",
        en: "We build up the sales organization from the ground up with focus on competence, tools and motivation. Through sales training, CRM implementation and performance tracking, we create a sales culture that delivers results. We also work to integrate the sales process with other business processes for maximum efficiency.",
        hr: "Anna razumije da efikasna prodajna organizacija nije samo o individualnim prodavačima već o cijelom sustavu koji ih podržava. Sustavno radi na izgradnji prodajne kulture u kojoj svi razumiju svoju ulogu u prodajnom procesu - od prvog dojma do dugoročne korisničke veze. Sa svojom smålandskom praktičnošću, fokusira se na stvaranje jednostavnih, jasnih procesa koji olakšavaju prodaju.\n\nMapiranjem cijelog korisničkog putovanja i identificiranjem gdje se u procesu gubi energija ili gdje kupci odustaju, Anna stvara strukture koje jačaju uspjeh. Gradi sustave za dijeljenje znanja unutar prodajnog tima tako da se najbolje prakse prirodno šire. Istovremeno osigurava da prodajna organizacija ima prave alate i informacije potrebne da budu vjerodostojni i profesionalni u svakom korisničkom susretu.\n\nKonačni rezultat je prodajna organizacija koja ne samo da postiže svoje ciljeve već ih dosljedno nadmašuje. Anna stvara okruženje u kojem se prodavači osjećaju podržano i sigurno, što vodi do istinskog entuzijazma koji kupci osjećaju. Kada cijela organizacija razumije kako doprinosi prodajnom uspjehu, postaje prirodni dio korporativne kulture da svi pomažu u stvaranju vrijednosti za kupce."
      },
      tips: [
        {
          se: "Kartlägg hela kundresan",
          en: "Map the entire customer journey",
          hr: "Mapirajte cijelo korisničko putovanje"
        },
        {
          se: "Bygg kunskapsdelningssystem",
          en: "Build knowledge sharing systems",
          hr: "Izgradite sustave za dijeljenje znanja"
        },
        {
          se: "Engagera hela organisationen",
          en: "Engage the entire organization",
          hr: "Angažirajte cijelu organizaciju"
        }
      ]
    },
    {
      id: 7,
      anchor: "let-organization-fly",
      icon: imgRnpiwd,
      title: {
        se: "Låt organisationen flyga",
        en: "Let the organization fly",
        hr: "Pustite organizaciju da leti"
      },
      description: {
        se: "Nu gäller det att hålla i och förstärka: Här bygger vi vanor och förväntningar i vardagen och utmed vägen premierar vi rätt beteenden. Resultat: En ny kultur börjar ta form – i praktiken.",
        en: "Now it's about holding on and strengthening: Here we build habits and expectations in everyday life and along the way we reward the right behaviors. Result: A new culture begins to take shape – in practice.",
        hr: "Sada se radi o držanju i jačanju: ovdje gradimo navike i očekivanja u svakodnevnom životu i usput nagrađujemo prava ponašanja. Rezultat: nova kultura počinje se oblikovati – u praksi."
      },
      expandedContent: {
        se: "I den avslutande fasen fokuserar vi på att cementera förändringarna genom att bygga starka vanor och belöningssystem. Vi etablerar långsiktiga uppföljningsmekanismer och mentorskap som säkerställer att den nya kulturen blir bestående. Organisationen får nu verktyg att fortsätta utvecklas självständigt.",
        en: "In the final phase, we focus on cementing the changes by building strong habits and reward systems. We establish long-term follow-up mechanisms and mentorship that ensure the new culture becomes lasting. The organization now gets tools to continue developing independently.",
        hr: "U sedmom i posljednjem koraku Annine metode radi se o spajanju svega u koherentnu kulturu koja funkcionira bez vanjske kontrole. Sustavno radi na stvaranju navika i očekivanja koja postaju prirodni dio svakodnevnog života. Radi se o nagrađivanju pravih ponašanja tako dosljedno da postanu novo normalno stanje organizacije.\n\nAnna razumije da pravi uspjeh dolazi kada organizacija može sama sebe pokretati naprijed. Gradi vodstvo na svim razinama tako da nova kultura ne ovisi o pojedincima. Sa svojom smålandskom dugoročnošću, fokusira se na stvaranje struktura i ponašanja koja izdržavaju test vremena, čak i kada se vanjski uvjeti mijenjaju.\n\nKonačni rezultat je organizacija koja ne samo da funkcionira već se kontinuirano razvija i poboljšava sama od sebe. Anna je izgradila kulturu u kojoj ljudi preuzimaju odgovornost, pokreću razvoj i isporučuju rezultate jer im to djeluje prirodno i smisleno. Organizacija je dobila i smjer i sposobnost da samostalno navigira budućim izazovima."
      },
      tips: [
        {
          se: "Bygg ledarskap på alla nivåer",
          en: "Build leadership at all levels",
          hr: "Izgradite vodstvo na svim razinama"
        },
        {
          se: "Skapa system som förstärker beteenden",
          en: "Create behavior-reinforcing systems",
          hr: "Stvorite sustave koji jačaju ponašanja"
        },
        {
          se: "Säkerställ fortsatt utveckling",
          en: "Ensure continued development",
          hr: "Osigurajte kontinuiran razvoj"
        }
      ]
    }
  ];

  const toggleExpanded = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <section id="method" className="method-section">
      <div className="method-container">
        {/* Header */}
        <div className="method-header">
          <p className="method-subtitle">
            {content.subtitle[currentLanguage]}
          </p>
          <h2 className="method-title">
            {content.title[currentLanguage]}
          </h2>
          <p className="method-description">
            {content.description[currentLanguage]}
          </p>
        </div>

        {/* Method Steps */}
        <div className="method-steps">
          {steps.map((step, index) => (
            <div key={step.id} id={step.anchor} className="method-step">
              <div className="method-step-content">
                {/* Icon */}
                <div className="method-step-icon">
                  <img src={step.icon} alt={step.title[currentLanguage]} className="step-icon" />
                </div>

                {/* Main Content */}
                <div className="method-step-main">
                  <div className="method-step-header">
                    <h3 className="method-step-title">
                      {step.title[currentLanguage]}
                    </h3>
                  </div>
                  <p className="method-step-description">
                    {step.description[currentLanguage]}
                  </p>

                  {/* Expanded Content */}
                  {expandedStep === step.id && step.expandedContent && (
                    <div className="method-expanded-content">
                      <p className="method-expanded-text">
                        {step.expandedContent[currentLanguage]}
                      </p>
                    </div>
                  )}

                  {/* Action Link */}
                  <div className="method-step-action">
                    <button
                      onClick={() => toggleExpanded(step.id)}
                      className="method-action-link"
                    >
                      {expandedStep === step.id ? content.close[currentLanguage] : content.readMore[currentLanguage]}
                      <img
                        src={expandedStep === step.id ? imgWeuiArrowFilled1 : imgWeuiArrowFilled}
                        alt="Arrow"
                        className={`method-arrow ${expandedStep === step.id ? 'rotated-up' : 'rotated-down'}`}
                      />
                    </button>
                  </div>
                </div>

                {/* Tips Column */}
                <div className="method-step-tips">
                  <h4 className="method-tips-title">{content.thinkAbout[currentLanguage]}</h4>
                  <ul className="method-tips-list">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="method-tip-item">
                        {tip[currentLanguage]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;