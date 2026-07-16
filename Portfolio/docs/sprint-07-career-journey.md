# Sprint 07 - Career Journey

## Objective

Expand the Experience section to showcase the complete professional journey while keeping the current role as the primary focus.

## Completed

- Added reusable PreviousExperienceCard component.
- Introduced data-driven experienceData.ts.
- Created CareerJourney component.
- Implemented collapsible Career Journey section.
- Added previous companies:
  - Sungard (Now FIS)
  - Barclays Technology Centre India
  - TCS e-Serve
- Improved UX by hiding previous experience behind an expandable section.
- Maintained responsive layout across desktop and mobile.

## Architecture

experience/
├── Experience.tsx
├── components/
│   ├── ExperienceCard.tsx
│   ├── PreviousExperienceCard.tsx
│   └── CareerJourney.tsx
├── constants/
│   └── experienceData.ts

## Outcome

The Experience section now highlights the current role while allowing recruiters to explore previous experience through a clean, expandable Career Journey.