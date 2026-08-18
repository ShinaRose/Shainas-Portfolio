import { motion } from "framer-motion";
import { Card, CardContent } from "../components/Card.jsx";
import LinkButton from "../components/LinkButton.jsx";
import { courseFocus, linkedInUrl, resumeRequestUrl } from "../data/portfolioData.js";
import { revealUp, viewportOnce } from "../utils/animations.js";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative scroll-mt-28 overflow-hidden bg-[#fff8fb]">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.3] [mask-image:radial-gradient(ellipse_55%_60%_at_50%_50%,black,transparent)]" />
      <motion.div
        className="relative mx-auto max-w-6xl px-6 py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={revealUp}
      >
        <Card className="rounded-[2rem] border-rose-100 bg-white shadow-xl shadow-rose-100/70">
          <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">Resume</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Get my resume in 30 seconds.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700">Click the button to open a pre-addressed email: just hit send and I'll reply with my full resume, references and any additional work samples you need.</p>
              <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-sm font-semibold text-slate-700">
                {courseFocus.map((item, index) => <span key={item}>{item}{index < courseFocus.length - 1 ? " ·" : ""}</span>)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <LinkButton href={resumeRequestUrl} variant="primary" icon="mail" external ariaLabel="Open Gmail compose to request Shina Rose Dsouza resume in a new tab">Request Resume</LinkButton>
              <LinkButton href={linkedInUrl} variant="dark" icon="linkedin" external ariaLabel="View LinkedIn profile">View LinkedIn</LinkButton>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
