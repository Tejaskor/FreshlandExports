import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Icon } from "@/components/ui/icon";
import type { Certificate } from "@/features/certificates/data";

const shell =
  "group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)] " +
  "transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] " +
  "hover:-translate-y-1 hover:border-sage-200 hover:shadow-[var(--shadow-lift)] " +
  // Side by side when the card has room: one column (sm) and from lg; stacked
  // in the narrow two-column range (md), where a side tile would crush the text.
  "sm:flex-row md:flex-col lg:flex-row";

/**
 * One certificate. The whole card is a single link: to the certificate
 * document when one has been supplied (opens in a new tab), otherwise to the
 * contact page to request it — so no card claims a document that isn't there.
 */
export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const { title, description, logo, monogram, file } = certificate;
  const action = file ? "View Certificate" : "Request Certificate";

  const body: ReactNode = (
    <>
      {/* Mark tile: fixed box, logo contained, so marks of every shape align. */}
      <div className="flex h-36 shrink-0 items-center justify-center border-b border-line bg-cream-warm/60 px-8 sm:h-auto sm:w-44 sm:border-r sm:border-b-0 md:h-36 md:w-auto md:border-r-0 md:border-b lg:h-auto lg:w-40 lg:border-r lg:border-b-0 xl:w-48">
        {logo ? (
          <span className="relative block h-24 w-full max-w-[9rem] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105">
            <Image src={logo.src} alt={logo.alt} fill sizes="160px" className="object-contain" />
          </span>
        ) : (
          <span
            aria-hidden="true"
            className="font-display text-[2.5rem] leading-none font-medium tracking-tight text-forest transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
          >
            {monogram}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-[1.25rem] leading-snug">{title}</h3>
        <p className="mt-2.5 mb-5 text-[0.9375rem] leading-relaxed text-ink-muted">{description}</p>

        <span className="mt-auto flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-rust-deep transition-colors duration-300 group-hover:text-rust">
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-[length:100%_1px]">
              {action}
            </span>
            <Icon
              name="arrow-right"
              className="size-3.5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
            />
          </span>
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust transition-[background-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-rust group-hover:text-white"
          >
            <Icon name="arrow-right" className="size-4" />
          </span>
        </span>
      </div>
    </>
  );

  if (file) {
    return (
      <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className={shell}
      >
        {body}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href="/contact" className={shell}>
      {body}
    </Link>
  );
}
