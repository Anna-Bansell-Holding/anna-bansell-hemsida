# E01-S01-Language-Selector-Component

**Epic**: E01-Bilingual-Foundation  
**Priority**: High

## User Story

**As a** potential client from international markets  
**I want** to switch between Swedish and English content instantly  
**So that** I can understand Anna's services in my preferred language

## Business Value

Enable market expansion beyond Swedish-speaking clients and demonstrate international professionalism to global prospects evaluating Anna's consulting services. Establishes foundation for all bilingual functionality across the website.

## Acceptance Criteria

### Functional Requirements
- [ ] Language selector component displays in top navigation area
- [ ] Toggle between Swedish (SE) and English (EN) options  
- [ ] Instant content switching without page reload
- [ ] Language preference persists during session
- [ ] Default language detection based on browser settings
- [ ] URL parameter support for language sharing

### Design Requirements  
- [ ] Professional visual design matching site theme
- [ ] Clear visual indication of selected language
- [ ] Hover and focus states for accessibility
- [ ] Mobile-responsive design implementation
- [ ] Consistent positioning across all page sections

### Accessibility Requirements
- [ ] Accessible keyboard navigation support
- [ ] Screen reader compatibility for language switching
- [ ] ARIA labels for language selection
- [ ] High contrast compliance
- [ ] Focus management during language switching

## Technical Implementation

### Component Architecture
```typescript
interface LanguageSelectorProps {
  currentLanguage: 'se' | 'en';
  onLanguageChange: (language: 'se' | 'en') => void;
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  className
}) => {
  return (
    <div className={cn("language-selector", className)}>
      <button
        onClick={() => onLanguageChange('se')}
        className={cn("lang-button", currentLanguage === 'se' && "active")}
        aria-pressed={currentLanguage === 'se'}
      >
        SE
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={cn("lang-button", currentLanguage === 'en' && "active")}
        aria-pressed={currentLanguage === 'en'}
      >
        EN
      </button>
    </div>
  );
};
```

### State Management
```typescript
interface LanguageContextType {
  currentLanguage: 'se' | 'en';
  setLanguage: (language: 'se' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<'se' | 'en'>('se');

  const setLanguage = useCallback((language: 'se' | 'en') => {
    setCurrentLanguage(language);
    localStorage.setItem('preferredLanguage', language);
    // Update URL parameter for shareability
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState({}, '', url.toString());
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

### Integration Points
- Header/Navigation component integration
- Global content switching coordination
- Analytics tracking for language usage
- Session storage for preference persistence

## Definition of Done

- [ ] Component implementation completed and tested
- [ ] Integration with existing navigation successful
- [ ] Cross-browser testing completed
- [ ] Mobile responsive testing verified
- [ ] Accessibility audit passed
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Performance impact assessed

## Dependencies

**Blocks**: E01-S02-Bilingual-Content-Infrastructure  
**Blocked By**: None

## Testing Requirements

### Test Scenarios
1. **Language Switching**: Verify instant content switching functionality
2. **Persistence**: Confirm language preference survives page refresh
3. **Default Behavior**: Test browser language detection and fallback
4. **Accessibility**: Screen reader and keyboard navigation testing
5. **Mobile**: Touch interaction and responsive design validation

### Performance Considerations
- Component should not cause layout shifts during switching
- Language switching should complete under 100ms
- No flash of untranslated content (FOUC)
- Minimal impact on bundle size

## Content Requirements

### Language Labels
- **Swedish Option**: "SE" or "Svenska" 
- **English Option**: "EN" or "English"

### Accessibility Text
- **aria-label**: "Select language / Välj språk"
- **Screen reader announcements**: "Language changed to [Swedish/English]"
- **Button descriptions**: Descriptive text for each language option

## Design Specifications

### Visual Design
```css
.language-selector {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: rgba(255, 255, 255, 0.1);
}

.lang-button {
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  background: transparent;
  color: #64748b;
  font-weight: 500;
  transition: all 0.2s ease;
}

.lang-button:hover {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.lang-button.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.lang-button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

### Mobile Responsive Design
- Touch-friendly button sizing (minimum 44px target area)
- Appropriate spacing for mobile interaction
- Clear visual hierarchy on smaller screens
- Professional appearance across all device sizes

## Analytics and Tracking

### Usage Metrics
- Language selection frequency
- User session language preferences  
- Geographic correlation with language choice
- Time spent in each language
- Conversion rates by language preference

### Implementation
```typescript
const trackLanguageChange = (language: 'se' | 'en') => {
  // Analytics tracking implementation
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'language_change', {
      language: language,
      timestamp: Date.now()
    });
  }
};
```

---

**Story Status**: Ready for Development  
**Next Story**: E01-S02-Bilingual-Content-Infrastructure
