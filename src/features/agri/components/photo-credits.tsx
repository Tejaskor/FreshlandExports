import { Container } from "@/components/ui/container";
import { productPhotoCredits } from "@/features/agri/content/photo-credits";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";

/** Every photograph slot on the page, in page order, without repeats. */
function pageSlots(product: AgriProduct): ImageSlotData[] {
  const { images, uses } = product;
  const all = [
    images.hero,
    images.detail,
    images.uses,
    images.specs,
    ...(images.extra ?? []),
    ...uses.groups.map((group) => group.image),
    product.process?.image,
  ].filter((slot): slot is ImageSlotData => Boolean(slot));
  return all.filter((slot, index) => all.findIndex((other) => other.file === slot.file) === index);
}

/**
 * Attribution for the licensed third-party photographs on a product page
 * (title, author, source and licence, as CC BY / CC BY-SA require). Renders
 * nothing when the page has none.
 */
export function PhotoCredits({ product }: { product: AgriProduct }) {
  const credited = pageSlots(product).flatMap(({ alt, file }) => {
    const credit = productPhotoCredits[file];
    return credit ? [{ alt, credit }] : [];
  });
  if (credited.length === 0) return null;

  return (
    <section aria-label="Photo credits" className="border-t border-line bg-white py-6">
      <Container>
        <p className="text-[0.6875rem] leading-relaxed text-ink-muted">
          <span className="font-medium text-ink">Photo credits: </span>
          {credited.map(({ credit, alt }, index) => (
            <span key={credit.source}>
              {index > 0 && " · "}
              <a href={credit.source} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                {alt}
              </a>{" "}
              by {credit.author},{" "}
              {credit.licenseUrl ? (
                <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline-offset-2 hover:underline">
                  {credit.license}
                </a>
              ) : (
                credit.license
              )}
            </span>
          ))}
          {" "}
          — via Wikimedia Commons; resized and converted to WebP.
        </p>
      </Container>
    </section>
  );
}
