import type { ArtVariant } from "@/components/media/botanical-art";
import type { CatalogueCategoryId } from "@/features/products/catalogue";
import {
  type CaseStudy,
  caseStudyHref,
  caseStudyProducts,
  categoryHeading,
  statusLabel,
} from "@/features/case-studies/data";

/** What a listing card needs: plain data, so it can cross into the client filter. */
export type CaseStudyCardData = {
  slug: string;
  href: string;
  title: string;
  summary: string;
  topic: string;
  status: string;
  illustrative: boolean;
  categories: readonly { id: CatalogueCategoryId; heading: string }[];
  products: readonly string[];
  image: { src: string; alt: string; art: ArtVariant };
  /** Lower-case text the search matches against. */
  search: string;
};

export function toCaseStudyCard(study: CaseStudy): CaseStudyCardData {
  const categories = study.categories.map((id) => ({ id, heading: categoryHeading(id) }));
  const products = caseStudyProducts(study).map((product) => product.name);
  return {
    slug: study.slug,
    href: caseStudyHref(study.slug),
    title: study.title,
    summary: study.summary,
    topic: study.topic,
    status: statusLabel[study.status],
    illustrative: study.status === "illustrative",
    categories,
    products,
    image: study.image,
    search: [study.title, study.summary, study.topic, ...categories.map((c) => c.heading), ...products, ...study.keywords]
      .join(" ")
      .toLowerCase(),
  };
}
