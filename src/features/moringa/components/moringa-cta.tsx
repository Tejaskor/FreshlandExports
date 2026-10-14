import { ContactForm } from "@/components/forms/contact-form";
import { productEnquirySource } from "@/components/forms/contact-schema";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/animations/reveal";
import { MoringaSprig } from "@/components/media/moringa-sprig";
import { QuoteIntro } from "@/features/products/components/quote-intro";

/**
 * Request a Quote — the closing band on forest green: the invitation on the
 * left (text only) and the Moringa quote form on the right, which every
 * "Request a Quote" on the page scrolls to. The form's button is the
 * section's only action; the product is sent with the lead.
 */
export function MoringaCta({ productName, productSlug }: { productName: string; productSlug: string }) {
  return (
    <section
      id="quote"
      aria-labelledby="cta-heading"
      className="relative isolate -mt-px overflow-hidden bg-forest pt-8 pb-14 text-cream lg:pt-10 lg:pb-20"
    >
      <MoringaSprig
        variant="line"
        className="absolute -bottom-16 -left-16 -z-10 h-[26rem] w-auto rotate-[-24deg] text-white/[0.06]"
      />

      <Container className="grid items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-5">
          <QuoteIntro productName={productName} inverse eyebrowClassName="text-sage-300" />
        </div>

        <div id="quote-form" className="scroll-mt-28 lg:col-span-7">
          <Reveal variant="rise" className="text-ink">
            <ContactForm
              source={productEnquirySource(productSlug)}
              variant="quote"
              product={productName}
              submitLabel="Request a Quote"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
