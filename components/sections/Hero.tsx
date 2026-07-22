"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { siteConfig } from "@/data/site";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function OrbitalStage() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 70, damping: 22 });
  const y = useSpring(pointerY, { stiffness: 70, damping: 22 });
  const rotateX = useTransform(y, [-1, 1], [5, -5]);
  const rotateY = useTransform(x, [-1, 1], [-6, 6]);

  return (
    <motion.div
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
        pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
      }}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative mx-auto aspect-square w-full max-w-[580px]"
      aria-hidden="true"
    >
      <div className="absolute inset-[7%] rounded-full border border-text-primary/10" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[16%] rounded-full border border-accent/30"
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent text-accent shadow-[0_0_28px_currentColor]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[28%] rounded-full border border-dashed border-text-primary/15"
      />

      <div className="absolute inset-[35%] rounded-full bg-accent/20 blur-3xl" />
      <div className="glass absolute inset-[31%] flex rotate-6 items-center justify-center rounded-[42%]">
        <div className="h-[68%] w-[68%] -rotate-6 overflow-hidden rounded-[40%] border border-accent/30 bg-background/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/memoji.png" alt="" className="h-full w-full object-contain" />
        </div>
      </div>

      <div className="glass absolute left-[2%] top-[21%] rounded-full px-4 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-text-secondary">
        Manila · PH
      </div>
      <div className="glass absolute bottom-[14%] right-[1%] max-w-40 rounded-2xl px-4 py-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">Current signal</p>
        <p className="mt-1 text-xs text-text-primary">Building intelligent products</p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setRoleIndex((index) => (index + 1) % siteConfig.subtitles.length),
      2800
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 pb-16 pt-32 md:px-10 lg:flex lg:items-center lg:py-32">
      <div className="absolute left-[8%] top-24 h-px w-28 bg-gradient-to-r from-accent/70 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Available for ambitious builds
          </motion.div>

          <h1>
            <span className="block pb-[0.12em]">
              <motion.span
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease }}
                className="block font-display text-[clamp(4.6rem,11vw,10rem)] font-light leading-[0.82] tracking-[-0.055em] text-text-primary"
              >
                Wayne
              </motion.span>
            </span>
            <span className="block pb-5 pt-4">
              <motion.span
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease }}
                className="ml-[12%] block font-display text-[clamp(4.2rem,10vw,9rem)] font-light italic leading-[0.78] tracking-[-0.055em] text-accent"
              >
                Garcia
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 grid max-w-2xl gap-7 border-t border-text-primary/10 pt-6 sm:grid-cols-[0.78fr_1.22fr]"
          >
            <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.18em] text-accent">
              {siteConfig.subtitles[roleIndex]}
              <br />for product-minded teams
            </p>
            <div>
              <p className="text-balance text-base leading-7 text-text-secondary sm:text-lg">
                I turn complex systems into digital experiences that feel inevitable: useful, expressive, and built to last.
              </p>
              <div className="mt-6 flex flex-wrap gap-5">
                <a href="#projects" className="group inline-flex items-center gap-2 text-sm text-text-primary">
                  Enter selected work
                  <FiArrowDownRight className="text-accent transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary">
                  GitHub <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, ease }}>
          <OrbitalStage />
        </motion.div>
      </div>
    </section>
  );
}
