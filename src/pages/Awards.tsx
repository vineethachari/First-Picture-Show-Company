import { AWARDS, NEWS } from '../data';

/* ============================================================
   PAGE 4 — AWARDS & NEWS
   ============================================================ */
export default function Awards() {
  return (
    <section id="awards-section">
      <div className="awards-head reveal">
        <div className="section-label">04 — AWARDS &amp; NEWS</div>
        <h2 className="big">
          RECOGNITION
          <br />
          &amp; THE PRESS.
        </h2>
        <p className="awards-sub">
          A few moments where the work got noticed. (Replace these entries with
          your latest awards and coverage.)
        </p>
      </div>

      <div className="awards-grid">
        <div className="awards-col reveal">
          <div className="awards-col-title">Recognition</div>
          <ul className="awards-list">
            {AWARDS.map((a) => (
              <li key={a.title + a.project} className="award-item">
                <span className="award-year">{a.year}</span>
                <span className="award-detail-wrap">
                  <span className="award-title">{a.title}</span>
                  <span className="award-detail">{a.category} — {a.project}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="awards-col reveal d1">
          <div className="awards-col-title">In the News</div>
          <ul className="awards-list">
            {NEWS.map((n) => (
              <li key={n.title} className="award-item">
                <span className="award-year">{n.date}</span>
                <span className="award-detail-wrap">
                  <span className="award-title">{n.title}</span>
                  <span className="award-detail">{n.outlet}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
