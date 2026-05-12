import type { Project } from "@/lib/types";

export const projects: Project[] = [
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
  {
    id: "project-three",
    title: "Project Three",
    description:
      "Developer tool that automates repetitive tasks and integrates with popular CI/CD pipelines.",
    tags: ["Python", "Docker", "GitHub Actions", "CLI"],
    accentColor: "#f97316",
    githubUrl: "https://github.com/yourusername/project-three",
    year: 2024,
    status: "live",
  },
];
