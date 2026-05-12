import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One",
    description:
      "A full-stack web application built with Next.js and TypeScript. Features real-time updates, authentication, and a clean UI.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    accentColor: "#06b6d4",
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.vercel.app",
    featured: true,
    year: 2025,
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
