"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";

export default function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-bright",
        featured && "md:flex-row"
      )}
    >
      {/* Preview */}
      <div
        className={cn(
          "relative flex-shrink-0 overflow-hidden",
          featured ? "h-52 w-full md:h-auto md:w-72" : "h-44 w-full"
        )}
        style={{
          background: `linear-gradient(160deg, ${project.accentColor ?? "#b89a6e"}12 0%, ${project.accentColor ?? "#b89a6e"}04 100%)`,
        }}
      >
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title} className="h-full w-full object-contain" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-3">
          {project.year && (
            <span className="font-mono text-xs text-text-secondary">{project.year}</span>
          )}
          {project.status === "live" && (
            <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              Live
            </span>
          )}
          {project.status === "wip" && (
            <span className="font-mono text-xs text-amber-400">In progress</span>
          )}
        </div>

        <h3
          className="mb-2 font-display font-semibold text-text-primary"
          style={{ fontSize: "1.2rem", letterSpacing: "-0.015em", lineHeight: 1.2 }}
        >
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {project.chromeStoreId && (
          <div className="mb-5">
            <AnimatedCounter storeId={project.chromeStoreId} />
          </div>
        )}

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 border-t border-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover flex items-center gap-1.5 font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
            >
              <FiGithub size={12} />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover flex items-center gap-1.5 font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
            >
              <FiExternalLink size={12} />
              Chrome
            </a>
          )}
          {project.firefoxUrl && (
            <a
              href={project.firefoxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover flex items-center gap-1.5 font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
            >
              <FiExternalLink size={12} />
              Firefox
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
