import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { BlogCard, blogGrid } from "@/features/blog/components/blog-card";
import { type BlogPost, blogPath, toCardData } from "@/features/blog/data";
import { cn } from "@/lib/utils";

/**
 * The Blog section shared by the homepage and every product page: a centred
 * "Latest Blogs" heading (no eyebrow) and short introduction, three article
 * cards with their category and date, then a centred "View All Blogs" button.
 * `after` takes a divider (such as a wave) flush to the bottom edge.
 */
export function BlogSection({
  posts,
  description,
  headingId = "blog-heading",
  heading = "Latest Blogs",
  className,
  accentClassName,
  linkClassName,
  after,
}: {
  posts: readonly BlogPost[];
  description: string;
  headingId?: string;
  heading?: string;
  /** Section background (and any border). */
  className?: string;
  /** Colour of the category labels; the card's default when omitted. */
  accentClassName?: string;
  /** Colour of the "Read More" links; the card's default when omitted. */
  linkClassName?: string;
  after?: ReactNode;
}) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className={cn("relative overflow-hidden bg-cream", className)}>
      <Container className="py-14 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <RevealLines as="h2" id={headingId} className="font-display text-display text-forest">
            <Line>{heading}</Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.1}>
            <p className="mt-5 text-lead text-ink-muted">{description}</p>
          </Reveal>
        </div>

        <Reveal as="ul" stagger={0.08} variant="rise" className={cn(blogGrid, "mt-10 lg:mt-12")}>
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogCard
                post={toCardData(post)}
                label="category"
                showDate
                {...(accentClassName && { accentClassName })}
                {...(linkClassName && { linkClassName })}
              />
            </li>
          ))}
        </Reveal>

        <Reveal variant="rise" className="mt-10 flex justify-center lg:mt-12">
          <Button href={blogPath} variant="outline" withArrow>
            View All Blogs
          </Button>
        </Reveal>
      </Container>

      {after}
    </section>
  );
}
