"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Skills() {
  return (
    <motion.section
      id="skills"
      aria-labelledby="skills-heading"
      className="story-panel px-5 py-16 sm:px-8 lg:px-16 lg:py-10"
    >
      <div className="mx-auto grid min-h-[calc(100dvh-8rem)] max-w-[1440px] items-center gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
        <div>
          <h2
            id="skills-heading"
            className="max-w-[10ch] font-display text-[clamp(3rem,5.6vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-text-primary"
          >
            Tools for useful work.
          </h2>
        </div>

        <div className="surface-card overflow-hidden rounded-[1.75rem]">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease }}
              className="grid gap-4 border-b border-border px-5 py-5 last:border-b-0 sm:grid-cols-[0.32fr_0.68fr] sm:items-start sm:px-7 sm:py-6"
            >
              <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full bg-background px-3 py-1.5 font-mono text-[10px] font-medium text-text-secondary transition-colors hover:bg-accent/10 hover:text-text-primary"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
