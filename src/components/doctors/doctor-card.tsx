import { DoctorAvatar } from "@/components/ui/illustrations";
import { GlassPanel } from "@/components/ui/glass-panel";
import type { Doctor } from "@/content/site-content";

export function DoctorCard({ doctor, compact = false }: { doctor: Doctor; compact?: boolean }) {
  return (
    <GlassPanel variant="card" className={compact ? "flex items-center gap-4 p-4" : "p-6"}>
      <DoctorAvatar initials={doctor.initials} className={compact ? "h-14 w-14 shrink-0" : "h-20 w-20"} />
      <div className={compact ? "" : "mt-4"}>
        <h3 className="font-display text-lg text-ink">{doctor.name}</h3>
        <p className="text-sm font-semibold text-harbor-600">{doctor.role}</p>
        <p className="text-xs text-ink-faint">{doctor.experienceYears}</p>
        {!compact && <p className="mt-3 text-sm leading-relaxed text-ink-soft">{doctor.bio}</p>}
        {!compact && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {doctor.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-sm bg-mint-500/10 px-2 py-1 text-xs font-medium text-mint-700"
              >
                {area}
              </li>
            ))}
          </ul>
        )}
      </div>
    </GlassPanel>
  );
}
