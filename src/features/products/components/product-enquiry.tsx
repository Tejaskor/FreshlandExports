import { AnchorButton } from "@/components/ui/anchor-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import type { MenuOnlyProduct } from "@/features/products/export-catalogue";

/**
 * Enquiry page for a product listed in the Products menu that does not yet
 * have a full catalogue page (/products/[slug]). It states only what is
 * known — the product and its category — and leads straight to the quote
 * form, so nothing is claimed before real specifications are written.
 */
export function ProductEnquiry({ product }: { product: MenuOnlyProduct }) {
  return (
    <>
      <Section aria-labelledby="product-heading" className="bg-cream pt-32 lg:pt-36 lg:pb-20">
        <Container>
          <Reveal variant="rise">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: product.groupTitle },
                { label: product.name },
              ]}
            />
          </Reveal>

          <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="max-w-xl">
              <Reveal variant="rise">
                <RuledEyebrow>{product.groupTitle}</RuledEyebrow>
              </Reveal>
              <RevealLines as="h1" id="product-heading" className="mt-6 text-hero font-medium" delay={0.1} intro>
                <Line>{product.name}</Line>
              </RevealLines>
              <Reveal delay={0.3} variant="rise">
                <p className="mt-6 text-lead text-ink-muted">
                  Tell us what you need and our team will share {product.name.toLowerCase()} specifications,
                  available grades, packaging options and pricing for your market.
                </p>
              </Reveal>
              <Reveal delay={0.45} variant="rise" className="mt-9 flex flex-wrap items-center gap-4">
                <AnchorButton href="#quote">Request a Quote</AnchorButton>
                <Button href="/products" variant="outline">
                  All Products
                </Button>
              </Reveal>
            </div>

            <Reveal variant="bloom" className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-figure)]">
              {/* Product photograph placeholder — replace with a photo of
                  this product when one is available. */}
              <Figure
                image={null}
                alt={`${product.name} — photograph coming soon`}
                art="field"
                className="aspect-[4/3] w-full"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="quote" aria-labelledby="quote-heading" className="scroll-mt-24 bg-sage-50 lg:py-20">
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
                Share the quantity, packaging and destination you need, and we will reply with
                availability and pricing.
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
    </>
  );
}
