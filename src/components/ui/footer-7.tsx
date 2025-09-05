
import React from "react";
import { Linkedin } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

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

const getDefaultSections = (currentLanguage: 'se' | 'en') => [
  {
    title: currentLanguage === 'se' ? "Om mig" : "About me",
    links: [
      { name: currentLanguage === 'se' ? "Hem" : "Home", href: "#home" },
      { name: "Helomvandlingar", href: "#vision" },
      { name: currentLanguage === 'se' ? "Uppdrag" : "Projects", href: "#cases" },
      { name: currentLanguage === 'se' ? "Metod" : "Method", href: "#method" },
    ],
  },
  {
    title: currentLanguage === 'se' ? "Tjänster" : "Services",
    links: [
      { name: currentLanguage === 'se' ? "Organisationsutveckling" : "Organizational Development", href: "#" },
      { name: currentLanguage === 'se' ? "Kulturell förändring" : "Cultural Change", href: "#" },
      { name: currentLanguage === 'se' ? "Helomvandlings-konsultation" : "Turnaround Consultation", href: "#" },
      { name: currentLanguage === 'se' ? "Ledarskapsutveckling" : "Leadership Development", href: "#" },
    ],
  },
  {
    title: currentLanguage === 'se' ? "Erbjudanden" : "Offerings",
    links: [
      { name: currentLanguage === 'se' ? "Strategisk rådgivning" : "Strategic Advisory", href: "#" },
      { name: "Workshops", href: "#" },
      { name: currentLanguage === 'se' ? "Föreläsningar" : "Speaking", href: "#" },
      { name: currentLanguage === 'se' ? "Mentorskap" : "Mentorship", href: "#" },
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

const getDefaultLegalLinks = (currentLanguage: 'se' | 'en') => [
  { name: currentLanguage === 'se' ? "Integritetspolicy" : "Privacy Policy", href: "#" },
  { name: currentLanguage === 'se' ? "Användarvillkor" : "Terms of Service", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "#home",
    src: "",
    alt: "Anna Bansell logo",
    title: "Anna Bansell",
  },
  sections,
  description,
  socialLinks = defaultSocialLinks,
  copyright,
  legalLinks,
}: Footer7Props) => {
  const { currentLanguage } = useLanguage();
  
  const content = {
    description: {
      se: "Genuin framgångskultur på småländska. Organisationskonsult specialiserad på helomvandlingar och kulturell förändring.",
      en: "Genuine success culture the Småland way. Organizational consultant specialized in turnarounds and cultural change."
    },
    copyright: {
      se: "© 2024 Anna Bansell. Alla rättigheter förbehållna.",
      en: "© 2024 Anna Bansell. All rights reserved."
    }
  };
  
  const finalSections = sections || getDefaultSections(currentLanguage);
  const finalDescription = description || content.description[currentLanguage];
  const finalCopyright = copyright || content.copyright[currentLanguage];
  const finalLegalLinks = legalLinks || getDefaultLegalLinks(currentLanguage);
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <h2 className="text-xl font-semibold text-gray-900">{logo.title}</h2>
              </a>
            </div>
            <p className="max-w-[70%] text-sm text-gray-600">
              {finalDescription}
            </p>
            <ul className="flex items-center space-x-6 text-gray-500">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-blue-600 transition-colors">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {finalSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-gray-900">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-blue-600 transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-200 py-8 text-xs font-medium text-gray-500 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{finalCopyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {finalLegalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-blue-600 transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
