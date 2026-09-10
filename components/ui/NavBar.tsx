"use client";

import { motion } from "framer-motion";
import StoryAnchor from "@/components/ui/StoryAnchor";

export default function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-border bg-surface/90 px-3 py-2 shadow-card backdrop-blur-md sm:px-4">
        <StoryAnchor href="#hero" className="flex items-center gap-2.5 rounded-full px-1.5 py-1" aria-label="Back to top">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-text-primary font-mono text-[10px] font-medium text-surface">
            WG
          </span>
          <span className="hidden font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-text-secondary sm:block">
            Wayne Garcia
          </span>
        </StoryAnchor>

        <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-text-muted sm:block">
          Full-stack developer · Manila
        </span>

        <StoryAnchor
          href="#contact"
          className="rounded-full bg-text-primary px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-surface transition-colors hover:bg-accent hover:text-text-primary"
        >
          Let&apos;s talk
        </StoryAnchor>
      </div>
    </motion.header>
  );
}
