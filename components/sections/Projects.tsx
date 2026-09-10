"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";
import type { Project } from "@/lib/types";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import BrowserFrame from "@/components/ui/BrowserFrame";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function ExternalLink({ href, children, icon = true }: { href: string; children: string; icon?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2.5 text-xs font-semibold text-surface transition-colors hover:bg-accent hover:text-text-primary"
    >
      {children}
      {icon && <FiArrowUpRight aria-hidden="true" />}
    </a>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.liveUrl && (
        <ExternalLink href={project.liveUrl}>
          {project.liveUrlLabel ?? "Live project"}
        </ExternalLink>
      )}
      {project.firefoxUrl && <ExternalLink href={project.firefoxUrl}>Firefox</ExternalLink>}
      {project.websiteUrl && <ExternalLink href={project.websiteUrl}>Website</ExternalLink>}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface px-4 py-2.5 text-xs font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
        >
          <FiGithub aria-hidden="true" /> Source
        </a>
      )}
    </div>
  );
}

function frameLabel(project: Project) {
  if (project.id === "quiz-fetch") return "Chrome extension · Canvas LMS";
  if (project.id === "startup-language") return "Browser playground · .startup DSL";
  return "Web product · live preview";
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <motion.section
      id={index === 0 ? "projects" : project.id}
      aria-labelledby={`${project.id}-heading`}
      className="story-panel px-5 py-16 sm:px-8 lg:px-16 lg:py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease }}
    >
      <div className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-[1440px] flex-col justify-center">
        <div className={`grid items-center gap-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.72fr)] lg:gap-16 ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="group"
          >
            <BrowserFrame src={project.image ?? ""} alt={`${project.title} interface screenshot`} label={frameLabel(project)} />
            {project.chromeStoreId && (
              <div className="mt-3 rounded-xl border border-border bg-surface px-4 py-3">
                <AnimatedCounter storeId={project.chromeStoreId} />
              </div>
            )}
          </motion.div>

          <div className="max-w-xl">
            <h2
              id={`${project.id}-heading`}
              className="font-display text-[clamp(2.8rem,5.4vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-text-primary"
            >
              {project.title}
            </h2>
            {project.award && (
              <p className="mt-5 inline-flex rounded-full bg-accent/10 px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-accent">
                {project.award}
              </p>
            )}
            <p className="mt-6 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 border-t border-border pt-5">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Projects() {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectPanel key={project.id} project={project} index={index} />
      ))}
    </>
  );
}
