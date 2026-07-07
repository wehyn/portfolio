"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease }}
      className="mb-12 grid gap-5 border-t border-border pt-7 md:mb-16 md:grid-cols-[0.22fr_1fr]"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {index}
      </span>
      <div>
        <h2
          className="font-display font-semibold text-text-primary"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            lineHeight: 0.98,
            letterSpacing: "0",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
