import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/animations/reveal";
import { inquiryMessage } from "@/features/agri/components/shared";
import type { AgriProduct } from "@/features/agri/types";
import { QuoteIntro } from "@/features/products/components/quote-intro";

/** The shared quote intro in this product's palette: its soft tint on deep grounds, its accent on light ones. */
function Invitation({ product, inverse = false, center = false }: { product: AgriProduct; inverse?: boolean; center?: boolean }) {
  return (
    <QuoteIntro
      productName={product.name}
      inverse={inverse}
      center={center}
      accentClassName={inverse ? "text-[var(--p-soft)]" : "text-[var(--p-accent)]"}
    />
  );
}

function Form({ product }: { product: AgriProduct }) {
  return (
    <div id="quote-form" className="scroll-mt-28">
      <Reveal variant="rise" className="text-ink">
        <ContactForm
          title={`Request a Quote for ${product.name}`}
          defaultMessage={inquiryMessage(product.name)}
          submitLabel="Request a Quote"
        />
      </Reveal>
    </div>
  );
}

export function Contact({ product, variant }: { product: AgriProduct; variant: "split" | "band" | "card" | "centered" }) {
  /* Deep band: the invitation, the form beside it. */
  if (variant === "band") {
    return (
      <section id="quote" aria-labelledby="cta-heading" className="bg-[var(--p-deep)] py-14 text-white lg:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Invitation product={product} inverse />
          </div>
          <div className="lg:col-span-7">
            <Form product={product} />
          </div>
        </Container>
      </section>
    );
  }

  /* A deep rounded card sitting on white. */
  if (variant === "card") {
    return (
      <section id="quote" aria-labelledby="cta-heading" className="bg-white py-10 lg:py-16">
        <Container>
          <div className="grid items-center gap-10 rounded-[2rem] bg-[var(--p-deep)] px-5 py-10 text-white sm:px-10 lg:grid-cols-12 lg:gap-12 lg:rounded-[2.75rem] lg:px-14 lg:py-14">
            <div className="lg:col-span-5">
              <Invitation product={product} inverse />
            </div>
            <div className="lg:col-span-7">
              <Form product={product} />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  /* Centred invitation, the form beneath it. */
  if (variant === "centered") {
    return (
      <section id="quote" aria-labelledby="cta-heading" className="bg-[var(--p-tint)] py-14 lg:py-20">
        <Container>
          <Invitation product={product} center />
          <div className="mx-auto mt-10 max-w-2xl">
            <Form product={product} />
          </div>
        </Container>
      </section>
    );
  }

  /* Light split: invitation left, form right. */
  return (
    <section id="quote" aria-labelledby="cta-heading" className="border-t border-line bg-[var(--p-tint)] py-14 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Invitation product={product} />
        </div>
        <div className="lg:col-span-7">
          <Form product={product} />
        </div>
      </Container>
    </section>
  );
}
