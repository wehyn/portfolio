"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SkillBadge from "@/components/ui/SkillBadge";


const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 border-t border-border pt-7 md:mb-16" />
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: ci * 0.08, ease }}
              className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-bright"
            >
              <div className="border-b border-border bg-surface-elevated px-5 py-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {category.category}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 p-5">
                {category.items.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
