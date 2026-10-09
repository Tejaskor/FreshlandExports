import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icon";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Page not found",
  description: "This page has been moved or never existed.",
  path: "/404",
  noIndex: true,
});

const quickLinks: readonly { icon: IconName; title: string; text: string; href: string }[] = [
  { icon: "home", title: "Return Home", text: "Go back to the homepage", href: "/" },
  { icon: "package", title: "Explore Products", text: "View our product range", href: "/products" },
  { icon: "info", title: "About Us", text: "Learn about our company", href: "/about" },
  { icon: "mail", title: "Contact Us", text: "Get in touch for enquiries", href: "/contact" },
];

/** A small leaf sprig either side of the 404, mirrored on the right. */
function Sprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 80" aria-hidden="true" focusable="false" className={cn("text-leaf", className)}>
      <path d="M22 78C20 56 21 34 30 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M29 10c-7 1-11 6-11 12 7-1 11-6 11-12Z" fill="currentColor" />
      <path d="M25 30c-8 0-13 5-14 11 8 0 13-5 14-11Z" fill="currentColor" opacity="0.85" />
      <path d="M26 32c6-4 12-3 14 1-6 4-12 3-14-1Z" fill="currentColor" opacity="0.7" />
      <path d="M22 52c-7-1-12 3-14 9 7 1 12-3 14-9Z" fill="currentColor" opacity="0.75" />
      <path d="M23 54c6-3 11-1 13 3-6 3-11 1-13-3Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/**
 * 404 — the agricultural landscape behind a centred message, two ways back
 * and a strip of the main destinations. The site header and footer come from
 * the root layout; the warm band at the top sits behind the fixed header.
 */
export default function NotFound() {
  return (
    <>
      <section aria-labelledby="not-found-heading" className="bg-cream-warm pt-[5.5rem]">
        <div className="relative isolate flex h-[clamp(34rem,78vh,41.25rem)] justify-center overflow-hidden">
          <Image
            src="/images/404Img/404Bg image.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[50%_70%]"
          />
          {/* A soft warm glow behind the text only, so the landscape stays as supplied. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_50%_34%,rgb(250_248_243/0.6)_0%,rgb(250_248_243/0.25)_55%,transparent_80%)]"
          />

          <Container className="pt-10 text-center sm:pt-12 lg:pt-14">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <Sprig className="hidden h-16 w-8 -scale-x-100 sm:block lg:h-20 lg:w-10" />
              <p className="font-display text-[clamp(6.5rem,3.5rem+11vw,13rem)] leading-[0.82] font-medium tracking-[-0.04em] text-forest-deep">
                404
              </p>
              <Sprig className="hidden h-16 w-8 sm:block lg:h-20 lg:w-10" />
            </div>
            <h1
              id="not-found-heading"
              className="mt-3 font-display text-[clamp(2.25rem,1.5rem+2.6vw,4rem)] leading-[1.05] font-medium tracking-[-0.025em] text-forest-deep"
            >
              Page Not Found
            </h1>
            <p className="mx-auto mt-4 max-w-[40.625rem] text-[1rem] leading-relaxed text-ink-muted sm:text-[1.0625rem]">
              The page you’re looking for doesn’t exist or may have been moved.{" "}
              <span className="sm:block">Let’s get you back to exploring our premium agricultural products.</span>
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/" variant="forest" size="lg">
                Go to Homepage
              </Button>
              <Button href="/products" variant="outline" size="lg" className="border-forest/50">
                Browse Products
              </Button>
            </div>
          </Container>
        </div>
      </section>

      <nav aria-label="Helpful links" className="border-b border-line bg-cream-warm">
        <Container>
          <ul className="grid grid-cols-1 gap-x-6 py-6 min-[30rem]:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-7">
            {quickLinks.map((item, index) => (
              <li key={item.href} className={cn(index > 0 && "lg:border-l lg:border-line-strong")}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-4 rounded-lg py-3 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf lg:justify-center lg:px-4"
                >
                  <Icon name={item.icon} className="size-8 text-forest-deep" strokeWidth={1.4} />
                  <span>
                    <span className="block text-[1rem] font-medium text-ink transition-colors duration-300 group-hover:text-leaf">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-[0.875rem] text-ink-muted">{item.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
}
