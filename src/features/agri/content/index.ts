import { beans } from "@/features/agri/content/beans";
import { banana } from "@/features/agri/content/fruits/banana";
import { chikoo } from "@/features/agri/content/fruits/chikoo";
import { grapes } from "@/features/agri/content/fruits/grapes";
import { guava } from "@/features/agri/content/fruits/guava";
import { mango } from "@/features/agri/content/fruits/mango";
import { orange } from "@/features/agri/content/fruits/orange";
import { papaya } from "@/features/agri/content/fruits/papaya";
import { pomegranate } from "@/features/agri/content/fruits/pomegranate";
import { turmeric } from "@/features/agri/content/spices/turmeric";
import { redChilli } from "@/features/agri/content/spices/red-chilli";
import { blackPepper } from "@/features/agri/content/spices/black-pepper";
import { cuminSeeds } from "@/features/agri/content/spices/cumin-seeds";
import { corianderSeeds } from "@/features/agri/content/spices/coriander-seeds";
import { greenCardamom } from "@/features/agri/content/spices/green-cardamom";
import { cloves } from "@/features/agri/content/spices/cloves";
import { cinnamon } from "@/features/agri/content/spices/cinnamon";
import { mustardSeeds } from "@/features/agri/content/spices/mustard-seeds";
import { fennelSeeds } from "@/features/agri/content/spices/fennel-seeds";
import { bitterGourd } from "@/features/agri/content/bitter-gourd";
import { cabbage } from "@/features/agri/content/cabbage";
import { cucumber } from "@/features/agri/content/cucumber";
import { drumstick } from "@/features/agri/content/drumstick";
import { eggplant } from "@/features/agri/content/eggplant";
import { elephantYam } from "@/features/agri/content/elephant-yam";
import { frozenPeas } from "@/features/agri/content/frozen-peas";
import { garlic } from "@/features/agri/content/garlic";
import { greenChili } from "@/features/agri/content/green-chili";
import { okra } from "@/features/agri/content/okra";
import type { AgriProduct } from "@/features/agri/types";

/**
 * Agricultural landing pages by slug. Onion has its own dedicated page
 * (features/fresh-onion) built from final content, so it is not listed.
 */
export const agriProducts: readonly AgriProduct[] = [
  garlic,
  elephantYam,
  cabbage,
  cucumber,
  greenChili,
  frozenPeas,
  okra,
  bitterGourd,
  eggplant,
  drumstick,
  beans,
];

/** Fruit landing pages by slug. */
export const fruitProducts: readonly AgriProduct[] = [
  mango,
  banana,
  grapes,
  pomegranate,
  orange,
  chikoo,
  papaya,
  guava,
];

/** Spice landing pages by slug. */
export const spiceProducts: readonly AgriProduct[] = [
  turmeric,
  redChilli,
  blackPepper,
  cuminSeeds,
  corianderSeeds,
  greenCardamom,
  cloves,
  cinnamon,
  mustardSeeds,
  fennelSeeds,
];

/** Any landing page — agricultural, fruit or spice — by slug. */
export function findLandingProduct(slug: string) {
  return [...agriProducts, ...fruitProducts, ...spiceProducts].find((product) => product.slug === slug);
}
