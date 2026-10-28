import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { ZoomGallery } from "@/components/gallery/zoom-gallery";
import { gallery } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Gallery | Beacon Ridge Multispecialty Hospital",
  description:
    "An illustrated look around Beacon Ridge's campus — lobby, patient rooms, pediatric play corner, diagnostics lab, healing garden and more.",
  robots: { index: false },
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={gallery.eyebrow} heading={gallery.heading} body={gallery.intro} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <ZoomGallery items={gallery.items} />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <DisclaimerBanner text={gallery.disclaimer} />
        </div>
      </section>
    </>
  );
}
