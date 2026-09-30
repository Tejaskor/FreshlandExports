import { AnchorButton } from "@/components/ui/anchor-button";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { siteConfig } from "@/config/site";
import { inquiryMessage } from "@/features/agri/components/shared";
import type { AgriProduct } from "@/features/agri/types";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

function Invitation({ product, inverse = false, center = false }: { product: AgriProduct; inverse?: boolean; center?: boolean }) {
  const { cta } = product;
  return (
    <div className={cn(center && "mx-auto max-w-2xl text-center")}>
      <Reveal variant="rise">
        <RuledEyebrow tone={inverse ? "inverse" : "default"} align={center ? "center" : "start"}>
          {cta.eyebrow}
        </RuledEyebrow>
      </Reveal>
      <RevealLines as="h2" id="cta-heading" className={cn(type.section, "mt-5", inverse ? "text-white" : "text-forest")}>
        <Line>{cta.heading}</Line>
      </RevealLines>
      <Reveal variant="rise" delay={0.1}>
        <p className={cn("mt-5 text-[1rem] leading-relaxed", inverse ? "text-white/80" : "text-ink-muted")}>{cta.body}</p>
      </Reveal>
      <Reveal variant="rise" delay={0.2} className={cn("mt-7 flex flex-wrap items-center gap-3", center && "justify-center")}>
        <AnchorButton href="#quote-form" size="md" className="font-semibold">
          Request a Quote
        </AnchorButton>
        <Button
          href="/contact"
          size="md"
          variant="outline"
          className={cn(
            "font-semibold",
            inverse && "border-white/30 bg-transparent text-white hover:border-white hover:text-white",
          )}
        >
          Contact Our Team
        </Button>
      </Reveal>
      <Reveal
        variant="rise"
        delay={0.3}
        className={cn(
          "mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t pt-5 text-[0.9375rem]",
          inverse ? "border-white/15 text-white" : "border-line-strong text-forest",
          center && "justify-center",
        )}
      >
        <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-75">
          <Icon name="mail" className="size-4 shrink-0" /> {siteConfig.contact.email}
        </a>
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-75"
        >
          <Icon name="phone" className="size-4 shrink-0" /> {siteConfig.contact.phone}
        </a>
      </Reveal>
    </div>
  );
}

function Form({ product }: { product: AgriProduct }) {
  return (
    <div id="quote-form" className="scroll-mt-28">
      <Reveal variant="rise" className="text-ink">
        <ContactForm title={`Inquiry: ${product.name}`} defaultMessage={inquiryMessage(product.name)} />
      </Reveal>
    </div>
  );
}

export function Contact({ product, variant }: { product: AgriProduct; variant: "split" | "band" | "card" | "centered" }) {
  /* Deep band: the form first, the invitation beside it. */
  if (variant === "band") {
    return (
      <section id="quote" aria-labelledby="cta-heading" className="bg-[var(--p-deep)] py-14 text-white lg:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:order-2 lg:col-span-5">
            <Invitation product={product} inverse />
          </div>
          <div className="lg:order-1 lg:col-span-7">
            <Form product={product} />
          </div>
        </Container>
      </section>
    );
  }

  /* A deep rounded card sitting on white. */
  if (variant === "card") {
    return (
      <section id="quote" aria-labelledby="cta-heading" className="bg-white py-10 lg:py-16">
        <Container>
          <div className="grid items-center gap-10 rounded-[2rem] bg-[var(--p-deep)] px-5 py-10 text-white sm:px-10 lg:grid-cols-12 lg:gap-12 lg:rounded-[2.75rem] lg:px-14 lg:py-14">
            <div className="lg:col-span-5">
              <Invitation product={product} inverse />
            </div>
            <div className="lg:col-span-7">
              <Form product={product} />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  /* Centred invitation, the form beneath it. */
  if (variant === "centered") {
    return (
      <section id="quote" aria-labelledby="cta-heading" className="bg-[var(--p-tint)] py-14 lg:py-20">
        <Container>
          <Invitation product={product} center />
          <div className="mx-auto mt-10 max-w-2xl">
            <Form product={product} />
          </div>
        </Container>
      </section>
    );
  }

  /* Light split: invitation left, form right. */
  return (
    <section id="quote" aria-labelledby="cta-heading" className="border-t border-line bg-[var(--p-tint)] py-14 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Invitation product={product} />
        </div>
        <div className="lg:col-span-7">
          <Form product={product} />
        </div>
      </Container>
    </section>
  );
}
