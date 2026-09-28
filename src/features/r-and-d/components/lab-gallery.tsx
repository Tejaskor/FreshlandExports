import { Carousel } from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { Section } from "@/components/ui/section";
import { labGallery } from "@/features/r-and-d/data";

/**
 * Built on the shared Carousel: a native scroll-snap rail, so touch, trackpad
 * and keyboard work without JS, and the arrow buttons glide one frame at a
 * time with smooth scrolling.
 */
export function LabGallery() {
  return (
    <Section aria-labelledby="gallery-heading" className="overflow-hidden bg-canvas lg:py-24">
      <Container>
        <Carousel
          scrollable
          label="Inside our lab"
          heading={
            <div>
              <Reveal variant="rise">
                <RuledEyebrow>{labGallery.eyebrow}</RuledEyebrow>
              </Reveal>
              <RevealLines as="h2" id="gallery-heading" className="mt-6 text-display" delay={0.05}>
                <Line>Inside Our Lab</Line>
              </RevealLines>
              <Reveal delay={0.15} variant="rise">
                <p className="mt-4 max-w-xl text-lead text-ink-muted">{labGallery.lead}</p>
              </Reveal>
            </div>
          }
        >
          {labGallery.items.map((item) => (
            <figure
              key={item.caption}
              className="group relative aspect-[4/5] w-[72%] shrink-0 snap-start overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] sm:w-[40%] lg:w-[calc((100%-6rem)/4)]"
            >
              <Figure
                image={item.media.image}
                alt={item.media.alt}
                art={item.media.art}
                // Landscape photos in a 4:5 frame are sized by height.
                sizes="(min-width: 1024px) 620px, (min-width: 640px) 75vw, 140vw"
                className="h-full w-full"
                mediaClassName="transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/80 to-transparent px-5 pt-12 pb-4 text-[0.875rem] font-medium text-white">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
