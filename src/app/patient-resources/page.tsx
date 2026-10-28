import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { faq } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Patient Resources | Beacon Ridge Multispecialty Hospital",
  description:
    "Visiting hours, what to bring, the discharge process, and frequently asked questions for Beacon Ridge patients.",
  robots: { index: false },
  alternates: { canonical: "/patient-resources" },
};

export default function PatientResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} body={faq.intro} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-10">
          {faq.groups.map((group) => (
            <div key={group.category}>
              <h2 className="font-display text-xl text-ink">{group.category}</h2>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <details key={item.question} className="group rounded-md border border-ink/10 bg-surface p-4">
                    <summary className="cursor-pointer list-none font-body text-sm font-semibold text-ink marker:content-none">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm text-ink-soft">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-dim pb-16 pt-6">
        <div className="mx-auto max-w-3xl space-y-4 px-6 lg:px-10">
          <GlassPanel variant="card" className="p-6">
            <p className="text-sm text-ink-soft">
              Need something not covered here? Reach out through our{" "}
              <a href="/contact" className="font-semibold text-harbor-600 underline">
                Contact page
              </a>
              .
            </p>
          </GlassPanel>
          <DisclaimerBanner text={faq.disclaimer} />
        </div>
      </section>
    </>
  );
}
