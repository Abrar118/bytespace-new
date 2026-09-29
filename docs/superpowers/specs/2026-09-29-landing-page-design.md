# ByteSpace Landing Page Design

## Goal

Build a pixel-close, responsive implementation of the supplied ByteSpace Figma landing page for the Doin Tech frontend assessment. The supplied `Home.png`, `Home.svg`, and image assets are the visual source of truth.

## Scope

- Implement the landing page only on `feat/landing-page`.
- Work in three implementation phases: Hero, Discover, then remaining sections.
- Use mock content only; no backend or authentication in this branch.
- Treat login and signup as a separate optional deliverable.

## Stack

- Keep Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Biome.
- Add `lucide-react` for category, search, star, check, lock, and navigation icons when an exported asset is not available.
- Do not add Zustand, shadcn/ui, or a mock-data package.
- Add Zod only if the separate authentication deliverable is implemented.

## Design Tokens

The Figma file defines Poppins for headings and Satoshi for body copy and labels. Load Poppins with `next/font/google`; obtain the official Satoshi variable WOFF2 and license from Fontshare, check both into `app/fonts/`, and load the font with `next/font/local`. Expose both through Tailwind font tokens.

Define these Tailwind 4 `@theme` colour tokens:

- Primary blue: `#003BE2`
- Lime accent: `#D4FB20`
- Secondary lime used by large decoration: `#CBFC01`
- Heading: `#242528`
- Body: `#4B4C53`
- Muted: `#82868E`
- Surface: `#F5F5F6`
- Border: `#CED0D3`

Use the exact Figma type scale where available: Heading L is Poppins 72px/120% semibold; Body L is Satoshi 18px/160% regular. Responsive sizes may step down while preserving the hierarchy.

## Asset Strategy

- Treat `Home.svg` as the source for exact desktop measurements, positions, colours, and shadows. Use `Home.png` only for visual comparison.
- Move full-page `Home`, `Login`, `Register`, and `404 Not Found` PNG/SVG references from `public/` to a gitignored `docs/design/` directory so they neither ship to Vercel nor inflate the public repository. Keep a tracked `docs/design/README.md` linking to the Figma source.
- Rename runtime files to kebab-case before use.
- Map the hero exports as follows:
  - `person 2.png` → `student-male.png`, used in the hero and Your Path sections.
  - `person 1.png` → `student-female.png`, used in the Create & Manage section.
  - `Ellipse 7.png` → `hero-lime-arch.png`, behind the student.
  - `Mask Group.png` → `lime-squiggle.png`, the large lime squiggle.
  - `Mask Group (1).png` → `white-squiggle-small.png`.
  - `Frame.png` → `white-squiggle-large.png`.
  - `Cone.png` → `lime-capsule.png`, the angled top-right decoration.
  - `Cone (1).png` → `white-cone.png`, the white triangular decoration.
  - `Header_Logo.png` → `bytespace-wordmark.png`; `logo.png` → `bytespace-mark.png`.
- Build the blue hero background in CSS: two 2px white grid gradients spaced at 120px and rendered at 12% opacity over `#003BE2`.
- Draw the simple torus and partner-logo placeholders with CSS or small inline SVGs instead of adding more image files.
- Use Lucide for category, star, check, lock, search, and menu icons.
- Extract testimonial and stacked-avatar raster images embedded in `Home.svg` into descriptive runtime files only when those sections are implemented.
- Rename course images by content:
  - `image 1.jpg` → `course-big-data.jpg`.
  - `image 2.jpg` → `course-productivity.jpg`.
  - `image 3.jpg` → `course-figma.jpg`.
  - `image 4.jpg` → `course-startup.jpg`.
  - `image 5.jpg` → `course-money-management.jpg`.
  - `image 6.jpg` → `course-digital-assets.jpg`.

## Architecture

- `app/page.tsx` composes the landing-page sections.
- `components/landing/` contains section-level components such as `Header`, `Hero`, and `Discover`.
- Repeated course, category, and testimonial content lives in typed constants under `data/` when introduced.
- Components remain server components unless an interaction requires client state.
- Use `next/image` for supplied raster assets and Tailwind for layout and styling. Keep global CSS limited to shared tokens, resets, and effects that Tailwind cannot express clearly.

## Phase 1: Hero

Recreate the header, navigation, hero heading, supporting copy, search treatment, decorative shapes, main character composition, floating information cards, and partner-logo strip. Desktop should match the 1440px reference; mobile should preserve hierarchy without horizontal overflow.

The header is static. At 375px, show the wordmark and an accessible menu toggle. Opening it reveals the primary navigation and account actions in a stacked panel; the toggle exposes `aria-expanded`. Render Sign In and Join Us as styled plain text until `/login` and `/signup` exist; replace them with `Link` components if the auth bonus is implemented.

The search form has `role="search"`, a visible or screen-reader-only label, and submits a harmless GET request to `/?q=…`. No client component or state is needed.

## Phase 2: Discover

Build the heading, supporting copy, category chips, and six course cards from typed mock data. Chips and search remain presentational because filtering and search behavior are not part of the assessment brief.

## Phase 3: Remaining Sections

Build learning paths, the two feature sections, creator CTA, testimonials, newsletter area, and footer. Extract a reusable component only when the design repeats it.

The newsletter form uses a proper email label and native `type="email"` validation. Its small client boundary prevents submission and stores or transmits nothing.

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

The phases are implementation checkpoints, not mandatory waiting periods. Continue after local verification unless the user requests a review pause.

## Git Workflow

- Work on `feat/landing-page`.
- First organize and commit the currently untracked assets and deleted starter SVGs without mixing in page code.
- Make one meaningful commit after each verified phase.
- Open one pull request for the completed landing page.
- Use separate branches and pull requests for optional auth pages and documentation-only follow-ups.

## Delivery

- Add a README with setup instructions, implementation notes, assumptions, screenshots, repository link, and live URL.
- Deploy the completed landing page to Vercel only after all three phases pass verification.
- Confirm the production URL works in a signed-out browser before submitting it to Doin Tech.
