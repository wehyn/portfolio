"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiCheck, FiGithub, FiLinkedin } from "react-icons/fi";
import { siteConfig } from "@/data/site";


const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 border-t border-border pt-7 md:mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
          className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div className="border-b border-border bg-surface-elevated px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted sm:px-8">
            Availability
          </div>
          {/* Email */}
          <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:items-end sm:p-8">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Best next step
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-words font-display font-semibold text-text-primary transition-colors hover:text-accent"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: 1.05, letterSpacing: "0" }}
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <button
                onClick={copyEmail}
                aria-label="Copy email"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-border-bright hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-background"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    >
                      <FiCheck size={14} className="text-accent" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                    >
                      <FiCopy size={14} />
                    </motion.span>
                  )}
                </AnimatePresence>
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-wrap gap-3 border-t border-border px-6 py-5 sm:px-8">
            {[
              { href: siteConfig.github, icon: FiGithub, label: "GitHub" },
              { href: siteConfig.linkedin, icon: FiLinkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm text-text-secondary transition-colors duration-200 hover:border-border-bright hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-background"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
