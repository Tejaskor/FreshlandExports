import { notFound } from "next/navigation";

import { IngredientDetail } from "@/features/signature-ingredients/components/ingredient-detail";
import { findIngredient, ingredientHref, ingredients } from "@/features/signature-ingredients/data";
import { createMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

/** Pre-renders one page per signature ingredient at build time. */
export function generateStaticParams() {
  return ingredients.map((ingredient) => ({ slug: ingredient.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const ingredient = findIngredient(slug);

  if (!ingredient) return createMetadata({ title: "Ingredient not found", noIndex: true });

  return createMetadata({
    title: ingredient.name,
    description: `${ingredient.name} — ${ingredient.tagline} A Freshland Exports signature ingredient.`,
    path: ingredientHref(ingredient.slug),
  });
}

export default async function SignatureIngredientPage({ params }: Params) {
  const { slug } = await params;
  const ingredient = findIngredient(slug);

  if (!ingredient) notFound();

  return <IngredientDetail ingredient={ingredient} />;
}
