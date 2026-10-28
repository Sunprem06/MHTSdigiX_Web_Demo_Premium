"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Scroll-linked parallax layer. Unlike Standard's single-factor version,
 * this project stacks several of these per section with different `depth`
 * values (0 = no movement, 1 = fastest) to get genuine multi-layer
 * scroll-linked depth — the Premium-tier "multiple parallax layers" row in
 * WEBSITE-PACKAGE-STANDARDS.md. One passive, rAF-throttled scroll listener
 * per instance; fully disabled under `prefers-reduced-motion`.
 */
export function ParallaxLayer({
  depth = 0.2,
  className = "",
  children,
}: {
  depth?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      setOffset(distanceFromCenter * depth * -0.12);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [depth, reducedMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={reducedMotion ? undefined : { transform: `translate3d(0, ${offset}px, 0)` }}
    >
      {children}
    </div>
  );
}
