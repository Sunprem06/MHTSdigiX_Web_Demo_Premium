import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { FacilityIllustration } from "@/components/ui/illustrations";
import { about } from "@/content/site-content";

export const metadata: Metadata = {
  title: "About | Beacon Ridge Multispecialty Hospital",
  description:
    "About Beacon Ridge Multispecialty Hospital — a fictional concept-demo hospital built by MHTSdigiXR to showcase Premium-tier web design.",
  robots: { index: false },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={about.eyebrow} heading={about.heading} body={about.intro} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <ParallaxLayer depth={0.15}>
            <GlassPanel variant="card" className="p-8">
              <h2 className="font-display text-xl text-ink">Our Mission</h2>
              <p className="mt-3 text-ink-soft">{about.mission}</p>
            </GlassPanel>
          </ParallaxLayer>
          <ParallaxLayer depth={0.25}>
            <FacilityIllustration id="lobby" className="h-full w-full rounded-lg" />
          </ParallaxLayer>
        </div>
      </section>

      <section className="bg-surface-dim py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading heading="What we hold ourselves to" align="center" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {about.values.map((value) => (
              <GlassPanel key={value.title} variant="card" className="p-6">
                <h3 className="font-display text-lg text-ink">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{value.description}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading heading="Illustrative milestones" />
          <div className="mt-10 space-y-6 border-l-2 border-mint-500/30 pl-6">
            {about.milestones.map((milestone) => (
              <div key={milestone.label}>
                <p className="text-xs font-semibold uppercase tracking-wide text-mint-600">
                  {milestone.year}
                </p>
                <h3 className="mt-1 font-display text-lg text-ink">{milestone.label}</h3>
                <p className="mt-1 text-sm text-ink-soft">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dim py-16">
        <div className="mx-auto max-w-content space-y-4 px-6 lg:px-10">
          <GlassPanel variant="card" className="p-6">
            <h3 className="font-display text-lg text-ink">Accreditation</h3>
            <p className="mt-2 text-sm text-ink-soft">{about.accreditationNote}</p>
          </GlassPanel>
          <DisclaimerBanner text={about.disclaimer} />
        </div>
      </section>
    </>
  );
}
