"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
      className="story-panel px-5 py-16 sm:px-8 lg:px-16 lg:py-10"
    >
      <div className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-[1440px] flex-col justify-center">
        <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end lg:gap-20">
          <div>
            <h2
              id="about-heading"
              className="max-w-[13ch] font-display text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-text-primary"
            >
              Make the complicated feel considered.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            I bring a product-minded approach to engineering, bridging technical execution with a clear and useful experience for the people on the other side of the screen.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
