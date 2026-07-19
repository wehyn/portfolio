"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { certifications } from "@/data/certifications";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 border-t border-border pt-7 md:mb-16" />

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-bright"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border bg-surface-elevated px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {certification.issuer}
                </p>
                <span className="shrink-0 font-mono text-[11px] text-text-muted">
                  {certification.issued}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="max-w-lg font-display text-xl font-semibold leading-tight text-text-primary">
                  {certification.name}
                </h3>

                <p className="mt-3 text-sm text-text-secondary">
                  {certification.expires
                    ? `Expires ${certification.expires}`
                    : "Credential earned"}
                </p>

                {certification.skills && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {certification.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-[11px] text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View credential for ${certification.name}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-surface"
                >
                  View credential
                  <FiArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
