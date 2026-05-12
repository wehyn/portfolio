"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  { label: "Projects Shipped", value: "10+" },
  { label: "Years Coding", value: "3+" },
  { label: "Cups of Coffee", value: "∞" },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeader index="01" title="About Me" />

        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="mx-auto w-fit">
              <div className="relative h-72 w-64 overflow-hidden rounded-2xl bg-surface ring-1 ring-border transition-all duration-500 hover:ring-border-bright">
                <div className="flex h-full w-full items-center justify-center">
                  <span
                    className="font-display font-bold select-none text-text-muted"
                    style={{ fontSize: "9rem", letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    {siteConfig.displayName[0]}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-surface p-4 text-center"
                >
                  <div className="font-display text-2xl font-semibold text-accent" style={{ letterSpacing: "-0.02em" }}>
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-xs leading-tight text-text-secondary">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 text-base leading-[1.85] text-text-secondary">
              {siteConfig.bio}
            </p>
            <p className="mb-10 text-base leading-[1.85] text-text-secondary">
              I thrive in collaborative environments where quality and
              craftsmanship matter. From system design to polished UI, I take
              ownership across the full stack and hold high standards for
              reliability, maintainability, and developer experience.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border px-3 py-1.5 font-mono text-xs text-text-secondary transition-colors duration-200 hover:border-border-bright hover:text-text-primary"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
