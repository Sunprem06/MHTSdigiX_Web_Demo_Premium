import { brand } from "@/content/site-content";

export function DemoBadge() {
  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[calc(100vw-2rem)] rounded-sm border border-harbor-500/30 bg-surface/90 px-3 py-2 text-xs text-ink-soft shadow-lift backdrop-blur-md">
      <p className="font-semibold text-harbor-600">{brand.demoDisclosure}</p>
      <p className="mt-0.5 hidden sm:block">{brand.demoNote}</p>
    </div>
  );
}
