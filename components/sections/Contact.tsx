"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiCheck, FiGithub, FiLinkedin } from "react-icons/fi";
import { siteConfig } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

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
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeader
          index="04"
          title="Get In Touch"
          subtitle="Open to new opportunities, collaborations, and interesting conversations."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
          className="space-y-8"
        >
          {/* Email */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-hover font-display font-semibold text-text-primary transition-colors hover:text-accent"
              style={{ fontSize: "clamp(1.4rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              {siteConfig.email}
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all hover:border-border-bright"
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
                    <FiCheck size={13} className="text-accent" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                  >
                    <FiCopy size={13} className="text-text-secondary" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { href: siteConfig.github, icon: FiGithub, label: "GitHub" },
              { href: siteConfig.linkedin, icon: FiLinkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text-secondary transition-all duration-200 hover:border-border-bright hover:text-text-primary"
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
