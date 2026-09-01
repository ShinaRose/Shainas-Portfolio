import { motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import { impactStats } from "../data/portfolioData.js";
import { staggerContainer, staggerItem, viewportOnce } from "../utils/animations.js";

export default function ImpactStats() {
  return (
    <section className="border-y border-rose-100 bg-white" aria-label="Impact by the numbers">
      <motion.div
        className="mx-auto grid max-w-6xl gap-8 divide-y divide-rose-100 px-6 py-10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x md:py-12 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {impactStats.map((stat) => (
          <motion.div key={stat.label} variants={staggerItem} className="flex items-start gap-4 pt-6 first:pt-0 sm:px-6 sm:pt-0 first:sm:pl-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-purple-100 text-rose-800">
              <Icon name={stat.icon} className="h-5 w-5" />
            </div>
            <div>
              <p className="bg-gradient-to-br from-slate-950 to-rose-900 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold leading-5 text-slate-600">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
