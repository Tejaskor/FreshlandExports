import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";

/** Closing band on /products: a farmland panel inviting a quote request. */
export function ProductsQuoteCta() {
  return (
    <section aria-labelledby="products-quote-heading" className="bg-white py-12 lg:py-16">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 lg:rounded-[2.5rem] lg:px-14 lg:py-14">
          <Image
            src="/images/home/sustainability/sustainable-farmland.webp"
            alt=""
            fill
            sizes="(min-width: 1440px) 1360px, 100vw"
            className="-z-20 object-cover"
          />
          {/* Forest wash: solid behind the copy, opening up over the fields. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(13_44_30/0.94)_0%,rgb(13_44_30/0.82)_50%,rgb(13_44_30/0.45)_100%)]"
          />

          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal variant="rise">
                <RuledEyebrow tone="inverse">Custom Requirements</RuledEyebrow>
              </Reveal>
              <RevealLines as="h2" id="products-quote-heading" className="mt-5 font-display text-display text-cream">
                <Line>Looking for a Specific Product?</Line>
              </RevealLines>
              <Reveal variant="rise" delay={0.1}>
                <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-sage-100 lg:text-base">
                  Tell us your product requirements, quantity and destination and our team will help with
                  availability and export options.
                </p>
              </Reveal>
            </div>

            <Reveal variant="rise" delay={0.2} className="lg:col-span-4 lg:justify-self-end">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Get a Quote
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
