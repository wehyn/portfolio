"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { certifications } from "@/data/certifications";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-28 md:px-10 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <h2 className="sr-only">Certifications</h2>
        <div className="mx-auto max-w-5xl border-t border-border">
            {certifications.map((certification, index) => (
              <motion.a
                key={certification.id}
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.45, delay: index * 0.035, ease }}
                className="group grid gap-3 border-b border-border py-6 transition-colors sm:grid-cols-[0.2fr_0.68fr_0.12fr] sm:items-center"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{certification.issuer}</span>
                <div>
                  <h3 className="text-base text-text-primary transition-transform duration-300 group-hover:translate-x-2">{certification.name}</h3>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">Issued {certification.issued}</p>
                </div>
                <FiArrowUpRight className="hidden justify-self-end text-text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:block" />
              </motion.a>
            ))}
        </div>
      </div>
    </section>
  );
}
