"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { certifications } from "@/data/certifications";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="story-panel px-5 py-16 sm:px-8 lg:px-16 lg:py-10"
    >
      <div className="mx-auto grid min-h-[calc(100dvh-8rem)] max-w-[1440px] items-center gap-16 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
        <div>
          <h2
            id="certifications-heading"
            className="max-w-[10ch] font-display text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-text-primary"
          >
            Certificates.
          </h2>
        </div>

        <div className="surface-card divide-y divide-border overflow-hidden rounded-[1.75rem] sm:ml-8 lg:ml-0 lg:translate-y-4">
          {certifications.map((certification, index) => (
            <motion.a
              key={certification.id}
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, delay: index * 0.035, ease }}
              className="group grid gap-3 px-5 py-5 transition-colors hover:bg-background sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:gap-5 sm:px-7 sm:py-5"
              aria-label={certification.name}
            >
              <div>
                <h3 className="text-sm font-semibold leading-5 text-text-primary sm:text-[15px]">
                  {certification.name}
                </h3>
                <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
                  {certification.skills?.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted sm:text-right">
                <p>{certification.issued}</p>
                {certification.expires && <p className="mt-1">→ {certification.expires}</p>}
              </div>
              <FiArrowUpRight
                aria-hidden="true"
                className="hidden text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:block"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
