import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "quiz-fetch",
    title: "Quiz Fetch",
    description:
      "Engineered a Chrome extension that reverse-engineers Canvas LMS's quiz flow — capturing questions in real time using a MutationObserver pipeline, necessary because Canvas swaps questions via AJAX without page reloads, making load-time scraping insufficient. A regex classifier detects question type (multiple choice, matching, fill-in, essay), and a two-pass fetch against the Canvas Submissions API retroactively overlays correct/incorrect markers that Canvas intentionally withholds from the live DOM. Exports the full question bank to clipboard or HTML. 841 active users, 5.0 ★ on the Chrome Web Store.",
    tags: ["Chrome Extension", "JavaScript", "Python", "Canvas LMS"],
    accentColor: "#4f46e5",
    liveUrl:
      "https://chromewebstore.google.com/detail/quiz-fetch/ddkacjpcbjcnbnhijggkdgfemmogpiil",
    firefoxUrl: "https://addons.mozilla.org/en-US/firefox/addon/quiz-fetch/",
    featured: true,
    year: 2026,
    status: "live",
  },
  {
    id: "project-two",
    title: "Project Two",
    description:
      "REST API service with rate limiting, JWT auth, and comprehensive documentation. Handles thousands of requests per day.",
    tags: ["Node.js", "Express", "MongoDB", "Redis"],
    accentColor: "#7c3aed",
    githubUrl: "https://github.com/yourusername/project-two",
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
