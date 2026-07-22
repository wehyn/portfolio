import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "ayudapay",
    title: "AyudaPay",
    description:
      "A platform that helps Filipinos discover and apply to government programs, scholarships, and LGU benefits they qualify for. An AI matching engine surfaces relevant programs based on a user's profile and circumstances. An integrated AI chatbot guides users through eligibility questions and application steps. Benefit disbursements are settled on the Stellar blockchain for transparent, verifiable payouts.",
    image: "/images/ayudapay.jpg",
    tags: ["Next.js", "TypeScript", "AI", "Chatbot", "Stellar", "Blockchain"],
    accentColor: "#16a34a",
    githubUrl: "https://github.com/wehyn/ayudamatch",
    liveUrl: "https://ayudapay.vercel.app",
    liveUrlLabel: "Demo",
    award: "🏆 1st Place — UP SocComSci Hackathon",
    year: 2026,
    status: "live",
  },
  {
    id: "quiz-fetch",
    title: "Quiz Fetch",
    description:
      "Engineered a Chrome extension that reverse-engineers Canvas LMS's quiz flow — capturing questions in real time using a MutationObserver pipeline, necessary because Canvas swaps questions via AJAX without page reloads, making load-time scraping insufficient. A regex classifier detects question type (multiple choice, matching, fill-in, essay), and a two-pass fetch against the Canvas Submissions API retroactively overlays correct/incorrect markers that Canvas intentionally withholds from the live DOM. Exports the full question bank to clipboard or HTML.",
    image: "/images/quizfetch.jpg",
    tags: ["Chrome Extension", "JavaScript", "Python", "Canvas LMS"],
    accentColor: "#4f46e5",
    liveUrl:
      "https://chromewebstore.google.com/detail/quiz-fetch/ddkacjpcbjcnbnhijggkdgfemmogpiil",
    firefoxUrl: "https://addons.mozilla.org/en-US/firefox/addon/quiz-fetch/",
    chromeStoreId: "ddkacjpcbjcnbnhijggkdgfemmogpiil",
    featured: true,
    year: 2025,
    status: "live",
  },
  {
    id: "startup-language",
    title: "Startup Language",
    description:
      "An interactive browser-based compiler playground for the .startup DSL that visualizes the full compilation pipeline — tokenization, parsing, AST construction, semantic analysis, IR generation, and execution — with a live code editor. Error recovery uses phrase-level and panic-mode strategies. Runtime inspector shows execution timeline, stack state, and program output.",
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
