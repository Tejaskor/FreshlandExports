import Link from "next/link";

import { Reveal } from "@/animations/reveal";
import type { SiteMapGroup, SiteMapLink } from "@/features/site-map/data";
import { cn } from "@/lib/utils";

/*
 * A branch line runs down from each number badge; every item joins it with a
 * short horizontal rule. The vertical line stops at the last item's rule.
 * Offsets: items sit `pt` below the previous one, and their row is 1.25rem
 * tall, so the rule lands at pt + 0.625rem (0.625 + 0.625, 0.5 + 0.625).
 */
const item =
  "relative pl-6 before:absolute before:top-0 before:left-0 before:w-px before:bg-line-strong " +
  "after:absolute after:left-0 after:h-px after:w-4 after:bg-line-strong before:bottom-0 last:before:bottom-auto";
const topItem = cn(item, "pt-2.5 after:top-[1.25rem] last:before:h-[1.25rem]");
const childItem = cn(item, "pt-2 after:top-[1.125rem] last:before:h-[1.125rem]");

const linkClass =
  "rounded-sm text-[0.875rem] leading-5 text-ink transition-colors duration-300 hover:text-leaf " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf";

/** Number badge: "1", "1.2" … in the label face. */
function Badge({ children, large = false }: { children: string; large?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "type-label inline-flex shrink-0 items-center justify-center rounded-[0.3rem] bg-forest leading-none text-white",
        large ? "h-6 min-w-6 px-1.5 text-[0.75rem]" : "h-5 min-w-8 px-1 text-[0.6875rem]",
      )}
    >
      {children}
    </span>
  );
}

/** Files such as sitemap.xml are plain links, not client navigation. */
function TreeLink({ link }: { link: SiteMapLink }) {
  return link.href.includes(".") ? (
    <a href={link.href} className={linkClass}>
      {link.label}
    </a>
  ) : (
    <Link href={link.href} className={linkClass}>
      {link.label}
    </Link>
  );
}

function Children({ links }: { links: readonly SiteMapLink[] }) {
  return (
    <ul className="ml-4">
      {links.map((child) => (
        <li key={child.href} className={childItem}>
          <TreeLink link={child} />
        </li>
      ))}
    </ul>
  );
}

/** One numbered branch: the group's badge, then its links and their children. */
function Branch({ group, number }: { group: SiteMapGroup; number: number }) {
  return (
    <>
      <Badge large>{String(number)}</Badge>
      <ul className="ml-3">
        {group.links.map((link, index) => (
          <li key={link.href} className={topItem}>
            <span className="flex items-center gap-3">
              <Badge>{`${number}.${index + 1}`}</Badge>
              <TreeLink link={link} />
            </span>
            {link.children && link.children.length > 0 && <Children links={link.children} />}
          </li>
        ))}
      </ul>
    </>
  );
}

function GroupHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="mb-3 font-display text-title text-leaf">
      {children}
    </h2>
  );
}

/** The site map: the main groups side by side, then the product range below. */
export function SiteMapTree({ groups, products }: { groups: readonly SiteMapGroup[]; products: SiteMapGroup }) {
  const productNumber = groups.length + 1;
  return (
    <div className="mt-10 lg:mt-12">
      <Reveal stagger={0.08} variant="rise" className="grid items-start gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <nav key={group.title} aria-labelledby={`site-map-${index + 1}`}>
            <GroupHeading id={`site-map-${index + 1}`}>{group.title}</GroupHeading>
            <Branch group={group} number={index + 1} />
          </nav>
        ))}
      </Reveal>

      <nav aria-labelledby="site-map-products" className="mt-10 border-t border-line pt-8 lg:mt-12 lg:pt-10">
        <GroupHeading id="site-map-products">{products.title}</GroupHeading>
        <Badge large>{String(productNumber)}</Badge>
        {/* One column per category, each a branch of its own. */}
        <Reveal as="ul" stagger={0.08} variant="rise" className="mt-1 grid items-start gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.links.map((category, index) => (
            <li key={category.href} className={cn(topItem, "ml-3 before:h-[1.25rem]")}>
              <span className="flex items-center gap-3">
                <Badge>{`${productNumber}.${index + 1}`}</Badge>
                <TreeLink link={category} />
              </span>
              {category.children && <Children links={category.children} />}
            </li>
          ))}
        </Reveal>
      </nav>
    </div>
  );
}
