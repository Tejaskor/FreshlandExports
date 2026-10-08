import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/animations/reveal";
import { TurmericSun } from "@/features/turmeric-powder/components/turmeric-sun";
import { QuoteIntro } from "@/features/products/components/quote-intro";

/**
 * Request a Quote: a deep-green band lit by a golden glow, with the shared
 * quote intro on the left and the inquiry form on the right. The form's
 * message is pre-filled with the enquiry details the supplied brief asks for.
 */
export function TurmericContact({ productName }: { productName: string }) {
  return (
    <section
      id="quote"
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-forest-deep py-14 text-white lg:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_70%_at_85%_20%,rgb(214_166_72/0.22)_0%,transparent_70%)]"
      />
      <TurmericSun className="absolute -top-24 right-[6%] -z-10 hidden size-80 text-[var(--t-gold)]/15 lg:block" />

      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <QuoteIntro productName={productName} inverse accentClassName="text-[var(--t-gold)]" />
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
      </Container>
    </section>
  );
}
