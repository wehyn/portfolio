# Wayne Garcia — Portfolio

> Single-page portfolio built with Next.js 14, DM Sans, and a light product-oriented visual system.

## Stack

| | |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v3 (semantic color tokens) |
| **Animation** | Framer Motion 11 |
| **Smooth scroll** | Lenis 1.3.26 (desktop stage only) |
| **Fonts** | DM Sans · IBM Plex Mono |
| **Icons** | react-icons (Feather) |
| **Deploy** | Vercel |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # start production server
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint (Next.js core-web-vitals)
```

## Architecture

The homepage is a single semantic route with eight story panels: hero, approach, three project panels, skills, certifications, and contact/footer.

On screens at least 1024px wide, `HorizontalStory` measures the track and maps normal document scroll to horizontal panel movement inside a sticky viewport. Lenis smooths the document scroll with `autoRaf: false` and a manually driven frame loop. Screens below the breakpoint, reduced-motion users, and any stage that cannot initialize receive normal vertical document flow.

Meaningful content is rendered in the DOM before the stage initializes, so the page remains readable without JavaScript. Internal panel links use the measured horizontal offset on desktop and native anchors elsewhere.

```text
app/
├── layout.tsx        # Root layout, fonts, metadata
├── page.tsx          # Single route and story composition
└── globals.css       # Light tokens, surfaces, stage/fallback styles

components/
├── layout/
│   ├── Footer.tsx            # Contact-panel footer
│   ├── HorizontalStory.tsx   # Measured desktop stage and Lenis loop
│   └── PageWrapper.tsx       # Reusable content wrapper
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx          # One panel per project
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   └── Contact.tsx
└── ui/
    ├── AnimatedCounter.tsx   # Chrome Web Store stats
    ├── BrowserFrame.tsx      # Screenshot framing
    ├── NavBar.tsx
    ├── PanelLabel.tsx
    ├── StatusPill.tsx
    └── StoryAnchor.tsx        # Desktop-aware internal anchors
```

## Customization

All portfolio content lives in `data/`:

```text
data/
├── site.ts            # name, title, bio, email, GitHub, LinkedIn
├── projects.ts        # project descriptions, screenshots, tags, links, facts
├── skills.ts          # skill categories and items
└── certifications.ts  # issuer, dates, skills, credential links
```

Keep project and skills content in these files rather than duplicating it in visual components. Existing project screenshots are stored in `public/images/`.

## Design direction

- Light gray canvas with white rounded surfaces and quiet borders
- Restrained orange accent for active details and availability markers
- DM Sans for interface copy and IBM Plex Mono for metadata
- Short, purposeful entrance motion with a reduced-motion fallback
- Project proof, links, awards, and live extension statistics prioritized over decoration
- Minimal fixed identity/CTA header with native keyboard focus states

## API

**`/api/extension-stats?id=<chrome-store-id>`** scrapes the Chrome Web Store listing for extension metrics and caches the response for 24 hours via ISR (`revalidate: 86400`). It returns static fallback values if the upstream listing is unavailable. The route remains unchanged by the visual redesign.

## Verification

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
git diff --check
```

The desktop stage should be checked at 1440×900 and 1024×768, with normal vertical flow checked at 768×1024 and 390×844. Also verify reduced motion, keyboard focus, image loading, internal panel links, contact-copy feedback, and the Quiz Fetch stats fallback.

The separate `THREEJS_PROJECT_TRACK_PLAN.md` is intentionally unrelated to this homepage redesign.

---

<div align="center">
  <sub>Designed & built by <a href="https://github.com/wehyn">Wayne Garcia</a></sub>
</div>
