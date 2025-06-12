
import React from "react";
import { Linkedin } from "lucide-react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Om mig",
    links: [
      { name: "Hem", href: "#home" },
      { name: "Turnarounds", href: "#vision" },
      { name: "Uppdrag", href: "#cases" },
      { name: "Metod", href: "#method" },
    ],
  },
  {
    title: "Tjänster",
    links: [
      { name: "Organisationsutveckling", href: "#" },
      { name: "Kulturell förändring", href: "#" },
      { name: "Turnaround-konsultation", href: "#" },
      { name: "Ledarskapsutveckling", href: "#" },
    ],
  },
  {
    title: "Erbjudanden",
    links: [
      { name: "Strategisk rådgivning", href: "#" },
      { name: "Workshops", href: "#" },
      { name: "Föreläsningar", href: "#" },
      { name: "Mentorskap", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { 
    icon: <Linkedin className="size-5" />, 
    href: "https://www.linkedin.com/in/annabansell", 
    label: "LinkedIn" 
  },
];

const defaultLegalLinks = [
  { name: "Integritetspolicy", href: "#" },
  { name: "Användarvillkor", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "#home",
    src: "",
    alt: "Anna Bansell logo",
    title: "Anna Bansell",
  },
  sections = defaultSections,
  description = "Genuin framgångskultur på småländska. Organisationskonsult specialiserad på turnarounds och kulturell förändring.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Anna Bansell. Alla rättigheter förbehållna.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-32 bg-warmBrown-50">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <h2 className="text-xl font-semibold text-primary">{logo.title}</h2>
              </a>
            </div>
            <p className="max-w-[70%] text-sm text-warmBrown-700">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-warmBrown-600">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary transition-colors">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-primary">{section.title}</h3>
                <ul className="space-y-3 text-sm text-warmBrown-700">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-warmBrown-200 py-8 text-xs font-medium text-warmBrown-600 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
