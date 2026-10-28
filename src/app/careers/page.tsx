import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { careers } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Careers | Beacon Ridge Multispecialty Hospital",
  description: "Illustrative sample openings at Beacon Ridge Multispecialty Hospital — not active job postings.",
  robots: { index: false },
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={careers.eyebrow} heading={careers.heading} body={careers.intro} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {careers.openings.map((opening) => (
              <GlassPanel key={opening.title} variant="card" className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-mint-600">{opening.type}</p>
                <h3 className="mt-2 font-display text-lg text-ink">{opening.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{opening.description}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <DisclaimerBanner text={careers.disclaimer} />
        </div>
      </section>
    </>
  );
}
