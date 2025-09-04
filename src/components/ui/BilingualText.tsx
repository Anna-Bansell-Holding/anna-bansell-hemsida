import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BilingualContent } from '../../lib/bilingual-content';

interface BilingualTextProps {
  content: BilingualContent;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const BilingualText: React.FC<BilingualTextProps> = ({
  content,
  className,
  tag: Tag = 'p'
}) => {
  const { currentLanguage } = useLanguage();
  
  return (
    <Tag className={className}>
      {content[currentLanguage]}
    </Tag>
  );
};

export default BilingualText;

