"use client";

import { useState } from "react";

import { BlogCard, blogGrid } from "@/features/blog/components/blog-card";
import type { BlogCardData } from "@/features/blog/data";
import { type BlogCategory, blogCategories } from "@/features/blog/meta";
import { cn } from "@/lib/utils";

const chip =
  "inline-flex h-9 items-center gap-1.5 rounded-full border px-4 text-[0.8125rem] font-semibold whitespace-nowrap transition-colors duration-300 " +
  "focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:outline-none";

/**
 * Every Blog article as a card grid, with a row of category filters. The
 * page is first rendered unfiltered, so every article is in its source;
 * choosing a category narrows the grid in place, without a reload.
 */
export function BlogArchive({ posts }: { posts: readonly BlogCardData[] }) {
  const [active, setActive] = useState<BlogCategory | null>(null);

  const counts = new Map<BlogCategory, number>();
  for (const post of posts) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  const categories = blogCategories.filter((category) => counts.has(category));
  const visible = active ? posts.filter((post) => post.category === active) : posts;

  const filter = (category: BlogCategory | null, label: string, count: number) => {
    const pressed = active === category;
    return (
      <li key={label}>
        <button
          type="button"
          aria-pressed={pressed}
          onClick={() => setActive(category)}
          className={cn(
            chip,
            pressed
              ? "border-forest bg-forest text-white"
              : "border-line bg-white text-forest hover:border-line-strong hover:text-leaf",
          )}
        >
          {label}
          <span className={cn("text-[0.75rem] font-medium", pressed ? "text-white/70" : "text-ink-faint")}>{count}</span>
        </button>
      </li>
    );
  };

  return (
    <>
      <nav aria-label="Blog categories">
        <ul className="flex flex-wrap gap-2">
          {filter(null, "All Articles", posts.length)}
          {categories.map((category) => filter(category, category, counts.get(category) ?? 0))}
        </ul>
      </nav>

      <p aria-live="polite" className="mt-6 text-[0.8125rem] text-ink-muted">
        {active ? `${visible.length} articles in ${active}` : `${posts.length} articles`}
      </p>

      <ul className={cn(blogGrid, "mt-6")}>
        {visible.map((post) => (
          <li key={post.slug}>
            <BlogCard post={post} headingLevel="h2" showDate />
          </li>
        ))}
      </ul>
    </>
  );
}
