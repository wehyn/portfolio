"use client";

import Lenis from "lenis";
import { useEffect, useRef, useState, type ReactNode } from "react";

const DESKTOP_BREAKPOINT = 1024;

interface HorizontalStoryProps {
  children: ReactNode;
}

interface StoryMetrics {
  maxTranslate: number;
  rootTop: number;
}

interface StoryNavigationDetail {
  id: string;
}

export default function HorizontalStory({ children }: HorizontalStoryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [stageEnabled, setStageEnabled] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!root || !viewport || !track) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const enabledRef = { current: false };
    const metrics: StoryMetrics = { maxTranslate: 0, rootTop: 0 };
    let lenis: Lenis | null = null;
    let animationFrame: number | null = null;
    let measureFrame: number | null = null;
    let initialHashTimeout: number | null = null;
    let initialHashHandled = false;

    const updatePosition = () => {
      if (!enabledRef.current) return;

      const offset = Math.min(
        Math.max(window.scrollY - metrics.rootTop, 0),
        metrics.maxTranslate
      );

      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const measure = () => {
      measureFrame = null;
      if (!enabledRef.current) return;

      const viewportWidth = viewport.clientWidth || window.innerWidth;
      const maxTranslate = Math.max(0, track.scrollWidth - viewportWidth);
      const rootRect = root.getBoundingClientRect();

      metrics.maxTranslate = maxTranslate;
      metrics.rootTop = rootRect.top + window.scrollY;
      root.style.setProperty("--story-vh", `${window.innerHeight}px`);

      const rootHeight = window.innerHeight + maxTranslate;
      const nextHeight = `${rootHeight}px`;
      if (root.style.height !== nextHeight) {
        root.style.height = nextHeight;
      }

      updatePosition();

      if (!initialHashHandled && window.location.hash) {
        initialHashHandled = true;
        const id = decodeURIComponent(window.location.hash.slice(1));
        const target = document.getElementById(id);
        if (target) {
          initialHashTimeout = window.setTimeout(() => navigateToTarget(id), 0);
        }
      }
    };

    const scheduleMeasure = () => {
      if (measureFrame !== null) return;
      measureFrame = window.requestAnimationFrame(measure);
    };

    const animationTick = (time: number) => {
      if (!enabledRef.current) return;
      lenis?.raf(time);
      updatePosition();
      animationFrame = window.requestAnimationFrame(animationTick);
    };

    const navigateToTarget = (id: string) => {
      if (!enabledRef.current) return;

      const target = document.getElementById(id);
      if (!target) return;

      measure();

      const trackRect = track.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const targetOffset = Math.min(
        Math.max(targetRect.left - trackRect.left, 0),
        metrics.maxTranslate
      );
      const targetScroll = metrics.rootTop + targetOffset;

      if (lenis) {
        lenis.scrollTo(targetScroll, { duration: 0.75 });
      } else {
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    };

    const handleStoryNavigation = (event: Event) => {
      if (!enabledRef.current) return;

      const detail = (event as CustomEvent<StoryNavigationDetail>).detail;
      if (!detail?.id || !document.getElementById(detail.id)) return;

      event.preventDefault();
      const nextHash = `#${detail.id}`;
      if (window.location.hash !== nextHash) {
        window.history.pushState({}, "", nextHash);
      }
      navigateToTarget(detail.id);
    };

    const handleHistoryNavigation = () => {
      if (!enabledRef.current) return;

      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id && document.getElementById(id)) {
        navigateToTarget(id);
        return;
      }

      if (lenis) {
        lenis.scrollTo(metrics.rootTop, { duration: 0.75 });
      } else {
        window.scrollTo({ top: metrics.rootTop, behavior: "smooth" });
      }
    };

    const disableStage = () => {
      enabledRef.current = false;

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      if (measureFrame !== null) {
        window.cancelAnimationFrame(measureFrame);
        measureFrame = null;
      }
      if (initialHashTimeout !== null) {
        window.clearTimeout(initialHashTimeout);
        initialHashTimeout = null;
      }

      lenis?.destroy();
      lenis = null;
      root.style.height = "";
      root.style.removeProperty("--story-vh");
      track.style.transform = "";
      root.dataset.stageEnabled = "false";
      setStageEnabled(false);
    };

    const enableStage = () => {
      if (enabledRef.current) {
        scheduleMeasure();
        return;
      }

      try {
        lenis = new Lenis({
          autoRaf: false,
          anchors: true,
          allowNestedScroll: true,
          respectReducedMotion: true,
          lerp: 0.12,
          overscroll: false,
        });
      } catch {
        disableStage();
        return;
      }

      enabledRef.current = true;
      root.dataset.stageEnabled = "true";
      setStageEnabled(true);
      animationFrame = window.requestAnimationFrame(animationTick);
      scheduleMeasure();
    };

    const updateMode = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT && !reducedMotionQuery.matches) {
        enableStage();
      } else {
        disableStage();
      }
    };

    if (typeof ResizeObserver === "undefined") return;

    const resizeObserver = new ResizeObserver(scheduleMeasure);
    resizeObserver.observe(root);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    const images = Array.from(root.querySelectorAll("img"));
    const handleImageLoad = () => scheduleMeasure();
    images.forEach((image) => {
      image.addEventListener("load", handleImageLoad);
      if (image.complete) {
        image.decode?.().then(handleImageLoad).catch(() => undefined);
      }
    });

    document.addEventListener("portfolio:navigate", handleStoryNavigation);
    window.addEventListener("popstate", handleHistoryNavigation);
    window.addEventListener("resize", updateMode);
    window.visualViewport?.addEventListener("resize", scheduleMeasure);

    if (reducedMotionQuery.addEventListener) {
      reducedMotionQuery.addEventListener("change", updateMode);
    } else {
      reducedMotionQuery.addListener(updateMode);
    }

    updateMode();

    return () => {
      resizeObserver.disconnect();
      images.forEach((image) => image.removeEventListener("load", handleImageLoad));
      document.removeEventListener("portfolio:navigate", handleStoryNavigation);
      window.removeEventListener("popstate", handleHistoryNavigation);
      window.removeEventListener("resize", updateMode);
      window.visualViewport?.removeEventListener("resize", scheduleMeasure);

      if (reducedMotionQuery.removeEventListener) {
        reducedMotionQuery.removeEventListener("change", updateMode);
      } else {
        reducedMotionQuery.removeListener(updateMode);
      }

      disableStage();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="story-stage"
      data-stage-enabled={stageEnabled ? "true" : "false"}
    >
      <div ref={viewportRef} className="story-viewport">
        <div ref={trackRef} className="story-track">
          {children}
        </div>
      </div>
    </div>
  );
}
