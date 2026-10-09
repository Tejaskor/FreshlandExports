import Link from "next/link";
import type { ReactNode } from "react";

import { Figure } from "@/components/media/figure";
import { AnchorButton } from "@/components/ui/anchor-button";
import { Container } from "@/components/ui/container";
import { findBlogPost } from "@/features/blog/data";
import { toCaseStudyCard } from "@/features/case-studies/card-data";
import { CaseStudyCard } from "@/features/case-studies/components/case-study-card";
import { ShareButtons } from "@/features/case-studies/components/share-buttons";
import {
  type CaseStudy,
  caseStudies,
  caseStudyProducts,
  categoryHeading,
  moqConsideration,
  statusLabel,
} from "@/features/case-studies/data";
import { catalogueHref } from "@/features/products/catalogue";

const inlineLink =
  "font-medium text-forest underline decoration-leaf/40 underline-offset-4 transition-colors duration-300 hover:text-leaf hover:decoration-leaf";

/** One article section: a heading, then its text. */
function Part({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="pt-9 first:pt-0">
      <h2 id={id} className="font-display text-[1.375rem] leading-tight text-forest-deep sm:text-[1.5rem]">
        {title}
      </h2>
      <div className="mt-3 space-y-3.5">{children}</div>
    </section>
  );
}

/** A bulleted list; items with a title lead with it in bold. */
function Bullets({ items }: { items: readonly (string | { title: string; text: string })[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => {
        const key = typeof item === "string" ? item : item.title;
        return (
          <li key={key} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.6875rem] size-1.5 shrink-0 rounded-full bg-leaf" />
            <span>
              {typeof item === "string" ? (
                item
              ) : (
                <>
                  <span className="font-semibold text-forest">{item.title}:</span> {item.text}
                </>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * A case study page, rendered entirely from its data: a wide photograph with
 * the title card floating over it, the case study across the site container,
 * sharing, then more case studies. Illustrative scenarios carry their status
 * label in the title card and a note at the start of the text.
 */
export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const products = caseStudyProducts(study);
  const categories = study.categories.map(categoryHeading).join(" · ");
  const considerations = [...study.considerations, moqConsideration(study)];
  const insights = study.insights.map((slug) => {
    const post = findBlogPost(slug);
    if (!post) throw new Error(`Case study "${study.slug}": no blog article "${slug}"`);
    return post;
  });
  const more = caseStudies.filter((other) => other.slug !== study.slug).map(toCaseStudyCard);
  const illustrative = study.status === "illustrative";

  return (
    <>
      {/* --- Hero: the case study beside its photograph ------------------ */}
      <section
        aria-labelledby="case-study-heading"
        className="bg-cream-warm pt-[calc(5.5rem+2.5rem)] pb-14 lg:pt-[calc(5.5rem+4.5rem)] lg:pb-22"
      >
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] lg:gap-12 xl:gap-16">
          <div>
            <p className="type-label font-semibold tracking-[0.12em] text-leaf">{categories}</p>
            {illustrative && (
              <p className="mt-4">
                <span className="inline-flex items-center rounded-full border border-leaf/40 px-3 py-1 text-[0.8125rem] font-medium text-forest">
                  {statusLabel[study.status]}
                </span>
              </p>
            )}
            <h1
              id="case-study-heading"
              className="mt-5 font-display text-[clamp(2.25rem,1.35rem+2.7vw,3.625rem)] leading-[1.08] font-medium tracking-[-0.025em] text-balance text-forest-deep"
            >
              {study.title}
            </h1>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted sm:text-[1.125rem]">
              {study.subtitle}
            </p>
            <AnchorButton href="#case-study-content" variant="forest" size="lg" className="mt-8 w-full sm:w-auto">
              Explore the Case Study
            </AnchorButton>
          </div>

          <Figure
            image={study.image.src}
            alt={study.image.alt}
            art={study.image.art}
            priority
            sizes="(min-width: 1024px) 34rem, 100vw"
            className="aspect-[4/3] w-full rounded-[14px] sm:aspect-[3/2] lg:aspect-square lg:max-w-[34rem] lg:justify-self-end"
            mediaStyle={study.image.position ? { objectPosition: study.image.position } : undefined}
          />
        </Container>
      </section>

      {/* --- The case study ------------------------------------------------ */}
      <div id="case-study-content" className="scroll-mt-24 bg-white py-12 lg:py-16">
        <Container>
          <article aria-labelledby="case-study-heading" className="text-[1rem] leading-relaxed text-ink-muted">
            <div className="space-y-3.5">
              {study.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {illustrative && (
                <p className="border-l-2 border-rust/60 pl-4 text-[0.9375rem]">
                  <span className="font-semibold text-rust-deep">Illustrative sourcing scenario:</span> this page
                  describes typical buyer considerations. It does not report a specific Freshland Exports customer,
                  order or result.
                </p>
              )}
            </div>

            <div className="mt-9">
              <Part id="overview-heading" title="Scenario Overview">
                <Bullets
                  items={[
                    { title: "Product category", text: categories },
                    { title: "Buyer application", text: study.overview.application },
                    { title: "Sourcing focus", text: study.overview.focus },
                    { title: "Scenario status", text: statusLabel[study.status] },
                  ]}
                />
                <p>
                  <span className="font-semibold text-forest">Relevant products:</span>{" "}
                  {products.map((product, index) => (
                    <span key={product.slug}>
                      {index > 0 && ", "}
                      <Link href={catalogueHref(product.slug)} className={inlineLink}>
                        {product.name}
                      </Link>
                    </span>
                  ))}
                </p>
              </Part>

              <Part id="requirements-heading" title="The Buyer’s Requirements">
                <p>{study.requirements.intro}</p>
                <Bullets items={study.requirements.items} />
              </Part>

              <Part id="challenge-heading" title="The Sourcing Challenge">
                <p>{study.challenge.intro}</p>
                <Bullets items={study.challenge.points} />
                {illustrative && (
                  <p className="text-[0.9375rem]">
                    These are scenario assumptions for illustration, not issues reported by a named customer.
                  </p>
                )}
              </Part>

              <Part id="approach-heading" title="A Structured Sourcing Approach">
                <p>{study.approach.intro}</p>
                <ol className="space-y-2.5">
                  {study.approach.steps.map((step, index) => (
                    <li key={step.title} className="flex gap-3">
                      <span aria-hidden="true" className="w-5 shrink-0 font-semibold text-leaf">
                        {index + 1}.
                      </span>
                      <span>
                        <span className="font-semibold text-forest">{step.title}:</span> {step.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </Part>

              <Part id="considerations-heading" title="Key Considerations for Buyers">
                <Bullets items={considerations} />
              </Part>

              <Part id="takeaways-heading" title="Key Takeaways for Buyers">
                <Bullets items={study.takeaways} />
              </Part>

              {insights.length > 0 && (
                <Part id="reading-heading" title="Further Reading">
                  <ul className="space-y-2.5">
                    {insights.map((post) => (
                      <li key={post.slug} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.6875rem] size-1.5 shrink-0 rounded-full bg-leaf" />
                        <Link href={post.href} className={inlineLink}>
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Part>
              )}

              <Part id="next-step-heading" title="Is This Your Sourcing Requirement?">
                <p>
                  Share the products, specifications, quantity and destination you are considering so the enquiry can
                  start with a clear brief.{" "}
                  <Link href="/contact" className={inlineLink}>
                    Send us an enquiry
                  </Link>
                  .
                </p>
              </Part>
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <ShareButtons title={study.title} />
            </div>
          </article>
        </Container>
      </div>

      {/* --- More case studies -------------------------------------------- */}
      {more.length > 0 && (
        <section aria-labelledby="explore-heading" className="border-t border-line bg-cream-warm py-12 lg:py-16">
          <Container>
            <div className="text-center">
              <h2 id="explore-heading" className="font-display text-display text-forest-deep">
                Explore More
              </h2>
              <p className="mt-2 text-[1rem] text-ink-muted">More sourcing scenarios across our product categories</p>
            </div>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
              {more.map((card) => (
                <li key={card.slug}>
                  <CaseStudyCard study={card} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
