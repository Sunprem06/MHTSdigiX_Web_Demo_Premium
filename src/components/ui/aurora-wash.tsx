/**
 * Animated, low-opacity ambient gradient wash — the "aurora" layer behind
 * hero/signature sections. Unlike Standard's static wash, this one drifts
 * slowly (22s loop, see tailwind.config.ts `aurora-drift`), which is what
 * "full-strength" premium-3d-uiux means at this tier. Capped opacity and a
 * slow duration keep it ambient lighting, not a distracting animation; fully
 * frozen under `prefers-reduced-motion` via the `motion-reduce:` variant.
 */
export function AuroraWash({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -left-1/4 -top-1/3 h-[70%] w-[70%] animate-aurora-drift rounded-full bg-[radial-gradient(circle,rgba(82,98,194,0.35),transparent_65%)] blur-3xl motion-reduce:animate-none" />
      <div className="absolute -right-1/4 top-1/4 h-[60%] w-[60%] animate-aurora-drift rounded-full bg-[radial-gradient(circle,rgba(47,174,148,0.3),transparent_65%)] blur-3xl motion-reduce:animate-none [animation-delay:-8s]" />
      <div className="absolute bottom-[-20%] left-1/4 h-[55%] w-[55%] animate-aurora-drift rounded-full bg-[radial-gradient(circle,rgba(140,124,240,0.28),transparent_65%)] blur-3xl motion-reduce:animate-none [animation-delay:-14s]" />
    </div>
  );
}
