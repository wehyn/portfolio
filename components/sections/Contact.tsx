"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin } from "react-icons/fi";
import { siteConfig } from "@/data/site";
import Footer from "@/components/layout/Footer";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
type CopyState = "idle" | "copied" | "failed";

export default function Contact() {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const copyTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    };
  }, []);

  async function copyEmail() {
    if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);

    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }

    copyTimer.current = window.setTimeout(() => setCopyState("idle"), 2600);
  }

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      className="story-panel px-5 pb-8 pt-16 sm:px-8 lg:px-16 lg:py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-[1440px] flex-col justify-center">
        <div className="grid items-end gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:gap-20">
          <div>
            <h2
              id="contact-heading"
              className="max-w-[10ch] font-display text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-text-primary"
            >
              Have a problem worth solving?
            </h2>
          </div>

          <div className="surface-card rounded-[1.75rem] p-5 sm:p-7">
            <a
              href={`mailto:${siteConfig.email}`}
              className="block break-all text-lg font-semibold tracking-[-0.02em] text-text-primary transition-colors hover:text-accent sm:text-xl"
            >
              {siteConfig.email}
            </a>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2.5 text-xs font-semibold text-surface transition-colors hover:bg-accent hover:text-text-primary"
              >
                Email Wayne <FiArrowUpRight aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface px-4 py-2.5 text-xs font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
              >
                {copyState === "copied" ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                {copyState === "copied" ? "Copied" : copyState === "failed" ? "Try again" : "Copy email"}
              </button>
            </div>

            <p role="status" aria-live="polite" className="mt-3 min-h-4 font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted">
              {copyState === "copied"
                ? "Email copied to clipboard."
                : copyState === "failed"
                  ? "Copy unavailable — select the address above."
                  : ""}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-xs font-semibold text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-xs font-semibold text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <FiGithub aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </motion.section>
  );
}
