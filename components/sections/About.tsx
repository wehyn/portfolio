"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeader
          index="01"
          title="Builds with product sense"
          subtitle="Full-stack execution, polished interfaces, and practical AI features."
        />

        <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
            className="flex items-center"
          >
            <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="border-b border-border bg-surface-elevated px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                Profile
              </div>
              <div className="p-5">
                <div className="relative mx-auto h-72 w-64">
                  <Image
                    src="/images/memoji.png"
                    alt="Wayne memoji"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4">
                  {["Next.js", "TypeScript", "AI / LLMs", "Product UI"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background px-2.5 py-2 text-center font-mono text-[11px] text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 text-lg leading-8 text-text-primary">
              {siteConfig.bio}
            </p>
            <p className="mb-8 text-base leading-8 text-text-secondary">
              I thrive in collaborative environments where quality and
              craftsmanship matter. From system design to polished UI, I take
              ownership across the full stack and hold high standards for
              reliability, maintainability, and developer experience. I also
              integrate AI and LLMs into products — building matching engines,
              chatbots, and intelligent workflows that solve real user problems.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Product", "Turns messy needs into usable flows."],
                ["Frontend", "Builds polished, responsive interfaces."],
                ["Backend", "Ships reliable APIs and data flows."],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-border-bright"
                >
                  <p className="mb-2 font-mono text-xs text-accent">{title}</p>
                  <p className="text-sm leading-6 text-text-secondary">{copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
