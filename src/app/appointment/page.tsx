import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { AppointmentForm } from "./appointment-form";
import { appointment } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Book an Appointment | Beacon Ridge Multispecialty Hospital",
  description: "Request an appointment at Beacon Ridge — choose a department, visit type and preferred time.",
  robots: { index: false },
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={appointment.eyebrow} heading={appointment.heading} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <GlassPanel variant="card" className="p-6 sm:p-8">
            <AppointmentForm />
          </GlassPanel>
        </div>
      </section>
    </>
  );
}
