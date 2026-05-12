import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <span className="font-display text-sm font-semibold text-text-secondary" style={{ letterSpacing: "-0.01em" }}>
            {siteConfig.name}
          </span>
          <span className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} — Designed & built with care
          </span>
          <a href="#hero" className="font-mono text-xs text-text-secondary transition-colors hover:text-text-primary">
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
