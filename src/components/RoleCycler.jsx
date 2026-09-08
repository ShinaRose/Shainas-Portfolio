import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { targetRoles } from "../data/portfolioData.js";
import { EASE_PREMIUM } from "../utils/animations.js";

// Cross-fades through the real target-role list so the intro reads as
// "actively looking at several things" rather than one static label.
export default function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((current) => (current + 1) % targetRoles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={targetRoles[index]}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE_PREMIUM }}
        className="inline-block bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text font-bold text-transparent"
      >
        {targetRoles[index]}
      </motion.span>
    </AnimatePresence>
  );
}
