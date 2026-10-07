import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";

/**
 * Decoration behind the /contact page: large, soft organic sage curves rising
 * from the lower edge, and thin moringa leaf outlines at the outer edges, all
 * at low opacity. It fills its (relative) parent, clips itself, ignores the
 * pointer and is hidden from assistive tech, so it never covers content,
 * takes clicks or changes the page's size.
 *
 * The leaves only show from xl, where they sit clear of the centred heading
 * and form; smaller screens keep just the curves.
 */
export function ContactBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Organic curves: a wave entering from the lower left and a broader
          swell on the lower right, both fading upwards into the cream. */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[70%] w-full"
      >
        <defs>
          <linearGradient id="contact-curve-left" x1="0" y1="1" x2="0.6" y2="0">
            <stop offset="0" stopColor="#DCE8D5" stopOpacity="0.85" />
            <stop offset="1" stopColor="#E8F0E3" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="contact-curve-right" x1="1" y1="1" x2="0.3" y2="0.1">
            <stop offset="0" stopColor="#D3E2D0" stopOpacity="0.8" />
            <stop offset="1" stopColor="#E8F0E3" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 300C180 330 300 470 420 620S690 860 900 900H0Z"
          fill="url(#contact-curve-left)"
        />
        <path
          d="M1440 120C1250 220 1140 400 1050 560S820 830 560 900H1440Z"
          fill="url(#contact-curve-right)"
        />
      </svg>

      {/* Leaf outlines, tinted from the brand forest green. */}
      <MoringaSprig
        variant="line"
        className="absolute top-20 -left-16 hidden h-[24rem] -rotate-12 text-forest/[0.06] xl:block"
      />
      <MoringaSprig
        variant="line"
        className="absolute -right-10 -bottom-8 hidden h-[24rem] rotate-[-20deg] text-forest/[0.12] xl:block"
      />
    </div>
  );
}
