import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { DepartmentCard } from "@/components/departments/department-card";
import { GlassPanel } from "@/components/ui/glass-panel";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { Icon, type IconName } from "@/components/ui/icons";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { departments } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Departments | Beacon Ridge Multispecialty Hospital",
  description:
    "Explore Beacon Ridge's core departments — cardiology, orthopedics, neurology, pediatrics, maternity and emergency care, plus more specialties on request.",
  robots: { index: false },
  alternates: { canonical: "/departments" },
};

export default function DepartmentsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow={departments.hubEyebrow}
            heading={departments.hubHeading}
            body={departments.hubIntro}
            light
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.departments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dim py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading heading="More Specialties" body="Available by request — reach out and we'll connect you with the right consultant." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.moreSpecialties.map((specialty) => (
              <Link key={specialty.name} href="/contact">
                <GlassPanel
                  variant="card"
                  className="flex items-center gap-3 p-4 transition-colors hover:border-mint-500"
                >
                  <Icon name={specialty.icon as IconName} className="h-6 w-6 text-mint-600" />
                  <span className="text-sm font-medium text-ink">{specialty.name}</span>
                </GlassPanel>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <DisclaimerBanner text={departments.disclaimer} />
        </div>
      </section>
    </>
  );
}
