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
