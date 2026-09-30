/**
 * Site feature flags. Kept free of imports so next.config.ts can read them.
 */
export const featureFlags = {
  /**
   * Our Signature Ingredients is temporarily hidden: it is left out of the
   * header, footer and sitemap, and /signature-ingredients (and each
   * ingredient page) temporarily redirects to /products. All of its code and
   * content remain in place — set this to true to restore the page.
   */
  signatureIngredients: false,
} as const;
