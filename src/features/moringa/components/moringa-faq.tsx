import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import { FaqAccordion } from "@/features/moringa/components/faq-accordion";
import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";
import { faqs } from "@/features/moringa/data";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/**
 * FAQs, closing the Product Details section: a sticky heading with a
 * drawn moringa leaf on the left and the accordion on the right.
 */
export function FaqBlock({ className }: { className?: string }) {
  return (
    <Container className={cn("grid gap-12 lg:grid-cols-12 lg:gap-10", className)}>
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <Reveal variant="rise">
            <RuledEyebrow>FAQ</RuledEyebrow>
          </Reveal>
          <div className="relative">
            <RevealLines
              as="h3"
              id="faq-heading"
              className={cn(type.sub, "relative z-10 mt-6 text-forest")}
            >
              <Line>Everything</Line>
              <Line>
                You Need to <span className="text-leaf">Know</span>
              </Line>
            </RevealLines>
            {/* Decorative moringa leaf illustration beside the heading. */}
            <Reveal
              variant="bloom"
              delay={0.3}
              className="absolute -top-20 right-0 w-20 sm:right-10 sm:w-24 lg:-top-24 lg:right-4 lg:w-28"
            >
              <MoringaSprig className="h-auto w-full rotate-[28deg] text-leaf/70" />
            </Reveal>
          </div>
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
        <FaqAccordion items={faqs} />
      </Reveal>
    </Container>
  );
}
