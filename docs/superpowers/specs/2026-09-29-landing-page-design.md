# ByteSpace Landing Page Design

## Goal

Build a pixel-close, responsive implementation of the supplied ByteSpace Figma landing page for the Doin Tech frontend assessment. The supplied `Home.png`, `Home.svg`, and image assets are the visual source of truth.

## Scope

- Implement the landing page only on `feat/landing-page`.
- Work in three reviewed phases: Hero, Discover, then remaining sections.
- Use mock content only; no backend or authentication in this branch.
- Treat login and signup as a separate optional deliverable.

## Stack

- Keep Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Biome.
- Add `lucide-react` only when an asset does not already provide a required icon.
- Do not add Zustand, shadcn/ui, or a mock-data package.
- Add Zod only if the separate authentication deliverable is implemented.

## Architecture

- `app/page.tsx` composes the landing-page sections.
- `components/landing/` contains section-level components such as `Header`, `Hero`, and `Discover`.
- Repeated course, category, and testimonial content lives in typed constants under `data/` when introduced.
- Components remain server components unless an interaction requires client state.
- Use `next/image` for supplied raster assets and Tailwind for layout and styling. Keep global CSS limited to shared tokens, resets, and effects that Tailwind cannot express clearly.

## Phase 1: Hero

Recreate the header, navigation, hero heading, supporting copy, search treatment, decorative shapes, main character composition, floating information cards, and partner-logo strip. Desktop should match the 1440px reference; mobile should preserve hierarchy without horizontal overflow.

## Phase 2: Discover

Build the heading, supporting copy, category chips, and six course cards from typed mock data. Chips and search remain presentational because filtering and search behavior are not part of the assessment brief.

## Phase 3: Remaining Sections

Build learning paths, the two feature sections, creator CTA, testimonials, newsletter area, and footer. Extract a reusable component only when the design repeats it.

## Responsive and Accessibility Requirements

- Verify at 375px and 1440px, with intermediate layouts adapting naturally.
- Use semantic landmarks, headings, links, buttons, and labelled form controls.
- Provide meaningful image alternatives, visible keyboard focus, sufficient contrast, and reduced-motion-safe effects.
- Keep interactive targets comfortably tappable and prevent content from being hidden by the header.

## Verification

After each phase:

1. Compare the rendered page against the supplied reference.
2. Check desktop and mobile layouts for overflow and readable hierarchy.
3. Run `npm run lint` and `npm run build`.

## Git Workflow

- Work on `feat/landing-page`.
- Make one meaningful commit after each verified phase.
- Open one pull request for the completed landing page.
- Use separate branches and pull requests for optional auth pages and documentation-only follow-ups.
