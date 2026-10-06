import Link from "next/link";

import { Reveal } from "@/animations/reveal";
import { Figure } from "@/components/media/figure";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { BlogCard, blogGrid } from "@/features/blog/components/blog-card";
import { type BlogPost, blogPath, relatedPosts, toCardData } from "@/features/blog/data";
import { formatPublished } from "@/features/blog/meta";
import { productBlogs } from "@/features/products/blog";

/**
 * One Blog article: masthead with topic, category and date, the featured
 * photograph, the text, the product it belongs to, a quote prompt, and
 * further reading.
 */
export function BlogArticle({ post, crumbs }: { post: BlogPost; crumbs: readonly Crumb[] }) {
  const related = relatedPosts(post);
  const sameProduct = related.every((other) => other.product.slug === post.product.slug);
  const productPhoto = productBlogs[post.product.slug];

  return (
    <>
      <article aria-labelledby="article-heading">
        {/* --- Masthead ------------------------------------------------------ */}
        <header className="bg-cream pt-32 pb-10 lg:pt-40 lg:pb-14">
          <Container>
            <Breadcrumbs items={crumbs} />

            <div className="mt-8 max-w-3xl lg:mt-10">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] text-ink-muted">
                <span className="type-label font-semibold text-rust">{post.topic}</span>
                <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
                <span>{post.category}</span>
                <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
                <time dateTime={post.published}>{formatPublished(post.published, "day")}</time>
              </p>
              <h1 id="article-heading" className="mt-5 font-display text-display text-balance text-forest">
                {post.title}
              </h1>
              <p className="mt-6 text-lead text-ink-muted">{post.description}</p>
            </div>
          </Container>
        </header>

        {/* Cream above the photograph's midline, white below, edge to edge. */}
        <div className="bg-[linear-gradient(to_bottom,var(--color-cream)_50%,white_50%)]">
          <Container>
            <Figure
              image={post.image.src}
              alt={post.image.alt}
              art={post.art}
              priority
              sizes="(min-width: 1440px) 1280px, 100vw"
              className="aspect-[16/9] w-full rounded-xl lg:aspect-[21/9]"
            />
          </Container>
        </div>

        {/* --- Text and product ------------------------------------------- */}
        <div className="bg-white">
          <Container className="grid gap-12 pt-12 pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-7 lg:col-start-2">
              <div className="space-y-9">
                {post.body.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-display text-[clamp(1.375rem,1.2rem+0.5vw,1.625rem)] leading-snug font-semibold text-forest">
                      {section.heading}
                    </h2>
                    <p className="mt-3 text-[1.0625rem] leading-[1.75] text-ink-muted">{section.text}</p>
                  </section>
                ))}
              </div>

              {/* Quote prompt */}
              <div className="mt-12 rounded-xl border border-line bg-cream-warm p-6 sm:p-8">
                <p className="font-display text-[1.375rem] leading-snug font-semibold text-forest">
                  Sourcing {post.product.name.toLowerCase()} in bulk?
                </p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                  Tell us your requirement, destination and timing, and our team will confirm availability,
                  specifications and quotation details.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Button href="/contact" variant="forest" size="md">
                    Get a Quote
                  </Button>
                  <Link
                    href={post.product.href}
                    className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-rust-deep transition-colors duration-300 hover:text-rust"
                  >
                    View {post.product.name}
                    <Icon name="arrow-right" className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Related product */}
            <aside aria-label="Related product" className="lg:col-span-3 lg:col-start-10">
              <div className="lg:sticky lg:top-28">
                <Link
                  href={post.product.href}
                  className="group block overflow-hidden rounded-xl border border-line bg-white transition-[border-color,box-shadow] duration-500 hover:border-line-strong hover:shadow-[var(--shadow-card)] focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:outline-none"
                >
                  <Figure
                    image={productPhoto?.image ?? null}
                    alt=""
                    art={post.art}
                    sizes="(min-width: 1024px) 22vw, 100vw"
                    className="aspect-[4/3] w-full"
                    mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                  />
                  <span className="block p-5">
                    <span className="type-label font-semibold text-ink-faint">Related Product</span>
                    <span className="mt-2 block font-display text-[1.25rem] font-semibold text-forest">
                      {post.product.name}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-rust-deep transition-colors duration-300 group-hover:text-rust">
                      View Product
                      <Icon name="arrow-right" className="size-3.5" />
                    </span>
                  </span>
                </Link>
                <Link
                  href={blogPath}
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-forest transition-colors duration-300 hover:text-leaf"
                >
                  <Icon name="arrow-right" className="size-3.5 rotate-180" />
                  All articles
                </Link>
              </div>
            </aside>
          </Container>
        </div>
      </article>

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
    </>
  );
}
