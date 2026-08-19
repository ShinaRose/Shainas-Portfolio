import { motion } from "framer-motion";
import { Card, CardContent } from "../components/Card.jsx";
import Icon from "../components/Icon.jsx";
import { actionLinks, linkedInUrl } from "../data/portfolioData.js";
import { revealUp, viewportOnce } from "../utils/animations.js";

export default function ContactSection() {
  return (
    <section id="contact" className="section-pattern scroll-mt-28 border-t border-rose-100">
      <motion.div
        className="mx-auto max-w-6xl px-6 py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <Card className="overflow-hidden rounded-[2rem] border-rose-100 bg-gradient-to-br from-slate-950 via-rose-900 to-purple-900 text-white shadow-2xl shadow-rose-200">
          <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-100">Contact</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Let's talk about graduate roles in data, systems or supply chain.</h2>
              <p className="mt-4 max-w-2xl text-rose-50">I'm open to graduate, internship and entry-level roles across data, systems, IT, security and supply chain. Get in touch if you think my background could be a fit for your team.</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <motion.a
                href={actionLinks.email}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Gmail compose to email Shina Rose Dsouza in a new tab"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-6 text-sm font-extrabold text-rose-800 shadow-lg shadow-slate-950/10 transition-colors hover:bg-rose-50 hover:text-rose-950 focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                <Icon name="mail" className="mr-2 inline h-4 w-4" /> Email Me
              </motion.a>
              <motion.a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Shina Rose Dsouza LinkedIn profile in a new tab"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-6 text-sm font-extrabold text-white backdrop-blur transition-colors hover:bg-white hover:text-rose-900 focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                <Icon name="linkedin" className="mr-2 inline h-4 w-4" /> LinkedIn
              </motion.a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
