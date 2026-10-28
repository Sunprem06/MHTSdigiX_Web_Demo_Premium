import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { healthPackages } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Health Packages | Beacon Ridge Multispecialty Hospital",
  description:
    "Preventive health-checkup packages at Beacon Ridge — Essential Wellness, Executive Health, Women's Wellness and Cardiac Screening.",
  robots: { index: false },
  alternates: { canonical: "/health-packages" },
};

export default function HealthPackagesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow={healthPackages.eyebrow}
            heading={healthPackages.heading}
            body={healthPackages.intro}
            light
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {healthPackages.packages.map((pkg) => (
              <GlassPanel key={pkg.id} variant="card" className="flex flex-col p-6">
                <h3 className="font-display text-lg text-ink">{pkg.name}</h3>
                <p className="mt-2 text-sm font-semibold text-mint-600">{pkg.priceFrom}</p>
                <p className="mt-2 text-xs text-ink-faint">{pkg.recommendedFor}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/appointment" variant="secondary" className="mt-6 w-full justify-center">
                  Book This Package
                </Button>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <DisclaimerBanner text={healthPackages.disclaimer} />
        </div>
      </section>
    </>
  );
}
