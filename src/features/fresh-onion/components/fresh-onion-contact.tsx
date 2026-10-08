import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/animations/reveal";
import { QuoteIntro } from "@/features/products/components/quote-intro";

/**
 * Contact & Export Enquiry on light cream: the invitation and buttons on
 * the left, the existing inquiry form on the right. The form's message is
 * pre-filled with the product and the details a bulk buyer needs to give.
 */
export function FreshOnionContact() {
  return (
    <section
      id="quote"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-line bg-cream-warm py-14 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(40%_60%_at_80%_50%,rgb(90_161_95/0.12)_0%,transparent_70%)]"
      />
      <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <QuoteIntro productName="Fresh Onions" />
        </div>

        <div id="quote-form" className="scroll-mt-28 lg:col-span-7">
          <Reveal variant="rise">
            <ContactForm
              title="Request a Quote for Fresh Onions"
              submitLabel="Request a Quote"
              defaultMessage={"I'd like a quote for Fresh Onions.\nCompany: \nRequired quantity: \nPackaging preference: \n"}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
