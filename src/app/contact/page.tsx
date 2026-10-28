import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { MapPlaceholder } from "@/components/ui/illustrations";
import { InquiryForm } from "./inquiry-form";
import { Icon } from "@/components/ui/icons";
import { contact, footer } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Contact Us | Beacon Ridge Multispecialty Hospital",
  description: "Contact Beacon Ridge — general inquiries, second-opinion requests, billing questions and feedback.",
  robots: { index: false },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
          <GlassPanel variant="card" className="p-6 sm:p-8">
            <InquiryForm />
          </GlassPanel>

          <div className="space-y-6">
            <GlassPanel variant="card" className="p-6">
              <h3 className="font-display text-lg text-ink">Reach us directly (placeholder)</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li className="flex items-center gap-2">
                  <Icon name="phone" className="h-4 w-4 text-harbor-600" />
                  {footer.contactPlaceholder.phone}
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="mail" className="h-4 w-4 text-harbor-600" />
                  {footer.contactPlaceholder.email}
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="map-pin" className="h-4 w-4 text-harbor-600" />
                  {footer.contactPlaceholder.address}
                </li>
              </ul>
            </GlassPanel>

            <MapPlaceholder className="w-full rounded-lg" />
            <p className="text-xs text-ink-faint">{contact.mapNote}</p>
          </div>
        </div>
      </section>
    </>
  );
}
