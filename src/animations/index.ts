/**
 * Barrel for the shared motion layer. Sections may import from here or from
 * the individual modules; the individual modules keep client boundaries
 * tighter, so prefer them inside feature components.
 */
export { Reveal, type RevealVariant } from "@/animations/reveal";
export { RevealLines, Line } from "@/animations/reveal-lines";
export { Parallax } from "@/animations/parallax";
export { ScrollScrub } from "@/animations/scroll-scrub";
export { Magnetic } from "@/animations/magnetic";
export { Tilt } from "@/animations/tilt";
export { CountUp } from "@/animations/count-up";
export { MEDIA, EASE, DURATION, START, SCRUB_RANGE, amplitude } from "@/animations/motion";
