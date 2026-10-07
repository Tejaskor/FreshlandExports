import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { ContactBackdrop } from "@/features/contact/components/contact-backdrop";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Freshland Exports for availability, specifications and export requirements across botanical powders, fresh produce, fruits and whole spices.",
  path: "/contact",
});

/**
 * A minimal, centred contact page: a compact hero, then the enquiry form as
 * the page's single focus, on a soft cream-to-sage gradient with faint
 * organic curves and botanical decoration at the edges.
 */
export default function ContactPage() {
  return (
    // Soft natural gradient: warm cream at the top, easing through cream and
    // beige into a pale sage towards the bottom right.
    <div className="relative isolate bg-[#F7F3E8] bg-[radial-gradient(90%_60%_at_15%_0%,#F7F3E8_0%,transparent_70%),radial-gradient(70%_55%_at_100%_100%,#DCE8D5_0%,transparent_70%),linear-gradient(180deg,#F7F3E8_0%,#F1E9D8_45%,#E8F0E3_100%)]">
      <ContactBackdrop />

      {/* Top padding clears the fixed header (88px) with ~24–32px to spare. */}
      <section aria-labelledby="page-heading" className="pt-28 pb-8 text-center lg:pt-[7.5rem] lg:pb-10">
        <Container>
          <Reveal variant="rise" className="flex justify-center">
            <Eyebrow>Contact Us</Eyebrow>
          </Reveal>
          <RevealLines as="h1" id="page-heading" className="mt-5 text-display" intro>
            <Line>Let&rsquo;s connect</Line>
          </RevealLines>
          <Reveal delay={0.2} variant="rise">
            <p className="mx-auto mt-4 max-w-xl text-lead text-ink-muted">
              Tell us what you&rsquo;re looking for and our team will get back to you with availability and
              specifications.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-label="Enquiry form" className="pb-16 lg:pb-24">
        <Container>
          <Reveal variant="rise" className="mx-auto max-w-[44rem]">
            <ContactForm title="Send Us a Message" variant="detailed" submitLabel="Send Enquiry" />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
