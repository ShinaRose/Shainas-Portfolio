import { Card, CardContent } from "../components/Card.jsx";
import Icon from "../components/Icon.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { featuredWork } from "../data/portfolioData.js";

export default function WorkSection() {
  return (
    <section id="work" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Featured Work"
          title="Focused case studies for data, systems and supply chain roles."
          description="These projects are framed around the things employers look for: the problem, my role, my process, my contribution and the outcome. They connect my Information Systems for Business Performance course with practical data analysis, systems thinking and business problem-solving."
        />

        <div className="space-y-8">
          {featuredWork.map((project, index) => (
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

                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">Problem</h4>
                    <p className="mt-2 leading-7 text-slate-700">{project.problem}</p>
                  </div>

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

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">Outcome</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{project.outcome}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">My contribution</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{project.contribution}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
