import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/animations/reveal";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Request a sample, a specification or a custom botanical solution from the Freshland Exports team.",
  path: "/contact",
});

/**
 * Renders the form directly rather than reusing the homepage's Contact
 * section, which carries its own heading and would duplicate the h1 here.
 */
export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's connect"
        title={["We're here to support", "your ingredient needs"]}
        lead="Tell us what you are formulating and our team will come back with specifications and availability."
      />

      <Section className="bg-cream-warm">
        <Container>
          <Reveal variant="rise" className="mx-auto max-w-2xl">
            <ContactForm title="Send Us a Message" />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
