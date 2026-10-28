import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { Icon } from "@/components/ui/icons";
import { blog } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Blog | Beacon Ridge Multispecialty Hospital",
  description:
    "General wellness reading from Beacon Ridge — illustrative, non-medical-advice articles on heart health, maternity, pediatrics and preventive care.",
  robots: { index: false },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading eyebrow={blog.eyebrow} heading={blog.heading} body={blog.intro} light />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blog.posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <GlassPanel variant="card" className="h-full p-6 transition-colors hover:border-mint-500">
                  <p className="text-xs font-semibold uppercase tracking-wide text-mint-600">
                    {post.category}
                  </p>
                  <h2 className="mt-2 font-display text-lg text-ink">{post.title}</h2>
                  <p className="mt-2 text-sm text-ink-soft">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-ink-faint">{post.readTime}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-mint-600">
                    Read more <Icon name="chevron-right" className="h-4 w-4" />
                  </span>
                </GlassPanel>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <DisclaimerBanner text={blog.disclaimer} />
        </div>
      </section>
    </>
  );
}
