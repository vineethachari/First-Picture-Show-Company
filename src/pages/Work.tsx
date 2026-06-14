import { useRef, useState } from 'react';
import { WORKS, CATEGORIES, type Category, type Work, type Video } from '../data';
import { useModal } from '../context';

/* ============================================================
   PAGE 2 — WORK
   Raphaël Bourdin style: big "All projects" heading, stacked
   large titles, floating image preview on hover, filters at bottom.
   ============================================================ */
export default function Work() {
  const openModal = useModal();
  const [filter, setFilter] = useState<Category>('All');
  const [previewWork, setPreviewWork] = useState<Work | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const filteredWorks = filter === 'All' ? WORKS : WORKS.filter((w) => w.category === filter);

  const handleMove = (e: React.MouseEvent) => {
    const p = previewRef.current;
    if (!p) return;
    p.style.left = `${e.clientX}px`;
    p.style.top = `${e.clientY}px`;
  };

  const open = (w: Work) =>
    openModal(w.video as Video, `${w.brand} — ${w.title}`, `${w.category} · ${w.year}`);

  return (
    <section id="work-section">
      {/* Floating cursor preview */}
      <div ref={previewRef} className={`work-preview ${previewWork ? 'visible' : ''}`} aria-hidden>
        {previewWork && (
          <>
            <img src={previewWork.image} alt="" />
            <div className="work-preview-cap">
              <span>{previewWork.brand}</span>
              <span>{previewWork.title}</span>
            </div>
          </>
        )}
      </div>

      <div className="work-head reveal">
        <div className="section-label">02 — SELECTED WORK</div>
        <h2 className="work-headline">
          ALL
          <br />
          PROJECTS
        </h2>
      </div>

      <div className="work-list reveal d1" onMouseMove={handleMove} onMouseLeave={() => setPreviewWork(null)}>
        {filteredWorks.map((w) => (
          <div
            key={w.id}
            className="work-row"
            onMouseEnter={() => setPreviewWork(w)}
            onClick={() => open(w)}
          >
            <span className="work-row-index">{w.index}</span>
            <div className="work-row-titles">
              <span className="work-row-brand">{w.brand}</span>
              <h3 className="work-row-title">{w.title}</h3>
            </div>
            <div className="work-row-meta">
              <span className="work-row-cat">{w.category}</span>
              <span className="work-row-year">{w.year}</span>
              <span className="work-row-arrow">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="work-filters-bottom reveal d2">
        {CATEGORIES.map((c) => (
          <button key={c} className={`filter-link ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}
