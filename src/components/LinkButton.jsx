import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { scrollToSection } from "../utils/scrollToSection.js";

export default function LinkButton({ href, children, variant = "primary", icon = "arrowRight", external = false, ariaLabel }) {
  const variants = {
    primary: "bg-rose-700 text-white shadow-lg shadow-rose-200 hover:bg-rose-800",
    dark: "bg-slate-950 text-white shadow-lg shadow-slate-200 hover:bg-rose-800",
    light: "border border-rose-200 bg-white text-rose-800 hover:bg-rose-50",
  };

  const handleClick = (e) => {
    if (!external && href.startsWith("#")) scrollToSection(e, href);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-extrabold transition-colors focus:outline-none focus:ring-4 focus:ring-rose-200 ${variants[variant]}`}
    >
      {children}
      <Icon name={icon} className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </motion.a>
  );
}
