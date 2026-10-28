import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { Icon, type IconName } from "@/components/ui/icons";
import { services } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Services | Beacon Ridge Multispecialty Hospital",
  description:
    "Hospital-wide services at Beacon Ridge — diagnostics, pharmacy, ambulance, day care, telehealth follow-ups and physiotherapy.",
  robots: { index: false },
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={services.eyebrow} heading={services.heading} body={services.intro} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.services.map((service) => (
              <GlassPanel key={service.title} variant="card" className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-mint-500/10 text-mint-600">
                  <Icon name={service.icon as IconName} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{service.description}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <DisclaimerBanner text={services.disclaimer} />
        </div>
      </section>
    </>
  );
}
