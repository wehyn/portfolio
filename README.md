# Wayne Garcia — Portfolio

> Single-page portfolio built with Next.js 14, Fraunces serif, and a warm minimal dark aesthetic.

&nbsp;

## Stack

| | |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v3 (custom color tokens) |
| **Animation** | Framer Motion 11 |
| **Fonts** | Fraunces · DM Sans · IBM Plex Mono |
| **Icons** | react-icons (Feather) |
| **Deploy** | Vercel |
| **CI** | GitHub Actions (typecheck + lint) |

&nbsp;

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # start production server
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint (Next.js core-web-vitals)
```

&nbsp;

## Architecture

Single-page layout — all sections anchor-linked via `id` with scroll-spy navigation:

```
app/
├── layout.tsx        # Root layout (fonts, metadata, fonts)
└── page.tsx          # Hero → About → Projects → Skills → Contact
```

**Section dividers** (`.section-line`) separate each block. A `ScrollProgress` bar tracks reading position at the top, and a `NavBar` uses `IntersectionObserver` for scroll-spy active state.

&nbsp;

## Customization

All content lives in `data/` — no need to touch components.

```
data/
├── site.ts        # name, displayName, title, subtitles, bio, email, GitHub, LinkedIn
├── projects.ts    # project cards — image, tags, links, accentColor, chromeStoreId
└── skills.ts      # skill categories — Frontend, Backend, Tools & Infra
```

Update `site.ts` for bio/social links, `projects.ts` for portfolio entries (set `featured: true` for full-width), and `skills.ts` for tech stack categories.

&nbsp;

## Design

- **Background** — warm `#0c0b0a` with fixed radial gradient (amber top-right, shadow bottom-left)
- **Accent** — caramel `#b89a6e` with `accent-dim` variant `#9e845c`
- **Surfaces** — `surface` (#131110), `surface-elevated` (#1a1816), `border` (#222020), `border-bright` (#2e2b28)
- **Text** — `text-primary` (#edeae4), `text-secondary` (#605c57), `text-muted` (#26231f)
- **Type scale** — Fraunces 800 for display, DM Sans 300 for body (1.6 line-height), IBM Plex Mono 400 for labels/tags
- **Motion** — viewport-triggered fade-ups with `whileInView`, `once: true`, custom ease `[0.25, 0.46, 0.45, 0.94]`
- **Decorations** — floating gradient orbs (cyan/purple, 0.045–0.07 opacity), thin custom scrollbar, selection highlighting, `link-hover` underline effect

&nbsp;

## API

**`/api/extension-stats?id=<chrome-store-id>`** — Scrapes the Chrome Web Store listing page for extension metrics (user count, rating, rating count). Cached for 24 hours via ISR (`revalidate: 86400`). Falls back to static defaults on failure.

Used by `AnimatedCounter` on the Quiz Fetch project card to display live install count.

&nbsp;

## Components

```
components/
├── layout/
│   ├── Footer.tsx          # Copyright, tagline, back-to-top link
│   └── PageWrapper.tsx     # Max-width content container
├── sections/
│   ├── Hero.tsx            # Name + cycling role titles + CTAs
│   ├── About.tsx           # Memoji + bio + tech tags
│   ├── Projects.tsx        # Featured + grid project cards
│   ├── Skills.tsx          # Categorized skill badges
│   └── Contact.tsx         # Email (clipboard copy) + social links
├── ui/
│   ├── AnimatedCounter.tsx  # Animated Chrome Web Store user count
│   ├── BackgroundOrbs.tsx   # Floating decorative gradient orbs
│   ├── GlowButton.tsx       # Solid/outline button with glow hover
│   ├── NavBar.tsx           # Fixed top nav (IntersectionObserver)
│   ├── ProjectCard.tsx      # Project card (featured/grid variants)
│   ├── ScrollProgress.tsx   # Reading progress bar (useScroll + useSpring)
│   ├── SectionHeader.tsx    # Consistent section heading
│   └── SkillBadge.tsx       # Skill tag pill
```

&nbsp;

## CI

GitHub Actions runs on push to `main` and all PRs:

- **TypeScript** — `tsc --noEmit` (strict mode)
- **ESLint** — Next.js core-web-vitals preset

&nbsp;

---

<div align="center">
  <sub>Designed & built by <a href="https://github.com/wehyn">Wayne Garcia</a></sub>
</div>
