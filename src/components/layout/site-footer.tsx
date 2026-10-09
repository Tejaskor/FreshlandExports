import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { footerNav, legalNav, siteConfig } from "@/config/site";
import { BrochureButton } from "@/features/brochure/brochure-button";
import { cn } from "@/lib/utils";

const contactRows = [
  { icon: "mail" as const, label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  {
    icon: "phone" as const,
    label: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: "pin" as const,
    label: `${siteConfig.contact.address.locality}, ${siteConfig.contact.address.country}`,
    href: null,
  },
];

/**
 * Footer links: Inter at 1rem in muted ink, turning leaf green over 300ms on
 * hover, with a visible keyboard focus ring.
 */
const footerLink =
  "rounded-sm text-[1rem] text-ink-muted transition-colors duration-300 hover:text-leaf " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf";

/** Link columns after the brand: a hairline divider on their left from xl. */
const column = "xl:border-l xl:border-line-strong xl:pl-8";

/** Serif column heading. */
function ColumnHeading({ children }: { children: string }) {
  return <h2 className="font-display text-[1.375rem] leading-tight text-forest">{children}</h2>;
}

/** Faint leaves tucked into the footer's lower corners; mirrored on the right. */
function CornerLeaves({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 120"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none absolute bottom-0 hidden h-28 w-auto text-leaf lg:block", className)}
    >
      <path d="M-10 120C10 70 50 44 104 40 88 84 50 112-10 120Z" fill="currentColor" opacity="0.16" />
      <path d="M-10 120C18 88 52 72 92 70" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.22" />
      <path d="M-14 96C2 60 30 36 70 26 62 60 34 86-14 96Z" fill="currentColor" opacity="0.1" />
      <path d="M30 120C52 96 84 86 128 92 104 114 70 124 30 120Z" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

/**
 * Each platform's own brand colour for its mark. Instagram's gradient can't
 * fill the single-colour icon, so it takes Instagram's solid brand pink.
 */
const socialColor: Record<(typeof siteConfig.social)[number]["icon"], string> = {
  linkedin: "text-[#0A66C2]",
  instagram: "text-[#E4405F]",
  youtube: "text-[#FF0000]",
};

/** Server component; only the brochure button hydrates. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-cream">
      <CornerLeaves className="left-0" />
      <CornerLeaves className="right-0 -scale-x-100" />
      <Container className="relative py-8 lg:py-9">
        {/* Five columns from xl. Between lg and xl the brand column would be
            narrower than the logo, so it takes its own row above the four
            link columns instead of running into Quick Links. */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:grid-cols-[auto_1fr_1.2fr_1fr_1.3fr]">
          <div className="sm:col-span-2 lg:col-span-4 xl:col-span-1">
            <Logo size="lg" />
            {/* Capped near the logo's width: the brand column sizes to its content. */}
            <p className="mt-4 max-w-[20rem] text-[1rem] leading-relaxed text-ink-muted">
              Connecting nature&rsquo;s finest ingredients with global markets through quality, trust and responsible
              sourcing.
            </p>

            <ul className="mt-5 flex items-center gap-3.5">
              {siteConfig.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={item.label}
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full bg-sage-100 transition-colors duration-300 hover:bg-sage-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf",
                      socialColor[item.icon],
                    )}
                  >
                    <Icon name={item.icon} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title} className={column}>
              <ColumnHeading>{group.title}</ColumnHeading>
              <ul className="mt-4 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={footerLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Resources — the brochure item opens the shared lead popup. */}
          <nav aria-label="Resources" className={column}>
            <ColumnHeading>Resources</ColumnHeading>
            <ul className="mt-4 space-y-1.5">
              <li>
                <Link href="/r-and-d" className={footerLink}>
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link href="/resources" className={footerLink}>
                  Blog
                </Link>
              </li>
              <li>
                <BrochureButton source="footer_brochure" className={cn(footerLink, "text-left")}>
                  Brochure
                </BrochureButton>
              </li>
              <li>
                <Link href="/contact" className={footerLink}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className={column}>
            <ColumnHeading>Contact Details</ColumnHeading>
            <address className="mt-4 space-y-2.5 not-italic">
              {/* Email and phone rows are one link each, icon included, so the
                  icon opens the mail client or dialler too. The location has
                  no map link configured, so it stays plain text. */}
              {contactRows.map((row) => {
                const icon = (
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest">
                    <Icon name={row.icon} className="size-4" />
                  </span>
                );
                return row.href ? (
                  <a key={row.label} href={row.href} className={cn(footerLink, "flex items-center gap-3.5")}>
                    {icon}
                    {/* One line from xl, where the column grows to fit; below that it may wrap. */}
                    <span className="min-w-0 [overflow-wrap:anywhere] xl:whitespace-nowrap xl:[overflow-wrap:normal]">
                      {row.label}
                    </span>
                  </a>
                ) : (
                  <div key={row.label} className="flex items-center gap-3.5 text-[1rem] text-ink-muted">
                    {icon}
                    {row.label}
                  </div>
                );
              })}
            </address>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1rem] text-ink-muted">
            © {year} {siteConfig.name} Private Limited. All Rights Reserved.
          </p>

          {/* Thin dividers between the links: each after the first carries a left rule. */}
          <ul className="flex flex-wrap items-center gap-y-2">
            {legalNav.map((item) => {
              const classes = footerLink;

              return (
                <li
                  key={item.href}
                  className="border-line-strong px-4 leading-none first:pl-0 last:pr-0 [&:not(:first-child)]:border-l sm:px-5"
                >
                  {item.href.endsWith(".xml") ? (
                    <a href={item.href} className={classes}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={classes}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
