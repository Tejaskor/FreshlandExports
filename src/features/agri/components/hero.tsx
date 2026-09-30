import type { ReactNode } from "react";

import { AnchorButton } from "@/components/ui/anchor-button";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { ProductImage, shapes } from "@/features/agri/components/shared";
import type { AgriProduct, HeroVariant } from "@/features/agri/types";
import { cn } from "@/lib/utils";

/** Homepage h1: Fraunces 500, tight tracking; sized for each composition. */
const titleClass = "font-display font-medium leading-[0.95] tracking-[-0.032em]";

/**
 * The two hero buttons. By default "Explore Our Product" (to the first
 * section) and "Request a Quote"; spice pages use "Request a Quote" (to the
 * inquiry form) and "Enquire Now" (to the contact page).
 */
function HeroButtons({ product, inverse = false }: { product: AgriProduct; inverse?: boolean }) {
  const second = cn(
    "font-semibold",
    inverse && "border-white/30 bg-transparent text-white hover:border-white hover:text-white",
  );
  const secondVariant = inverse ? "outline" : "forest";

  if (product.hero.secondary === "enquire") {
    return (
      <>
        <AnchorButton href="#quote-form" size="lg" className="font-semibold">
          Request a Quote
        </AnchorButton>
        <Button href="/contact" size="lg" variant={secondVariant} className={second}>
          Enquire Now
        </Button>
      </>
    );
  }

  return (
    <>
      <AnchorButton href="#overview" size="lg" className="font-semibold">
        Explore Our Product
      </AnchorButton>
      <AnchorButton href="#quote-form" size="lg" variant={secondVariant} className={second}>
        Request a Quote
      </AnchorButton>
    </>
  );
}

function HeroCopy({
  product,
  inverse = false,
  center = false,
  titleSize = "text-[clamp(3rem,1.6rem+4.4vw,6rem)]",
}: {
  product: AgriProduct;
  inverse?: boolean;
  center?: boolean;
  titleSize?: string;
}) {
  const { hero } = product;
  return (
    <div className={cn(center && "mx-auto max-w-3xl text-center")}>
      <Reveal variant="settle">
        <RuledEyebrow tone={inverse ? "inverse" : "default"} align={center ? "center" : "start"}>
          {hero.eyebrow}
        </RuledEyebrow>
      </Reveal>
      <RevealLines
        as="h1"
        id="product-heading"
        className={cn(titleClass, titleSize, "mt-6", inverse ? "text-white" : "text-[var(--p-deep)]")}
        delay={0.1}
        intro
      >
        <Line>{hero.title}</Line>
      </RevealLines>
      <Reveal delay={0.3} variant="rise">
        <p
          className={cn(
            "mt-5 font-display text-title",
            inverse ? "text-[var(--p-soft)]" : "text-[var(--p-accent)]",
          )}
        >
          {hero.tagline}
        </p>
      </Reveal>
      <Reveal delay={0.4} variant="rise">
        <p
          className={cn(
            "mt-5 max-w-xl text-[1rem] leading-relaxed",
            center && "mx-auto",
            inverse ? "text-white/80" : "text-ink-muted",
          )}
        >
          {hero.body}
        </p>
      </Reveal>
      <Reveal
        delay={0.5}
        variant="rise"
        className={cn("mt-8 flex flex-wrap items-center gap-3 sm:gap-4", center && "justify-center")}
      >
        <HeroButtons product={product} inverse={inverse} />
      </Reveal>
    </div>
  );
}

function Highlights({
  items,
  inverse = false,
  className,
}: {
  items: readonly string[];
  inverse?: boolean;
  className?: string;
}) {
  return (
    <Reveal as="ul" stagger={0.06} variant="rise" delay={0.6} className={cn("flex flex-wrap gap-x-6 gap-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn("flex items-center gap-2.5 text-[0.9375rem] font-medium", inverse ? "text-white" : "text-forest")}
        >
          <span
            className={cn(
              "flex size-6 shrink-0 items-center justify-center rounded-full",
              inverse ? "bg-white/15 text-white" : "bg-[var(--p-tint)] text-[var(--p-deep)] ring-1 ring-[var(--p-soft)]",
            )}
          >
            <Icon name="check" className="size-3.5" strokeWidth={2.4} />
          </span>
          {item}
        </li>
      ))}
    </Reveal>
  );
}

/** Light hero wrapper: full width, the header's ink navigation sits on it. */
function LightHero({
  crumbs,
  className,
  children,
}: {
  crumbs: readonly Crumb[];
  className?: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby="product-heading" className={cn("relative overflow-hidden pt-28 pb-14 lg:pt-32 lg:pb-20", className)}>
      <Container className="relative">
        <Reveal variant="rise">
          <Breadcrumbs items={crumbs} />
        </Reveal>
        <div className="mt-8 lg:mt-10">{children}</div>
      </Container>
    </section>
  );
}

export function Hero({
  product,
  crumbs,
  variant,
  reverse = false,
}: {
  product: AgriProduct;
  crumbs: readonly Crumb[];
  variant: HeroVariant;
  reverse?: boolean;
}) {
  const { images, hero } = product;
  const extra = images.extra ?? [];

  switch (variant) {
    /* Text beside a leaf-cut photograph on the product tint. */
    case "split":
      return (
        <LightHero crumbs={crumbs} className="bg-[var(--p-tint)]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className={cn("lg:col-span-6", reverse && "lg:order-2")}>
              <HeroCopy product={product} />
              <Highlights items={hero.highlights} className="mt-8" />
            </div>
            <ClipReveal from="left" className={cn("lg:col-span-6", reverse && "lg:order-1")}>
              <ProductImage
                slot={images.hero}
                priority
                className={cn(shapes.leaf.aspect, shapes.leaf.radius, "w-full shadow-[var(--shadow-figure)]")}
              />
            </ClipReveal>
          </div>
        </LightHero>
      );

    /* Minimal and centred, with a wide pill photograph below the title. */
    case "centered":
      return (
        <LightHero crumbs={crumbs} className="bg-[var(--p-tint)]">
          <HeroCopy product={product} center titleSize="text-[clamp(3.25rem,1.6rem+5vw,6.5rem)]" />
          <Reveal variant="unveil" delay={0.3} className="mt-12">
            <ProductImage
              slot={images.hero}
              priority
              sizes="100vw"
              className="aspect-[16/9] w-full rounded-[2.5rem] sm:aspect-[21/9] sm:rounded-full"
            />
          </Reveal>
          <Highlights items={hero.highlights} className="mt-8 justify-center" />
        </LightHero>
      );

    /* Framed dark stage in the product's deep shade; photograph left. */
    case "stage":
      return (
        <section aria-labelledby="product-heading" className="bg-cream pt-24 lg:pt-28">
          <Container className="pb-4">
            <Reveal variant="rise">
              <Breadcrumbs items={crumbs} />
            </Reveal>
          </Container>
          <Container width="wide" className="px-3 sm:px-4 lg:px-5">
            <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[var(--p-deep)] lg:rounded-[2.5rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(50%_70%_at_25%_50%,color-mix(in_srgb,var(--p-accent)_40%,transparent)_0%,transparent_70%)]"
              />
              <Container className="grid items-center gap-12 px-6 py-12 sm:px-10 lg:min-h-[38rem] lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-16 min-[1441px]:px-gutter">
                <Reveal variant="bloom" className={cn("lg:col-span-5", reverse && "lg:order-2")}>
                  <ProductImage
                    slot={images.hero}
                    priority
                    dark
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="aspect-[4/5] w-full rounded-[3rem_3rem_3rem_0.75rem] ring-1 ring-white/15"
                  />
                </Reveal>
                <div className={cn("lg:col-span-7", reverse && "lg:order-1")}>
                  <HeroCopy product={product} inverse />
                  <Highlights items={hero.highlights} inverse className="mt-8 border-t border-white/15 pt-6" />
                </div>
              </Container>
            </div>
          </Container>
        </section>
      );

    /* Title row, then a wide panoramic photograph with a highlight bar. */
    case "panoramic":
      return (
        <LightHero crumbs={crumbs} className="bg-[var(--p-tint)]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal variant="settle">
                <RuledEyebrow>{hero.eyebrow}</RuledEyebrow>
              </Reveal>
              <RevealLines
                as="h1"
                id="product-heading"
                className={cn(titleClass, "mt-6 text-[clamp(3.25rem,1.6rem+5vw,6.75rem)] text-[var(--p-deep)]")}
                delay={0.1}
                intro
              >
                <Line>{hero.title}</Line>
              </RevealLines>
            </div>
            <Reveal variant="rise" delay={0.3} className="lg:col-span-5">
              <p className="font-display text-title text-[var(--p-accent)]">{hero.tagline}</p>
              <p className="mt-3 text-[1rem] leading-relaxed text-ink-muted">{hero.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <HeroButtons product={product} />
              </div>
            </Reveal>
          </div>
          <div className="relative mt-10 lg:mt-12">
            <ClipReveal from="left" duration={1.3}>
              <ProductImage
                slot={images.hero}
                priority
                sizes="100vw"
                className="aspect-[16/9] w-full rounded-[2rem] sm:aspect-[21/8]"
              />
            </ClipReveal>
            <Reveal
              variant="rise"
              delay={0.5}
              className="relative -mt-8 mx-4 rounded-2xl bg-white px-6 py-4 shadow-[var(--shadow-lift)] sm:mx-auto sm:w-fit"
            >
              <Highlights items={hero.highlights} className="justify-center" />
            </Reveal>
          </div>
        </LightHero>
      );

    /* Energetic split: the photograph cut on a diagonal edge. */
    case "diagonal":
      return (
        <LightHero crumbs={crumbs} className="bg-white">
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-y-0 hidden w-[46%] bg-[var(--p-tint)] lg:block",
              reverse ? "left-0 [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]" : "right-0 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]",
            )}
          />
          <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className={cn("lg:col-span-6", reverse && "lg:order-2")}>
              <HeroCopy product={product} />
              <Highlights items={hero.highlights} className="mt-8" />
            </div>
            <ClipReveal from={reverse ? "up" : "left"} className={cn("lg:col-span-6", reverse && "lg:order-1")}>
              <ProductImage
                slot={images.hero}
                priority
                className={cn(
                  "aspect-[4/3] w-full rounded-[1.5rem] lg:aspect-[5/6]",
                  reverse
                    ? "lg:[clip-path:polygon(0_0,100%_0,86%_100%,0_100%)]"
                    : "lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]",
                )}
              />
            </ClipReveal>
          </div>
        </LightHero>
      );

    /* Three photographs in varied shapes beside the copy. */
    case "collage":
      return (
        <LightHero crumbs={crumbs} className="bg-[var(--p-tint)]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <HeroCopy product={product} />
              <Highlights items={hero.highlights} className="mt-8" />
            </div>
            <Reveal variant="unveil" delay={0.2} className="grid grid-cols-2 gap-4 lg:col-span-6">
              <ProductImage
                slot={images.hero}
                priority
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="row-span-2 aspect-[3/5] h-full w-full rounded-[2.5rem_2.5rem_2.5rem_0.75rem]"
              />
              {extra[0] && (
                <ProductImage
                  slot={extra[0]}
                  compact
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="aspect-square w-full rounded-full"
                />
              )}
              {extra[1] && (
                <ProductImage
                  slot={extra[1]}
                  compact
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="aspect-square w-full rounded-[0.75rem_2.5rem_2.5rem_2.5rem]"
                />
              )}
            </Reveal>
          </div>
        </LightHero>
      );

    /* Two tall, staggered pill photographs — an elongated composition. */
    case "elongated":
      return (
        <LightHero crumbs={crumbs} className="bg-[var(--p-tint)]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <HeroCopy product={product} />
              <Highlights items={hero.highlights} className="mt-8" />
            </div>
            <Reveal variant="unveil" delay={0.2} className="mx-auto grid w-full max-w-md grid-cols-2 gap-5 lg:col-span-5">
              <ProductImage
                slot={images.hero}
                priority
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="aspect-[9/19] w-full rounded-full shadow-[var(--shadow-figure)]"
              />
              <ProductImage
                slot={extra[0] ?? images.detail}
                compact
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="mt-16 aspect-[9/19] w-full rounded-full"
              />
            </Reveal>
          </div>
        </LightHero>
      );

    /* A large photograph in an organic blob, copy on the other side,
       with soft circles and a leaf sprig behind it. */
    case "blob":
      return (
        <LightHero crumbs={crumbs} className="bg-[var(--p-tint)]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="relative lg:col-span-7">
              <span
                aria-hidden="true"
                className="absolute -top-6 -left-6 size-40 rounded-full bg-[var(--p-soft)]/60 sm:size-56"
              />
              <span
                aria-hidden="true"
                className="absolute -right-4 bottom-4 size-24 rounded-full bg-[var(--p-accent)]/15 sm:size-32"
              />
              <BotanicalLines className="absolute -right-6 -top-10 hidden h-56 w-auto rotate-12 text-[var(--p-deep)]/15 lg:block" />
              <Reveal variant="bloom" className="relative">
                <ProductImage
                  slot={images.hero}
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="aspect-square w-full rounded-[58%_42%_48%_52%/46%_54%_46%_54%] shadow-[var(--shadow-figure)]"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <HeroCopy product={product} titleSize="text-[clamp(3rem,1.6rem+4vw,5.5rem)]" />
              <Highlights items={hero.highlights} className="mt-8" />
            </div>
          </div>
        </LightHero>
      );

    /* Framed dark stage with two overlapping photograph panels. */
    case "duo":
      return (
        <section aria-labelledby="product-heading" className="bg-cream pt-24 lg:pt-28">
          <Container className="pb-4">
            <Reveal variant="rise">
              <Breadcrumbs items={crumbs} />
            </Reveal>
          </Container>
          <Container width="wide" className="px-3 sm:px-4 lg:px-5">
            <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[var(--p-deep)] lg:rounded-[2.5rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(45%_65%_at_80%_40%,color-mix(in_srgb,var(--p-accent)_45%,transparent)_0%,transparent_70%)]"
              />
              <Container className="grid items-center gap-12 px-6 py-12 sm:px-10 lg:min-h-[38rem] lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-16 min-[1441px]:px-gutter">
                <div className="lg:col-span-6">
                  <HeroCopy product={product} inverse />
                  <Highlights items={hero.highlights} inverse className="mt-8 border-t border-white/15 pt-6" />
                </div>
                <div className="relative pb-16 lg:col-span-6 lg:pb-20">
                  <Reveal variant="bloom">
                    <ProductImage
                      slot={images.hero}
                      priority
                      dark
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="ml-auto aspect-[4/5] w-[82%] rounded-[2.5rem] ring-1 ring-white/15"
                    />
                  </Reveal>
                  <Reveal variant="rise" delay={0.3} className="absolute bottom-0 left-0 w-[46%]">
                    <ProductImage
                      slot={extra[0] ?? images.detail}
                      dark
                      compact
                      sizes="(min-width: 1024px) 20vw, 45vw"
                      className="aspect-square w-full rounded-[1.75rem] shadow-[var(--shadow-panel)] ring-4 ring-[var(--p-deep)]"
                    />
                  </Reveal>
                </div>
              </Container>
            </div>
          </Container>
        </section>
      );

    /* A large citrus-round photograph with smaller circles in orbit. */
    case "orbit":
      return (
        <LightHero crumbs={crumbs} className="bg-[var(--p-tint)]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <HeroCopy product={product} />
              <Highlights items={hero.highlights} className="mt-8" />
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:col-span-6 lg:max-w-none">
              <span aria-hidden="true" className="absolute inset-[-6%] rounded-full border border-dashed border-[var(--p-accent)]/30" />
              <Reveal variant="bloom" className="relative">
                <ProductImage
                  slot={images.hero}
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="aspect-square w-full rounded-full shadow-[var(--shadow-figure)]"
                />
              </Reveal>
              {extra[0] && (
                <Reveal variant="bloom" delay={0.35} className="absolute -top-2 -right-2 w-[30%] sm:right-2">
                  <ProductImage slot={extra[0]} compact sizes="12rem" className="aspect-square w-full rounded-full ring-8 ring-[var(--p-tint)]" />
                </Reveal>
              )}
              {extra[1] && (
                <Reveal variant="bloom" delay={0.5} className="absolute -bottom-2 -left-2 w-[26%] sm:left-2">
                  <ProductImage slot={extra[1]} compact sizes="10rem" className="aspect-square w-full rounded-full ring-8 ring-[var(--p-tint)]" />
                </Reveal>
              )}
            </div>
          </div>
        </LightHero>
      );
  }
}
