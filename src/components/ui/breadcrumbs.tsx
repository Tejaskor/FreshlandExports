import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

/** Trail of links ending in the current page (the last crumb, unlinked). */
export function Breadcrumbs({ items, className }: { items: readonly Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-[0.8125rem]", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((crumb, index) => {
          const last = index === items.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-2">
              {crumb.href && !last ? (
                <Link
                  href={crumb.href}
                  className="text-ink-muted transition-colors duration-300 hover:text-forest"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className="font-medium text-forest">
                  {crumb.label}
                </span>
              )}
              {!last && <Icon name="chevron-down" className="size-3.5 -rotate-90 text-ink-muted" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
