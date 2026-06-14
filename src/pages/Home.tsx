import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { WORKS, pad, type Video } from '../data';
import { useModal } from '../context';

/* ============================================================
   PAGE 1 — HOME
   Company name (~1/3) + rotating film box + company brief
   ============================================================ */
export default function Home() {
  const openModal = useModal();
  const [activeFilm, setActiveFilm] = useState(0);

  const heroSectionRef = useRef<HTMLElement>(null);
  const heroVideoWrapRef = useRef<HTMLDivElement>(null);

  /* Auto-rotate films */
  useEffect(() => {
    const t = setInterval(() => {
      setActiveFilm((i) => (i + 1) % WORKS.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  /* Hero scroll zoom/clip (home-only) */
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      const hero = heroSectionRef.current;
      const wrap = heroVideoWrapRef.current;
      if (hero && wrap) {
        const heroH = hero.offsetHeight;
        const p = Math.min(sy / heroH, 1);
        wrap.style.transform = `scale(${1 + p * 0.1})`;
        hero.style.clipPath = `inset(${p * 4}% 0%)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const play = (i: number) => {
    const w = WORKS[i];
    openModal(w.video as Video, `${w.brand} — ${w.title}`, `${w.category} · ${w.year}`);
  };

  return (
    <>
      <section id="hero" ref={heroSectionRef}>
        <div className="hero-video-wrap" ref={heroVideoWrapRef}>
          <div className="hero-inner">
            {/* Company name — ~1/3 of page */}
            <div className="hero-name reveal">
              <span className="hero-name-eyebrow">
                <span className="dot" /> KOCHI, INDIA — FILM PRODUCTION HOUSE
              </span>
              <h1 className="hero-name-title">
                <span className="hero-name-row">First</span>
                <span className="hero-name-row">
                  Picture <span className="amp">/</span> Show
                </span>
                <span className="hero-name-row accent">Company</span>
              </h1>
            </div>

            {/* Rotating film box + brief */}
            <div className="hero-lower">
              <div className="hero-showcase reveal d1">
                <div
                  className="hero-showcase-frame"
                  onClick={() => play(activeFilm)}
                >
                  {WORKS.map((w, i) => (
                    <img
                      key={w.id}
                      className={`hero-showcase-img ${i === activeFilm ? 'active' : ''}`}
                      src={w.image}
                      alt={w.title}
                      loading={i < 2 ? 'eager' : 'lazy'}
                    />
                  ))}
                  <div className="hero-showcase-sheen" />
                  <div className="hero-showcase-ui">
                    <div className="hero-showcase-counter">
                      {pad(activeFilm + 1)} <span>/ {pad(WORKS.length)}</span>
                    </div>
                    <div className="hero-showcase-play" aria-hidden>
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
                    </div>
                  </div>
                  <div className="hero-showcase-meta">
                    <div className="hero-showcase-tag">NOW SHOWING</div>
                    <div className="hero-showcase-title">{WORKS[activeFilm].title}</div>
                    <div className="hero-showcase-brand">{WORKS[activeFilm].brand}</div>
                  </div>
                </div>

                <div className="hero-showcase-controls">
                  <button className="hero-arrow" aria-label="Previous film" onClick={() => setActiveFilm((i) => (i - 1 + WORKS.length) % WORKS.length)}>‹</button>
                  <div className="hero-showcase-track">
                    {WORKS.map((_, i) => (
                      <button key={i} className={`hero-tick ${i === activeFilm ? 'active' : ''}`} onClick={() => setActiveFilm(i)} aria-label={`Go to film ${i + 1}`} />
                    ))}
                  </div>
                  <button className="hero-arrow" aria-label="Next film" onClick={() => setActiveFilm((i) => (i + 1) % WORKS.length)}>›</button>
                </div>
              </div>

              <div className="hero-brief reveal d2">
                <div className="section-label">A SHORT BRIEF</div>
                <p className="hero-brief-text">
                  We are a film production house crafting brand films, commercials
                  and stories that move people. Founded by storytellers{' '}
                  <strong>Brijith</strong> &amp; <strong>Aiswarya</strong>, we turn
                  briefs into frames worth remembering — from the first idea to the
                  final cut.
                </p>
                <div className="hero-brief-stats">
                  <div><span className="stat-num">10+</span><span className="stat-label">Years</span></div>
                  <div><span className="stat-num">200+</span><span className="stat-label">Films</span></div>
                  <div><span className="stat-num">50+</span><span className="stat-label">Brands</span></div>
                </div>
                <Link to="/work" className="explore-btn">VIEW OUR WORK</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-down"><div className="scroll-line" /></div>
      </section>

      {/* Marquee divider */}
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span className="marquee-group" key={k}>
              BRAND FILMS<i>✦</i> COMMERCIALS <i>✦</i> MUSIC VIDEOS <i>✦</i>{' '}
              DOCUMENTARIES <i>✦</i> STORYTELLING <i>✦</i> BRAND FILMS<i>✦</i>{' '}
              COMMERCIALS <i>✦</i> MUSIC VIDEOS <i>✦</i> DOCUMENTARIES <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
