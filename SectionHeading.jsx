export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-700">{description}</p> : null}
    </div>
  );
}
