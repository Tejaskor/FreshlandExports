"use client"; // Error boundaries must be Client Components.

import { useEffect } from "react";

import "./globals.css";

/**
 * The root layout itself failed, so this replaces the whole document: no
 * header, footer or fonts, just a plain message on the site's colours and
 * a way to try again.
 */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-dvh items-center justify-center bg-cream-warm px-6 text-center">
        <title>Something went wrong — Freshland Exports</title>
        <main>
          <h1 className="text-[2rem] leading-tight font-medium text-forest-deep">Something went wrong</h1>
          <p className="mx-auto mt-4 max-w-md text-[1rem] leading-relaxed text-ink-muted">
            The site couldn’t be loaded just now. Please try again in a moment.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => retry()}
              className="h-12 cursor-pointer rounded-full bg-forest px-6 text-[0.875rem] font-medium text-white hover:bg-forest-deep"
            >
              Try again
            </button>
            {/* A full page load, not a client navigation: the app shell is what failed. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="h-12 rounded-full border border-line-strong px-6 leading-[3rem] text-[0.875rem] font-medium text-forest">
              Go to Homepage
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
