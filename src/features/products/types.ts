import type { MediaSlot } from "@/types/media";

/** A catalogue product. `href` is the canonical detail route. */
export type Product = {
  name: string;
  descriptor: string;
  href: string;
} & MediaSlot;

/** One photographic slot on a product page, rendered by ImageSlot. */
export type ImageSlotData = {
  /** Site-relative path the finished image should be saved to. */
  file: string;
  alt: string;
  /** Short caption printed on the placeholder so the slot is easy to find. */
  label: string;
  /** CSS object-position for the crop, when the subject is off-centre (default: centre). */
  position?: string;
};
