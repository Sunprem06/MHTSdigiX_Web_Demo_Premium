import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { Icon, type IconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { DoctorCard } from "@/components/doctors/doctor-card";
import {
  departments,
  getDepartmentBySlug,
  getDoctorsByIds,
  blog,
} from "@/content/site-content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return departments.departments.map((department) => ({ slug: department.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) return {};
  return {
    title: `${department.name} | Beacon Ridge Multispecialty Hospital`,
    description: department.summary,
    robots: { index: false },
    alternates: { canonical: `/departments/${department.slug}` },
  };
}

export default async function DepartmentDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) notFound();

  const relatedDoctors = getDoctorsByIds(department.relatedDoctorIds);
  const relatedPosts = blog.posts.filter((post) => department.relatedBlogSlugs.includes(post.slug));

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <Link href="/departments" className="text-sm text-mint-300 hover:text-mint-200">
            ← All Departments
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-surface/10">
              <Icon name={department.icon as IconName} className="h-6 w-6 text-mint-300" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl">{department.name}</h1>
          </div>
          <p className="mt-4 max-w-2xl text-surface/80">{department.summary}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-10">
          <ParallaxLayer depth={0.1}>
            <div>
              <h2 className="font-display text-xl text-ink">Overview</h2>
              <p className="mt-3 text-ink-soft">{department.overview}</p>

              <h2 className="mt-8 font-display text-xl text-ink">Commonly Managed</h2>
              <ul className="mt-3 space-y-2">
                {department.commonlyManaged.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 font-display text-xl text-ink">Our Approach</h2>
              <p className="mt-3 text-ink-soft">{department.approach}</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer depth={0.2}>
            <GlassPanel variant="card" className="p-6">
              <h3 className="font-display text-lg text-ink">Book with this department</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Request an appointment and tell us this is the department you need.
              </p>
              <Button href="/appointment" variant="accent" className="mt-4 w-full justify-center">
                Book an Appointment
              </Button>
            </GlassPanel>
          </ParallaxLayer>
        </div>
      </section>

      {relatedDoctors.length > 0 && (
        <section className="bg-surface-dim py-16">
          <div className="mx-auto max-w-content px-6 lg:px-10">
            <SectionHeading heading="Consultants in this department" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-content px-6 lg:px-10">
            <SectionHeading heading="Related reading" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <GlassPanel variant="card" className="p-6 transition-colors hover:border-mint-500">
                    <h3 className="font-display text-lg text-ink">{post.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{post.excerpt}</p>
                  </GlassPanel>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <DisclaimerBanner text={departments.disclaimer} />
        </div>
      </section>
    </>
  );
}
