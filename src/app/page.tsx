import { HeroSlider } from "@/components/home/hero-slider";
import { SceneCanvas } from "@/components/three/scene-canvas";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { Icon } from "@/components/ui/icons";
import { DepartmentCard } from "@/components/departments/department-card";
import { DoctorCard } from "@/components/doctors/doctor-card";
import { departments, doctors, healthPackages, blog } from "@/content/site-content";

export default function HomePage() {
  const featuredDepartments = departments.departments.slice(0, 3);
  const featuredDoctors = doctors.doctors.slice(0, 3);
  const featuredPackages = healthPackages.packages.slice(0, 3);
  const featuredPosts = blog.posts.slice(0, 3);

  return (
    <>
      <HeroSlider />
      <SceneCanvas />

      <section className="relative overflow-hidden py-20">
        <AuroraWash className="opacity-60" />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Departments"
            heading="Six departments, coordinated as one plan."
            body="A few of our core specialties — see the full list, plus more specialties available on request."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDepartments.map((dept) => (
              <ParallaxLayer key={dept.id} depth={0.12}>
                <DepartmentCard department={dept} />
              </ParallaxLayer>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/departments" variant="secondary">
              View All Departments
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-dim py-20">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Doctors"
            heading="A few of our (fictional) consultants."
            body="Every profile is illustrative and fictional — created for this concept demo, not a real clinician."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/doctors" variant="secondary">
              Meet the Full Team
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Health Packages"
            heading="Preventive checkups, designed to catch things early."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {featuredPackages.map((pkg) => (
              <GlassPanel key={pkg.id} variant="card" className="p-6 text-center">
                <h3 className="font-display text-lg text-ink">{pkg.name}</h3>
                <p className="mt-2 text-sm font-semibold text-mint-600">{pkg.priceFrom}</p>
                <p className="mt-3 text-sm text-ink-soft">{pkg.recommendedFor}</p>
              </GlassPanel>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/health-packages" variant="secondary">
              View All Packages
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-harbor-600 py-20 text-surface">
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <AuroraWash className="opacity-40" />
          <div className="relative grid gap-8 lg:grid-cols-3">
            {[
              { icon: "clock" as const, title: "24×7 Emergency", body: "Emergency and trauma care coordinated with every department, around the clock." },
              { icon: "stethoscope" as const, title: "Multi-specialty, one campus", body: "Six core departments and more, sharing notes on shared cases." },
              { icon: "heart" as const, title: "Second opinions welcomed", body: "Already have a diagnosis? We'll review it with you, unhurried." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-surface/10">
                  <Icon name={item.icon} className="h-6 w-6 text-mint-300" />
                </div>
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="text-sm text-surface/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow="From the Blog" heading="General wellness reading, not medical advice." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <GlassPanel key={post.slug} variant="card" className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-mint-600">{post.category}</p>
                <h3 className="mt-2 font-display text-lg text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{post.excerpt}</p>
                <Button href={`/blog/${post.slug}`} variant="ghost" className="mt-3 px-0">
                  Read more <Icon name="chevron-right" className="ml-1 h-4 w-4" />
                </Button>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dim py-16">
        <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 text-center lg:px-10">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Ready to book, or just have a question?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/appointment" variant="accent">
              Book an Appointment
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
