
"use client"; 

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Phone } from "lucide-react";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface NavHeaderProps {
  onItemClick?: (item: string, href: string) => void;
}

function NavHeader({ onItemClick }: NavHeaderProps) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeSection, setActiveSection] = useState('home');
  const { currentLanguage, setLanguage } = useLanguage();

  const menuItems = [
    { 
      label: currentLanguage === 'se' ? "Hem" : "Home", 
      href: "#home", 
      id: "home",
      type: "navigation"
    },
    { 
      label: currentLanguage === 'se' ? "Turnarounds" : "Turnarounds", 
      href: "#vision", 
      id: "vision",
      type: "navigation"
    },
    { 
      label: currentLanguage === 'se' ? "Uppdrag" : "Projects", 
      href: "#cases", 
      id: "cases",
      type: "navigation"
    },
    { 
      label: currentLanguage === 'se' ? "Metod" : "Method", 
      href: "#method", 
      id: "method",
      type: "navigation"
    },
    { 
      label: currentLanguage.toUpperCase(), 
      href: "#", 
      id: "language",
      type: "language",
      icon: Globe
    },
    { 
      label: currentLanguage === 'se' ? "Kontakt" : "Contact", 
      href: "#contact", 
      id: "contact",
      type: "navigation",
      icon: Phone
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const { offsetTop } = element;
          // Activate section when it's just visible at the bottom of the screen
          if (scrollPosition + windowHeight >= offsetTop + 50) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (item: any) => {
    if (item.type === 'language') {
      // Toggle language
      const newLanguage = currentLanguage === 'se' ? 'en' : 'se';
      setLanguage(newLanguage);
    } else {
      // Regular navigation
      onItemClick?.(item.label, item.href);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <ul
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        {menuItems.map((item) => (
          <Tab 
            key={item.id}
            setPosition={setPosition}
            onClick={() => handleItemClick(item)}
            isActive={activeSection === item.id}
            icon={item.icon}
          >
            {item.label}
          </Tab>
        ))}

        <Cursor position={position} />
        <ActiveCursor activeSection={activeSection} menuItems={menuItems} />
      </ul>
    </div>
  );
}

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: Position | ((prev: Position) => Position)) => void;
  onClick?: () => void;
  isActive?: boolean;
  icon?: React.ComponentType<any>;
}

const Tab = ({ children, setPosition, onClick, isActive, icon: Icon }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={onClick}
      className="relative z-10 flex items-center gap-1 cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base transition-colors"
    >
      {Icon && <Icon size={16} className="md:w-4 md:h-4" />}
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

const ActiveCursor = ({ activeSection, menuItems }: { activeSection: string, menuItems: any[] }) => {
  const [activePosition, setActivePosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const activeItem = menuItems.find(item => item.id === activeSection);
    if (activeItem) {
      // Find the corresponding tab element
      const tabs = document.querySelectorAll('li');
      const activeTab = Array.from(tabs).find(tab => 
        tab.textContent?.trim() === activeItem.label
      );
      
      if (activeTab) {
        const { width } = activeTab.getBoundingClientRect();
        setActivePosition({
          left: activeTab.offsetLeft,
          width,
          opacity: 1,
        });
      }
    }
  }, [activeSection, menuItems]);

  return (
    <motion.li
      animate={{
        left: activePosition.left,
        width: activePosition.width,
        opacity: activePosition.opacity,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default NavHeader;
