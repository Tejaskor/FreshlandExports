import Link from "next/link";
import type { ReactNode } from "react";

import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { type } from "@/features/moringa/styles";
import { ArticleReader } from "@/features/products/components/article-reader";
import { type BlogArticle, blogHref, findProductBlog } from "@/features/products/blog";
import { cn } from "@/lib/utils";

const card =
  "group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]";

/**
 * Blog — the product's own articles, placed on every product page after the
 * FAQs and before the closing contact band: one featured article with the
 * product photograph, two related articles beside it, in the Research Notes
 * card style. Each page passes its own ground and accent so the section sits
 * in its palette; `after` takes a divider (such as a wave) flush to the
 * bottom edge. Renders nothing for a product without articles.
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
  /** Colour of the "Read Article" links. */
  linkClassName?: string;
  after?: ReactNode;
}) {
  const blog = findProductBlog(slug);
  if (!blog) return null;

  const [featured, ...related] = blog.articles;

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
          </Reveal>
        </div>

        {/* Where articles open in place, the columns stop stretching so an
            expanded article grows its own card, not the empty ones beside it. */}
        <div
          className={cn(
            "mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8",
            blog.articles.some((article) => article.body) && "items-start",
          )}
        >
          {/* --- Featured article ---------------------------------------- */}
          <Reveal variant="rise" className="lg:col-span-7">
            <ArticleCard article={featured}>
              <ClipReveal from="up" delay={0.15} className="aspect-[16/10] overflow-hidden">
                <Figure
                  image={blog.image}
                  alt={blog.alt}
                  art={blog.art}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="h-full w-full"
                  mediaClassName="transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                />
              </ClipReveal>
              <ArticleBody
                article={featured}
                accentClassName={accentClassName}
                linkClassName={linkClassName}
                titleClassName="text-[clamp(1.3rem,1.1rem+0.6vw,1.6rem)]"
              />
            </ArticleCard>
          </Reveal>

          {/* --- Related articles ---------------------------------------- */}
          <Reveal stagger={0.14} variant="rise" delay={0.1} className="grid gap-6 lg:col-span-5 lg:gap-8">
            {related.map((article) => (
              <div key={article.title}>
                <ArticleCard article={article}>
                  <ArticleBody
                    article={article}
                    accentClassName={accentClassName}
                    linkClassName={linkClassName}
                    titleClassName="text-[1.1875rem]"
                  />
                </ArticleCard>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>

      {after}
    </section>
  );
}

/**
 * A card is a link to the Resources page, unless its article carries a body:
 * then it is a plain article whose "Read Article" opens the text in place.
 */
function ArticleCard({ article, children }: { article: BlogArticle; children: ReactNode }) {
  return article.body ? (
    <article className={card}>{children}</article>
  ) : (
    <Link href={blogHref} className={card}>
      {children}
    </Link>
  );
}

/** Topic label, title, summary and "Read Article" of one card. */
function ArticleBody({
  article,
  accentClassName,
  linkClassName,
  titleClassName,
}: {
  article: BlogArticle;
  accentClassName: string;
  linkClassName: string;
  titleClassName: string;
}) {
  return (
    <div className="flex flex-1 flex-col p-6 sm:p-7">
      <p className={cn("type-label", accentClassName)}>{article.topic}</p>
      <h3 className={cn("mt-3 font-display leading-snug text-forest", titleClassName)}>{article.title}</h3>
      <p className="mt-3 mb-6 text-[0.9375rem] leading-relaxed text-ink-muted">{article.description}</p>
      {article.body ? (
        <ArticleReader body={article.body} title={article.title} linkClassName={linkClassName} />
      ) : (
        <ReadLink linkClassName={linkClassName} />
      )}
    </div>
  );
}

/** The arrow link shown on cards that open the Resources page. */
function ReadLink({ linkClassName }: { linkClassName: string }) {
  return (
    <span
      className={cn(
        "mt-auto inline-flex items-center gap-2 text-[0.875rem] font-medium transition-colors duration-300",
        linkClassName,
      )}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-[length:100%_1px]">
        Read Article
      </span>
      <Icon
        name="arrow-right"
        className="size-3.5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
      />
    </span>
  );
}
