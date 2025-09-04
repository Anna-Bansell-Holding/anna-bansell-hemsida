# E01-S02-Bilingual-Content-Infrastructure

**Epic**: E01-Bilingual-Foundation  
**Priority**: High

## User Story

**As a** website visitor  
**I want** all content to be available in both Swedish and English  
**So that** I can fully understand Anna's services regardless of my language preference

## Business Value

Establish comprehensive bilingual content management enabling international market expansion while maintaining professional presentation standards. Creates scalable foundation for future content updates and demonstrates international business readiness.

## Acceptance Criteria

### Global Content Structure
- [ ] All sections support bilingual content switching
- [ ] Consistent content structure across languages
- [ ] No placeholder "Lorem ipsum" text remaining
- [ ] Professional content quality in both languages
- [ ] Language switching applies globally across all sections

### Section-Specific Implementation

#### Hero Section
- [ ] Professional headline in Swedish and English
- [ ] Value proposition translated appropriately  
- [ ] Call-to-action buttons bilingual
- [ ] Subheading and descriptive text translated

#### Navigation Menu
- [ ] "Hem" / "Home"
- [ ] "Turnarounds" (same in both languages)
- [ ] "Uppdrag" / "Assignments"
- [ ] "Metod" / "Method"
- [ ] "Kontakt" / "Contact"

#### Vision/Turnaround Section
- [ ] Småland heritage content in both languages
- [ ] Turnaround philosophy translated professionally
- [ ] Regional context maintained in translation
- [ ] Professional credibility messaging

#### Cases Section
- [ ] Professional case study summaries in both languages
- [ ] Industry-specific terminology correctly translated
- [ ] Results and outcomes clearly communicated
- [ ] Client confidentiality maintained across languages

#### Services Section
- [ ] Clear service descriptions replacing placeholder content
- [ ] Professional service categorization
- [ ] Benefit-focused messaging in both languages
- [ ] Call-to-action optimization

#### Contact Section
- [ ] Bilingual contact labels and content
- [ ] Professional inquiry messaging
- [ ] Contact method descriptions translated
- [ ] Geographic and availability information

## Content Specifications

### Professional Content Requirements

#### Hero Section Content
**Swedish**:
- **Headline**: "Turnaround-expert för organisationer i kris"
- **Subheading**: "Från Småländsk kvalitetstradition till internationell organisationsutveckling"
- **CTA**: "Diskutera ditt uppdrag"

**English**:
- **Headline**: "Turnaround Expert for Organizations in Crisis"  
- **Subheading**: "From Småland Quality Tradition to International Organizational Development"
- **CTA**: "Discuss Your Assignment"

#### Services Section Professional Content
Replace current placeholder text with professional service descriptions covering:
- Organizational turnaround consulting
- Leadership development programs  
- Change management implementation
- Strategic planning facilitation

### Translation Quality Standards
- Professional business terminology
- Cultural context appropriate for international audience
- Maintained regional Småland identity in both languages
- Consistent voice and tone across languages

## Technical Implementation

### Content Management Structure
```typescript
interface BilingualContent {
  se: string;
  en: string;
}

interface SectionContent {
  title: BilingualContent;
  content: BilingualContent;
  cta?: BilingualContent;
}

interface WebsiteContent {
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
  vision: SectionContent;
  cases: SectionContent;
  services: SectionContent;
  contact: SectionContent;
}
```

### Component Architecture
```typescript
interface BilingualTextProps {
  content: BilingualContent;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
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

// Usage example
<BilingualText 
  content={websiteContent.hero.headline} 
  tag="h1" 
  className="text-4xl font-bold"
/>
```

### Content Loading Strategy
- **Static Content**: Pre-loaded content structure for instant switching
- **Dynamic Loading**: Lazy loading for large content sections if needed
- **Caching Strategy**: Efficient content delivery with minimal performance impact
- **Error Handling**: Graceful fallbacks for missing translations

## Definition of Done

- [ ] All sections implemented with bilingual content
- [ ] No placeholder content remaining anywhere
- [ ] Professional content quality approved
- [ ] Language switching functional across all sections
- [ ] Content review and approval by Anna Bansell
- [ ] Translation quality assessment completed
- [ ] Cross-browser testing verified
- [ ] Mobile responsive design confirmed
- [ ] Accessibility compliance validated

## Dependencies

**Depends On**: E01-S01-Language-Selector-Component  
**Blocks**: All subsequent epics requiring bilingual content

## Content Creation Tasks

### Research and Development
- [ ] Analyze target audience for both Swedish and English markets
- [ ] Research industry terminology in both languages
- [ ] Develop brand voice guidelines for bilingual content
- [ ] Create content templates for consistency

### Content Writing
- [ ] Hero section professional messaging
- [ ] Services section detailed descriptions
- [ ] Case studies compelling summaries
- [ ] Contact section clear messaging
- [ ] Navigation and UI element translations

### Quality Assurance
- [ ] Professional proofreading in both languages
- [ ] Cultural appropriateness review
- [ ] Business terminology accuracy verification
- [ ] Brand consistency assessment

## Testing Strategy

### Language Switching Testing
1. **Instant Switching**: Verify no page reload required
2. **Content Completeness**: Confirm all sections switch properly
3. **Visual Layout**: Ensure consistent formatting across languages
4. **Performance**: Validate switching speed and responsiveness

### Content Quality Testing
1. **Professional Presentation**: Content establishes credibility
2. **Message Clarity**: Value proposition clear in both languages
3. **Call-to-Action Effectiveness**: CTAs compelling and actionable
4. **Cultural Sensitivity**: Content appropriate for target markets

### Technical Integration Testing
1. **Component Integration**: All components support bilingual content
2. **State Management**: Language preference maintained correctly
3. **Error Handling**: Graceful fallbacks for missing translations
4. **Performance Impact**: No significant performance degradation

## Performance Considerations

### Optimization Targets
- Content switching under 50ms for optimal user experience
- Minimal bundle size increase with bilingual content
- Efficient memory usage for content storage
- Fast initial page load with all content available

### Implementation Optimizations
```typescript
// Efficient content structure
const content = useMemo(() => ({
  hero: {
    headline: { se: "Swedish headline", en: "English headline" },
    subheading: { se: "Swedish sub", en: "English sub" }
  }
}), []);

// Optimized component rendering
const BilingualSection = memo(({ content }: { content: SectionContent }) => {
  const { currentLanguage } = useLanguage();
  return <div>{content[currentLanguage]}</div>;
});
```

## Story Development Record

### Implementation Status
**Status**: Task Performed - Awaiting Client Acceptance Testing

### Work Completed
- ✅ Vision Section: Complete bilingual implementation with Småland philosophy content
- ✅ Services Section: Professional bilingual service descriptions with benefits  
- ✅ Cases Section: Bilingual case studies with client testimonials
- ✅ Contact Section: Bilingual footer with navigation and legal links
- ✅ Navigation Menu: Complete bilingual labels (Svenska/English)

### Technical Implementation
- ✅ Language Context Integration: All sections use `useLanguage()` hook
- ✅ Professional Content: Replaced all placeholder text with professional descriptions
- ✅ Bilingual Structure: Consistent `{ se: "text", en: "text" }` pattern throughout
- ✅ Session Persistence: Language preference maintained across navigation

### File List
- `src/components/VisionSection.tsx` - Enhanced with complete bilingual support
- `src/components/ServicesSection.tsx` - Enhanced with professional bilingual content
- `src/components/CasesSection.tsx` - Enhanced with bilingual testimonials
- `src/components/StructuresSection.tsx` - Enhanced with bilingual formal/informal structures content
- `src/components/SmalandSection.tsx` - Enhanced with bilingual Småland philosophy content
- `src/components/ui/footer-7.tsx` - Enhanced with bilingual footer content
- `src/index.css` - Fixed CSS import order for production build
- `index.html` - Fixed yellow background flash during page load

### Review Requirements
- ✅ CSS import order issue resolved
- ✅ All sections support instant language switching
- ✅ Professional content quality in both languages
- ✅ No placeholder content remaining
- ✅ Preview server available for testing

### Client Feedback Resolution
- ✅ Småland section: Complete bilingual support added
- ✅ Typography: Google Fonts import order fixed, professional fonts restored, explicit font-family declarations
- ✅ Vision section: English content verified and working
- ✅ Services section: Removed unnecessary hover effects from non-clickable cards
- ✅ Loading flash: Fixed yellow background flash during page load
- ✅ Structures section: Added bilingual support for formal/informal structures content
- ✅ Hero CTA: Removed underline from "Are you ready for your turnaround?" question

---

**Story Status**: COMPLETED ✅  
**Client Acceptance**: Confirmed - "Great. This seems to be great."  
**Completion Date**: Implementation completed with full client satisfaction  
**Next Epic**: E02-Professional-Presentation
