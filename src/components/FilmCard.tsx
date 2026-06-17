import type { Film } from "../data";
import { useVideo } from "../context/VideoContext";
import { useReveal } from "../hooks/useReveal";
import { films } from "../data";

export default function FilmCard({
  film,
  index,
}: {
  film: Film;
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  const { open } = useVideo();

  return (
    <div
      ref={ref}
      className="reveal group cursor-pointer"
      style={{ animationDelay: `${(index % 3) * 120}ms` }}
      onClick={() => open(film, films)}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900 kenburns">
        <img
          src={film.poster}
          alt={film.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0" />
        <div className="absolute inset-0 bg-[#FCCB3D]/0 group-hover:bg-[#FCCB3D]/10 transition-colors duration-500" />

        {/* Play reveal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-100 scale-90">
          <div className="w-16 h-16 rounded-full border border-[#FCCB3D]/60 flex items-center justify-center backdrop-blur-md bg-black/30 mb-3">
            <span className="ml-1 text-[#FCCB3D]">▶</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#FCCB3D]">Play film</p>
        </div>
      </div>
        {/* Bottom info — title, brand, category, year ALL at bottom */}
        <div className="mt-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-bone/60 backdrop-blur-md bg-black/30 px-3 py-1 rounded-full border border-bone/10">
              {film.category}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-bone/40">{film.year}</span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-light tracking-tight text-bone">{film.title}</h3>
            <span className="text-[#FCCB3D] transition-transform duration-500 group-hover:translate-x-1">↗</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-bone/50 mt-1">
            for <span className="text-[#FCCB3D]/90">{film.brand}</span>
          </p>
        </div>
      <p className="mt-4 text-sm text-bone/50 leading-relaxed max-w-sm">{film.description}</p>
    </div>
  );
}
