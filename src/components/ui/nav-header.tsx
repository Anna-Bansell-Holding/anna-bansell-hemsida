
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  const menuItems = [
    { 
      label: currentLanguage === 'se' ? "Hem" : "Home", 
      href: "#home", 
      id: "home",
      type: "navigation"
    },
    { 
      label: currentLanguage === 'se' ? "Omvandlingar" : "Turnarounds", 
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
      label: currentLanguage === 'se' ? "Kontakt" : "Contact", 
      href: "#contact", 
      id: "contact",
      type: "navigation",
      icon: Phone
    },
    { 
      label: currentLanguage === 'se' ? 'Svenska' : 'English', 
      href: "#", 
      id: "language",
      type: "language",
      icon: Globe
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

  // Recalculate cursor position when menu items change (language switching)
  useEffect(() => {
    // Reset cursor position to prevent misalignment
    setPosition({
      left: 0,
      width: 0,
      opacity: 0,
    });
    
    // Small delay to allow DOM to update after language change
    const timeout = setTimeout(() => {
      // Force recalculation of all tab positions
      const tabs = document.querySelectorAll('[data-tab]');
      tabs.forEach((tab, index) => {
        const element = tab as HTMLElement;
        if (element.offsetParent) {
          // Update internal positions for accurate tracking
          element.style.transform = 'translateZ(0)'; // Force reflow
        }
      });
    }, 50);
    
    return () => clearTimeout(timeout);
  }, [currentLanguage]);

  const handleItemClick = (item: any) => {
    if (item.type === 'language') {
      // Start transition
      setIsTransitioning(true);
      
      // Keep hover cursor visible briefly during transition
      setTimeout(() => {
        setIsTransitioning(false);
        // Fade out cursor smoothly after transition
        setTimeout(() => {
          setPosition(prev => ({ ...prev, opacity: 0 }));
        }, 150);
      }, 300);
      
      // Toggle language with slight delay for smooth visual transition
      setTimeout(() => {
        const newLanguage = currentLanguage === 'se' ? 'en' : 'se';
        setLanguage(newLanguage);
      }, 100);
    } else {
      // Regular navigation
      onItemClick?.(item.label, item.href);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <ul
        className="relative flex gap-1 w-fit rounded-full border-2 border-black bg-white p-1"
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
      data-tab
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
      className="relative z-10 flex items-center justify-center gap-1 cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base transition-all duration-300 ease-in-out"
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
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 35,
        duration: 0.4
      }}
      className="absolute z-0 h-7 rounded-full bg-gray-100 border border-gray-200 md:h-12"
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
      // Small delay to ensure DOM is updated after language changes
      const timeout = setTimeout(() => {
        // Find the corresponding tab element with data-tab attribute
        const tabs = document.querySelectorAll('[data-tab]');
        const activeTab = Array.from(tabs).find(tab => {
          const tabContent = tab.textContent?.trim();
          // For language items, match the uppercase language code
          if (activeItem.type === 'language') {
            return tabContent === activeItem.label;
          }
          // For navigation items, match the label text
          return tabContent === activeItem.label;
        });
        
        if (activeTab) {
          const { width } = activeTab.getBoundingClientRect();
          setActivePosition({
            left: (activeTab as HTMLElement).offsetLeft,
            width,
            opacity: 1,
          });
        }
      }, 10);
      
      return () => clearTimeout(timeout);
    }
  }, [activeSection, menuItems]);

  return (
    <motion.li
      animate={{
        left: activePosition.left,
        width: activePosition.width,
        opacity: activePosition.opacity,
      }}
      className="absolute z-0 h-7 rounded-full bg-black shadow-sm md:h-12"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default NavHeader;
