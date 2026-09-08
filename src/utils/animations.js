// Expo-out style curve (Linear/Vercel-esque): fast start, long soft settle.
// Reused everywhere instead of the generic "easeOut" keyword so every
// reveal and hover shares the same feel.
export const EASE_PREMIUM = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

// Used with whileInView so sections animate in as you scroll to them,
// rather than only the hero animating on first load.
export const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export const viewportOnce = { once: true, margin: "-100px" };

// For a grid/list of cards or chips: the container just orchestrates timing,
// each child (variants={staggerItem}, no initial/animate of its own) inherits
// hidden/visible from it and fades in slightly after the one before it.
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_PREMIUM } },
};

// Shared hover/tap physics for interactive cards, so every card on the site
// lifts with the same spring instead of each section inventing its own.
export const cardHover = {
  whileHover: { y: -6, scale: 1.015, transition: { type: "spring", stiffness: 300, damping: 22 } },
  whileTap: { scale: 0.985, transition: { type: "spring", stiffness: 400, damping: 25 } },
};
