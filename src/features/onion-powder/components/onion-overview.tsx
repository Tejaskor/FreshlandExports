import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import { onionOverview } from "@/features/onion-powder/data";
import { onionImages } from "@/features/onion-powder/images";
import { cn } from "@/lib/utils";

/** Product Overview on white: fresh-onion photograph beside one paragraph and four highlights. */
export function OnionOverview() {
  return (
    <section id="overview" aria-labelledby="overview-heading" className="scroll-mt-24 bg-white py-14 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <ClipReveal from="up" className="lg:col-span-5">
          <ImageSlot
            slot={onionImages.freshOnions}
            tone="warm"
            sizes="(min-width: 1024px) 38vw, 100vw"
            // Portrait crop of a landscape photo: centre on the knife and onions.
            mediaClassName="object-[42%_center]"
            className="aspect-[16/11] w-full rounded-[1.5rem_7rem_1.5rem_7rem] lg:aspect-[4/5]"
          />
        </ClipReveal>

        <div className="lg:col-span-7">
          <Reveal variant="rise">
            <RuledEyebrow>{onionOverview.eyebrow}</RuledEyebrow>
          </Reveal>
          <RevealLines as="h2" id="overview-heading" className={cn(type.section, "mt-5 text-forest")}>
            <Line>{onionOverview.heading[0]}</Line>
            <Line>
              <span className="text-rust">{onionOverview.heading[1]}</span>
            </Line>
          </RevealLines>
          <Reveal variant="rise" delay={0.1}>
            <p className="mt-6 max-w-2xl text-lead text-ink-muted">{onionOverview.body}</p>
          </Reveal>

          <Reveal as="ul" stagger={0.06} variant="rise" delay={0.15} className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {onionOverview.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 border-t border-line-strong py-4 text-[1rem] text-forest">
                <Icon name="check" className="mt-1 size-4 shrink-0 text-rust" strokeWidth={2.2} />
                {item}
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
