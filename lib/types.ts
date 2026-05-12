export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  accentColor?: string;
  githubUrl?: string;
  liveUrl?: string;
  firefoxUrl?: string;
  featured?: boolean;
  year?: number;
  status?: "live" | "wip" | "archived";
}

export interface SkillCategory {
  category: string;
  items: { name: string; icon?: string }[];
}

export interface SiteConfig {
  name: string;
  displayName: string;
  title: string;
  subtitles: string[];
  bio: string;
  email: string;
  github: string;
  linkedin: string;
}
