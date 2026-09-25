import type { MediaSlot } from "@/types/media";

/** A product category as shown on the homepage grid and category routes. */
export type Category = {
  title: string;
  description: string;
  href: string;
} & MediaSlot;
