import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/animations/reveal";
import { OnionRings } from "@/features/onion-powder/components/onion-rings";
import { QuoteIntro } from "@/features/products/components/quote-intro";

/**
 * Contact: a deep-green card sitting on white, the invitation on the left
 * and the existing inquiry form on the right. The form's message is
 * pre-filled with the details a bulk buyer usually needs to give.
 */
export function OnionContact({ productName }: { productName: string }) {
  return (
    <section id="quote" aria-labelledby="cta-heading" className="bg-white py-10 lg:py-16">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-forest-deep px-5 py-10 text-white sm:px-10 lg:rounded-[2.75rem] lg:px-14 lg:py-14">
          <OnionRings className="absolute -bottom-48 -left-48 -z-10 size-[36rem] text-highlight-inverse/[0.08]" />

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <QuoteIntro productName={productName} inverse accentClassName="text-highlight-inverse" />
            </div>

            <div id="quote-form" className="scroll-mt-28 lg:col-span-7">
              <Reveal variant="rise" className="text-ink">
                <ContactForm
                  title={`Request a Quote for ${productName}`}
              submitLabel="Request a Quote"
                  defaultMessage={`I'd like a quote for ${productName}.\nCompany: \nRequired quantity: \nPackaging preference: \n`}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
