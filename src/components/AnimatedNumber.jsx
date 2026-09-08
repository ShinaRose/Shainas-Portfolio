import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

// Counts up to `value` (e.g. "180,519") when it scrolls into view, writing
// straight to the DOM node so React never re-renders per animation frame.
export default function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const target = Number(String(value).replace(/[^0-9.-]/g, "")) || 0;
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 22, mass: 1 });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, motionValue, target]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current) ref.current.textContent = Math.round(latest).toLocaleString("en-IE");
      }),
    [spring]
  );

  return <span ref={ref}>0</span>;
}
