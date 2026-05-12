"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "UI/UX Enthusiast",
  "Open Source Builder",
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center md:px-10"
    >
      <div className="max-w-3xl">

        {/* Name */}
        <div className="overflow-hidden mb-4 pb-3">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="font-display font-bold text-text-primary"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.displayName}
          </motion.h1>
        </div>

        {/* Cycling role */}
        <div className="mb-6 h-7 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease }}
              className="font-mono text-sm text-accent"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mb-10 max-w-md text-base leading-relaxed text-text-secondary"
        >
          {siteConfig.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-text-primary px-7 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:shadow-[0_4px_24px_rgba(184,154,110,0.25)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-7 py-3 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-border-bright hover:text-text-primary"
          >
            Get In Touch
          </a>
        </motion.div>
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
