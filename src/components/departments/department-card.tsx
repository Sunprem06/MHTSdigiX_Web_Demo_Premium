import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icons";
import { GlassPanel } from "@/components/ui/glass-panel";
import type { Department } from "@/content/site-content";

export function DepartmentCard({ department }: { department: Department }) {
  return (
    <Link href={`/departments/${department.slug}`} className="group block">
      <GlassPanel
        variant="card"
        className="h-full p-6 transition-transform duration-300 ease-editorial group-hover:-translate-y-1"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-harbor-500/10 text-harbor-600">
          <Icon name={department.icon as IconName} className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-xl text-ink">{department.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{department.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mint-600 group-hover:gap-2">
          Learn more <Icon name="chevron-right" className="h-4 w-4" />
        </span>
      </GlassPanel>
    </Link>
  );
}
