import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "../components/Card.jsx";
import Icon from "../components/Icon.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { featuredWork } from "../data/portfolioData.js";

export default function WorkSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="work" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Featured Work"
          title="A few projects worth a closer look."
          description="Each one below covers the problem, what I did about it, and what came of it. Skim the highlights, or open any card for the full case study."
        />

        <div className="space-y-6">
          {featuredWork.map((project, index) => {
            const isOpen = openIndex === index;
            const detailId = `case-study-detail-${index}`;

            return (
              <Card key={project.title} className="rounded-[2rem] border-rose-100 bg-white shadow-lg shadow-rose-100/60">
                <CardContent className="grid gap-8 p-7 lg:grid-cols-[0.88fr_1.12fr] lg:p-9">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-purple-100 text-rose-800">
                      <Icon name={project.icon} className="h-6 w-6" />
                    </div>

                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">{project.label}</p>
                    <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{project.title}</h3>
                    <p className="mt-3 text-base font-bold text-slate-700">My role: {project.role}</p>
                    <p className="mt-3 text-sm font-semibold text-slate-500">Case study {index + 1}</p>

                    {project.award && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-800">
                        <Icon name="award" className="h-4 w-4" />
                        <span>{project.award}</span>
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-xs font-bold uppercase tracking-wide text-purple-800">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={tool}>
                          {tool}
                          {toolIndex < project.tools.length - 1 ? " ·" : ""}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
                        aria-label={`Open live app for ${project.title}`}
                      >
                        View Live App
                      </a>
                    )}
                  </div>

                  <div>
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">Problem</h4>
                        <p className="mt-2 leading-7 text-slate-700">{project.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">Outcome</h4>
                        <p className="mt-2 leading-7 text-slate-700">{project.outcome}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={detailId}
                      className="mt-5 inline-flex items-center gap-1.5 rounded-lg text-sm font-bold text-rose-700 transition hover:text-rose-900 focus:outline-none focus:ring-4 focus:ring-rose-200"
                    >
                      {isOpen ? "Show less" : "Read the full case study"}
                      <Icon name="chevronDown" className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={detailId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-5 border-t border-rose-100 pt-5 mt-5">
                            <div>
                              <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">Process</h4>
                              <ul className="mt-3 space-y-2">
                                {project.approach.map((step) => (
                                  <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700">
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-800">
                                      <Icon name="check" className="h-3.5 w-3.5" />
                                    </span>
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">My contribution</h4>
                              <p className="mt-2 text-sm leading-6 text-slate-700">{project.contribution}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
