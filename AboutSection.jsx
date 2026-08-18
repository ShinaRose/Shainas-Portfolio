import { motion } from "framer-motion";
import { Card, CardContent } from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { targetRoles } from "../data/portfolioData.js";
import { revealUp, viewportOnce } from "../utils/animations.js";

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-28 overflow-hidden border-y border-rose-100 bg-gradient-to-br from-white via-purple-50/30 to-rose-50/40">
      <div className="pointer-events-none absolute right-[-10rem] top-[-6rem] h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />
      <motion.div
        className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.86fr_1.14fr] md:items-start md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <SectionHeading
          eyebrow="About"
          title="I'm drawn to the systems and data side of how a business actually runs."
          description="I recently completed my MSc in Information Systems for Business Performance at UCC, building skills across business decision support, systems analysis, databases, analytics, digital governance and IT project management. What I'm most drawn to is the practical side of it: taking messy data or a clunky process and making it clearer for the people who have to use it every day."
        />

        <Card className="rounded-[2rem] border-rose-100 bg-[#fff8fb] shadow-sm shadow-rose-100/70">
          <CardContent className="p-7">
            <h3 className="text-xl font-extrabold text-slate-950">Role fit</h3>
            <p className="mt-3 leading-7 text-slate-700">
              I do my best work on teams that value curiosity and clear communication as much as technical skill, and that don't mind someone who's still learning across data, systems, operations and business.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {targetRoles.map((role) => <div key={role} className="border-l-4 border-rose-300 bg-white px-4 py-3 text-sm font-extrabold text-slate-800">{role}</div>)}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
