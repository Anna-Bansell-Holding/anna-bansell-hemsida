import React from 'react';
import { scrollToSection } from '@/lib/utils';

interface AnchorLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const AnchorLink: React.FC<AnchorLinkProps> = ({ 
  href, 
  children, 
  className, 
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Extract section ID from href (remove # if present)
    const sectionId = href.startsWith('#') ? href.slice(1) : href;
    // Call the scroll function
    scrollToSection(sectionId);
    
    // Call any additional onClick handler
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
