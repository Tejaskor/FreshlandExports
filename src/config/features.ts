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
  /**
   * The comment form under each Blog article. Comments go to the shared form
   * webhook as `type: "blog_comment"`; turn this on only once the Make.com
   * scenario routes them away from the lead records, holds them for
   * moderation, and a real test submission has arrived there. While off, the
   * form is not shown and the Privacy Policy does not mention comments.
   */
  blogComments: false,
} as const;
