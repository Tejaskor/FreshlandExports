import Image from "next/image";

import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ProductImage, SectionHeader, label, shapes } from "@/features/agri/components/shared";
import type { AgriProduct, ImageShape } from "@/features/agri/types";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/* ========================================================================
   Intro
   ======================================================================== */

function HighlightGrid({ product, className }: { product: AgriProduct; className?: string }) {
  return (
    <dl className={cn("grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line sm:grid-cols-2", className)}>
      {product.intro.highlights.map((row) => (
        <div key={row.label} className="bg-white px-4 py-3">
          <dt className={cn(label, "text-ink-muted")}>{row.label}</dt>
          <dd className="mt-1 font-display text-heading text-forest">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Intro({
  product,
  variant,
  shape = "arch",
  reverse = false,
}: {
  product: AgriProduct;
  variant: "split" | "statement" | "overlap";
  shape?: ImageShape;
  reverse?: boolean;
}) {
  const { intro, images } = product;

  /* A heading-sized statement beside the paragraphs; no photograph. */
  if (variant === "statement") {
    return (
      <section aria-labelledby="intro-heading" className="bg-white py-14 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal variant="rise">
                <RuledEyebrow>{intro.eyebrow}</RuledEyebrow>
              </Reveal>
              <RevealLines as="h2" id="intro-heading" className={cn(type.section, "mt-5 text-forest")}>
                <Line>{intro.heading}</Line>
              </RevealLines>
              <Reveal variant="rise" delay={0.1}>
                <p className="mt-6 border-l-[3px] border-[var(--p-accent)] pl-5 font-display text-title text-[var(--p-deep)]">
                  {intro.statement}
                </p>
              </Reveal>
            </div>
            <Reveal variant="rise" delay={0.15} className="space-y-4 lg:col-span-5 lg:pt-14">
              {intro.body.map((paragraph) => (
                <p key={paragraph} className="text-[1rem] leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal
            as="dl"
            stagger={0.05}
            variant="rise"
            className="mt-10 grid grid-cols-2 gap-y-5 border-y border-line py-5 sm:grid-cols-3 lg:mt-12 lg:grid-cols-6 lg:divide-x lg:divide-line"
          >
            {intro.highlights.map((row) => (
              <div key={row.label} className="pr-4 lg:px-5 lg:first:pl-0">
                <dt className={cn(label, "text-ink-muted")}>{row.label}</dt>
                <dd className="mt-1.5 font-display text-heading text-[var(--p-deep)]">{row.value}</dd>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
    );
  }

  /* A wide photograph with the introduction on a card overlapping it. */
  if (variant === "overlap") {
    return (
      <section aria-labelledby="intro-heading" className="bg-white py-14 lg:py-20">
        <Container className="relative">
          <ClipReveal from="left" className="lg:w-[68%]">
            <ProductImage
              slot={images.detail}
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2.5rem_2.5rem_0.75rem_2.5rem] sm:aspect-[16/10]"
            />
          </ClipReveal>
          <Reveal
            variant="sweep-left"
            delay={0.15}
            className="relative -mt-16 ml-4 rounded-[2rem] bg-white p-6 shadow-[var(--shadow-lift)] sm:ml-10 sm:p-8 lg:absolute lg:top-1/2 lg:right-gutter lg:mt-0 lg:ml-0 lg:w-[46%] lg:-translate-y-1/2"
          >
            <RuledEyebrow>{intro.eyebrow}</RuledEyebrow>
            <h2 id="intro-heading" className={cn(type.sub, "mt-4 text-forest")}>
              {intro.heading}
            </h2>
            {intro.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {intro.highlights.map((row) => (
                <li key={row.label} className="text-[0.875rem]">
                  <span className="font-semibold text-[var(--p-deep)]">{row.label}:</span>{" "}
                  <span className="text-ink-muted">{row.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    );
  }

  /* Split: copy and highlight grid beside a shaped photograph. */
  const s = shapes[shape];
  return (
    <section aria-labelledby="intro-heading" className="bg-white py-14 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className={cn("lg:col-span-7", reverse && "lg:order-2")}>
          <Reveal variant="rise">
            <RuledEyebrow>{intro.eyebrow}</RuledEyebrow>
          </Reveal>
          <RevealLines as="h2" id="intro-heading" className={cn(type.section, "mt-5 text-forest")}>
            <Line>{intro.heading}</Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.1} className="mt-6 space-y-3">
            {intro.body.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl text-[1rem] leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal variant="rise" delay={0.2}>
            <HighlightGrid product={product} className="mt-8" />
          </Reveal>
        </div>
        <ClipReveal
          from="up"
          className={cn(
            "mx-auto w-full lg:col-span-5",
            shape === "circle" ? "max-w-sm" : "max-w-md lg:max-w-none",
            reverse && "lg:order-1",
          )}
        >
          {/* A small existing photograph fits a circle without softening. */}
          {shape === "circle" && images.thumb ? (
            <span className="relative mx-auto block aspect-square w-full max-w-[18rem] overflow-hidden rounded-full ring-8 ring-[var(--p-tint)]">
              <Image src={images.thumb} alt={images.detail.alt} fill sizes="288px" className="object-cover" />
            </span>
          ) : (
            <ProductImage
              slot={images.detail}
              sizes="(min-width: 1024px) 38vw, 90vw"
              className={cn(s.aspect, s.radius, "w-full shadow-[var(--shadow-figure)]")}
            />
          )}
        </ClipReveal>
      </Container>
    </section>
  );
}

/* ========================================================================
   Features
   ======================================================================== */

export function Features({
  product,
  variant,
  data = product.features,
  headingId = "features-heading",
}: {
  product: AgriProduct;
  variant: "numbered" | "bento" | "band" | "alternating";
  /** Another list in the same layouts, e.g. commercial applications. */
  data?: AgriProduct["features"];
  headingId?: string;
}) {
  const features = data;
  const items = features.items;

  /* Icons in a row on the product's deep shade. */
  if (variant === "band") {
    return (
      <section aria-labelledby={headingId} className="bg-[var(--p-deep)] py-14 text-white lg:py-20">
        <Container>
          <SectionHeader id={headingId} eyebrow={features.eyebrow} heading={features.heading} inverse align="start" />
          <Reveal
            as="ul"
            stagger={0.06}
            variant="rise"
            className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
          >
            {items.map((item) => (
              <li key={item.title} className="bg-[var(--p-deep)] p-6 transition-colors duration-500 hover:bg-white/[0.04]">
                <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-[var(--p-soft)]">
                  <Icon name={item.icon ?? "sprout"} className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-heading">{item.title}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-white/70">{item.text}</p>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>
    );
  }

  /* One large lead card, the rest compact beside it. */
  if (variant === "bento") {
    const [lead, ...rest] = items;
    return (
      <section aria-labelledby={headingId} className="bg-[var(--p-tint)] py-14 lg:py-20">
        <Container>
          <SectionHeader id={headingId} eyebrow={features.eyebrow} heading={features.heading} align="start" />
          <Reveal as="ul" stagger={0.06} variant="rise" className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            <li className="sm:col-span-2 lg:row-span-2">
              <article className="flex h-full flex-col justify-between rounded-[2rem_2rem_2rem_0.75rem] bg-[var(--p-deep)] p-7 text-white sm:p-9">
                <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-[var(--p-soft)]">
                  <Icon name={lead.icon ?? "sprout"} className="size-6" />
                </span>
                <div className="mt-10">
                  <h3 className="font-display text-title">{lead.title}</h3>
                  <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-white/80">{lead.text}</p>
                </div>
              </article>
            </li>
            {rest.map((item) => (
              <li key={item.title}>
                <article className="group h-full rounded-[1.5rem] border border-[var(--p-soft)] bg-white p-6 transition-[translate,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[var(--p-tint)] text-[var(--p-deep)]">
                    <Icon name={item.icon ?? "sprout"} className="size-[1.125rem]" />
                  </span>
                  <h3 className="mt-5 font-display text-heading text-forest">{item.title}</h3>
                  <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-muted">{item.text}</p>
                </article>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>
    );
  }

  /* Large numerals, rows stepping in and out. */
  if (variant === "alternating") {
    return (
      <section aria-labelledby={headingId} className="bg-white py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeader id={headingId} eyebrow={features.eyebrow} heading={features.heading} align="start" />
            </div>
          </div>
          <Reveal as="ol" stagger={0.07} variant="rise" className="space-y-3 lg:col-span-8">
            {items.map((item, index) => (
              <li
                key={item.title}
                className={cn(
                  "flex items-start gap-5 rounded-[1.5rem] bg-[var(--p-tint)] p-5 sm:p-6 lg:w-[88%]",
                  index % 2 === 1 && "lg:ml-auto",
                )}
              >
                <span aria-hidden="true" className="font-display text-[2.5rem] leading-none font-medium text-[var(--p-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <h3 className="font-display text-heading text-forest">{item.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">{item.text}</p>
                </span>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>
    );
  }

  /* Numbered editorial list with hairline rules. */
  return (
    <section aria-labelledby={headingId} className="bg-[var(--p-tint)] py-14 lg:py-20">
      <Container>
        <SectionHeader id={headingId} eyebrow={features.eyebrow} heading={features.heading} align="start" />
        <Reveal as="ol" stagger={0.05} variant="rise" className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.title} className="flex gap-4 border-t border-[var(--p-soft)] py-5">
              <span aria-hidden="true" className="font-display text-[1.5rem] leading-none font-medium text-[var(--p-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <h3 className="font-display text-heading text-forest">{item.title}</h3>
                <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-muted">{item.text}</p>
              </span>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
