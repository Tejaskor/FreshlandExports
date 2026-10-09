import Link from "next/link";

import { Reveal } from "@/animations/reveal";
import { Figure } from "@/components/media/figure";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { siteConfig } from "@/config/site";
import { ArticleToc } from "@/features/blog/components/article-toc";
import { BlogCard, blogGrid } from "@/features/blog/components/blog-card";
import { BrochureCard } from "@/features/blog/components/brochure-card";
import { StickySidebar } from "@/features/blog/components/sticky-sidebar";
import {
  type BlogPost,
  articleOutline,
  blogListHref,
  readingMinutes,
  relatedPosts,
  toCardData,
} from "@/features/blog/data";
import { formatPublished } from "@/features/blog/meta";
import { productBlogs } from "@/features/products/blog";

/** Headings clear the fixed header when reached by a hash link or the TOC. */
const anchorClearance = "scroll-mt-28";

const metaDivider = <span aria-hidden="true" className="h-3 w-px bg-line-strong" />;

/**
 * One Blog article: the text on the left with its title, details, photograph
 * and sections; on the right a table of contents built from the article's own
 * headings, with the brochure card beneath it, both sticky while the article
 * scrolls past. On phones the contents fold
 * into a compact panel above the text and the brochure card follows it. Related reading and a quote
 * prompt follow the article.
 */
export function BlogArticle({ post }: { post: BlogPost }) {
  const { sections, toc } = articleOutline(post);
  const related = relatedPosts(post);
  const sameProduct = related.every((other) => other.product.slug === post.product.slug);
  const productPhoto = productBlogs[post.product.slug];
  const minutes = readingMinutes(post);

  return (
    <>
      <div className="bg-cream pt-28 pb-16 lg:pt-32 lg:pb-24">
        <Container>
          {/* From lg, the same 8 / 4 columns and gap as the blog listing, so the
              sidebar matches the listing's right column. */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_17rem] lg:grid-cols-12 lg:gap-10">
            {/* --- Article ------------------------------------------------- */}
            <article
              aria-labelledby="article-heading"
              className="min-w-0 rounded-xl border border-line bg-white p-5 sm:p-7 lg:col-span-8 lg:p-8"
            >
              <header>
                <Link
                  href={blogListHref({ category: post.category })}
                  className="type-label font-semibold text-rust transition-colors duration-300 hover:text-rust-deep"
                >
                  {post.category}
                </Link>
                <h1
                  id="article-heading"
                  className="mt-4 font-display text-[clamp(1.875rem,1.3rem+2vw,2.75rem)] leading-[1.12] font-semibold tracking-[-0.02em] text-balance text-forest"
                >
                  {post.title}
                </h1>
                <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.8125rem] text-ink-muted">
                  <span>
                    By <span className="font-semibold text-forest">{siteConfig.name}</span>
                  </span>
                  {metaDivider}
                  <span>
                    Published <time dateTime={post.published}>{formatPublished(post.published, "day")}</time>
                  </span>
                  {post.updated && post.updated !== post.published && (
                    <>
                      {metaDivider}
                      <span>
                        Updated <time dateTime={post.updated}>{formatPublished(post.updated, "day")}</time>
                      </span>
                    </>
                  )}
                  {metaDivider}
                  <span>{minutes} min read</span>
                </p>
              </header>

              <Figure
                image={post.image.src}
                alt={post.image.alt}
                art={post.art}
                priority
                sizes="(min-width: 1280px) 52rem, (min-width: 768px) 60vw, 100vw"
                className="mt-7 aspect-[16/9] w-full rounded-xl"
              />

              {/* Phones: the contents fold into a panel above the text. */}
              <ArticleToc items={toc} variant="collapsible" className="mt-7 md:hidden" />

              {/* Introduction, with a link to the product it belongs to. */}
              <div className="mt-6">
                <p className="text-lead text-ink">{post.description}</p>
                {post.product.href && (
                  <p className="mt-4 text-[1rem] leading-[1.75] text-ink-muted">
                    This guide is part of our{" "}
                    <Link
                      href={post.product.href}
                      className="font-semibold text-forest underline decoration-line-strong underline-offset-4 transition-colors duration-300 hover:text-leaf hover:decoration-leaf"
                    >
                      {post.product.name}
                    </Link>{" "}
                    insights — see the product page for specifications, packaging and supply.
                  </p>
                )}
              </div>

              {/* Sections: every heading carries the anchor its TOC entry links to. */}
              <div className="mt-7 space-y-6">
                {sections.map((section) => {
                  const Heading = section.level === 3 ? "h3" : "h2";
                  return (
                    <section key={section.id} aria-labelledby={section.id}>
                      <Heading
                        id={section.id}
                        className={
                          section.level === 3
                            ? `${anchorClearance} font-display text-[1.25rem] leading-snug font-semibold text-forest`
                            : `${anchorClearance} font-display text-[clamp(1.375rem,1.2rem+0.5vw,1.625rem)] leading-snug font-semibold text-forest`
                        }
                      >
                        {section.heading}
                      </Heading>
                      <p className="mt-2 text-[1.0625rem] leading-[1.7] text-ink-muted">{section.text}</p>
                    </section>
                  );
                })}
              </div>

              {/* Related product */}
              {post.product.href && (
                <Link
                  href={post.product.href}
                  className="group mt-12 grid max-w-[44rem] overflow-hidden rounded-xl border border-line bg-cream-warm transition-[border-color,box-shadow] duration-500 hover:border-line-strong hover:shadow-[var(--shadow-card)] focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:outline-none sm:grid-cols-[11rem_minmax(0,1fr)]"
                >
                  <Figure
                    image={productPhoto?.image ?? null}
                    alt=""
                    art={post.art}
                    sizes="(min-width: 640px) 11rem, 100vw"
                    className="aspect-[16/9] w-full sm:aspect-auto sm:h-full"
                    mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                  />
                  <span className="block p-5">
                    <span className="type-label font-semibold text-ink-faint">Related Product</span>
                    <span className="mt-1.5 block font-display text-[1.25rem] font-semibold text-forest">
                      {post.product.name}
                    </span>
                    <span className="mt-1 block text-[0.875rem] leading-relaxed text-ink-muted">
                      Specifications, packaging options and bulk supply from Freshland Exports.
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-rust-deep transition-colors duration-300 group-hover:text-rust">
                      View Product
                      <Icon name="arrow-right" className="size-3.5" />
                    </span>
                  </span>
                </Link>
              )}
            </article>

            {/* --- Table of contents and brochure card, tablet up (sticky) -- */}
            {/* On phones the brochure card follows the article. */}
            <BrochureCard className="md:hidden" />

            <aside aria-label="Article contents" className="hidden md:block lg:col-span-4">
              {/* The contents and brochure card stick together below the
                  header and stop at the end of the article (the aside spans
                  the article's row). No height cap, so no inner scrollbar. */}
              <StickySidebar>
                <ArticleToc items={toc} variant="sidebar" />
                <BrochureCard className="mt-5" />
              </StickySidebar>
            </aside>
          </div>
        </Container>
      </div>

      {/* --- Further reading -------------------------------------------- */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-line bg-cream-warm">
          <Container className="py-14 lg:py-20">
            <Reveal variant="rise">
              <RuledEyebrow>Keep Reading</RuledEyebrow>
            </Reveal>
            <h2 id="related-heading" className="mt-5 font-display text-display text-forest">
              {sameProduct ? `More ${post.product.name} Insights` : "Related Articles"}
            </h2>
            <Reveal stagger={0.12} variant="rise" className={`${blogGrid} mt-10 lg:mt-12`}>
              {related.map((other) => (
                <div key={other.slug}>
                  <BlogCard post={toCardData(other)} showDate />
                </div>
              ))}
            </Reveal>
          </Container>
        </section>
      )}

      {/* --- Final CTA --------------------------------------------------- */}
      <section aria-labelledby="article-cta-heading" className="bg-forest-deep">
        <Container className="flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between lg:py-16">
          <div className="max-w-xl">
            <h2 id="article-cta-heading" className="font-display text-title text-cream">
              Sourcing {post.product.name.toLowerCase()} in bulk?
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-sage-200">
              Tell us your requirement, destination and timing, and our team will confirm availability,
              specifications and quotation details.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href="/contact" variant="primary" size="md">
              Get a Quote
            </Button>
            {post.product.href && (
              <Link
                href={post.product.href}
                className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-cream transition-colors duration-300 hover:text-highlight-inverse"
              >
                View {post.product.name}
                <Icon name="arrow-right" className="size-3.5" />
              </Link>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
