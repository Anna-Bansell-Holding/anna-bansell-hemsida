# Ticket: 001 - Remove Lovable Components

## Status
- [x] Open
- [ ] In Progress
- [ ] Review
- [ ] Completed
- [ ] Closed

## Priority
- [ ] Low
- [x] Medium
- [ ] High
- [ ] Critical

## Type
- [ ] Feature
- [x] Bug Fix
- [ ] Improvement
- [ ] Documentation
- [ ] Technical Debt

## Description
Remove all Lovable-related components, dependencies, and branding from the Anna Bansell website project. This project was originally created using Lovable but has been migrated to a custom development environment and should not contain any Lovable-specific code or references.

## Acceptance Criteria
- [ ] Remove `lovable-tagger` dependency from package.json
- [ ] Remove `lovable-tagger` import and usage from vite.config.ts
- [ ] Update README.md to remove Lovable branding and instructions
- [ ] Remove Lovable OpenGraph images from index.html
- [ ] Remove Lovable Twitter metadata from index.html
- [ ] Clean up package-lock.json (will be regenerated after dependency removal)
- [ ] Verify no Lovable references remain in the codebase
- [ ] Test that the application builds and runs without errors after cleanup

## Technical Requirements
- Remove npm dependency without breaking build process
- Ensure vite.config.ts is properly configured after plugin removal
- Maintain all existing functionality while removing Lovable-specific code
- Update metadata to use appropriate Anna Bansell branding

## Estimated Effort
2-4 hours

## Assigned To
[To be assigned]

## Created
2024-12-19

## Due Date
[To be determined]

## Implementation Guide

### Step 1: Remove NPM Dependency
```bash
# Navigate to project directory
cd anna-bansell-hemsida

# Remove lovable-tagger dependency
npm uninstall lovable-tagger

# Clean up node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Step 2: Update vite.config.ts
**Current state:**
```typescript
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ... other config
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  // ... rest of config
}));
```

**Updated state:**
```typescript
export default defineConfig(({ mode }) => ({
  // ... other config
  plugins: [
    react(),
    // componentTagger removed
  ].filter(Boolean),
  // ... rest of config
}));
```

### Step 3: Update README.md
**Remove all Lovable-specific content:**
- Project URL references
- Lovable usage instructions
- Deployment instructions
- Custom domain setup references

**Replace with Anna Bansell project information:**
- Project description
- Local development setup
- Deployment instructions for Vercel
- Technology stack information

### Step 4: Update index.html
**Remove Lovable metadata:**
```html
<!-- Remove these lines -->
<meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
<meta name="twitter:site" content="@lovable_dev" />
<meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
```

**Replace with appropriate content:**
```html
<!-- Add Anna Bansell specific metadata -->
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:image" content="/og-image.png" />
```

### Step 5: Create Replacement Assets
- Create a new OpenGraph image for Anna Bansell
- Update favicon if needed
- Ensure all branding is consistent with Anna Bansell identity

## Testing Checklist

### Build Testing
- [ ] `npm run build` completes successfully
- [ ] `npm run dev` starts without errors
- [ ] No console warnings about missing dependencies

### Functionality Testing
- [ ] All existing features work as expected
- [ ] No broken imports or references
- [ ] Application renders correctly in browser

### Cleanup Verification
- [ ] No "lovable" references in codebase search
- [ ] package.json contains no Lovable dependencies
- [ ] All metadata points to appropriate Anna Bansell content

## Rollback Plan
If issues arise during implementation:
1. Restore original package.json
2. Restore original vite.config.ts
3. Restore original README.md and index.html
4. Run `npm install` to restore dependencies

## Dependencies
- Node.js and npm
- Access to project repository
- Anna Bansell branding assets (if replacing images)

## Notes
- This cleanup is needed before deploying to production on Vercel
- The project should maintain its current functionality while removing external tool dependencies
- Consider what metadata/images should replace the Lovable OpenGraph content
- May need to update favicon and other branding elements
- The componentTagger plugin was only active in development mode, so removal should not affect production builds
- Consider creating a proper Anna Bansell OpenGraph image before removing the Lovable one
- Update any CI/CD pipelines that might reference Lovable-specific configurations
