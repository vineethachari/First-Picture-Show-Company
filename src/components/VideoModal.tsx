import { useEffect, useState } from "react";
import { useVideo } from "../context/VideoContext";

export default function VideoModal() {
  const { film, list, close, next, prev, goTo, index } = useVideo();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!film) return;
    setLoading(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [film, close, next, prev]);

  if (!film) return null;
  const hasNav = list.length > 1;

  // Build YouTube embed URL with autoplay, no related videos, modest branding
  const ytSrc = `https://www.youtube.com/embed/${film.video}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade"
        onClick={close}
      />

      {/* Prev / Next arrows */}
      {hasNav && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-bone/20 flex items-center justify-center text-bone/60 hover:text-[#FCCB3D] hover:border-[#FCCB3D]/60 transition-all duration-300"
            aria-label="Previous film"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-bone/20 flex items-center justify-center text-bone/60 hover:text-[#FCCB3D] hover:border-[#FCCB3D]/60 transition-all duration-300"
            aria-label="Next film"
          >
            →
          </button>
        </>
      )}

      {/* Close */}
      <button
        onClick={close}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-bone/60 hover:text-[#FCCB3D] transition-colors"
        aria-label="Close"
      >
        Close <span className="text-xl leading-none">×</span>
      </button>

      {/* Modal body */}
      <div className="relative z-10 w-full max-w-6xl animate-modalin">
        <div className="relative aspect-video bg-black overflow-hidden rounded-sm shadow-[0_40px_120px_-20px_rgba(252,203,61,0.2)]">
          {/* YouTube iframe */}
          <iframe
            key={film.id}
            src={ytSrc}
            title={film.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => setLoading(false)}
            className="absolute inset-0 w-full h-full border-0"
          />

          {/* Loading spinner — shown until iframe loads */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black pointer-events-none z-10">
              {/* Poster behind spinner */}
              <img
                src={film.poster}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative w-12 h-12 rounded-full border-2 border-bone/20 border-t-[#FCCB3D] animate-spin" />
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="animate-slide">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#FCCB3D] mb-2">
              {film.category} · {film.year} {hasNav && `· ${String(index + 1).padStart(2, "0")} / ${String(list.length).padStart(2, "0")}`}
            </p>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight text-bone">{film.title}</h3>
            <p className="text-sm text-bone/60 mt-2 max-w-2xl leading-relaxed">{film.description}</p>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/40 mb-1">Client</p>
            <p className="text-lg font-light text-[#FCCB3D]">{film.brand}</p>
          </div>
        </div>

        {hasNav && (
          <div className="mt-8 flex gap-1.5">
            {list.map((f, i) => (
              <button
                key={f.id}
                onClick={() => goTo(i)}
                style={{ width: i === index ? "3rem" : "1.5rem" }}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  i === index ? "bg-[#FCCB3D]" : "bg-bone/20 hover:bg-bone/40"
                }`}
                aria-label={`Go to ${f.title}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
