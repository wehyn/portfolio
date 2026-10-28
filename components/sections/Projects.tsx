"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  if (project.id === "porto") return "macOS menu-bar app";
  if (project.id === "nimbus") return "Self-hosted dashboard";
  return "Web product · live preview";
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-8rem)] w-full max-w-[1440px] flex-col justify-center">
      <div className="grid items-center gap-9 lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1.08fr)] lg:gap-16 lg:[&>div:first-child]:order-2">
        <div className="relative">
          <BrowserFrame
            src={project.image ?? ""}
            images={project.images}
            accent={project.accentColor}
            alt={`${project.title} interface screenshot`}
            label={frameLabel(project)}
          />
          {project.chromeStoreId && (
            <div className="mt-3 rounded-xl border border-border bg-surface px-4 py-3 lg:absolute lg:inset-x-0 lg:top-full">
              <AnimatedCounter storeId={project.chromeStoreId} />
            </div>
          )}
        </div>

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
  );
}

const count = projects.length;

export default function Projects() {
  const wrapRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = wrap?.closest<HTMLElement>(".story-stage");
    const track = wrap?.closest<HTMLElement>(".story-track");
    if (!wrap || !stage || !track) return;

    const measure = () => {
      const left = wrap.getBoundingClientRect().left - track.getBoundingClientRect().left;
      wrap.style.setProperty("--stage-left", `${left}px`);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    observer.observe(track);
    measure();

    let frame = 0;
    const tick = () => {
      if (stage.dataset.stageEnabled === "true") {
        const offset = parseFloat(stage.style.getPropertyValue("--story-offset")) || 0;
        const left = parseFloat(wrap.style.getPropertyValue("--stage-left")) || 0;
        const next = Math.min(count - 1, Math.max(0, Math.round((offset - left) / window.innerWidth)));
        setActive(next);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const current = projects[active];

  return (
    <section
      ref={wrapRef}
      id="projects"
      aria-label="Projects"
      className="stage-wrap"
      style={{ "--stage-count": count } as CSSProperties}
    >
      <div className="stage-stacked">
        {projects.map((project) => (
          <div key={project.id} className="story-panel px-5 py-16 sm:px-8 lg:px-16 lg:py-10">
            <ProjectContent project={project} />
          </div>
        ))}
      </div>

      <div className="stage-pinned px-5 sm:px-8 lg:px-16" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="w-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease }}
          >
            <ProjectContent project={current} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
