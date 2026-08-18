import { motion } from "framer-motion";
import { Card, CardContent } from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/portfolioData.js";
import { revealUp, viewportOnce } from "../utils/animations.js";

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={revealUp}
    >
      <SectionHeading
        eyebrow="Skills"
        title="Different labels, one throughline."
        description="The categories vary — data, systems, security, operations — but it's really the same instinct in different directions: use data and structured thinking to make something clearer."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.title} className="rounded-[1.75rem] border-rose-100 bg-white shadow-sm shadow-rose-100/70 transition-shadow hover:shadow-md hover:shadow-rose-200/60">
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
    </motion.section>
  );
}
