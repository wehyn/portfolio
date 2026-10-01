"use client";

import { motion } from "framer-motion";
import StoryAnchor from "@/components/ui/StoryAnchor";

export default function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 sm:px-6"
    >
      <StoryAnchor
        href="#contact"
        className="rounded-full bg-text-primary px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-surface transition-colors hover:bg-accent hover:text-text-primary"
      >
        Let&apos;s talk
      </StoryAnchor>
    </motion.header>
  );
}
