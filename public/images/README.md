# Image assets

Organised by **page**, then by **section** — never by UI component.

```
home/<section>/     One folder per section of the homepage
<page>/             One folder per top-level route
shared/             Reusable across pages: logos, icons, decorative, og
```

## Rules

- Folder and file names are lowercase kebab-case: `turmeric-powder-bowl.jpg`.
- Homepage art lives under `home/<section>/`. Catalogue art lives under
  `products/` and `categories/` and is kept separate, because it is reused by
  listing pages, detail pages and the homepage alike.
- Anything used on more than one page belongs in `shared/`.
- No folders for individual components — a component is not a place.

## Adding a page or section

When a new route or homepage section ships, create its image folder in the same
commit:

- New route `/<page>` → `public/images/<page>/`
- New homepage section → `public/images/home/<section>/`

## Wiring an image up

Slots are declared in `src/config/home.ts`. Set the `image` field to a path
rooted at `/images/...` and `Figure` swaps the generated placeholder art for the
real photograph without any layout change:

```ts
media: {
  image: "/images/home/hero/facility-exterior.jpg",
  alt: "...",
  art: "facility",
}
```

`.gitkeep` files exist only so empty folders survive a clone. Delete one once
its folder holds a real asset.
