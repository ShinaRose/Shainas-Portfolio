import { emailUrl, linkedInUrl } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-[#fff8fb] px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm font-extrabold text-slate-700">Shina Rose Dsouza</p>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-500">
          <a href={emailUrl} target="_blank" rel="noopener noreferrer" className="hover:text-rose-700 transition">shainarose1622@gmail.com</a>
          <span>·</span>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-rose-700 transition">LinkedIn</a>
          <span>·</span>
          <span>Cork, Ireland</span>
        </div>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} Shina Rose Dsouza</p>
      </div>
    </footer>
  );
}
