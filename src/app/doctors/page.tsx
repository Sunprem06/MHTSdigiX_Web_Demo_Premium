import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { DoctorCard } from "@/components/doctors/doctor-card";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { doctors } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Our Doctors | Beacon Ridge Multispecialty Hospital",
  description:
    "Meet Beacon Ridge's fictional, illustrative consultant team across cardiology, orthopedics, neurology, pediatrics, maternity and more.",
  robots: { index: false },
  alternates: { canonical: "/doctors" },
};

export default function DoctorsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={doctors.eyebrow} heading={doctors.heading} body={doctors.intro} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <DisclaimerBanner text={doctors.disclaimer} />
        </div>
      </section>
    </>
  );
}
