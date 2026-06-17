import { useState } from "react";
import { films } from "../data";
import { useReveal } from "../hooks/useReveal";
import FilmCard from "../components/FilmCard";

const categories = ["All", "TVC", "Brand Film", "Digital", "Sports", "Documentary"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const headRef = useReveal<HTMLDivElement>();
  const list = filter === "All" ? films : films.filter((f) => f.category === filter);

  return (
    <section id="work" className="relative py-32 md:py-44 bg-[#0a0a0a] min-h-screen page-in">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div ref={headRef} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#FCCB3D] mb-4">
              02 — Our Works
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[0.9]">
              Work<span className="italic font-offside text-[#FCCB3D]">aholics.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === c
                    ? "bg-[#FCCB3D] text-black border-[#FCCB3D]"
                    : "border-bone/20 text-bone/60 hover:text-bone hover:border-bone/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-bone/40 mb-10">
          Click any film to play ↓
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {list.map((f, i) => (
            <FilmCard key={f.id} film={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
