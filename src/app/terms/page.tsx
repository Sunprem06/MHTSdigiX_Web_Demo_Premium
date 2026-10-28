import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { legal } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Terms of Use | Beacon Ridge Multispecialty Hospital",
  description: "Placeholder terms of use for the Beacon Ridge Multispecialty Hospital concept demo.",
  robots: { index: false },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading heading={legal.terms.heading} body={legal.terms.intro} />
        <div className="mt-8 space-y-6">
          {legal.terms.sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-lg text-ink">{section.title}</h2>
              <p className="mt-2 text-sm text-ink-soft">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
