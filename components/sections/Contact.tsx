"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import { siteConfig } from "@/data/site";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-20 pt-28 md:px-10 lg:pt-44">
      <div className="absolute bottom-0 left-1/2 h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease }}
        className="glass relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-14 sm:px-10 md:py-20 lg:px-20"
      >
        <h2 className="sr-only">Contact</h2>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Open channel
        </div>

        <div className="mt-8 flex flex-col gap-8 border-t border-border pt-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted">Start with an email</p>
            <a href={`mailto:${siteConfig.email}`} className="break-all text-lg text-text-primary transition-colors hover:text-accent sm:text-2xl">{siteConfig.email}</a>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-secondary hover:border-accent/50 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50">
              <AnimatePresence mode="wait" initial={false}>
                {copied ? <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }}><FiCheck className="text-accent" /></motion.span> : <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }}><FiCopy /></motion.span>}
              </AnimatePresence>
              {copied ? "Copied" : "Copy"}
            </button>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">
              LinkedIn <FiArrowUpRight />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
