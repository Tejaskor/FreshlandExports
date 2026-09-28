import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { ScrollScrub } from "@/animations/scroll-scrub";
import { Section } from "@/components/ui/section";
import { contact } from "@/features/home/data";

export function Contact() {
  return (
    <Section aria-labelledby="contact-heading" className="relative isolate bg-cream-warm">
      {/* Decorative backdrop: pale map-and-foliage plate. Empty alt because it
          carries no information the surrounding copy does not already give. */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block">
        {/* Bled 4% past top and bottom so the ±3.5% drift never uncovers the
            plate's edge — otherwise a hairline of section background shows. */}
        <ScrollScrub
          className="absolute inset-x-0 -inset-y-[4%]"
          from={{ yPercent: 3.5 }}
          to={{ yPercent: -3.5 }}
          desktopOnly
        >
          <ScrollScrub
            className="absolute inset-0"
            from={{ opacity: 0, scale: 1.1 }}
            to={{ opacity: 1, scale: 1 }}
            start="top bottom"
            end="top 35%"
            desktopOnly
          >
            <Image
              src="/images/home/contact/contact-world-map.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </ScrollScrub>
        </ScrollScrub>
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="max-w-lg">
          <Reveal variant="rise">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
          </Reveal>

          <RevealLines
            as="h2"
            id="contact-heading"
            className="mt-5 text-display"
            delay={0.05}
          >
            <Line>We&rsquo;re Here to Support</Line>
            <Line>Your Ingredient Needs</Line>
          </RevealLines>

          <Reveal delay={0.2} variant="rise">
            <p className="mt-5 max-w-md text-lead text-ink-muted">{contact.body}</p>
          </Reveal>

          <Reveal delay={0.3} variant="rise" className="mt-7">
            <Button href={contact.cta.href}>{contact.cta.label}</Button>
          </Reveal>
        </div>

        <Reveal delay={0.28} variant="sweep-right">
          <ContactForm title={contact.formTitle} />
        </Reveal>
      </Container>
    </Section>
  );
}
