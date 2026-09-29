# ByteSpace Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deliver the responsive ByteSpace landing page from the supplied Figma design.

**Architecture:** `app/page.tsx` composes focused landing-section components. Static content stays in server components and typed constants; only the mobile menu and newsletter submission prevention use client components. Runtime images are optimized with `next/image`, while large design references remain local and gitignored.

**Tech Stack:** Next.js 16.3.6, React 19.2.8, TypeScript 5, Tailwind CSS 4, Biome 2.4.2, Lucide React.

**Spec:** `docs/superpowers/specs/2026-09-29-landing-page-design.md`

## Global Constraints

- Match `Home.svg` geometry and `Home.png` appearance at 1440px; provide a deliberate 375px layout.
- Transcribe visible copy from `Home.png`; `Home.svg` contains outlined paths, not readable text nodes.
- Use Poppins for headings and Satoshi for body text and labels.
- Keep the exact brand tokens from the spec; do not introduce a component library or state library.
- Use server components unless browser state or an event handler is required.
- Build in order: Hero, Discover, remaining sections. Stop for the user after Hero before continuing.
- Run `npm run lint` and `npm run build` after every implementation phase.
- Deploy only after the complete landing page passes verification.

## Review Focus

- At 375px, no content or decoration creates horizontal overflow; the mobile menu exposes every navigation item with keyboard-visible focus.
- At 1440px, the hero grid, typography, student, cards, and decorations align with the Figma reference without clipping important content.
- Full-page reference files never appear under `public/`, in `.next/static`, or in Git history after the asset commit.
- The hero search uses a labelled GET form and works without client hydration.
- The newsletter validates an email but prevents transmission; submitting it does not navigate or reload.

---

### Task 1: Organize Assets and Project Guidance

**Files:**
- Modify: `AGENTS.md`
- Modify: `.gitignore`
- Create: `docs/design/README.md`
- Move locally and ignore: `docs/design/Home.{png,svg}`, `docs/design/Login.{png,svg}`, `docs/design/Register.{png,svg}`, `docs/design/404 Not Found.{png,svg}`
- Rename under `public/assets/`: all runtime images listed in the spec
- Delete: `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`
- External: Public GitHub repository and `origin` remote

**Interfaces:**
- Consumes: Current untracked Figma exports and starter assets.
- Produces: Stable kebab-case runtime asset paths and project rules used by every later task.

- [ ] **Step 1: Move design-only references out of `public/`**

Move all full-page PNG/SVG exports to `docs/design/`. Add `/docs/design/*.png` and `/docs/design/*.svg` to `.gitignore`, leaving `docs/design/README.md` tracked with the Figma URL and a note that local files are implementation references only.

- [ ] **Step 2: Rename every runtime asset exactly as mapped by the spec**

Use `student-male.png`, `student-female.png`, the six descriptive hero-decoration names, the two ByteSpace logo names, and the six explicit course-image names. Preserve file contents.

- [ ] **Step 3: Add concise project instructions to `AGENTS.md` outside the managed Next.js markers**

Record the Figma/spec source of truth, phase order, dependency limits, server-component default, verification commands, and deployment-at-end rule.

- [ ] **Step 4: Verify the asset boundary**

Run: `find public -type f | sort && git check-ignore docs/design/Home.png docs/design/Home.svg`

Expected: No public filename contains spaces; no full-page reference is public; both reference files report as ignored.

- [ ] **Step 5: Commit the asset-only change**

```bash
git add .gitignore AGENTS.md docs/design/README.md public
git commit -m "chore: organize landing page assets"
```

- [ ] **Step 6: Create and back up the public GitHub repository**

Authenticate `gh`, create the public `bytespace-new` repository with this directory as its source, add `origin`, then push both `main` and `feat/landing-page`. The user will connect this repository to Vercel.

### Task 2: Build the Responsive Hero

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `app/page.tsx`
- Create: `app/fonts/satoshi-variable.woff2`
- Create: `app/fonts/FONT-LICENSE.txt`
- Create: `components/landing/header.tsx`
- Create: `components/landing/mobile-navigation.tsx`
- Create: `components/landing/hero.tsx`
- Create: `components/landing/partner-strip.tsx`
- Create: `public/assets/avatars/hero-avatar-01.png`
- Create: `public/assets/avatars/hero-avatar-02.png`
- Create: `public/assets/avatars/hero-avatar-03.png`
- Create: `public/assets/avatars/hero-avatar-04.png`
- Create: `public/assets/avatars/hero-avatar-05.png`
- Create: `public/assets/avatars/hero-avatar-06.png`
- Create: `public/assets/avatars/hero-avatar-07.png`

**Interfaces:**
- Consumes: Asset paths from Task 1 and the token values from the spec.
- Produces: `NavigationItem = { label: string; href: string }`, `Header(): JSX.Element`, `MobileNavigation({ items }: { items: readonly NavigationItem[] }): JSX.Element`, `Hero(): JSX.Element`, and `PartnerStrip(): JSX.Element` for `app/page.tsx`. Define and export `NavigationItem` from `mobile-navigation.tsx`.

- [ ] **Step 1: Install the only landing-page dependency**

Run: `npm install lucide-react`

Expected: `lucide-react` appears under dependencies; no UI, state, form, or mock-data package is added.

- [ ] **Step 2: Add the verified fonts**

Download Satoshi Variable and its ITF Free Font License from the official [Fontshare Satoshi page](https://www.fontshare.com/fonts/satoshi). Store the renamed WOFF2 and license at the exact paths above. Configure Poppins through `next/font/google` and Satoshi through `next/font/local` in `app/layout.tsx`.

- [ ] **Step 3: Define global tokens and the exact hero-grid background**

Add the spec colours and `--font-heading`/`--font-body` with Tailwind 4 `@theme`. Add only the reset, focus treatment, and 120px/2px/12%-opacity grid rule that cannot be expressed more clearly as utilities.

- [ ] **Step 4: Update root metadata and font classes**

Set the title to `ByteSpace — Learn Without Limits`, set the description to `Explore practical online courses and grow your skills with ByteSpace.`, and apply both font variables to `<html>` without introducing a dark theme.

- [ ] **Step 5: Implement `Header` and the client-only mobile menu**

Use semantic navigation, static desktop Sign In/Join Us text, and a menu button with `aria-expanded`, `aria-controls`, Escape-to-close behavior, and visible focus. Keep the header non-sticky.

- [ ] **Step 6: Implement `Hero` and `PartnerStrip`**

Transcribe the exact hero copy from `Home.png`. Use a `<form role="search" action="/" method="get">` with a labelled `q` input, `next/image` for exported assets, CSS/inline SVG for the torus and partner marks, and decorative `alt=""`/`aria-hidden` treatment. Use `Home.svg` only for measurements and embedded raster extraction; extract its seven stacked hero avatars into the specified runtime paths.

- [ ] **Step 7: Compose the Phase 1 page**

Render `Header`, `Hero`, and `PartnerStrip` from `app/page.tsx`; remove all starter content.

- [ ] **Step 8: Verify code quality**

Run: `npm run lint && npm run build`

Expected: Both exit 0; build output contains `/` and no missing-font or missing-image error.

- [ ] **Step 9: Verify the Review Focus items owned by Hero**

Run the app and inspect at 1440px and 375px. Confirm no horizontal scrolling, the Figma composition remains recognizable, the menu works by keyboard and Escape, search produces `/?q=<value>`, and reference filenames do not appear in `.next/static`.

- [ ] **Step 10: Commit and stop for the requested Hero review**

```bash
git add package.json package-lock.json app components public/assets app/fonts
git commit -m "feat: build responsive landing hero"
```

### Task 3: Build the Discover Section

**Files:**
- Create: `data/courses.ts`
- Create: `components/landing/course-card.tsx`
- Create: `components/landing/discover.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: Course images from Task 1 and global tokens from Task 2.
- Produces: `Course` type, `courses: readonly Course[]`, `categories: readonly string[]`, `CourseCard({ course }: { course: Course }): JSX.Element`, and `Discover(): JSX.Element`.

- [ ] **Step 1: Add typed category and course constants**

Define the Figma copy and card metadata with `satisfies readonly Course[]`. Keep categories as non-interactive labels because filtering is out of scope.

- [ ] **Step 2: Implement the reusable course card**

Use `next/image`, semantic headings, visible rating text, price text, lesson/duration/comment metadata, and reuse `hero-avatar-0*.png` for the stacked-avatar treatment without adding interaction.

- [ ] **Step 3: Implement and compose `Discover`**

Add `id="courses"`, the heading, copy, category labels, and responsive six-card grid: three columns at desktop, two at tablet, one at mobile.

- [ ] **Step 4: Verify Discover**

Run: `npm run lint && npm run build`

Expected: Both exit 0. At 1440px all six cards form two rows; at 375px cards form one readable column with no overflow.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx components/landing data/courses.ts
git commit -m "feat: add course discovery section"
```

### Task 4: Build the Remaining Landing Sections

**Files:**
- Create: `data/landing.ts`
- Create: `components/landing/learning-paths.tsx`
- Create: `components/landing/feature-highlights.tsx`
- Create: `components/landing/creator-cta.tsx`
- Create: `components/landing/testimonials.tsx`
- Create: `components/landing/newsletter-form.tsx`
- Create: `components/landing/footer.tsx`
- Create: `public/assets/avatars/testimonial-sarah.png`
- Create: `public/assets/avatars/testimonial-james.png`
- Create: `public/assets/avatars/testimonial-alex.png`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: Shared tokens, student images, Lucide icons, and local `Home.svg` reference.
- Produces: `LearningPath` and `Testimonial` types with readonly arrays, plus `LearningPaths()`, `FeatureHighlights()`, `CreatorCta()`, `Testimonials()`, `NewsletterForm()`, and `Footer()` components.

- [ ] **Step 1: Add typed learning-path and testimonial constants**

Copy names, roles, labels, metrics, and testimonial text from Figma. Extract only the needed testimonial avatar rasters from local `Home.svg` into descriptive runtime filenames.

- [ ] **Step 2: Implement learning paths and feature highlights**

Use the male student for Your Path and the female student for Create & Manage. Preserve reading order on mobile even where desktop alternates image and copy.

- [ ] **Step 3: Implement the creator CTA and testimonials**

Recreate the grid-backed CTA with existing decorative assets. Render all three testimonial cards statically; do not add a carousel that the design does not require.

- [ ] **Step 4: Implement the newsletter form and footer**

Make only `NewsletterForm` a client component. Use a labelled required email input and `onSubmit` that calls `preventDefault()` without storing or transmitting the address. Keep footer navigation semantic and point only to existing anchors.

- [ ] **Step 5: Compose the complete page**

Append every remaining section in Figma order and preserve the page heading hierarchy.

- [ ] **Step 6: Verify the complete landing page**

Run: `npm run lint && npm run build`

Expected: Both exit 0. At 1440px section order and spacing track `Home.png`; at 375px every section is readable, newsletter validation runs, submission stays on-page, and there is no horizontal overflow.

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx components/landing data/landing.ts public/assets/avatars
git commit -m "feat: complete landing page sections"
```

### Task 5: Document, Publish, and Deploy

**Files:**
- Modify: `README.md`
- Create: `docs/screenshots/landing-page.png`

**Interfaces:**
- Consumes: Verified complete page and final Git history.
- Produces: Landing-page pull request, reviewer documentation, merged `main`, and a public Vercel production URL.

- [ ] **Step 1: Capture the final desktop screenshot**

Save a representative 1440px full-page screenshot under `docs/screenshots/`.

- [ ] **Step 2: Write the reviewer README**

Include overview, stack, local setup, implemented scope, responsive/accessibility notes, explicit no-backend assumption, screenshot, and repository URL. Add the live URL only after it is verified.

- [ ] **Step 3: Run final local verification**

Run: `npm run lint && npm run build && git diff --check`

Expected: All commands exit 0 and `git status --short` contains only the intended README/screenshot changes.

- [ ] **Step 4: Commit documentation**

```bash
git add README.md docs/screenshots/landing-page.png
git commit -m "docs: add assessment handoff"
```

- [ ] **Step 5: Open and merge the landing-page pull request**

Push the completed feature branch, open one pull request into `main` containing the phase commits and screenshot, review it, then merge it so the branching workflow remains visible in GitHub history.

- [ ] **Step 6: Deploy after the landing page is complete**

After the user connects the repository to Vercel, deploy merged `main` as production. Do not submit a protected preview URL. Verify the production URL in a signed-out browser at desktop and mobile widths.

- [ ] **Step 7: Finalize the handoff**

Add the verified Vercel URL to `README.md`, commit and push it, then confirm the GitHub repository, PR, and production URL are publicly accessible.
