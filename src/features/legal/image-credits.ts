import { productPhotoCredits } from "@/features/agri/content/photo-credits";
import { blogPosts } from "@/features/blog/data";
import type { LegalSection, PhotoCreditItem } from "@/features/legal/types";
import { catalogueProducts } from "@/features/products/catalogue";

/**
 * The Image Credits page (/image-credits): every third-party photograph on
 * the site, with its author, source and licence, built from
 * features/agri/content/photo-credits.ts so a new photograph is credited
 * once it is recorded there.
 */

export const creditsIntro =
  "The photographs below are by the photographers named, from Wikimedia Commons, used under the licences shown. Each has been resized and converted to WebP for this website.";

/** The Commons file name, without its extension, as a readable title. */
function fileTitle(source: string) {
  const name = decodeURIComponent(source.split("/File:").pop() ?? source);
  return name.replace(/\.[a-z0-9]+$/i, "").replace(/_/g, " ");
}

/** The page a product photograph appears on, by its file path. */
function productUsedOn(path: string) {
  const file = path.split("/").pop() ?? "";
  const product = [...catalogueProducts]
    .sort((a, b) => b.slug.length - a.slug.length)
    .find((entry) => file.startsWith(`${entry.slug}-`));
  return product ? `${product.name} page` : "product page";
}

function articleUsedOn(path: string) {
  const slug = (path.split("/").pop() ?? "").replace(/\.webp$/, "");
  const post = blogPosts.find((entry) => entry.slug === slug);
  return post ? `“${post.title}”` : "Blog article";
}

const credits = Object.entries(productPhotoCredits);

const items = (blog: boolean): PhotoCreditItem[] =>
  credits
    .filter(([path]) => path.startsWith("/images/Blog/") === blog)
    .map(([path, credit]) => ({
      title: fileTitle(credit.source),
      usedOn: blog ? articleUsedOn(path) : productUsedOn(path),
      author: credit.author,
      license: credit.license,
      licenseUrl: credit.licenseUrl,
      source: credit.source,
      changes: credit.changes,
    }));

export const creditsSections: readonly LegalSection[] = [
  { id: "product-pages", title: "Product pages", blocks: [{ type: "credits", items: items(false) }] },
  { id: "blog", title: "Blog articles", blocks: [{ type: "credits", items: items(true) }] },
];
