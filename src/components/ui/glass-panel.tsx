import type { HTMLAttributes } from "react";

type Variant = "card" | "modal" | "dropdown" | "bar";

const VARIANT_CLASSES: Record<Variant, string> = {
  card: "rounded-lg border border-white/40 bg-surface/70 shadow-lift backdrop-blur-md",
  modal: "rounded-lg border border-white/30 bg-ink/80 shadow-panel backdrop-blur-xl",
  dropdown: "rounded-md border border-white/40 bg-surface/90 shadow-panel backdrop-blur-lg",
  bar: "border-b border-white/30 bg-surface/70 shadow-sm backdrop-blur-md",
};

/**
 * The shared glassmorphism surface — only used where something is genuinely
 * layered over page content (sticky header, dropdown over nav, modal over a
 * grid, card over the aurora wash), per the "never decorative-only" 3D/motion
 * rule in the global premium-3d-uiux standard. See DESIGN.md.
 */
export function GlassPanel({
  variant = "card",
  className = "",
  children,
  ...rest
}: {
  variant?: Variant;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${VARIANT_CLASSES[variant]} ${className}`} {...rest}>
      {children}
    </div>
  );
}
