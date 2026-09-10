"use client";

import { siteConfig } from "@/data/site";
import StoryAnchor from "@/components/ui/StoryAnchor";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted sm:mt-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Designed in Manila · Built for anywhere</span>
        <StoryAnchor href="#hero" className="text-text-secondary transition-colors hover:text-accent">
          Return to top ↑
        </StoryAnchor>
      </div>
    </footer>
  );
}
