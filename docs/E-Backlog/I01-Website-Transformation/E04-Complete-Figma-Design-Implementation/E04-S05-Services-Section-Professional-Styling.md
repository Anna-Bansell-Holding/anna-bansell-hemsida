# E04-S05-Services-Section-Professional-Styling

## Story Overview

**Story ID**: E04-S05  
**Epic**: E04-Complete-Figma-Design-Implementation  
**Priority**: High  
**Status**: Ready for Development  

## Story Description

As a **potential client**, I want to **see Anna's service offerings in a professional three-column layout** so that I can **easily understand my engagement options and choose the right service for my needs**.

## Acceptance Criteria

### Content Implementation
- [ ] **Section header**: "Hur kan jag hjälpa dig i din Turnaround" / "How can I help you in your Turnaround"
- [ ] **Service 1 - Mentor**: Complete implementation from lines 809-815
  - Title, description, and positioning text
  - Focus on long-term development partnerships
- [ ] **Service 2 - Interim**: Complete implementation from lines 817-823
  - Title, description, and positioning text  
  - Focus on operational leadership and rapid results
- [ ] **Service 3 - Speaker**: Complete implementation from lines 825-831
  - Title, description, and positioning text
  - Focus on inspiring presentations and authentic content
- [ ] **Call-to-action**: "Kontakta mig" / "Contact me" button
- [ ] **Bilingual support**: All content with instant language switching

### Layout Structure
- [ ] **Three-column grid**: Professional service card layout as per Figma
- [ ] **Service cards**: Consistent design with icons, titles, descriptions
- [ ] **Center alignment**: Balanced layout with equal visual weight
- [ ] **CTA placement**: Prominent contact button below services
- [ ] **Responsive design**: Stacks appropriately on smaller screens

### Design System Integration
- [ ] **Card styling**: Professional white cards matching Figma design
- [ ] **Icons/graphics**: Service-specific icons from Figma design system
- [ ] **Typography**: Figma font hierarchy for service titles and descriptions
- [ ] **Color system**: Consistent use of Figma color palette
- [ ] **Button styling**: Professional CTA button matching hero section
- [ ] **Spacing system**: Consistent gaps and padding per Figma standards

### Service Card Design
- [ ] **Mentor card**: Icon + title + description + positioning text
- [ ] **Interim card**: Icon + title + description + positioning text
- [ ] **Speaker card**: Icon + title + description + positioning text
- [ ] **Consistent styling**: All cards use same design pattern
- [ ] **Hover effects**: Subtle interactions on cards and CTA

### Interactive Elements
- [ ] **Contact button**: Styled to match Figma with smooth scroll to contact section
- [ ] **Card hover states**: Professional visual feedback
- [ ] **Smooth transitions**: Polish interactions throughout section

## Technical Implementation Notes

### Content Source
- **Specification**: `docs/C-Scenarios/01-Browse-Website/1.1-StartPage/1.1-StartPage.md` lines 801-836
- **Service details**: Lines 809-831 with complete service descriptions
- **CTA requirements**: Lines 833-835

### Code Structure Source
- **Existing component**: Current services section (if exists)
- **Framework**: React/TypeScript with bilingual support
- **Component structure**: Modular service cards

### Design Source
- **Figma layout**: Three-column service card design
- **Visual styling**: Professional card system with consistent hierarchy
- **CTA integration**: Prominent button styling

### Integration Requirements
- [ ] **Contact section scroll**: CTA button smooth scrolls to footer contact
- [ ] **Language context**: Uses existing bilingual infrastructure
- [ ] **Responsive behavior**: Maintains functionality across all screen sizes

## Definition of Done

- [ ] Three-column layout matches Figma design perfectly
- [ ] All three services implemented with complete content
- [ ] Professional card styling applied consistently
- [ ] Service icons integrated from Figma design
- [ ] Contact CTA functions properly (smooth scroll)
- [ ] Bilingual functionality works perfectly
- [ ] Responsive design functions on all devices
- [ ] Hover effects and interactions polished
- [ ] Code quality maintains project standards
