"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiRadio } from "react-icons/fi";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function excerpt(text: string) {
  const firstSentence = text.match(/.*?[.!?](\s|$)/)?.[0]?.trim();
  if (firstSentence && firstSentence.length <= 220) return firstSentence;
  return `${text.slice(0, 190).trim()}...`;
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.year && (
        <span className="font-mono text-xs text-text-secondary">{project.year}</span>
      )}
      {project.status === "live" && (
        <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Live
        </span>
      )}
      {project.status === "wip" && (
        <span className="font-mono text-xs text-accent">In progress</span>
      )}
      {project.award && <span className="font-mono text-xs text-accent">{project.award}</span>}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs text-text-secondary transition-all hover:border-border-bright hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-background"
        >
          <FiGithub size={13} />
          Source
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 font-mono text-xs text-background transition-all hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-background"
        >
          <FiExternalLink size={13} />
          {project.liveUrlLabel ?? "Chrome"}
        </a>
      )}
      {project.firefoxUrl && (
        <a
          href={project.firefoxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs text-text-secondary transition-all hover:border-border-bright hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-background"
        >
          <FiExternalLink size={13} />
          Firefox
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const orderedProjects = useMemo(
    () => [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))),
    []
  );
  const [activeId, setActiveId] = useState(orderedProjects[0]?.id);
  const activeProject = orderedProjects.find((p) => p.id === activeId) ?? orderedProjects[0];

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeader
          index="02"
          title="Selected Work"
          subtitle="A quick, interactive pass through shipped projects, live demos, and source links."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease }}
          className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div className="flex items-center justify-between gap-4 border-b border-border bg-surface-elevated px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
              <FiRadio size={13} className="text-accent" />
              Work queue
            </div>
            <span className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-text-secondary">
              {orderedProjects.length} projects
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-border lg:border-b-0 lg:border-r">
              <div className="flex flex-col" role="tablist" aria-label="Select a project">
                {orderedProjects.map((project) => {
                  const selected = project.id === activeProject.id;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls={`project-panel-${project.id}`}
                      onClick={() => setActiveId(project.id)}
                      className={cn(
                        "group relative border-b border-border px-5 py-4 text-left transition-colors duration-200 last:border-b-0 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent/40",
                        selected ? "bg-surface-elevated" : "hover:bg-surface-elevated/55"
                      )}
                    >
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                          {project.featured ? "Featured" : project.status ?? "Project"}
                        </span>
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full transition-colors",
                            selected ? "bg-accent" : "bg-border-bright group-hover:bg-text-secondary"
                          )}
                        />
                      </div>
                      <h3 className="text-base font-semibold leading-tight text-text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">
                        {excerpt(project.description)}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="min-w-0 bg-surface">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeProject.id}
                  id={`project-panel-${activeProject.id}`}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease }}
                >
                  <div className="relative overflow-hidden border-b border-border bg-background">
                    <div className="flex items-center justify-between border-b border-border px-5 py-3">
                      <div className="hidden items-center gap-1.5 sm:flex">
                        <span className="h-2 w-2 rounded-full bg-text-muted" />
                        <span className="h-2 w-2 rounded-full bg-accent/70" />
                        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                      </div>
                      <span className="font-mono text-[11px] text-text-muted">
                        {activeProject.id}
                      </span>
                    </div>
                    <div className="flex aspect-[16/10] items-center justify-center p-5 sm:p-8">
                      {activeProject.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={activeProject.image}
                          alt={`${activeProject.title} preview`}
                          className="h-full w-full rounded-xl border border-border bg-surface-elevated object-contain"
                        />
                      )}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <ProjectMeta project={activeProject} />
                    <h3
                      className="mt-5 font-display font-semibold text-text-primary"
                      style={{ fontSize: "clamp(2.25rem, 5vw, 3.8rem)", lineHeight: 0.95, letterSpacing: "0" }}
                    >
                      {activeProject.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                      {activeProject.description}
                    </p>

                    {activeProject.chromeStoreId && (
                      <div className="mt-7 rounded-xl border border-border bg-background px-4 py-3">
                        <AnimatedCounter storeId={activeProject.chromeStoreId} />
                      </div>
                    )}

                    <div className="mt-7 flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-border pt-5">
                      <ProjectLinks project={activeProject} />
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
