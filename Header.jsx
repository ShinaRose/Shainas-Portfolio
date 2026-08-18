import { motion } from "framer-motion";
import { actionLinks, navLinks } from "../data/portfolioData.js";
import { scrollToSection } from "../utils/scrollToSection.js";
import { useActiveSection } from "../utils/useActiveSection.js";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Header() {
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href={actionLinks.home} onClick={(e) => scrollToSection(e, actionLinks.home)} className="text-base font-extrabold tracking-tight text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-200 sm:text-lg">
          Shina Rose Dsouza
        </a>

        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-lg pb-1.5 transition-colors focus:outline-none focus:ring-4 focus:ring-rose-200 ${isActive ? "text-rose-700" : "hover:text-rose-700"}`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-rose-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-rose-50 bg-white/80 px-4 py-3 md:hidden">
        <div className="flex gap-2 overflow-x-auto pb-1 text-sm font-semibold" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`whitespace-nowrap rounded-full border px-4 py-2 transition-colors ${
                  isActive
                    ? "border-rose-700 bg-rose-700 text-white"
                    : "border-rose-100 bg-rose-50 text-rose-800"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
