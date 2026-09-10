"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { siteConfig } from "@/data/site";
import StoryAnchor from "@/components/ui/StoryAnchor";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function ProfileFrame() {
  return (
    <div className="surface-card overflow-hidden rounded-[2rem] p-3 sm:p-4">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-background px-6 pb-7 pt-8 sm:px-10 sm:pt-10">
        <div className="absolute right-[-12%] top-[-22%] h-56 w-56 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto flex aspect-square max-w-[340px] items-end justify-center rounded-[35%] border border-border bg-surface-elevated">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/memoji.png"
            alt="Wayne Garcia's Memoji portrait"
            className="h-[92%] w-[82%] object-contain"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-surface px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-text-secondary shadow-card">
            WG · Manila
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <motion.section
      id="hero"
      aria-labelledby="hero-heading"
      className="story-panel px-5 pb-12 pt-28 sm:px-8 lg:px-16 lg:py-10"
    >
      <div className="mx-auto grid min-h-[calc(100dvh-8rem)] max-w-[1440px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <div className="max-w-2xl">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="max-w-[11ch] font-display text-[clamp(3.3rem,6.4vw,6.3rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-text-primary"
          >
            Build with clarity.
            <span className="mt-2 block text-accent">Ship with care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease }}
            className="mt-7 max-w-xl text-base leading-7 text-text-secondary sm:text-lg"
          >
            {siteConfig.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <StoryAnchor
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-surface transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-text-primary"
            >
              Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
            </StoryAnchor>
            <StoryAnchor
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              See selected work <FiArrowDownRight aria-hidden="true" />
            </StoryAnchor>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.22, ease }}
          className="mx-auto w-full max-w-[620px]"
        >
          <ProfileFrame />
        </motion.div>
      </div>
    </motion.section>
  );
}
