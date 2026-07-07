# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (defaults port 3000, use PORT=3333 npm run dev to override)
npm run build      # Production build — must pass before deploying
npx tsc --noEmit   # Type check only
```

## Architecture

Single-page Next.js 14 App Router portfolio. No routing beyond `/` — all sections are anchor-linked on one page.

**Data layer** (`data/`) is the only place to edit content:
- `data/site.ts` — name, bio, email, GitHub, LinkedIn, cycling subtitles
- `data/projects.ts` — add/edit projects here; `featured: true` renders full-width at top
- `data/skills.ts` — skill categories rendered in order

**Font stack**: Fraunces (`--font-fraunces`, `font-display`) for headings/display, DM Sans (`--font-dm-sans`, `font-sans`) for body, IBM Plex Mono (`--font-mono`, `font-mono`) for labels and tags.

**Color tokens** (defined in `tailwind.config.ts`): `background`, `surface`, `surface-elevated`, `border`, `border-bright`, `accent` (#b89a6e warm caramel), `text-primary`, `text-secondary`, `text-muted`. Always use these tokens — no raw hex in components.

**Background gradient** lives on `body` in `globals.css` with `background-attachment: fixed` — two radial ellipses (warm amber top-right, cool shadow bottom-left).

**Animation pattern**: Framer Motion `whileInView` with `viewport={{ once: true }}` on all sections. Hero animates on mount. Ease curve throughout: `[0.25, 0.46, 0.45, 0.94]`.

**`ProjectCard`** accepts `featured` prop (full-width horizontal layout) and renders a gradient preview using `project.accentColor`. No image = gradient placeholder only.

**NavBar** uses `IntersectionObserver` on section IDs for scroll-spy active state. Always transparent — no background on scroll.

**`ScrollProgress`** bar at top uses `useScroll` + `useSpring` from Framer Motion.
