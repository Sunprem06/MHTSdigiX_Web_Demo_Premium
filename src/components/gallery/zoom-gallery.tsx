"use client";

import { useEffect, useRef, useState } from "react";
import { FacilityIllustration } from "@/components/ui/illustrations";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Icon } from "@/components/ui/icons";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import type { GalleryItem } from "@/content/site-content";

export function ZoomGallery({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeIndex !== null) closeButtonRef.current?.focus();
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (event.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items.length]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <ParallaxLayer key={item.id} depth={0.08 + (i % 3) * 0.05}>
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full overflow-hidden rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harbor-400"
              aria-label={`Zoom into ${item.title}`}
            >
              <FacilityIllustration
                id={item.id}
                className="aspect-[4/3] w-full transition-transform duration-500 ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="font-display text-sm text-surface">{item.title}</p>
              </div>
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface/80 text-ink opacity-0 transition-opacity group-hover:opacity-100">
                <Icon name="zoom" className="h-4 w-4" />
              </div>
            </button>
          </ParallaxLayer>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <GlassPanel
            variant="modal"
            className="relative max-w-2xl p-4 text-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface/10 text-surface hover:bg-surface/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-400"
              aria-label="Close"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
            <FacilityIllustration id={active.id} className="max-h-[60vh] w-full rounded-md" />
            <h3 className="mt-4 font-display text-xl">{active.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-mint-300">{active.category}</p>
            <p className="mt-2 text-sm text-surface/80">{active.caption}</p>
            <div className="mt-4 flex justify-between text-sm text-surface/60">
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length))}
                className="flex items-center gap-1 hover:text-surface"
              >
                <Icon name="chevron-left" className="h-4 w-4" /> Previous
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length))}
                className="flex items-center gap-1 hover:text-surface"
              >
                Next <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </div>
          </GlassPanel>
        </div>
      )}
    </>
  );
}
