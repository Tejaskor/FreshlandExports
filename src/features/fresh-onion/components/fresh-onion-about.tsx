import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { freshOnionAbout } from "@/features/fresh-onion/data";
import { freshOnionImages } from "@/features/fresh-onion/images";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * About Our Onions: introduction and a hairline grid of product highlights
 * on the left, a leaf-masked close-up on the right.
 */
export function FreshOnionAbout() {
  const last = freshOnionAbout.highlights.length - 1;

  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 bg-white py-14 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <Reveal variant="rise">
            <RuledEyebrow>{freshOnionAbout.eyebrow}</RuledEyebrow>
          </Reveal>
          <RevealLines as="h2" id="about-heading" className={cn(type.section, "mt-5 text-forest")}>
            <Line>{freshOnionAbout.heading[0]}</Line>
            <Line>
              <span className="text-leaf">{freshOnionAbout.heading[1]}</span>
            </Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.1} className="mt-6 space-y-3">
            {freshOnionAbout.body.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl text-[1rem] leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>

          {/* Product highlights — a compact hairline grid. */}
          <Reveal variant="rise" delay={0.2} className="mt-8">
            <dl className="grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line sm:grid-cols-2">
              {freshOnionAbout.highlights.map((row, index) => (
                <div
                  key={row.label}
                  className={cn("bg-white px-4 py-3", index === last && "bg-sage-50 sm:col-span-2")}
                >
                  <dt className="type-label text-ink-muted">{row.label}</dt>
                  <dd className="mt-1 font-display text-heading leading-tight text-forest">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ClipReveal from="up" className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="mask-organic overflow-hidden shadow-[var(--shadow-figure)]">
            {/* About — close-up of fresh onions with natural leaves. */}
            <ImageSlot
              slot={freshOnionImages.closeUp}
              tone="sage"
              framed={false}
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="aspect-[4/5] w-full"
            />
          </div>
        </ClipReveal>
      </Container>
    </section>
  );
}
