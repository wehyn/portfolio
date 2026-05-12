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
      className="mb-14"
    >
      <span className="mb-4 block font-mono text-xs text-accent">
        {index}
      </span>
      <h2
        className="font-display font-semibold text-text-primary"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.25rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-secondary">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
