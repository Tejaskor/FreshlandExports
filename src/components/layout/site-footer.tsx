import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { footerNav, legalNav, siteConfig } from "@/config/site";
import { BrochureButton } from "@/features/brochure/brochure-button";
import { cn } from "@/lib/utils";

const contactRows = [
  { icon: "mail" as const, label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: "phone" as const, label: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
  {
    icon: "pin" as const,
    label: `${siteConfig.contact.address.locality}, ${siteConfig.contact.address.country}`,
    href: null,
  },
];

/**
 * Footer links share the header navigation's type and interaction: Inter at
 * 1rem, regular weight, ink, turning leaf green over 300ms on hover.
 */
const footerLink = "text-[1rem] text-ink transition-colors duration-300 hover:text-leaf";

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
    <footer className="mt-auto border-t border-line bg-cream">
      <Container className="py-8 lg:py-9">
        {/* Five columns from xl. Between lg and xl the brand column would be
            narrower than the logo, so it takes its own row above the four
            link columns instead of running into Quick Links. */}
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8 xl:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
          <div className="max-w-xs lg:col-span-4 lg:max-w-none xl:col-span-1 xl:max-w-xs">
            <Logo />
            <p className="mt-3 text-[0.8125rem] text-ink-muted">{siteConfig.tagline}</p>

            <ul className="mt-4 flex items-center gap-3">
              {siteConfig.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={item.label}
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full bg-sage-100 transition-colors duration-300 hover:bg-sage-200",
                      socialColor[item.icon],
                    )}
                  >
                    <Icon name={item.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-[0.875rem] font-sans font-medium text-forest">
                {group.title}
              </h2>
              <ul className="mt-3 space-y-1">
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
          <nav aria-label="Resources">
            <h2 className="text-[0.875rem] font-sans font-medium text-forest">Resources</h2>
            <ul className="mt-3 space-y-1">
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

          <div>
            <h2 className="text-[0.875rem] font-sans font-medium text-forest">
              Contact Details
            </h2>
            <address className="mt-3 space-y-2 not-italic">
              {/* Email and phone rows are one link each, icon included, so the
                  icon opens the mail client or dialler too. The location has
                  no map link configured, so it stays plain text. */}
              {contactRows.map((row) => {
                const icon = (
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest">
                    <Icon name={row.icon} className="size-3.5" />
                  </span>
                );
                return row.href ? (
                  <a key={row.label} href={row.href} className={cn(footerLink, "flex w-fit items-center gap-3")}>
                    {icon}
                    {row.label}
                  </a>
                ) : (
                  <div key={row.label} className="flex items-center gap-3 text-[1rem] text-ink">
                    {icon}
                    {row.label}
                  </div>
                );
              })}
            </address>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] text-ink-faint">
            © {year} {siteConfig.name} Private Limited. All Rights Reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-6">
            {legalNav.map((item) => {
              const classes =
                "text-[0.75rem] text-ink-faint transition-colors duration-300 hover:text-leaf";

              return (
                <li key={item.href}>
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
