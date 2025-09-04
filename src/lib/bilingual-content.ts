export interface BilingualContent {
  se: string;
  en: string;
}

export interface SectionContent {
  title: BilingualContent;
  content: BilingualContent;
  cta?: BilingualContent;
}

export interface ValueItem {
  title: BilingualContent;
  description: BilingualContent;
}

export interface OutcomeItem {
  title: BilingualContent;
  description: BilingualContent;
}

export interface CaseItem {
  percentage: string;
  title: BilingualContent;
  description: BilingualContent;
}

export interface TestimonialItem {
  quote: BilingualContent;
  author: BilingualContent;
}

export interface ServiceItem {
  title: BilingualContent;
  description: BilingualContent;
}

export interface MethodStep {
  icon: string;
  title: BilingualContent;
  description: BilingualContent;
}

export interface FinalNoteItem {
  content: BilingualContent;
}

export interface SmalandMessage {
  title: BilingualContent;
  text: BilingualContent;
}

export interface WebsiteContent {
  hero: {
    headline: BilingualContent;
    subheading: BilingualContent;
    cta: BilingualContent;
  };
  navigation: {
    home: BilingualContent;
    turnarounds: BilingualContent;
    assignments: BilingualContent;
    method: BilingualContent;
    contact: BilingualContent;
  };
  vision: {
    title: BilingualContent;
    subtitle: BilingualContent;
    insight: BilingualContent;
    mainTitle: BilingualContent;
    keyTitle: BilingualContent;
    keyContent: BilingualContent;
    values: ValueItem[];
    outcomes: OutcomeItem[];
  };
  cases: {
    title: BilingualContent;
    subtitle: BilingualContent;
    content: BilingualContent;
    cases: CaseItem[];
    testimonials: TestimonialItem[];
  };
  services: {
    title: BilingualContent;
    content: BilingualContent;
    services: ServiceItem[];
    cta: BilingualContent;
  };
  method: {
    subtitle: BilingualContent;
    steps: MethodStep[];
    finalNote: {
      title: BilingualContent;
      items: FinalNoteItem[];
      result: BilingualContent;
    };
  };
  smaland: {
    title: BilingualContent;
    messages: SmalandMessage[];
  };
  contact: SectionContent;
}

export const websiteContent: WebsiteContent = {
  hero: {
    headline: {
      se: "Turnaround-expert för organisationer i kris",
      en: "Turnaround Expert for Organizations in Crisis"
    },
    subheading: {
      se: "Från Småländsk kvalitetstradition till internationell organisationsutveckling",
      en: "From Småland Quality Tradition to International Organizational Development"
    },
    cta: {
      se: "Diskutera ditt uppdrag",
      en: "Discuss Your Assignment"
    }
  },
  navigation: {
    home: {
      se: "Hem",
      en: "Home"
    },
    turnarounds: {
      se: "Turnarounds",
      en: "Turnarounds"
    },
    assignments: {
      se: "Uppdrag",
      en: "Assignments"
    },
    method: {
      se: "Metod",
      en: "Method"
    },
    contact: {
      se: "Kontakt",
      en: "Contact"
    }
  },
  vision: {
    title: {
      se: "Vår vision",
      en: "Our Vision"
    },
    subtitle: {
      se: "Min största insikt:",
      en: "My greatest insight:"
    },
    insight: {
      se: "Det går att vända en organisation!",
      en: "It's possible to turn around an organization!"
    },
    mainTitle: {
      se: "Vår vision",
      en: "Our Vision"
    },
    keyTitle: {
      se: "Nyckeln ligger i den informella strukturen",
      en: "The key lies in the informal structure"
    },
    keyContent: {
      se: "Når förändringarna ända ner till de informella strukturerna? De flesta förändringar i företag sker genom att modifiera och styra om i den formella strukturen. Risken är då att gamla mönster kvarstår och inga större förändringar sker. För att få en beständig förändring behövs modet att se de faktiska faktorer som bromsar organisationen och ger kraft åt de människor som tar företaget till en ny nivå.",
      en: "Do the changes reach all the way down to the informal structures? Most changes in companies happen by modifying and redirecting in the formal structure. The risk is that old patterns remain and no major changes occur. To achieve lasting change, we need the courage to see the actual factors that are holding back the organization and give power to the people who take the company to a new level."
    },
    values: [
      {
        title: {
          se: "Ärlighet & omtanke",
          en: "Honesty & Care"
        },
        description: {
          se: "Förtroendet inom gruppen stärks när alla känner och upplever att de behandlas lika.",
          en: "Trust within the group is strengthened when everyone feels and experiences that they are treated equally."
        }
      },
      {
        title: {
          se: "Handling istället för rädsla",
          en: "Action instead of fear"
        },
        description: {
          se: "När vi fattar beslut som är långsiktigt hållbara och genomför dem med kraft skapas förtroende och trygghet i organisationen.",
          en: "When we make decisions that are long-term sustainable and implement them with force, trust and security are created in the organization."
        }
      },
      {
        title: {
          se: "Värdera varje person",
          en: "Value every person"
        },
        description: {
          se: "Se bortom det uppenbara och se potentialen i varje person utifrån arbetsmiljö och individens egna drivkrafter.",
          en: "Look beyond the obvious and see the potential in every person based on the work environment and the individual's own driving forces."
        }
      },
      {
        title: {
          se: "Samma bild till alla",
          en: "Same picture to everyone"
        },
        description: {
          se: "När alla har tillgång till samma information samtidigt, kan vi bygga gemensamma värderingar och kraften kan frigöras för tillväxt.",
          en: "When everyone has access to the same information at the same time, we can build shared values and the power can be released for growth."
        }
      }
    ],
    outcomes: [
      {
        title: {
          se: "Överträffa försäljningsmål",
          en: "Exceed sales targets"
        },
        description: {
          se: "Gång på gång har jag sett när säljorganisationen har självförtroende och förståelse för processerna hur försäljningen utvecklas och stärks.",
          en: "Time and time again I have seen how when the sales organization has self-confidence and understanding of the processes, sales develops and strengthens."
        }
      },
      {
        title: {
          se: "Entusiastiska medarbetare",
          en: "Enthusiastic employees"
        },
        description: {
          se: "Med tydligt definierade spelregler blir det både roligt och enkelt att axla ett ansvar och utföra sitt uppdrag.",
          en: "With clearly defined rules of the game, it becomes both fun and easy to shoulder responsibility and carry out your assignment."
        }
      },
      {
        title: {
          se: "Värdefulla leveranser",
          en: "Valuable deliveries"
        },
        description: {
          se: "Med en effektiv organisation blir det större marginaler och nöjda kunder vilket leder till en positiv spiral.",
          en: "With an efficient organization, there are larger margins and satisfied customers, which leads to a positive spiral."
        }
      }
    ]
  },
  cases: {
    title: {
      se: "Våra uppdrag",
      en: "Our Assignments"
    },
    subtitle: {
      se: "Tre case där metoden skapat värde",
      en: "Three cases where the method created value"
    },
    content: {
      se: "Vi har framgångsrikt genomfört turnaround-projekt i olika branscher, från tillverkningsindustri till tjänstesektorn. Våra resultat talar för sig själva - ökad lönsamhet, förbättrad effektivitet och engagerade medarbetare.",
      en: "We have successfully completed turnaround projects across various industries, from manufacturing to service sectors. Our results speak for themselves - increased profitability, improved efficiency, and engaged employees."
    },
    cases: [
      {
        percentage: "90%",
        title: {
          se: "Ökad medarbetarengagemang",
          en: "Increased employee engagement"
        },
        description: {
          se: "Genom att implementera våra metoder för att stärka den informella strukturen uppnådde vi en dramatisk ökning av medarbetarnas engagemang och motivation.",
          en: "By implementing our methods to strengthen the informal structure, we achieved a dramatic increase in employee engagement and motivation."
        }
      },
      {
        percentage: "75%",
        title: {
          se: "Förbättrad försäljning",
          en: "Improved sales performance"
        },
          description: {
          se: "Våra processförbättringar och ledarskapsutveckling resulterade i en betydande ökning av försäljningsresultaten.",
          en: "Our process improvements and leadership development resulted in a significant increase in sales performance."
        }
      },
      {
        percentage: "85%",
        title: {
          se: "Effektivare processer",
          en: "More efficient processes"
        },
        description: {
          se: "Genom att identifiera och eliminera flaskhalsar i den informella strukturen skapade vi en mer effektiv och smidig organisation.",
          en: "By identifying and eliminating bottlenecks in the informal structure, we created a more efficient and agile organization."
        }
      }
    ],
    testimonials: [
      {
        quote: {
          se: "Anna's metod för att arbeta med den informella strukturen var avgörande för vår framgång. Vi såg resultat redan efter några veckor.",
          en: "Anna's method for working with the informal structure was crucial for our success. We saw results already after a few weeks."
        },
        author: {
          se: "Tidigare samarbetspartner",
          en: "Previous collaboration partner"
        }
      },
      {
        quote: {
          se: "Hon förstod verkligen vad som bromsade vår organisation och hjälpte oss att skapa en kultur där alla kan bidra till framgången.",
          en: "She really understood what was holding back our organization and helped us create a culture where everyone can contribute to success."
        },
        author: {
          se: "Tidigare samarbetspartner",
          en: "Previous collaboration partner"
        }
      }
    ]
  },
  services: {
    title: {
      se: "Hur kan jag hjälpa dig i din Turnaround",
      en: "How can I help you in your Turnaround"
    },
    content: {
      se: "Vi erbjuder omfattande konsulttjänster inom organisationsutveckling, inklusive ledarskapsutveckling, förändringsledning och strategisk planering. Vårt fokus ligger på att skapa hållbara förändringar som stärker organisationens framtida framgång.",
      en: "We offer comprehensive consulting services in organizational development, including leadership development, change management, and strategic planning. Our focus is on creating sustainable changes that strengthen the organization's future success."
    },
    services: [
      {
        title: {
          se: "Mentor",
          en: "Mentor"
        },
        description: {
          se: "Jag hjälper dig att utveckla ditt ledarskap och din förmåga att leda förändringar i din organisation. Genom regelbundna samtal och praktiska övningar får du verktyg för att hantera utmaningar och skapa hållbara resultat.",
          en: "I help you develop your leadership and your ability to lead change in your organization. Through regular conversations and practical exercises, you get tools to handle challenges and create sustainable results."
        }
      },
      {
        title: {
          se: "Interim",
          en: "Interim"
        },
        description: {
          se: "Jag kan ta över ledningsansvar under övergångsperioder eller kriser. Med min erfarenhet av turnaround-situationer kan jag snabbt stabilisera organisationen och implementera nödvändiga förändringar.",
          en: "I can take over leadership responsibility during transition periods or crises. With my experience in turnaround situations, I can quickly stabilize the organization and implement necessary changes."
        }
      },
      {
        title: {
          se: "Föreläsare",
          en: "Speaker"
        },
        description: {
          se: "Jag håller inspirerande föreläsningar om organisationsutveckling, ledarskap och hur man skapar en kultur av förändring. Mina presentationer bygger på verkliga erfarenheter och praktiska exempel.",
          en: "I give inspiring lectures on organizational development, leadership and how to create a culture of change. My presentations are based on real experiences and practical examples."
        }
      }
    ],
    cta: {
      se: "Kontakta mig",
      en: "Contact me"
    }
  },
  method: {
    subtitle: {
      se: "Metoden för turnaround som funkar",
      en: "The turnaround method that works"
    },
    steps: [
      {
        icon: "👁️",
        title: {
          se: "Höja blicken",
          en: "Raise your gaze"
        },
        description: {
          se: "Grunden för allt förändringsarbete är en tydlig riktning. Här formuleras en gemensam bild av vart vi ska. Tillsammans utforskar vi, tänker dynamiskt, skapar samsyn och mening för att slutligen identifiera nyckelfrågor och mål.",
          en: "The foundation for all change work is a clear direction. Here we formulate a shared vision of where we're going. Together we explore, think dynamically, create consensus and meaning to finally identify key issues and goals."
        }
      },
      {
        icon: "👂",
        title: {
          se: "Lyssna in människorna",
          en: "Listen to the people"
        },
        description: {
          se: "För att förstå vad som krävs för att lyckas behöver vi förstå nuläget – på riktigt och det görs genom djupgående analys av både hårda och mjuka signaler (t.ex. energi, engagemang, mobbning), gemensam information och insikt. Vi tydliggör också roller och ansvar.",
          en: "To understand what's needed to succeed, we need to understand the current situation – really, and this is done through in-depth analysis of both hard and soft signals (e.g., energy, engagement, bullying), shared information and insights. We also clarify roles and responsibilities."
        }
      },
      {
        icon: "⚡",
        title: {
          se: "Snabba självklara förändringar",
          en: "Quick obvious changes"
        },
        description: {
          se: "Förändring behöver bli synlig snabbt: Därför blir det både snabba och konkreta åtgärder och tydliga symbolhandlingar. Vi fokuserar på det som ger energi och vilja för att samtidigt kunna prioritera det som flyttar fram positionerna mot målet.",
          en: "Change needs to become visible quickly: Therefore, we implement both quick and concrete measures and clear symbolic actions. We focus on what gives energy and will to simultaneously prioritize what moves the positions forward toward the goal."
        }
      },
      {
        icon: "🤝",
        title: {
          se: "Forma en gemenskap",
          en: "Shape a community"
        },
        description: {
          se: "Här sker det strategiska skiftet: Vi identifierar tillväxtpotential och bromsklossar för att kunna behålla de som bär energi och potential. Samlar insikter för att kunna forma konkreta åtgärder.",
          en: "This is where the strategic shift happens: We identify growth potential and obstacles to be able to retain those who carry energy and potential. We gather insights to be able to shape concrete measures."
        }
      },
      {
        icon: "⚙️",
        title: {
          se: "Gemensamma processer",
          en: "Shared processes"
        },
        description: {
          se: "För att förändring ska hålla måste den bli vardag så snabbt som möjligt: Därför skapar vi enkla, smarta arbetsflöden, automatiserar och delegerar, eliminerar det som stör. Sist men inte minst skapas forum för synlig framgång.",
          en: "For change to last, it must become everyday life as quickly as possible: Therefore, we create simple, smart workflows, automate and delegate, eliminate what disturbs. Last but not least, we create forums for visible success."
        }
      },
      {
        icon: "🚀",
        title: {
          se: "Låt organisationen flyga",
          en: "Let the organization fly"
        },
        description: {
          se: "Nu gäller det att hålla i och förstärka: Här bygger vi vanor och förväntningar i vardagen och utmed vägen premierar vi rätt beteenden. Resultat: En ny kultur börjar ta form – i praktiken.",
          en: "Now it's about holding on and strengthening: Here we build habits and expectations in everyday life and along the way we reward the right behaviors. Result: A new culture begins to take shape – in practice."
        }
      }
    ],
    finalNote: {
      title: {
        se: "När förändringen är på plats är det dags att släppa taget:",
        en: "When the change is in place, it's time to let go:"
      },
      items: [
        {
          content: {
            se: "Lämna över ansvaret till organisationen",
            en: "Hand over responsibility to the organization"
          }
        },
        {
          content: {
            se: "Säkerställa att det nya fungerar utan extern kraft",
            en: "Ensure that the new works without external force"
          }
        },
        {
          content: {
            se: "Resultat: Självdrivande organisation med förnyad riktning och förmåga.",
            en: "Result: Self-driving organization with renewed direction and capability."
          }
        }
      ],
      result: {
        se: "Resultat: Självdrivande organisation med förnyad riktning och förmåga.",
        en: "Result: Self-driving organization with renewed direction and capability."
      }
    }
  },
  smaland: {
    title: {
      se: "Småland?",
      en: "Småland?"
    },
    messages: [
      {
        title: {
          se: "Ihärdighet & Disciplin",
          en: "Perseverance & Discipline"
        },
        text: {
          se: "Smålänningarna har förstått att framgång nås bäst genom ihärdighet, idogt arbete och disciplin. Vårda tid och resurser är en stabil bas för att få bästa möjliga utfall.",
          en: "The people of Småland have understood that success is best achieved through perseverance, diligent work and discipline. Valuing time and resources is a stable foundation for achieving the best possible outcomes."
        }
      },
      {
        title: {
          se: "Enkelhet & Effektivitet",
          en: "Simplicity & Efficiency"
        },
        text: {
          se: "I Småland värdesätts enkla lösningar som fungerar. Ingen onödig krångel - bara rak kommunikation och praktiska metoder som ger resultat.",
          en: "In Småland, simple solutions that work are valued. No unnecessary complications - just straightforward communication and practical methods that deliver results."
        }
      },
      {
        title: {
          se: "Långsiktigt Tänkande",
          en: "Long-term Thinking"
        },
        text: {
          se: "Småländsk affärsfilosofi bygger på hållbara relationer och långsiktiga investeringar. Det handlar om att bygga något som står sig över tid.",
          en: "Småland business philosophy is built on sustainable relationships and long-term investments. It's about building something that stands the test of time."
        }
      }
    ]
  },
  contact: {
    title: {
      se: "Kontakta oss",
      en: "Contact Us"
    },
    content: {
      se: "Redo att diskutera ditt uppdrag? Vi finns här för att hjälpa dig. Kontakta oss för en kostnadsfri konsultation och låt oss tillsammans skapa en plan för din organisations framtid.",
      en: "Ready to discuss your assignment? We're here to help. Contact us for a free consultation and let's create a plan for your organization's future together."
    },
    cta: {
      se: "Skicka meddelande",
      en: "Send Message"
    }
  }
};
