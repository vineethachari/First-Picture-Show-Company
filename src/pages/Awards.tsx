import { awards, news } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Awards() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="awards" className="relative py-32 md:py-44 bg-[#0a0a0a] min-h-screen page-in">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div ref={ref} className="reveal mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#FCCB3D] mb-4">
            04 — Recognition
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[0.9]">
            Awards <span className="italic font-offside text-[#FCCB3D]">&</span> News.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Awards table */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between border-b border-bone/20 pb-4 mb-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">Honours</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
                {awards.length} entries
              </p>
            </div>
            <ul>
              {awards.map((a, i) => (
                <AwardRow key={i} {...a} />
              ))}
            </ul>
          </div>

          {/* News */}
          <div className="lg:col-span-5">
            <div className="border-b border-bone/20 pb-4 mb-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">In the Press</p>
            </div>
            <ul className="space-y-1">
              {news.map((n, i) => (
                <NewsRow key={i} {...n} />
              ))}
            </ul>

            <div className="mt-12 p-6 border border-[#FCCB3D]/20 bg-[#FCCB3D]/[0.03] rounded-sm">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#FCCB3D] mb-3">Featured</p>
              <p className="text-xl font-light leading-snug tracking-tight">
                "We craft impactful visual stories that connect with audiences."
              </p>
              <p className="text-xs text-bone/40 mt-3">— First Picture Show Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardRow({
  year,
  title,
  category,
  project,
}: {
  year: string;
  title: string;
  category: string;
  project: string;
}) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className="reveal group grid grid-cols-12 gap-4 items-baseline py-5 border-b border-bone/10 hover:bg-bone/[0.02] transition-colors duration-300 cursor-default"
    >
      <span className="col-span-2 text-xs text-bone/40 tabular-nums">{year}</span>
      <div className="col-span-7 md:col-span-6">
        <p className="text-lg md:text-xl font-light tracking-tight group-hover:text-[#FCCB3D] transition-colors">
          {title}
        </p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-bone/40 mt-1">{category}</p>
      </div>
      <span className="col-span-3 md:col-span-4 text-xs text-bone/50 text-right italic">{project}</span>
    </li>
  );
}

function NewsRow({ date, title }: { date: string; title: string }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className="reveal py-5 border-b border-bone/10 group cursor-pointer">
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#FCCB3D]/70 mb-2">{date}</p>
      <p className="text-base font-light text-bone/80 group-hover:text-bone group-hover:translate-x-1 transition-all duration-300">
        {title} <span className="text-[#FCCB3D]">→</span>
      </p>
    </li>
  );
}
