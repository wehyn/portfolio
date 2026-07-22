import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-border pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Designed in Manila · Built for anywhere</span>
        <a href="#hero" className="text-text-secondary transition-colors hover:text-accent">Return to signal ↑</a>
      </div>
    </footer>
  );
}
