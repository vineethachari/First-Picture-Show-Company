import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { films } from "../data";
import { useVideo } from "../context/VideoContext";
import { FPSCLogo } from "../components/Logo";

export default function Home() {
  const [idx, setIdx] = useState(0);
  const [time, setTime] = useState("");
  const { open } = useVideo();

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % films.length), 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    update();
    const t = setInterval(update, 30000);
    return () => clearInterval(t);
  }, []);

  const current = films[idx];

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 overflow-hidden page-in">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-[#FCCB3D]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-red-700/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Top meta bar */}
        {/*<div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-bone/40 mb-12">
          <span>Cochin · Kerala · India</span>
          <span className="hidden md:inline font-offside text-[#FCCB3D]/50">Our Films Speak About Us</span>
          <span>IST {time}</span>
        </div>*/}

        {/* COMPANY NAME — ~1/3 of page */}
        <div className="relative flex flex-col items-center justify-center" style={{ minHeight: "33vh" }}>
          {/* Large centered logo */}
          <FPSCLogo height={200} className="md:hidden" />
          <FPSCLogo height={200} className="hidden md:block lg:hidden" />
          <FPSCLogo height={260} className="hidden lg:block" />
          <div className="mt-6 text-center">
            {/*<p className="font-offside text-lg md:text-xl tracking-[0.25em] uppercase text-bone/50">
              First Picture Show Company
            </p>*/}
          </div>
        </div>

        {/* Tagline strip */}
        <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4 border-t border-bone/10 pt-6">
          <p className="text-2xl md:text-4xl font-light tracking-tight max-w-2xl">
            Storytelling through Cinema.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-bone/50">
            Scroll to begin <span className="ml-2">↓</span>
          </p>
        </div>

        {/* Bottom: Rotating film box + brief */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Film display box */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-zinc-900">
              {films.map((f, i) => (
                <div
                  key={f.id}
                  className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
                    i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={f.poster}
                    alt={f.title}
                    className="w-full h-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
              ))}

              {/* Letterbox bars */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black" />
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-black" />

              {/* Play badge -> opens popup */}
              <button
                onClick={() => open(current, films)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-bone/40 flex items-center justify-center backdrop-blur-md bg-black/30 hover:bg-[#FCCB3D] hover:border-[#FCCB3D] hover:text-black hover:scale-110 transition-all duration-500 z-10"
                aria-label={`Play ${current.title}`}
              >
                <span className="ml-1">▶</span>
              </button>

              {/* Caption */}
              <div className="absolute bottom-10 left-8 right-8 flex items-end justify-between text-bone">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#FCCB3D] mb-2">
                    Now Playing — {String(idx + 1).padStart(2, "0")} / {String(films.length).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-light tracking-tight">{current.title}</h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-bone/60 mt-2">
                    {current.brand} · {current.category} · {current.year}
                  </p>
                </div>
                <span
                  onClick={() => open(current, films)}
                  className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-bone/70 hover:text-[#FCCB3D] transition-colors cursor-pointer"
                >
                  Watch <span>↗</span>
                </span>
              </div>
            </div>

            {/* Progress dots */}
            <div className="mt-4 flex items-center gap-2">
              {films.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-px transition-all duration-500 ${
                    i === idx ? "w-12 bg-[#FCCB3D]" : "w-6 bg-bone/20 hover:bg-bone/40"
                  }`}
                  aria-label={`Film ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Brief */}
          <aside className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#FCCB3D] mb-6">
                ◉ About the Studio
              </p>
              <p className="text-xl md:text-2xl font-light leading-snug tracking-tight text-bone/90">
                As a pair of determined storytellers, <span className="text-[#FCCB3D] font-offside">Brijith</span> and <span className="text-[#FCCB3D] font-offside">Aiswarya</span> love creating engaging scripts and thoughtful films for the products that elevate the brand.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-bone/60 max-w-md">
                We are film makers specialised in television commercials, digital films, corporate films, product videos and testimonials. We craft impactful visual stories that connect with audiences.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-bone/10 pt-8">
              <Stat n="120+" l="Films Produced" />
              <Stat n="40+" l="Awards Won" />
              <Stat n="5+" l="Years of Craft" />
            </div>

            <Link
              to="/work"
              className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-bone/70 hover:text-[#FCCB3D] transition-colors hover-line w-fit"
            >
              View Full Portfolio <span>→</span>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="text-3xl md:text-4xl font-light text-bone">{n}</p>
      <p className="text-[10px] uppercase tracking-[0.25em] text-bone/40 mt-1">{l}</p>
    </div>
  );
}
