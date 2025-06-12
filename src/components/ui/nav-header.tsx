
"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

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

  const menuItems = [
    { label: "Hem", href: "#home" },
    { label: "Turnarounds", href: "#vision" },
    { label: "Småland", href: "#smaland" },
    { label: "Uppdrag", href: "#cases" },
    { label: "Metod", href: "#method" }
  ];

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {menuItems.map((item) => (
        <Tab 
          key={item.label}
          setPosition={setPosition}
          onClick={() => onItemClick?.(item.label, item.href)}
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: Position | ((prev: Position) => Position)) => void;
  onClick?: () => void;
}

const Tab = ({ children, setPosition, onClick }: TabProps) => {
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default NavHeader;
