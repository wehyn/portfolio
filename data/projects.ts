import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "ayudapay",
    title: "AyudaPay",
    description:
      "A platform helping Filipinos discover and apply to government programs, scholarships, and LGU benefits they qualify for. AI matching, an eligibility chatbot, and Stellar-based disbursements bring discovery, guidance, and payouts into one flow.",
    image: "/images/ayudapay.jpg",
    tags: ["Next.js", "TypeScript", "AI", "Chatbot", "Stellar", "Blockchain"],
    accentColor: "#16a34a",
    githubUrl: "https://github.com/wehyn/ayudamatch",
    liveUrl: "https://ayudapay.vercel.app",
    liveUrlLabel: "Demo",
    award: "🏆 Champion — UP SocComSci Hackathon",
    year: 2026,
    status: "live",
  },
  {
    id: "quiz-fetch",
    title: "Quiz Fetch",
    liveUrlLabel: "Chrome",
    description:
      "A Chrome extension that captures Canvas LMS quiz questions in real time through a MutationObserver pipeline, classifies question types, and uses the Canvas Submissions API to overlay answer markers. It exports the question bank to the clipboard or HTML, with Firefox and website versions also available.",
    image: "/images/quizfetch.jpg",
    tags: ["Chrome Extension", "JavaScript", "Python", "Canvas LMS"],
    accentColor: "#4f46e5",
    liveUrl:
      "https://chromewebstore.google.com/detail/quiz-fetch/ddkacjpcbjcnbnhijggkdgfemmogpiil",
    firefoxUrl: "https://addons.mozilla.org/en-US/firefox/addon/quiz-fetch/",
    websiteUrl: "https://quiz-fetch.vercel.app/",
    chromeStoreId: "ddkacjpcbjcnbnhijggkdgfemmogpiil",
    featured: true,
    year: 2025,
    status: "live",
  },
  {
    id: "porto",
    title: "Porto",
    description:
      "A macOS menu-bar utility for inspecting network listeners and active connections on This Mac or a selected Linux host over SSH. Listeners come first, and eligible processes can be stopped with validated identity checks and a separate confirmed Force Kill.",
    images: ["/images/porto-this-mac.png", "/images/porto-remote.png"],
    tags: ["Swift", "SwiftUI", "macOS", "SSH"],
    accentColor: "#0ea5e9",
    githubUrl: "https://github.com/wehyn/porto",
    liveUrl: "https://github.com/wehyn/porto/releases/latest",
    liveUrlLabel: "Download",
    year: 2026,
    status: "live",
  },
  {
    id: "nimbus",
    title: "Nimbus",
    description:
      "A local-first launcher and observability dashboard for self-hosted services. Service links, health status, recent activity, and host metrics sit on one calm, kiosk-friendly home screen, backed by SQLite with optional Docker discovery.",
    image: "/images/nimbus-dashboard.png",
    tags: ["TypeScript", "Next.js", "SQLite", "Docker"],
    accentColor: "#6366f1",
    githubUrl: "https://github.com/wehyn/nimbus",
    year: 2026,
    status: "live",
  },
  {
    id: "startup-language",
    title: "Startup Language",
    description:
      "An interactive browser-based compiler playground for the .startup DSL, visualizing tokenization, parsing, AST construction, semantic analysis, IR generation, and execution. A live editor, error recovery, and runtime inspector make the pipeline inspectable.",
    image: "/images/startup-language.jpg",
    tags: ["TypeScript", "Next.js", "Compiler Design", "React"],
    accentColor: "#7c3aed",
    githubUrl: "https://github.com/wehyn/startup-language",
    liveUrl: "https://startup-language.vercel.app/",
    liveUrlLabel: "Demo",
    year: 2025,
    status: "live",
  },
];
