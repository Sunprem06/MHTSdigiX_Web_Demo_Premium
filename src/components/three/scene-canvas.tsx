"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PulseScene } from "./pulse-scene";
import { SceneErrorBoundary } from "./scene-error-boundary";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { useWebglSupport } from "@/lib/use-webgl-support";
import { signatureExperience } from "@/content/site-content";

function ScenePoster() {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-br from-harbor-600 via-harbor-500 to-ink"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(175,163,247,0.3),transparent_55%)]" />
    </div>
  );
}

function SceneLoading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink/90">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-mint-300/40 border-t-violet-400" />
      <span className="sr-only">Loading the interactive scene…</span>
    </div>
  );
}

export function SceneCanvas() {
  const support = useWebglSupport();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [sceneFailed, setSceneFailed] = useState(false);
  const [activeBeat, setActiveBeat] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || reducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        setProgress(self.progress);
        setActiveBeat(Math.min(2, Math.floor(self.progress * 3)));
      },
    });

    return () => trigger.kill();
  }, [reducedMotion]);

  const showCanvas = support === "supported" && !sceneFailed;
  const checking = support === "checking";
  const showPoster = (!checking && !showCanvas) || sceneFailed;

  return (
    <div ref={sectionRef} className="relative h-[240vh] w-full bg-ink">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {showPoster && <ScenePoster />}
        {showCanvas && (
          <SceneErrorBoundary fallback={<ScenePoster />} onError={() => setSceneFailed(true)}>
            <Suspense fallback={<SceneLoading />}>
              <Canvas
                dpr={[1, 1.75]}
                camera={{ fov: 42, position: [0, 1.8, 8.2] }}
                gl={{ antialias: true, powerPreference: "high-performance" }}
              >
                <PulseScene progress={progress} reducedMotion={reducedMotion} />
              </Canvas>
            </Suspense>
          </SceneErrorBoundary>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/30" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-violet-400">
              {signatureExperience.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl text-surface sm:text-4xl lg:text-5xl">
              {signatureExperience.heading}
            </h2>
            <p className="mt-4 max-w-xl text-sm text-surface/80 sm:text-base">
              {signatureExperience.body}
            </p>
            {showPoster && (
              <p className="mt-4 max-w-xl text-xs text-surface/70">
                {signatureExperience.fallbackNote}
              </p>
            )}

            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4" aria-live="polite">
              {signatureExperience.beats.map((beat, i) => (
                <li
                  key={beat.label}
                  className={`rounded-md border px-4 py-3 backdrop-blur-sm transition-colors duration-500 ${
                    i === activeBeat
                      ? "border-violet-400/60 bg-surface/10 text-surface"
                      : "border-surface/15 bg-surface/5 text-surface/60"
                  }`}
                >
                  <p className="font-display text-sm uppercase tracking-wide">{beat.label}</p>
                  <p className="mt-1 text-xs text-surface/70">{beat.heading}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
