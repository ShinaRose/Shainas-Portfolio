import { Card, CardContent } from "../components/Card.jsx";
import { educationHighlights } from "../data/portfolioData.js";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 bg-gradient-to-br from-slate-950 via-rose-950 to-purple-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-200">Experience / Education</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">MSc study, with some real-world experience to go with it.</h2>
          <p className="mt-5 leading-8 text-rose-50/85">Between my MSc and my time in retail, I've got a decent feel for both the systems side of a business and the people actually using them day to day.</p>
        </div>

        <div className="space-y-5">
          {educationHighlights.map((item) => (
            <Card key={item.title} className="rounded-3xl border-white/10 bg-white/10 text-white shadow-xl backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-rose-100">{item.meta}</p>
                <p className="mt-4 text-sm leading-6 text-rose-50/80">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-xs font-bold uppercase tracking-wide text-rose-100">
                  {item.tags.map((tag, index) => <span key={tag}>{tag}{index < item.tags.length - 1 ? " ·" : ""}</span>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
