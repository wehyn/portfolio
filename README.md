# Wayne Garcia — Portfolio

> Personal portfolio built with Next.js 14, Fraunces serif, and a warm minimal dark aesthetic.

&nbsp;

## Stack

| | |
|---|---|
| **Framework** | Next.js 14 (App Router, static export) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v3 |
| **Animation** | Framer Motion |
| **Fonts** | Fraunces · DM Sans · IBM Plex Mono |
| **Deploy** | Vercel |

&nbsp;

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npx tsc --noEmit   # type check
```

&nbsp;

## Customization

All content lives in `data/` — no need to touch components.

```
data/
├── site.ts        # name, bio, email, social links
├── projects.ts    # project cards — add featured: true for full-width
└── skills.ts      # skill categories
```

&nbsp;

## Design

- **Background** — warm `#0c0b0a` with fixed radial gradient (amber top-right, shadow bottom-left)
- **Accent** — caramel `#b89a6e`
- **Type scale** — Fraunces 800 for display, DM Sans 300 for body
- **Motion** — viewport-triggered fade-ups, `once: true`, no repeat

&nbsp;

---

<div align="center">
  <sub>Designed & built by <a href="https://github.com/wehyn">Wayne Garcia</a></sub>
</div>
