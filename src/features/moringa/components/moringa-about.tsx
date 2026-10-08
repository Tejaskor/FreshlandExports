import { ClipReveal } from "@/animations/clip-reveal";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { MoringaProcess } from "@/features/moringa/components/moringa-process";
import { MoringaNutrients } from "@/features/moringa/components/moringa-nutrients";
import { moringaIntro } from "@/features/moringa/data";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";


/**
 * About Moringa: the plant, what it contains and what that contributes.
 * An intro row (copy beside a leaf-masked photograph), then the nutrition
 * explorer: nutrients on sage select the benefits shown on forest green.
 */
export function MoringaAbout() {
  return (
    <section
      id="discover"
      aria-labelledby="discover-heading"
      className="relative scroll-mt-24 overflow-hidden bg-cream-warm pt-12 pb-10 lg:pt-20 lg:pb-14"
    >
      <Container>
        {/* --- Introduction ------------------------------------------------ */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal variant="rise">
              <RuledEyebrow>{moringaIntro.eyebrow}</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="discover-heading" className={cn(type.section, "mt-4 text-forest")}>
              <Line>Discover the Power</Line>
              <Line>
                of <span className="text-leaf">Moringa</span>
              </Line>
            </RevealLines>
            <Reveal variant="rise" delay={0.1}>
              <p className={cn(type.lead, "mt-5 max-w-xl text-ink-muted")}>{moringaIntro.body}</p>
            </Reveal>
            <Reveal as="ul" stagger={0.06} variant="rise" delay={0.2} className="mt-5 flex flex-wrap gap-2">
              {moringaIntro.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line-strong bg-white px-4 py-1.5 text-[0.8125rem] font-medium text-forest"
                >
                  {tag}
                </li>
              ))}
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <ClipReveal from="left" className="mask-organic-alt overflow-hidden shadow-[var(--shadow-figure)]">
              <Parallax amount={8} overscan={1.1} className="aspect-[16/11]">
                <ImageSlot
                  image="tree"
                  tone="sage"
                  framed={false}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="h-full w-full"
                  mediaClassName="object-center"
                />
              </Parallax>
            </ClipReveal>
            {/* Small floating leaf-to-powder card at the photograph's lower-left
                corner, where the caption card sat. */}
            <Reveal
              variant="sweep-right"
              delay={0.3}
              className="relative -mt-12 ml-4 w-fit sm:ml-8 lg:absolute lg:-bottom-8 lg:-left-8 lg:mt-0 lg:ml-0"
            >
              <MoringaProcess />
            </Reveal>
          </div>
        </div>

        {/* --- Nutrition explorer ------------------------------------------ */}
        <MoringaNutrients
          media={
            <ImageSlot
              image="nutrition"
              tone="light"
              bare
              framed={false}
              sizes="5rem"
              className="size-16 shrink-0 rounded-full ring-4 ring-cream-warm sm:size-20"
              mediaClassName="object-cover object-center"
            />
          }
        />
      </Container>
    </section>
  );
}
