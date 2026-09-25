import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge cannot know that `text-display`, `text-lead` etc. are custom
 * font-size tokens from @theme — it assumes `text-*` is a colour and lets a
 * real colour class win, silently dropping the size. That is exactly what
 * collapsed the sustainability heading to 16px.
 *
 * Registering the tokens as font-sizes makes size and colour independent
 * again, so `cn("text-display", "text-white")` keeps both.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["hero", "display", "title", "heading", "lead", "body", "stat", "label"] },
      ],
    },
  },
});

/** Merge conditional class names, resolving conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Absolute URL for a site-relative path — used by metadata and sitemap. */
export function absoluteUrl(path: string, base: string) {
  return new URL(path, base).toString();
}
