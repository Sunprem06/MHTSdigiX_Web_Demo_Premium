import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { insurance } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Insurance & Billing | Beacon Ridge Multispecialty Hospital",
  description: "Illustrative insurance partners and billing FAQ for Beacon Ridge Multispecialty Hospital.",
  robots: { index: false },
  alternates: { canonical: "/insurance-billing" },
};

export default function InsuranceBillingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={insurance.eyebrow} heading={insurance.heading} body={insurance.intro} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <h2 className="font-display text-xl text-ink">Illustrative Insurance Partners</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {insurance.insurers.map((insurer) => (
              <GlassPanel key={insurer.name} variant="card" className="p-5">
                <p className="font-display text-sm text-ink">{insurer.name}</p>
                <p className="mt-1 text-xs text-ink-faint">{insurer.note}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dim py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="font-display text-xl text-ink">Billing FAQ</h2>
          <div className="mt-6 space-y-3">
            {insurance.billingFaq.map((item) => (
              <details key={item.question} className="rounded-md border border-ink/10 bg-surface p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-ink">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <DisclaimerBanner text={insurance.disclaimer} />
        </div>
      </section>
    </>
  );
}
