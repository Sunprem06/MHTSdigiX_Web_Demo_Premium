"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { hero } from "@/content/site-content";

const SLIDE_DURATION = 7000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const slides = hero.slides;

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [paused, reducedMotion, slides.length]);

  const slide = slides[index];

  return (
    <section
      className="relative overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AuroraWash />
      <div className="relative mx-auto flex min-h-[70vh] max-w-content flex-col justify-center px-6 py-24 lg:px-10">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-mint-300">
          {slide.eyebrow}
        </p>
        <h1 className="mt-4 whitespace-pre-line font-display text-4xl text-surface sm:text-5xl lg:text-6xl">
          {slide.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base text-surface/80 sm:text-lg">{slide.subhead}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/appointment" variant="accent">
            {slide.primaryCtaLabel}
          </Button>
          <Button href="/departments" variant="secondary" className="border-surface/40 text-surface hover:bg-surface/10">
            {slide.secondaryCtaLabel}
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-2" role="tablist" aria-label="Hero slides">
          {slides.map((s, i) => (
            <button
              key={s.eyebrow}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${s.eyebrow}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-rose-500" : "w-2.5 bg-surface/40"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {slides.length}: {slide.eyebrow}
      </p>
    </section>
  );
}
