"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Story", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Credentials", href: "#certifications" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers = navLinks.map(({ href }) => {
      const element = document.querySelector(href);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActiveSection(href.slice(1)),
        { rootMargin: "-42% 0px -52% 0px" }
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6"
    >
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-5">
        <a href="#hero" className="flex items-center gap-3" aria-label="Back to top">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent font-mono text-[10px] font-medium text-background">
            WG
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary sm:block">
            Wayne Garcia
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors",
                activeSection === link.href.slice(1)
                  ? "text-accent"
                  : "text-text-muted hover:text-text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-accent/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent hover:text-background focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          Let&apos;s talk
        </a>
      </div>
    </motion.header>
  );
}
