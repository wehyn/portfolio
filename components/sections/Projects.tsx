"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import type { Project } from "@/lib/types";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3">
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm text-text-primary">
          {project.liveUrlLabel ?? "Chrome"}
          <FiArrowUpRight className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
      {project.firefoxUrl && (
        <a href={project.firefoxUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary">
          Firefox <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary">
          <FiGithub /> Source
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-10 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <h2 className="sr-only">Projects</h2>
        <div className="space-y-28 border-t border-border pt-12 lg:space-y-44 lg:pt-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.75, ease }}
              className="group grid items-center gap-9 lg:grid-cols-12 lg:gap-12"
            >
              <div className={`relative lg:col-span-7 ${index % 2 ? "lg:order-2" : ""}`}>
                <div className="absolute -inset-5 rounded-[2rem] bg-accent/5 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                <div className="glass relative overflow-hidden rounded-[1.75rem] p-3 sm:p-5">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-surface-elevated">
                    {project.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        alt={`${project.title} interface`}
                        className="h-full w-full object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                    <span className="glass absolute bottom-4 left-4 rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-text-secondary">
                      {project.year} · {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1 lg:pr-6" : "lg:pl-6"}`}>
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  <span>0{index + 1}</span><span className="h-px w-10 bg-accent/50" />
                  {project.featured ? "Featured project" : "Selected project"}
                </div>
                <h3 className="mt-6 font-display text-[clamp(2.8rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.035em] text-text-primary">
                  {project.title}
                </h3>
                {project.award && <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{project.award}</p>}
                <p className="mt-6 line-clamp-6 text-sm leading-7 text-text-secondary sm:text-base">{project.description}</p>

                {project.chromeStoreId && (
                  <div className="mt-6 border-l border-accent/40 pl-4"><AnimatedCounter storeId={project.chromeStoreId} /></div>
                )}

                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">{tag}</span>
                  ))}
                </div>
                <div className="mt-8 border-t border-border pt-5"><ProjectLinks project={project} /></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
