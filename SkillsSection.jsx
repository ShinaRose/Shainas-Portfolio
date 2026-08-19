import { motion } from "framer-motion";
import { Card, CardContent } from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/portfolioData.js";
import { revealUp, viewportOnce } from "../utils/animations.js";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-purple-50/60 via-white to-rose-50/50">
      <div className="pointer-events-none absolute right-[-10rem] top-0 h-[26rem] w-[26rem] rounded-full bg-rose-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-[-10rem] h-96 w-96 rounded-full bg-purple-200/50 blur-3xl" />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,black,transparent)]" />

      <motion.div
        className="relative mx-auto max-w-6xl px-6 py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <SectionHeading
          eyebrow="Skills"
          title="Different labels, one throughline."
          description="The categories vary (data, systems, security, operations), but it's really the same instinct in different directions: use data and structured thinking to make something clearer."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} className="overflow-hidden rounded-[1.75rem] border-rose-100 bg-gradient-to-b from-white to-rose-50/70 shadow-sm shadow-rose-200/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-300/50">
              <div className="h-1.5 w-full bg-gradient-to-r from-rose-400 via-rose-600 to-purple-600" />
              <CardContent className="p-6">
                <h3 className="text-lg font-extrabold text-slate-950">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{group.description}</p>
                <div className="mt-5 space-y-2">
                  {group.skills.map((skill) => <p key={skill} className="border-b border-rose-100 pb-2 text-sm font-semibold text-slate-700 last:border-b-0">{skill}</p>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
