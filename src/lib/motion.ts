import type { Variants } from "framer-motion";

/** Shared easing curve — a soft ease-out that reads as "settling" rather than "snapping". */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Parent wrapper that plays its children one after another. */
export function container(staggerChildren = 0.08, delayChildren = 0.05): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}

/**
 * Spread onto a motion element to play its child variants the first time
 * it scrolls into view.
 */
export function inView(stagger = 0.08, amount = 0.2) {
  return {
    variants: container(stagger),
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, amount },
  };
}
