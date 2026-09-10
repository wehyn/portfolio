"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

interface ExtensionStats {
  users: number;
  rating: number;
  ratingCount: number;
}

export default function AnimatedCounter({ storeId }: { storeId: string }) {
  const [stats, setStats] = useState<ExtensionStats | null>(null);
  const hasAnimated = useRef(false);
  const count = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const display = useTransform(count, (value) => Math.round(value).toLocaleString());

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/extension-stats?id=${storeId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load extension stats");
        return response.json();
      })
      .then((data: ExtensionStats) => {
        if (!cancelled) setStats(data);
      })
      .catch(() => {
        if (!cancelled) setStats({ users: 841, rating: 5.0, ratingCount: 8 });
      });

    return () => {
      cancelled = true;
    };
  }, [storeId]);

  useEffect(() => {
    if (!stats || hasAnimated.current) return;

    hasAnimated.current = true;
    count.set(prefersReducedMotion ? stats.users : 0);

    if (prefersReducedMotion) return;

    const controls = animate(count, stats.users, {
      duration: 1.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    });

    return () => {
      controls.stop();
      hasAnimated.current = false;
    };
  }, [count, prefersReducedMotion, stats]);

  if (!stats) {
    return (
      <div className="flex items-center gap-2" aria-label="Loading extension statistics">
        <span className="h-1.5 w-1.5 rounded-full bg-accent/50" aria-hidden="true" />
        <div className="h-3 w-36 animate-pulse rounded bg-background" />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">
        <motion.span className="font-medium text-text-primary">{display}</motion.span>
        {" installed users · "}
        {stats.rating.toFixed(1)}
        {" ★ · "}
        {stats.ratingCount} ratings
      </span>
    </div>
  );
}
