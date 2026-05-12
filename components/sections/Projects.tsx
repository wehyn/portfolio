"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeader
          index="02"
          title="Projects"
          subtitle="Things I've built — real problems, real code."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col gap-4"
        >
          {featured.map((p) => (
            <motion.div key={p.id} variants={item}>
              <ProjectCard project={p} featured />
            </motion.div>
          ))}
          {rest.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {rest.map((p) => (
                <motion.div key={p.id} variants={item}>
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
