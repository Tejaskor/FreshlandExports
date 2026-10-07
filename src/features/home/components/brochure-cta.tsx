import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { BrochureButton } from "@/features/brochure/brochure-button";
import { catalogue } from "@/features/products/catalogue";

/** The ranges the brochure covers — matching the product catalogue. */
const ranges = catalogue.map((category) => category.label);

/**
 * Homepage brochure section, above the closing contact band: a deep-forest
 * panel with the invitation on the left and the brochure's own cover on the
 * right. The button opens the shared brochure lead popup.
 */
export function BrochureCta() {
  return (
    <section aria-labelledby="brochure-heading" className="bg-white py-14 lg:py-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-forest-deep px-6 py-10 sm:px-10 lg:rounded-[2.5rem] lg:px-14 lg:py-14">
          {/* Soft leaf-green glow behind the cover. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(45%_70%_at_82%_50%,rgb(90_161_95/0.22)_0%,transparent_70%)]"
          />

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal variant="rise">
                <RuledEyebrow tone="inverse">Explore Freshland Exports</RuledEyebrow>
              </Reveal>
              <RevealLines as="h2" id="brochure-heading" className="mt-5 font-display text-display text-cream">
                <Line>
                  Get Our <span className="text-highlight-inverse">Brochure</span>
                </Line>
              </RevealLines>
              <Reveal variant="rise" delay={0.1}>
                <p className="mt-5 max-w-xl text-lead text-sage-100">
                  Discover our product portfolio, sourcing approach and bulk supply capabilities.
                </p>
                <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-sage-200">
                  Explore Freshland Exports and discover our agricultural products, fruits, spices and botanical
                  powder offerings for wholesale, food-service, processing and international buyers.
                </p>
              </Reveal>

              <Reveal as="ul" stagger={0.05} variant="rise" delay={0.15} className="mt-7 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/12 sm:grid-cols-4">
                {ranges.map((range) => (
                  <li key={range} className="bg-forest-deep px-4 py-3">
                    <span className="block text-[0.75rem] leading-snug text-sage-200">{range}</span>
                  </li>
                ))}
              </Reveal>

              <Reveal variant="rise" delay={0.2} className="mt-8">
                <BrochureButton
                  source="homepage_brochure"
                  className="inline-flex h-12 cursor-pointer items-center gap-2.5 rounded-full bg-cream px-6 text-[0.9375rem] font-semibold text-forest-deep transition-colors duration-300 hover:bg-white focus-visible:ring-2 focus-visible:ring-highlight-inverse focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep focus-visible:outline-none"
                >
                  Download Now
                  <Icon name="download" className="size-4 text-rust" strokeWidth={2} />
                </BrochureButton>
              </Reveal>
            </div>

            <Reveal variant="rise" delay={0.15} className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[18rem]">
                <span aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-lg bg-white/10" />
                <span className="relative block aspect-[595/842] -rotate-2 overflow-hidden rounded-lg shadow-[var(--shadow-panel)] ring-1 ring-white/15">
                  <Image
                    src="/images/shared/brochure-cover.webp"
                    alt="Cover of the Freshland Exports company brochure"
                    fill
                    sizes="(min-width: 640px) 288px, 256px"
                    className="object-cover"
                  />
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
