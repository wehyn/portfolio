"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SkillBadge from "@/components/ui/SkillBadge";
import SectionHeader from "@/components/ui/SectionHeader";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeader
          index="03"
          title="Tech Stack"
          subtitle="Tools and technologies I work with regularly."
        />
        <div className="flex flex-col gap-10">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: ci * 0.08, ease }}
            >
              <p className="mb-4 font-mono text-xs text-text-secondary">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-2">
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
