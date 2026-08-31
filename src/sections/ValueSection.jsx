import { motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import { softSkills, valueProps } from "../data/portfolioData.js";
import { revealUp, staggerContainer, staggerItem, viewportOnce } from "../utils/animations.js";

export default function ValueSection() {
  return (
    <section className="bg-gradient-to-br from-rose-50 to-purple-50 border-y border-rose-100">
      <motion.div
        className="mx-auto max-w-6xl px-6 py-14 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">Why hire me</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">What I bring to your team.</h2>
        </div>
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {valueProps.map((vp) => (
            <motion.div
              key={vp.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white border border-rose-100 p-6 shadow-sm shadow-rose-100/60 transition-shadow hover:shadow-lg hover:shadow-rose-200/60"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-purple-100 text-rose-800"><Icon name={vp.icon} className="h-5 w-5" /></div>
              <h3 className="text-base font-extrabold text-slate-950">{vp.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{vp.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {softSkills.map((s) => (
            <motion.span
              key={s}
              variants={staggerItem}
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-white px-4 py-1.5 text-sm font-semibold text-rose-800 transition-colors hover:border-rose-300 hover:bg-rose-50"
            >
              <Icon name="check" className="h-3.5 w-3.5 text-emerald-500" />{s}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
