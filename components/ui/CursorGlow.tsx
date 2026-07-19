"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const smoothX = useSpring(x, { stiffness: 520, damping: 42, mass: 0.16 });
  const smoothY = useSpring(y, { stiffness: 520, damping: 42, mass: 0.16 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
      style={{
        x: smoothX,
        y: smoothY,
        willChange: "transform",
        background:
          "radial-gradient(circle, rgba(169, 150, 255, 0.12) 0%, rgba(169, 150, 255, 0.04) 26%, rgba(169, 150, 255, 0) 64%)",
      }}
    />
  );
}
