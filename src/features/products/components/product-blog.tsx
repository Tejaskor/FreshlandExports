import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { BlogCard, blogGrid } from "@/features/blog/components/blog-card";
import { blogPath, productPosts, toCardData } from "@/features/blog/data";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * Product Insights — the product's own three Blog articles, placed on every
 * product page after the FAQs and before the closing contact band, as one row
 * of equal cards (two on tablets, one on phones). Each card opens the full
 * article at /resources/<slug>. Each page passes its own ground and accent so the
 * section sits in its palette; `after` takes a divider (such as a wave) flush
 * to the bottom edge. Renders nothing for a product without articles.
 */
export function ProductBlog({
  slug,
  productName,
  heading,
  className,
  accentClassName = "text-leaf",
  linkClassName = "text-rust-deep group-hover:text-rust",
  after,
}: {
  slug: string;
  productName: string;
  /** Replaces the default "<Product> Insights" heading. */
  heading?: string;
  /** Section background (and any border). */
  className?: string;
  /** Colour of the product name in the heading and the topic labels. */
  accentClassName?: string;
  /** Colour of the "Read More" links. */
  linkClassName?: string;
  after?: ReactNode;
}) {
  const posts = productPosts(slug);
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="blog-heading" className={cn("relative overflow-hidden", className)}>
      <Container className="py-14 lg:py-20">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <RuledEyebrow>From Our Blog</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="blog-heading" className={cn(type.section, "mt-5 text-forest")}>
              <Line>
                {heading ?? (
                  <>
                    <span className={accentClassName}>{productName}</span> Insights
                  </>
                )}
              </Line>
            </RevealLines>
          </div>
          <Reveal variant="rise" delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
              Buyer guides on quality, sourcing, storage and uses of {productName.toLowerCase()} for
              export.
            </p>
            <Link
              href={blogPath}
              className="mt-3 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-forest transition-colors duration-300 hover:text-leaf"
            >
              View all articles
              <Icon name="arrow-right" className="size-3.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal stagger={0.12} variant="rise" className={cn(blogGrid, "mt-10 lg:mt-12")}>
          {posts.map((post) => (
            <div key={post.slug}>
              <BlogCard post={toCardData(post)} accentClassName={accentClassName} linkClassName={linkClassName} />
            </div>
          ))}
        </Reveal>
      </Container>

      {after}
    </section>
  );
}
