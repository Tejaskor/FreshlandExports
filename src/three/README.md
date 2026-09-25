# three/

WebGL and React Three Fiber code lives here — scenes, materials, shaders and
the `<Canvas>` wrappers that mount them.

Nothing is implemented yet. `three`, `@react-three/fiber` and
`@react-three/drei` are installed and typed, and the homepage hero is
structured so a canvas can mount as a sibling of the hero `Figure` without any
layout change.

Conventions when this fills in:

- One folder per scene; a scene owns its geometry, materials and loaders.
- Scene components are client components and must be dynamically imported with
  `ssr: false` — Three.js has no server renderer.
- Read `prefers-reduced-motion` through the same `MEDIA.motion` gate the rest
  of the site uses (`@/animations/motion`), and fall back to the static
  `Figure` when motion is reduced or WebGL is unavailable.
