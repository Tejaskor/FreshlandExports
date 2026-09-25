import type { MediaSlot } from "@/types/media";

/** A catalogue product. `href` is the canonical detail route. */
export type Product = {
  name: string;
  descriptor: string;
  href: string;
} & MediaSlot;
