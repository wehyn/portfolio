"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function ProfileImage() {
  return (
    <div className="mx-auto flex w-full max-w-[300px] items-end justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/memoji.png"
        alt="Wayne Garcia's Memoji portrait"
        className="h-auto max-h-[min(55vh,400px)] w-full object-contain"
      />
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
            Wayne{" "}
            <span className="mt-2 block">Garcia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease }}
            className="mt-7 max-w-xl text-base leading-7 text-text-secondary sm:text-lg"
          >
            {siteConfig.bio}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.22, ease }}
          className="mx-auto w-full max-w-[620px]"
        >
          <ProfileImage />
        </motion.div>
      </div>
    </motion.section>
  );
}
