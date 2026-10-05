import { AnchorButton } from "@/components/ui/anchor-button";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { freshOnionHero } from "@/features/fresh-onion/data";
import { freshOnionImages } from "@/features/fresh-onion/images";
import { ImageSlot } from "@/features/moringa/components/image-slot";

/**
 * Split hero on pale sage: a large two-line title and the copy on the left;
 * on the right a wide photograph with a white highlights card overlapping
 * its lower-left corner. Motion is limited to entrance reveals — no
 * parallax or zoom.
 */
export function FreshOnionHero({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <section
      aria-labelledby="fresh-onion-heading"
      className="relative overflow-hidden bg-[#F7EEEA] pt-28 pb-16 lg:pt-32 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(45%_60%_at_80%_45%,rgb(122_46_59/0.12)_0%,transparent_70%)]"
      />

      <Container className="relative">
        <Reveal variant="rise">
          <Breadcrumbs items={crumbs} />
        </Reveal>

        <div className="mt-8 grid items-center gap-12 lg:mt-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal variant="settle">
              <RuledEyebrow>{freshOnionHero.eyebrow}</RuledEyebrow>
            </Reveal>

            <RevealLines
              as="h1"
              id="fresh-onion-heading"
              className="mt-6 font-display text-[clamp(3.75rem,1.6rem+6.2vw,8rem)] leading-[0.92] font-medium tracking-[-0.035em] text-forest"
              delay={0.1}
              intro
            >
              <Line className="text-[#7A2E3B]">Fresh</Line>
              <Line>Onions</Line>
            </RevealLines>

            <Reveal delay={0.35} variant="rise">
              <p className="mt-6 max-w-xl font-display text-title leading-snug text-forest">
                {freshOnionHero.subheading}
              </p>
            </Reveal>
            <Reveal delay={0.45} variant="rise">
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-ink-muted">{freshOnionHero.body}</p>
            </Reveal>

            <Reveal delay={0.55} variant="rise" className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <AnchorButton href="#about" size="lg" className="font-semibold">
                Explore Our Product
              </AnchorButton>
              <AnchorButton href="#quote-form" size="lg" variant="forest" className="font-semibold">
                Request a Quote
              </AnchorButton>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <ClipReveal from="left" duration={1.2} className="overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_0.75rem] shadow-[var(--shadow-figure)]">
              {/* Hero — fresh red onions. */}
              <ImageSlot
                slot={freshOnionImages.hero}
                tone="sage"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[5/4] w-full"
              />
            </ClipReveal>

            <Reveal
              variant="rise"
              delay={0.6}
              className="relative z-10 -mt-12 ml-4 max-w-xs sm:ml-8 lg:absolute lg:-bottom-10 lg:-left-10 lg:mt-0 lg:ml-0"
            >
              <ul
                aria-label="Product highlights"
                className="space-y-2.5 rounded-[1.5rem] border border-line bg-white p-5 shadow-[var(--shadow-lift)]"
              >
                {freshOnionHero.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.9375rem] font-semibold text-forest">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#7A2E3B]/10 text-[#7A2E3B]">
                      <Icon name="check" className="size-3.5" strokeWidth={2.4} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="sweep-left" delay={0.75} className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[0.8125rem] font-medium text-forest shadow-[var(--shadow-card)] backdrop-blur-sm">
                <span aria-hidden="true" className="size-2 rounded-full bg-rust" />
                Red · Pink · White
              </span>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
