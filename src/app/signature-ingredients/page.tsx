import { BrandPhilosophy } from "@/features/signature-ingredients/components/brand-philosophy";
import { FeaturedIngredients } from "@/features/signature-ingredients/components/featured-ingredients";
import { IngredientNavigation } from "@/features/signature-ingredients/components/ingredient-navigation";
import { IngredientsCta } from "@/features/signature-ingredients/components/ingredients-cta";
import { SignatureIngredientsHero } from "@/features/signature-ingredients/components/signature-ingredients-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Signature Ingredients",
  description:
    "Science-backed botanical ingredients from Freshland Exports — Ashwalite, Fenugreen, Cinaplus, Ocibos, MobeetX, TheaMind and Peatrix — for nutrition, wellness and functional applications.",
  path: "/signature-ingredients",
});

/**
 * Server-rendered throughout; only the motion wrappers, the ingredient
 * selector and the anchor button hydrate.
 */
export default function Page() {
  return (
    <>
      <SignatureIngredientsHero />
      <IngredientNavigation />
      <BrandPhilosophy />
      <FeaturedIngredients />
      <IngredientsCta />
    </>
  );
}
