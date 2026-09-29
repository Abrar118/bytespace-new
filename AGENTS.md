# ByteSpace project rules

- Treat the Figma file and `docs/superpowers/specs/2026-09-29-landing-page-design.md` as the visual source of truth.
- Build in phases: Hero, Discover, then remaining landing sections.
- Prefer server components. Use client components only for browser state or event handlers.
- Do not add shadcn/ui, Zustand, or mock-data packages. Use typed constants for mock content.
- Verify each phase with `npm run lint`, a production build, and responsive checks at 375px and 1440px.
- Deploy only after the landing page is complete and merged into `main`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
