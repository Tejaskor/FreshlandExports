import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { footerNav, legalNav, siteConfig } from "@/config/site";

const contactRows = [
  { icon: "mail" as const, label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: "phone" as const, label: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
  {
    icon: "pin" as const,
    label: `${siteConfig.contact.address.locality}, ${siteConfig.contact.address.country}`,
    href: null,
  },
];

/** Server component — no interactivity, so no JavaScript ships for it. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-cream">
      <Container className="py-8 lg:py-9">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-10">
          <div className="max-w-xs">
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
                    className="flex size-9 items-center justify-center rounded-full bg-sage-100 text-forest transition-colors duration-300 hover:bg-leaf hover:text-white"
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
                    <Link
                      href={item.href}
                      className="text-[0.8125rem] text-ink-muted transition-colors duration-300 hover:text-leaf"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-[0.875rem] font-sans font-medium text-forest">
              Contact Details
            </h2>
            <address className="mt-3 space-y-2 not-italic">
              {contactRows.map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest">
                    <Icon name={row.icon} className="size-3.5" />
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-[0.8125rem] text-ink-muted transition-colors duration-300 hover:text-leaf"
                    >
                      {row.label}
                    </a>
                  ) : (
                    <span className="text-[0.8125rem] text-ink-muted">{row.label}</span>
                  )}
                </div>
              ))}
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
