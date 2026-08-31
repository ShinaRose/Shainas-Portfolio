export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

// Used with whileInView so sections animate in as you scroll to them,
// rather than only the hero animating on first load.
export const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
