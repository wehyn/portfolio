"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden px-6 py-28 md:px-10 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <h2 className="sr-only">Skills</h2>
        <div className="mx-auto max-w-5xl border-t border-border">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55, delay: index * 0.08, ease }}
                className="group grid gap-5 border-b border-border py-8 sm:grid-cols-[0.3fr_0.7fr]"
              >
                <h3 className="font-display text-xl font-light text-text-primary transition-colors group-hover:text-accent">{category.category}</h3>
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {category.items.map((skill) => (
                    <span key={skill.name} className="text-sm text-text-secondary transition-colors hover:text-text-primary">{skill.name}</span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="mt-28 whitespace-nowrap border-y border-border py-5 font-display text-4xl font-light italic text-text-muted/20 sm:text-6xl"
        aria-hidden="true"
      >
        Design · Engineer · Iterate · Ship · Design · Engineer · Iterate · Ship
      </motion.div>
    </section>
  );
}
