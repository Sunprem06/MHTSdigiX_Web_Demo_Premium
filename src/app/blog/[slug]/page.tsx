import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DisclaimerBanner } from "@/components/ui/disclaimer-banner";
import { AuroraWash } from "@/components/ui/aurora-wash";
import { CommentBox } from "@/components/blog/comment-box";
import { blog, getBlogPostBySlug } from "@/content/site-content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Beacon Ridge Multispecialty Hospital`,
    description: post.excerpt,
    robots: { index: false },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-16 text-surface">
        <AuroraWash />
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <Link href="/blog" className="text-sm text-mint-300 hover:text-mint-200">
            ← Back to Blog
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-mint-300">
            {post.category}
          </p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-surface/70">
            Published {post.publishedDate} · Last reviewed {post.reviewedDate} · {post.readTime}
          </p>
        </div>
      </section>

      <section className="py-12">
        <article className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="space-y-5 text-ink-soft">
            {post.body.map((paragraph, i) => (
              <p key={i} className={i === post.body.length - 1 ? "text-sm italic text-ink-faint" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          <CommentBox slug={post.slug} />
        </article>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <DisclaimerBanner text={blog.disclaimer} />
        </div>
      </section>
    </>
  );
}
