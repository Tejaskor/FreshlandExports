import type { IconName } from "@/components/ui/icon";
import { catalogue, catalogueHref, catalogueImage, type CatalogueCategoryId } from "@/features/products/catalogue";

/**
 * The header's Products menu. Client-safe, and imports only the central
 * catalogue: the header ships this file to the browser, so it must not pull
 * in the export product records (./export-catalogue).
 */

export type ProductMenuItem = {
  label: string;
  href: string;
  slug: string;
  /** Thumbnail; null when no photograph exists yet (a placeholder is shown). */
  image: string | null;
};

export type ProductMenuGroupId = CatalogueCategoryId;

export type ProductMenuGroup = {
  id: ProductMenuGroupId;
  title: string;
  icon: IconName;
  /** Category image in the menu (from /images/dropdown-menu-icons/), or null. */
  cover: string | null;
  items: readonly ProductMenuItem[];
};

/**
 * The header's Products menu, derived from the central catalogue
 * (./catalogue.ts): one group per category, each product linking to
 * /products/<slug>. Thumbnails are the products' own catalogue images — the
 * same source as every other listing; a product without a photograph keeps
 * the menu's placeholder icon — no substitute image is used. Category
 * covers come from /images/dropdown-menu-icons/.
 *
 * Onion / Onion Powder and Turmeric / Turmeric Powder are separate products
 * with separate slugs.
 */

/** Public URL for a dropdown icon; spaces and capitals are encoded safely. */
const dropdownIcon = (file: string) => `/images/dropdown-menu-icons/${encodeURIComponent(file)}`;

export const productMenu: readonly ProductMenuGroup[] = catalogue.map((category) => ({
  id: category.id,
  title: category.label,
  icon: category.menu.icon,
  cover: dropdownIcon(category.cover.file),
  items: category.products.map((product) => ({
    label: product.menuLabel ?? product.name,
    slug: product.slug,
    href: catalogueHref(product.slug),
    image: catalogueImage(product.image),
  })),
}));
