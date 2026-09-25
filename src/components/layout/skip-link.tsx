/** First focusable element on the page — lets keyboard users bypass the nav. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-[0.8125rem] focus:text-white"
    >
      Skip to content
    </a>
  );
}
