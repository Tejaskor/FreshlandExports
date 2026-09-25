# Freshland Exports — website foundation

A cinematic, scroll-driven marketing site for a certified organic botanical
house. The homepage is built: hero, product categories, brand story, featured
products, sustainability and contact, composed from a shared design system and
a GSAP + Lenis motion substrate.

## Stack

| Concern        | Choice                                        |
| -------------- | --------------------------------------------- |
| Framework      | Next.js 16 (App Router, React Server Components) |
| Language       | TypeScript (strict)                           |
| Styling        | Tailwind CSS v4 (CSS-first `@theme` tokens)   |
| Motion         | GSAP + ScrollTrigger                          |
| Smooth scroll  | Lenis, driven by the GSAP ticker              |
| 3D             | Three.js via React Three Fiber (installed, not yet used) |

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev
```

| Script              | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Dev server                               |
| `npm run build`     | Production build                         |
| `npm run typecheck` | `tsc --noEmit`                           |
| `npm run lint`      | ESLint (Next core-web-vitals + TS rules) |
| `npm run check`     | typecheck → lint → build                 |

## Folder structure

```
src/
  app/                     Routes, metadata, sitemap.ts, robots.ts, globals.css
  components/
    layout/                Header, footer, skip link — the page shell
    providers/             Client-side context (smooth scroll)
    ui/                    Reusable primitives: Container, Section, Button, …
  config/site.ts           Brand, navigation, contact, indexed routes
  hooks/                   useReducedMotion, useScrolledPast, …
  lib/                     gsap singleton, SEO helpers, cn()
```

Everything is a **Server Component by default**. `"use client"` appears only in
`providers/`, `layout/site-header.tsx` and `ui/reveal.tsx` — the three places
that genuinely need browser APIs.

## Design system

Tokens live in `src/app/globals.css` under `@theme` and are consumed as normal
Tailwind utilities (`bg-cream`, `text-forest`, `px-gutter`, `py-section`,
`text-hero`).

- **Colour** — white and cream grounds, `forest`/`forest-deep` for headings and
  dark panels, a `sage` ramp for tints, `leaf` for interactive green, and a
  single warm `ember` for primary CTAs.
- **Type** — Fraunces (editorial display), Inter (body/UI), Geist Mono
  (micro-labels). The scale is fluid: every step is a `clamp()` between 360px
  and 1600px.
- **Motion** — shared easings (`--ease-out-expo`, `--ease-in-out-quint`,
  `--ease-soft`) so every transition shares one feel.
- **Utilities** — `type-label`, `mask-organic` / `mask-organic-alt` (the leaf
  silhouette on category and story imagery), `scrollbar-none`.

## Imagery

There is no photography in the repository yet. Every image slot renders through
`components/media/figure.tsx`, which falls back to generated SVG artwork
(`botanical-art.tsx`) sized to the final aspect ratio. Dropping in real photos
is a config change — set `image` on the relevant entry in `src/config/home.ts`
and the layout is untouched.

## Motion architecture

`src/lib/gsap.ts` is the only module that may import `gsap` directly. It
registers ScrollTrigger once and refreshes measurements after fonts load.

`SmoothScrollProvider` owns the single Lenis instance and drives it from GSAP's
ticker, so Lenis, ScrollTrigger and every scrubbed timeline share one RAF loop.
It exposes `scrollTo`, `stop` and `start` through context.

Motion primitives, all in `components/ui/`:

| Component     | Role                                                    |
| ------------- | ------------------------------------------------------- |
| `Reveal`      | Baseline scroll entrance, optionally staggering children |
| `RevealLines` | Masked line-by-line heading reveal                       |
| `Parallax`    | Scrubbed vertical drift on photographic blocks           |
| `Magnetic`    | Cursor-following pull on primary CTAs                    |
| `Carousel`    | Native-scroll product rail with header arrows            |

`RevealLines` deliberately splits on explicit `<Line>` children rather than
per-character: splitting text nodes would hand screen readers a wall of single
letters.

**Reduced motion is a hard stop, not a dimmer.** When
`prefers-reduced-motion: reduce` is set, no Lenis instance is created, `Reveal`
and `RevealLines` skip their timelines (content renders in its final state),
`Parallax` drops both the drift and its overscan scale, `Magnetic` never binds,
and a global media query neutralises CSS animation. `Magnetic` additionally
requires `(hover: hover) and (pointer: fine)`.

## Rendering

All six homepage sections are Server Components. Only these hydrate:
`SmoothScrollProvider`, `SiteHeader`, `ContactForm`, `Carousel` and the motion
primitives above.

## SEO

- Root defaults + `%s` title template in `src/app/layout.tsx`.
- `createMetadata()` in `src/lib/seo.ts` for per-page title, description,
  canonical, Open Graph and Twitter tags.
- Organisation JSON-LD rendered once in the root layout.
- `sitemap.ts` and `robots.ts` generate from `staticRoutes` in
  `src/config/site.ts` — add a route there when a page ships.

Set `NEXT_PUBLIC_SITE_URL` in every environment; canonicals and the sitemap
derive from it.

## Accessibility

Skip link, semantic landmarks, one `h1` with a clean `h2`/`h3` outline,
`aria-labelledby` on every section, `aria-current` on the active nav item, a
visible `:focus-visible` ring, Escape-to-close and scroll lock on the mobile
menu, and `aria-live` on the contact form's status.

## Verification

`npm run check` (typecheck → lint → build) is the gate. Browser automation is
not used on this project; rendered spacing, animation timing and visual
regressions are therefore **not** covered by automated checks and need a human
look in a browser.

## Next steps

1. R3F/WebGL hero scene — mounts behind the hero copy column as a sibling of
   the existing `Figure`, no layout change.
2. Real photography into `src/config/home.ts`.
3. Wire the contact form to a server action.
4. `opengraph-image.tsx` for social cards.
5. Real content routes for the nav entries in `src/config/site.ts`.
