import { Container } from "@/components/ui/container";
import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import { BotanicalLines } from "@/components/media/botanical-lines";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Parallax } from "@/animations/parallax";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { AnchorButton } from "@/components/ui/anchor-button";
import { CinematicFrame } from "@/features/signature-ingredients/components/cinematic-frame";
import { signatureHero } from "@/features/signature-ingredients/data";

/**
 * Cinematic hero. It sits in a near-full-bleed frame below the header rather
 * than under it: the header's navigation is ink on a transparent bar, and a
 * dark photograph behind it would swallow it — the same reason the About and
 * R&D heroes are framed.
 */
export function SignatureIngredientsHero() {
  return (
    <section aria-labelledby="page-heading" className="bg-cream pt-24 lg:pt-28">
      <Container width="wide" className="px-3 sm:px-4 lg:px-5">
        <CinematicFrame className="relative isolate overflow-hidden rounded-[1.75rem] bg-forest-deep">
          <div className="absolute inset-0 -z-10">
            <div data-frame-zoom className="h-full w-full">
              <Parallax className="h-full w-full" amount={12} overscan={1.18} zoom={0.06}>
                <Figure
                  image={signatureHero.media.image}
                  alt={signatureHero.media.alt}
                  art={signatureHero.media.art}
                  priority
                  // Wide frame on desktop; tall on mobile, where the 16:9
                  // photo is sized by height (plus overscan).
                  sizes="(min-width: 1024px) 100vw, 260vw"
                  className="h-full w-full bg-forest-deep"
                  mediaClassName="object-[60%_center]"
                />
              </Parallax>
            </div>
            {/* Readability veil: darkest behind the centred copy, letting the
                sunlit edges of the photograph breathe. */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(13_44_30/0.82)_0%,rgb(13_44_30/0.55)_45%,rgb(13_44_30/0.2)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-deep/70 to-transparent" />
          </div>

          {/* Sprigs drift against the scroll — the only ambient motion. */}
          <ScrollScrub
            className="absolute -top-6 -left-10 -z-10 hidden w-56 text-white/15 md:block"
            triggerSelector="section"
            start="top top"
            end="bottom top"
            from={{ rotate: -4, y: 0 }}
            to={{ rotate: 6, y: 60 }}
            desktopOnly
          >
            <BotanicalLines className="w-full -scale-x-100" />
          </ScrollScrub>

          <div className="flex min-h-[36rem] flex-col items-center justify-center px-6 pt-20 pb-14 text-center sm:px-10 md:min-h-[40rem] lg:min-h-[min(84vh,52rem)] lg:pt-24 lg:pb-16">
            <RevealLines
              as="h1"
              id="page-heading"
              className="text-hero font-medium text-white"
              delay={0.55}
              stagger={0.14}
              intro
            >
              <Line>{signatureHero.headline.lead}</Line>
              <Line className="text-highlight-inverse">{signatureHero.headline.emphasis}</Line>
            </RevealLines>

            <Reveal delay={0.95} variant="rise">
              <p className="mx-auto mt-7 max-w-xl text-[length:clamp(1.0625rem,0.98rem+0.4vw,1.3125rem)] leading-[1.68] text-white/85">
                {signatureHero.body}
              </p>
            </Reveal>

            <Reveal delay={1.15} variant="bloom" className="mt-9">
              <AnchorButton href={signatureHero.cta.href} size="lg">
                {signatureHero.cta.label}
              </AnchorButton>
            </Reveal>

            <Reveal
              as="ul"
              stagger={0.12}
              delay={1.3}
              variant="settle"
              className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-white/20"
            >
              {signatureHero.attributes.map((attribute) => (
                <li key={attribute.label} className="flex flex-col items-center gap-3 px-3">
                  <span className="flex size-11 items-center justify-center rounded-full border border-white/35 text-white">
                    <Icon name={attribute.icon} className="size-5" />
                  </span>
                  <span className="max-w-[10.5rem] text-[0.9375rem] leading-snug font-medium text-white/90">
                    {attribute.label}
                  </span>
                </li>
              ))}
            </Reveal>
          </div>
        </CinematicFrame>
      </Container>
    </section>
  );
}
