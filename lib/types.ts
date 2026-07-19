export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  accentColor?: string;
  githubUrl?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  firefoxUrl?: string;
  featured?: boolean;
  year?: number;
  status?: "live" | "wip" | "archived";
  chromeStoreId?: string;
  award?: string;
}

export interface SkillCategory {
  category: string;
  items: { name: string; icon?: string }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialUrl: string;
  skills?: string[];
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
