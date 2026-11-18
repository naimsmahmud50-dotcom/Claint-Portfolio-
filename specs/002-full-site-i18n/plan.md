# Implementation Plan: Full-Site Multilingual Support (i18n)

## Goal
Enable seamless toggling of the entire portfolio website between English and Bangla.

## Scope
- Expand `translations.ts` to include all text content for:
    - Navbar, Footer
    - About, Projects, Services, Skills, Systems, Contact pages.
- Update all components to use the `useLanguage` hook for content rendering.
- Ensure language persistence across all pages.

## Steps
1. **Infrastructure Audit**: Review `LanguageProvider.tsx` for robustness.
2. **Dictionary Expansion**: Populate `translations.ts` with comprehensive English and Bangla text for all site sections.
3. **Component Refactoring**: Systematically update each major layout component and page component to use the `t` object from `useLanguage`.
4. **Verification**: Verify language toggle functionality across navigation routes and check for missing translations.
5. **Final Build**: Perform full production build to ensure consistency.
