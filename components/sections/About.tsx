"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const disciplines = [
  ["Product thinking", "I begin with the friction, not the feature list."],
  ["Full-stack craft", "Interfaces, systems, and the details between them."],
  ["Intelligent tools", "AI that earns its place by making work simpler."],
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <h2 className="sr-only">About</h2>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {disciplines.map(([title, copy], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: index * 0.1, ease }}
              className="group relative bg-background/80 p-7 backdrop-blur-md sm:p-9"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-text-muted">0{index + 1}</span>
              <h3 className="mt-12 font-display text-2xl font-light text-text-primary transition-colors group-hover:text-accent">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-text-secondary">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
