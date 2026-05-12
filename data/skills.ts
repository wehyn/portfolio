import type { SkillCategory } from "@/lib/types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML / CSS" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Tools & Infra",
    items: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "GitHub Actions" },
      { name: "Linux" },
      { name: "Figma" },
    ],
  },
];
