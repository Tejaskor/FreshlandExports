import Link from "next/link";

import { AnchorButton } from "@/components/ui/anchor-button";
import { Button } from "@/components/ui/button";
import { ClipReveal } from "@/animations/clip-reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import {
  type ExportProduct,
  exportCategories,
  exportInformation,
  exportProductHref,
} from "@/features/products/export-catalogue";
import { ProductBlog } from "@/features/products/components/product-blog";
import type { MediaSlot } from "@/types/media";

type Related = { product: ExportProduct; media: MediaSlot };

/** Detail page for a product in the export range (/products/[slug]). */
export function ExportProductDetail({
  product,
  media,
  related,
}: {
  product: ExportProduct;
  media: MediaSlot;
  related: readonly Related[];
}) {
  const category = exportCategories[product.category];

  return (
    <>
      {/* --- Intro ------------------------------------------------------- */}
      <Section aria-labelledby="product-heading" className="bg-cream pt-32 lg:pt-36 lg:pb-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="max-w-xl">
              <Reveal variant="rise">
                <RuledEyebrow>{category.name}</RuledEyebrow>
              </Reveal>

              <RevealLines as="h1" id="product-heading" className="mt-6 text-hero font-medium" delay={0.1} intro>
                <Line>{product.name}</Line>
              </RevealLines>

              <Reveal delay={0.3} variant="rise">
                <p className="mt-6 text-lead text-ink-muted">{product.description}</p>
              </Reveal>

              <Reveal as="ul" delay={0.4} stagger={0.06} variant="rise" className="mt-7 flex flex-wrap gap-2">
                {product.forms.map((form) => (
                  <li
                    key={form}
                    className="rounded-full border border-line-strong bg-white px-4 py-1.5 text-[0.8125rem] text-forest"
                  >
                    {form}
                  </li>
                ))}
              </Reveal>

              <Reveal delay={0.5} variant="rise" className="mt-9 flex flex-wrap items-center gap-4">
                <AnchorButton href="#quote">Get a Quote</AnchorButton>
                <Button href="/products" variant="outline">
                  All Products
                </Button>
              </Reveal>
            </div>

            <ClipReveal
              from="left"
              className="group overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-figure)]"
            >
              <Parallax className="aspect-[4/3] w-full" amount={8} overscan={1.1}>
                <Figure
                  image={media.image}
                  alt={media.alt}
                  art={media.art}
                  priority
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="h-full w-full"
                  mediaClassName="transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </Parallax>
            </ClipReveal>
          </div>
        </Container>
      </Section>

      {/* --- Specifications & forms ------------------------------------- */}
      <Section aria-labelledby="specs-heading" className="bg-canvas lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <RevealLines as="h2" id="specs-heading" className="text-title">
              <Line>Product Specifications</Line>
            </RevealLines>
            <Reveal as="dl" stagger={0.05} variant="rise" className="mt-8 divide-y divide-line border-y border-line">
              {product.specifications.map((row) => (
                <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <dt className="text-[0.875rem] font-medium text-forest">{row.label}</dt>
                  <dd className="text-[0.9375rem] text-ink-muted">{row.value}</dd>
                </div>
              ))}
            </Reveal>
          </div>

          <div>
            <RevealLines as="h2" className="text-title">
              <Line>Available Forms</Line>
            </RevealLines>
            <Reveal as="ul" stagger={0.08} variant="sweep-right" className="mt-8 space-y-3">
              {product.forms.map((form) => (
                <li key={form} className="flex items-start gap-3 text-[0.9375rem] text-ink-muted">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest">
                    <Icon name="check" className="size-3.5" strokeWidth={2.2} />
                  </span>
                  {form}
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* --- Applications ------------------------------------------------- */}
      <Section aria-labelledby="applications-heading" className="bg-sage-50 lg:py-20">
        <Container>
          <RevealLines as="h2" id="applications-heading" className="text-title">
            <Line>Applications &amp; Uses</Line>
          </RevealLines>
          <Reveal stagger={0.1} variant="rise" className="mt-10 grid gap-5 sm:grid-cols-3">
            {product.applications.map((application) => (
              <div key={application.title}>
                <article className="group h-full rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <span className="flex size-12 items-center justify-center rounded-full bg-sage-100 text-forest transition-[background-color,color] duration-500 group-hover:bg-forest group-hover:text-white">
                    <Icon name={application.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 text-[1.25rem] leading-tight">{application.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{application.text}</p>
                </article>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* --- Packaging & export ------------------------------------------ */}
      <Section aria-labelledby="packaging-heading" className="bg-canvas lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <RevealLines as="h2" id="packaging-heading" className="text-title">
              <Line>Packaging</Line>
            </RevealLines>
            <Reveal as="ul" stagger={0.08} variant="rise" className="mt-8 space-y-3">
              {product.packaging.map((option) => (
                <li
                  key={option}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-cream px-5 py-4 text-[0.9375rem] text-ink-muted"
                >
                  <Icon name="layers" className="size-5 shrink-0 text-forest" />
                  {option}
                </li>
              ))}
            </Reveal>
          </div>

          <div>
            <RevealLines as="h2" className="text-title">
              <Line>Export Information</Line>
            </RevealLines>
            <Reveal as="ul" stagger={0.08} variant="rise" className="mt-8 space-y-5">
              {exportInformation.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest">
                    <Icon name="globe" className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-sans text-[1rem] font-medium tracking-normal text-forest">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[0.9375rem] leading-relaxed text-ink-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <ProductBlog slug={product.slug} productName={product.name} className="bg-cream" />

      {/* --- Quote --------------------------------------------------------- */}
      <Section
        id="quote"
        aria-labelledby="quote-heading"
        className="scroll-mt-24 bg-sage-50 lg:py-20"
      >
        <Container className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="max-w-md">
            <Reveal variant="rise">
              <RuledEyebrow>Get a Quote</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="quote-heading" className="mt-6 text-display" delay={0.05}>
              <Line>Request a Quote for</Line>
              <Line className="text-leaf">{product.name}</Line>
            </RevealLines>
            <Reveal delay={0.2} variant="rise">
              <p className="mt-5 text-lead text-ink-muted">
                Tell us the grade, quantity and destination you need. Our team will reply with
                specifications, pricing and availability.
              </p>
            </Reveal>
            <Reveal delay={0.3} variant="rise" className="mt-7 space-y-3 text-[0.9375rem]">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-forest transition-colors duration-300 hover:text-leaf"
              >
                <Icon name="mail" className="size-4" /> {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-forest transition-colors duration-300 hover:text-leaf"
              >
                <Icon name="phone" className="size-4" /> {siteConfig.contact.phone}
              </a>
            </Reveal>
          </div>

          <Reveal variant="sweep-right" delay={0.15}>
            <ContactForm
              title={`Inquiry: ${product.name}`}
              defaultMessage={`I'd like a quote for ${product.name}. `}
            />
          </Reveal>
        </Container>
      </Section>

      {/* --- Related ------------------------------------------------------- */}
      {related.length > 0 && (
        <Section aria-labelledby="related-heading" className="bg-canvas lg:py-20">
          <Container>
            <RevealLines as="h2" id="related-heading" className="text-title">
              <Line>Related Products</Line>
            </RevealLines>
            <Reveal
              as="ul"
              stagger={0.08}
              variant="rise"
              className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {related.map(({ product: item, media: itemMedia }) => (
                <li key={item.slug}>
                  <Link
                    href={exportProductHref(item.slug)}
                    className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)] transition-[translate,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                  >
                    <span className="relative block aspect-[4/3] overflow-hidden">
                      <Figure
                        image={itemMedia.image}
                        alt={itemMedia.alt}
                        art={itemMedia.art}
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                        className="h-full w-full"
                        mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-5">
                      <span className="text-[0.75rem] font-medium tracking-wide text-ink-muted uppercase">
                        {exportCategories[item.category].name}
                      </span>
                      <span className="mt-1.5 font-display text-[1.25rem] leading-tight text-ink">
                        {item.name}
                      </span>
                      <span className="mt-1.5 mb-4 text-[0.875rem] leading-snug text-ink-muted">
                        {item.summary}
                      </span>
                      <span className="mt-auto inline-flex items-center gap-2 text-[0.875rem] font-semibold text-forest">
                        View product
                        <Icon
                          name="arrow-right"
                          className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
                        />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </Reveal>
          </Container>
        </Section>
      )}
    </>
  );
}
