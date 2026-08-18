import { motion } from "framer-motion";
import { Card, CardContent } from "../components/Card.jsx";
import Icon from "../components/Icon.jsx";
import LinkButton from "../components/LinkButton.jsx";
import ProfilePhoto from "../components/ProfilePhoto.jsx";
import { actionLinks, employerSnapshot, resumeRequestUrl } from "../data/portfolioData.js";
import { fadeUp } from "../utils/animations.js";

export default function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_top_left,#ffe4ef,transparent_34%),linear-gradient(135deg,#fff8fb_0%,#ffffff_42%,#f3efff_100%)]">
      <div className="absolute right-[-7rem] top-8 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-[-7rem] h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.14fr_0.86fr] md:items-center md:py-24 lg:py-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available now · Graduate &amp; internship roles · Cork, Ireland
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            I make sense of data, systems and the businesses that run on them.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            I'm Shina, an MSc Information Systems graduate from University College Cork, and I like problems that sit where data, systems and business decisions overlap. I'm looking for a graduate role in data science, systems analysis, IT project work, cybersecurity or supply chain, wherever that mix is actually useful.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton href={actionLinks.work} ariaLabel="View featured work and portfolio projects">View Work</LinkButton>
            <LinkButton href={actionLinks.linkedIn} variant="dark" icon="linkedin" external ariaLabel="Open Shina Rose Dsouza LinkedIn profile in a new tab">LinkedIn</LinkButton>
            <LinkButton href={actionLinks.email} variant="light" icon="mail" external ariaLabel="Open Gmail compose to email Shina Rose Dsouza in a new tab">Contact Me</LinkButton>
            <LinkButton href={resumeRequestUrl} variant="light" icon="briefcase" external ariaLabel="Request Shina Rose Dsouza resume by email">Request Resume</LinkButton>
          </div>

          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {employerSnapshot.map((item) => (
              <div key={item.label} className="border-l-4 border-rose-300 bg-white/70 py-3 pl-4 pr-3 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-1 text-sm font-extrabold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }}>
          <Card className="overflow-hidden rounded-[2rem] border-rose-100 bg-white shadow-2xl shadow-rose-100/80">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-slate-950 via-rose-900 to-purple-900 p-8 text-white">
                <ProfilePhoto />
                <h2 className="mt-6 text-2xl font-bold">Shina Rose Dsouza</h2>
                <p className="mt-2 text-rose-50">MSc Graduate · Data, Systems & Operations Focus</p>
              </div>

              <div className="space-y-4 bg-white p-8 text-sm font-medium text-slate-700">
                <div className="flex items-center gap-3 border-l-4 border-rose-200 bg-rose-50/60 px-4 py-3 text-rose-900"><Icon name="mapPin" /> Cork, Ireland</div>
                <div className="flex items-center gap-3 border-l-4 border-purple-200 bg-purple-50/60 px-4 py-3 text-purple-900"><Icon name="graduation" /> MSc Information Systems for Business Performance, UCC</div>
                <div className="flex items-center gap-3 border-l-4 border-pink-200 bg-pink-50/60 px-4 py-3 text-pink-900"><Icon name="briefcase" /> Seeking data, systems, cybersecurity and supply chain roles</div>
                <LinkButton href={actionLinks.linkedIn} variant="dark" icon="linkedin" external ariaLabel="Open Shina Rose Dsouza LinkedIn profile in a new tab">View LinkedIn Profile</LinkButton>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
