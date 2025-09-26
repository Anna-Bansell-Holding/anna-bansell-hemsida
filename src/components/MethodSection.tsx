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
      se: "Gä fröm rud fill handing",
      en: "From insight to action"
    },
    title: {
      se: "Metoden för turnaround som funkar",
      en: "The turnaround method that works"
    },
    description: {
      se: "Når förändringarna ända ner till de informella strukturerna? De flesta förändringar i företag sker genom att modifiera och styra.",
      en: "Do changes reach all the way down to the informal structures? Most changes in companies occur by modifying and controlling."
    }
  };

  const steps = [
    {
      id: 1,
      icon: imgWeywgy,
      title: { 
        se: "Höja blicken", 
        en: "Raise the perspective"
      },
      description: { 
        se: "Grunden för allt förändringsarbete är en tydlig riktning. Här formuleras en gemensam bild av vart vi ska. Tillsammans utforskar vi, tänker dynamiskt, skapar samsyn och mening för att slutligen identifiera nyckelfrågor och mål.",
        en: "The foundation for all change work is a clear direction. Here, a common vision of where we are going is formulated. Together we explore, think dynamically, create consensus and meaning to finally identify key issues and goals."
      },
      expandedContent: {
        se: "I denna fas arbetar vi intensivt med att skapa en gemensam förståelse för var organisationen befinner sig idag och vart den ska. Vi använder strukturerade workshops, djupintervjuer och analysverktyg för att identifiera nyckelfrågor och möjligheter. Målet är att alla ska förstå riktningen och känna sig delaktiga i den kommande förändringen.",
        en: "In this phase, we work intensively to create a common understanding of where the organization is today and where it should go. We use structured workshops, in-depth interviews and analysis tools to identify key issues and opportunities. The goal is for everyone to understand the direction and feel involved in the upcoming change."
      },
      tips: [
        {
          se: "Gång på gång har jag sett",
          en: "Time and again I have seen"
        },
        {
          se: "Har självförtroende och",
          en: "Have confidence and"
        },
        {
          se: "Förståelse för processerna",
          en: "Understanding of the processes"
        }
      ]
    },
    {
      id: 2,
      icon: imgAivXy7,
      title: { 
        se: "Lyssna in människorna", 
        en: "Listen to the people"
      },
      description: { 
        se: "För att förstå vad som krävs för att lyckas behöver vi förstå nuläget – på riktigt och det görs genom djupgående analys av både hårda och mjuka signaler (t.ex. energi, engagemang, mobbning), gemensam information och insikt. Vi tydliggör också roller och ansvar.",
        en: "To understand what is required to succeed, we need to understand the current situation – for real, and this is done through in-depth analysis of both hard and soft signals (e.g. energy, engagement, bullying), shared information and insight. We also clarify roles and responsibilities."
      },
      expandedContent: {
        se: "Lorem ipsum dolor sit amet consectetur. Rhoncus a a porttitor non. Volutpat enim consectetur fusce pellentesque justo. Venenatis pretium in nibh volutpat duis eget fermentum. Justo lobortis sit eu sed mauris urna. Id turpis libero sagittis egestas. Vestibulum blandit maecenas cras porta amet vitae congue. Lobortis diam eu dolor porttitor velit id consequat varius amet. Rhoncus a a porttitor non. Volutpat enim consectetur fusce pellentesque justo. Venenatis pretium in nibh volutpat duis eget fermentum. Justo lobortis sit eu sed mauris urna. Id turpis libero sagittis egestas. Vestibulum blandit maecenas cras porta amet vitae congue. Lobortis diam eu dolor porttitor velit id consequat varius amet.",
        en: "Lorem ipsum dolor sit amet consectetur. Rhoncus a a porttitor non. Volutpat enim consectetur fusce pellentesque justo. Venenatis pretium in nibh volutpat duis eget fermentum. Justo lobortis sit eu sed mauris urna. Id turpis libero sagittis egestas. Vestibulum blandit maecenas cras porta amet vitae congue. Lobortis diam eu dolor porttitor velit id consequat varius amet. Rhoncus a a porttitor non. Volutpat enim consectetur fusce pellentesque justo. Venenatis pretium in nibh volutpat duis eget fermentum. Justo lobortis sit eu sed mauris urna. Id turpis libero sagittis egestas. Vestibulum blandit maecenas cras porta amet vitae congue. Lobortis diam eu dolor porttitor velit id consequat varius amet."
      },
      tips: [
        {
          se: "Gång på gång har jag sett",
          en: "Time and again I have seen"
        },
        {
          se: "Har självförtroende och",
          en: "Have confidence and"
        },
        {
          se: "Förståelse för processerna",
          en: "Understanding of the processes"
        }
      ]
    },
    {
      id: 3,
      icon: imgGroup,
      title: { 
        se: "Forma en gemenskap",
        en: "Form a community"
      },
      description: { 
        se: "Här sker det strategiska skiftet: Vi identifierar tillväxtpotential och bromsklossar för att kunna behålla de som bär energi och potential. Samlar insikter för att kunna forma konkreta åtgärder.",
        en: "Here the strategic shift occurs: We identify growth potential and obstacles to be able to retain those who carry energy and potential. We gather insights to be able to form concrete measures."
      },
      expandedContent: {
        se: "Vi bygger en stark gemenskap genom att identifiera och stärka de informella nätverk som redan finns. Genom fokusgrupper och teambuilding-aktiviteter skapar vi sammanhållning och gemensamma värderingar. Vi arbetar systematiskt med att eliminera silos och bygga broar mellan olika delar av organisationen.",
        en: "We build a strong community by identifying and strengthening the informal networks that already exist. Through focus groups and team-building activities, we create cohesion and shared values. We work systematically to eliminate silos and build bridges between different parts of the organization."
      },
      tips: [
        {
          se: "Gång på gång har jag sett",
          en: "Time and again I have seen"
        },
        {
          se: "Har självförtroende och",
          en: "Have confidence and"
        },
        {
          se: "Förståelse för processerna",
          en: "Understanding of the processes"
        }
      ]
    },
    {
      id: 4,
      icon: imgZDi38M,
      title: { 
        se: "Snabba självklara förändringar",
        en: "Quick obvious changes"
      },
      description: { 
        se: "Förändring behöver bli synlig snabbt: Därför blir det både snabba och konkreta åtgärder och tydliga symbolhandlingar. Vi fokuserar på det som ger energi och vilja för att samtidigt kunna prioritera det som flyttar fram positionerna mot målet.",
        en: "Change needs to become visible quickly: Therefore there are both quick and concrete actions and clear symbolic acts. We focus on what gives energy and will to simultaneously prioritize what moves the positions toward the goal."
      },
      expandedContent: {
        se: "Vi implementerar snabba, synliga förändringar som skapar momentum och visar att organisationen verkligen är på väg någonstans. Detta kan inkludera allt från miljöförändringar till nya rutiner och ceremonier. Varje åtgärd är noggrant vald för att skicka rätt signaler och bygga förtroende för den större förändringen.",
        en: "We implement quick, visible changes that create momentum and show that the organization is really going somewhere. This can include everything from environmental changes to new routines and ceremonies. Each action is carefully chosen to send the right signals and build confidence in the larger change."
      },
      tips: [
        {
          se: "Gång på gång har jag sett",
          en: "Time and again I have seen"
        },
        {
          se: "Har självförtroende och",
          en: "Have confidence and"
        },
        {
          se: "Förståelse för processerna",
          en: "Understanding of the processes"
        }
      ]
    },
    {
      id: 5,
      icon: imgNGXbfO,
      title: { 
        se: "Gemensamma processer", 
        en: "Common processes"
      },
      description: {
        se: "För att förändring ska hålla måste den bli vardag så snabbt som möjligt: Därför skapar vi enkla, smarta arbetsflöden, automatiserar och delegerar, eliminerar det som stör. Sist men inte minst skapas forum för synlig framgång.",
        en: "For change to last, it must become everyday as quickly as possible: Therefore we create simple, smart workflows, automate and delegate, eliminate what disturbs. Last but not least, forums for visible success are created."
      },
      expandedContent: {
        se: "Vi utvecklar robusta processer och system som gör den nya arbetssättet naturligt och effektivt. Genom automation av rutinuppgifter och tydliga beslutsvägar minskar vi friktion och ökar produktiviteten. Vi etablerar regelbundna uppföljningar och framgångsmätningar som håller alla fokuserade på målen.",
        en: "We develop robust processes and systems that make the new way of working natural and efficient. Through automation of routine tasks and clear decision paths, we reduce friction and increase productivity. We establish regular follow-ups and success measurements that keep everyone focused on the goals."
      },
      tips: [
        {
          se: "Gång på gång har jag sett",
          en: "Time and again I have seen"
        },
        {
          se: "Har självförtroende och",
          en: "Have confidence and"
        },
        {
          se: "Förståelse för processerna",
          en: "Understanding of the processes"
        }
      ]
    },
    {
      id: 6,
      icon: imgGroup1,
      title: { 
        se: "Säljorganisation som levererar", 
        en: "Sales organization that delivers"
      },
      description: {
        se: "En stark säljorganisation är ofta nyckeln till bestående framgång. När säljteamet har självförtroende, tydliga processer och rätt verktyg blir försäljningen en naturlig del av organisationens tillväxtmotor.",
        en: "A strong sales organization is often the key to lasting success. When the sales team has confidence, clear processes and the right tools, sales becomes a natural part of the organization's growth engine."
      },
      expandedContent: {
        se: "Vi bygger upp säljorganisationen från grunden med fokus på kompetens, verktyg och motivation. Genom säljtränig, CRM-implementation och prestationsuppföljning skapar vi en säljkultur som levererar resultat. Vi arbetar också med att integrera säljprocessen med övriga affärsprocesser för maximal effektivitet.",
        en: "We build up the sales organization from the ground up with focus on competence, tools and motivation. Through sales training, CRM implementation and performance tracking, we create a sales culture that delivers results. We also work to integrate the sales process with other business processes for maximum efficiency."
      },
      tips: [
        {
          se: "Gång på gång har jag sett",
          en: "Time and again I have seen"
        },
        {
          se: "Har självförtroende och",
          en: "Have confidence and"
        },
        {
          se: "Förståelse för processerna",
          en: "Understanding of the processes"
        }
      ]
    },
    {
      id: 7,
      icon: imgRnpiwd,
      title: { 
        se: "Låt organisationen flyga", 
        en: "Let the organization fly"
      },
      description: {
        se: "Nu gäller det att hålla i och förstärka: Här bygger vi vanor och förväntningar i vardagen och utmed vägen premierar vi rätt beteenden. Resultat: En ny kultur börjar ta form – i praktiken.",
        en: "Now it's about holding on and strengthening: Here we build habits and expectations in everyday life and along the way we reward the right behaviors. Result: A new culture begins to take shape – in practice."
      },
      expandedContent: {
        se: "I den avslutande fasen fokuserar vi på att cementera förändringarna genom att bygga starka vanor och belöningssystem. Vi etablerar långsiktiga uppföljningsmekanismer och mentorskap som säkerställer att den nya kulturen blir bestående. Organisationen får nu verktyg att fortsätta utvecklas självständigt.",
        en: "In the final phase, we focus on cementing the changes by building strong habits and reward systems. We establish long-term follow-up mechanisms and mentorship that ensure the new culture becomes lasting. The organization now gets tools to continue developing independently."
      },
      tips: [
        {
          se: "Gång på gång har jag sett",
          en: "Time and again I have seen"
        },
        {
          se: "Har självförtroende och",
          en: "Have confidence and"
        },
        {
          se: "Förståelse för processerna",
          en: "Understanding of the processes"
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
            <div key={step.id} className="method-step">
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
                      {expandedStep === step.id ? 'Close' : 'Läs mer'}
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
                  <h4 className="method-tips-title">Tänk på att:</h4>
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