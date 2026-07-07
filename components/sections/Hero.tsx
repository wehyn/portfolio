"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiMail,
  FiAward,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "UI/UX Enthusiast",
  "Open Source Builder",
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function ProjectStackCard({
  project,
  position,
}: {
  project: (typeof projects)[number];
  position: "left" | "right";
}) {
  return (
    <div
      className={[
        "absolute top-24 hidden w-72 rounded-2xl border border-border bg-surface p-5 opacity-55 lg:block",
        position === "left" ? "-left-6 -rotate-6" : "-right-8 rotate-6",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="mb-5 inline-flex rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary">
        {project.status === "live" ? "Live project" : "Selected work"}
      </div>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background font-display text-xl font-semibold text-accent">
          {project.title.slice(0, 1)}
        </div>
        <h3 className="line-clamp-1 text-lg font-medium text-text-primary">{project.title}</h3>
      </div>
      <p className="line-clamp-2 text-sm leading-6 text-text-secondary">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkPreview() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const sideProjects = projects.filter((project) => project.id !== featuredProject.id).slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.8, ease }}
      className="relative min-h-[430px] lg:pb-4"
      aria-label="Portfolio work preview"
    >
      {sideProjects[0] && <ProjectStackCard project={sideProjects[0]} position="left" />}
      {sideProjects[1] && <ProjectStackCard project={sideProjects[1]} position="right" />}

      <div className="relative z-10 mx-auto w-full max-w-md rounded-2xl border border-border bg-surface p-6">
        <div className="mb-7 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-text-primary px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-background">
            <FiAward size={12} />
            Featured
          </span>
          <span className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">
            Product build
          </span>
          {featuredProject.status && (
            <span className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">
              {featuredProject.status}
            </span>
          )}
        </div>

        <div className="mb-7 flex items-center gap-5">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border bg-background">
            {featuredProject.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={featuredProject.image}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-display text-3xl text-accent">
                {featuredProject.title.slice(0, 1)}
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {featuredProject.year ?? "Selected"}
            </p>
            <h3 className="font-display text-3xl font-semibold leading-tight text-text-primary">
              {featuredProject.title}
            </h3>
          </div>
        </div>

        <p className="mb-7 line-clamp-3 text-base leading-8 text-text-secondary">
          {featuredProject.description}
        </p>

        <div className="mb-7 flex flex-wrap gap-2">
          {featuredProject.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 border-t border-border pt-5">
          {featuredProject.liveUrl && (
            <a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              <FiExternalLink size={14} />
              {featuredProject.liveUrlLabel ?? "Open"}
            </a>
          )}
          {featuredProject.githubUrl && (
            <a
              href={featuredProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-bright hover:text-text-primary"
            >
              <FiGithub size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [focusIndex, setFocusIndex] = useState(0);

  const focusItems = [
    "Open to software roles",
    siteConfig.subtitles[focusIndex % siteConfig.subtitles.length],
  ];

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setFocusIndex((i) => (i + 1) % focusItems.length), 2600);
    return () => clearInterval(t);
  }, [focusItems.length]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-28 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-left"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent" />
          <AnimatePresence mode="wait">
            <motion.span
              key={focusIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease }}
              className="font-mono text-xs text-text-secondary"
            >
              {focusItems[focusIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Name */}
        <div className="mb-5 overflow-hidden pb-3">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="font-display font-bold text-text-primary"
            style={{
              fontSize: "clamp(4.4rem, 12vw, 10rem)",
              lineHeight: 0.9,
              letterSpacing: "0",
            }}
          >
            {siteConfig.displayName}
          </motion.h1>
        </div>

        {/* Cycling role */}
        <div className="mb-7 h-7 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease }}
              className="font-mono text-sm text-accent"
            >
              {roles[roleIndex]} for product-minded teams
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-9 max-w-2xl text-base leading-8 text-text-secondary md:text-lg"
        >
          {siteConfig.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-background"
          >
            View selected work
            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-text-secondary transition-colors duration-200 hover:border-border-bright hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-background"
          >
            <FiMail size={14} />
            Contact
          </a>
        </motion.div>

        </div>

        <WorkPreview />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex h-8 w-4 items-start justify-center rounded-full border border-border p-1"
        >
          <div className="h-1.5 w-0.5 rounded-full bg-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
