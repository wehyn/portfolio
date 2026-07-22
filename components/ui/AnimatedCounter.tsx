"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue, useTransform, motion } from "framer-motion";

interface ExtensionStats {
  users: number;
  rating: number;
  ratingCount: number;
}

export default function AnimatedCounter({ storeId }: { storeId: string }) {
  const [stats, setStats] = useState<ExtensionStats | null>(null);
  const hasAnimated = useRef(false);
  const count = useMotionValue(0);
  const display = useTransform(count, (v) =>
    Math.round(v).toLocaleString()
  );

  useEffect(() => {
    fetch(`/api/extension-stats?id=${storeId}`)
      .then((r) => r.json())
      .then((data: ExtensionStats) => setStats(data))
      .catch(() =>
        setStats({ users: 841, rating: 5.0, ratingCount: 8 })
      );
  }, [storeId]);

  useEffect(() => {
    if (!stats || hasAnimated.current) return;
    hasAnimated.current = true;
    count.set(0);
    const controls = animate(count, stats.users, {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    return () => {
      controls.stop();
      hasAnimated.current = false; // allow StrictMode remount to re-animate from 0
    };
  }, [stats, count]);

  if (!stats) {
    // Skeleton while loading
    return (
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
        <div className="h-3 w-32 animate-pulse rounded bg-surface-elevated" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
      <span className="font-mono text-xs text-text-secondary">
        <motion.span className="text-text-primary">{display}</motion.span>
        {" installed users · "}
        {stats.rating.toFixed(1)}
        {" ★"}
      </span>
    </div>
  );
}
