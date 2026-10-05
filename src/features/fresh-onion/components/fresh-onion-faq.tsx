import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { freshOnionFaqs } from "@/features/fresh-onion/data";
import { FaqAccordion } from "@/features/moringa/components/faq-accordion";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * FAQ — the site's accordion beside a sticky heading, as on the other
 * product pages. Closes the Specifications, MOQ and Storage run with a rule.
 */
export function FreshOnionFaq() {
  return (
    <section aria-labelledby="faq-heading" className="bg-white pb-14 lg:pb-20">
      <Container className="grid gap-10 border-t border-line pt-12 lg:grid-cols-12 lg:gap-10 lg:pt-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal variant="rise">
              <RuledEyebrow>FAQ</RuledEyebrow>
            </Reveal>
            <RevealLines as="h2" id="faq-heading" className={cn(type.section, "mt-5 text-forest")}>
              <Line>Fresh Onion</Line>
              <Line>
                <span className="text-leaf">Questions</span>
              </Line>
            </RevealLines>
            <Reveal variant="rise" delay={0.2}>
              <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ink-muted">
                Can&apos;t find your answer?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-forest underline decoration-leaf/40 underline-offset-4 transition-colors duration-300 hover:text-leaf"
                >
                  Contact our team
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal variant="rise" className="lg:col-span-7">
          <FaqAccordion items={freshOnionFaqs} />
        </Reveal>
      </Container>
    </section>
  );
}
