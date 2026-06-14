import { BRANDS, AGENCIES } from '../data';

/* ============================================================
   PAGE 5 — BRANDS & AGENCIES
   ============================================================ */
export default function Brands() {
  return (
    <section id="brands-section">
      <div className="brands-head reveal">
        <div className="section-label">05 — BRANDS &amp; AGENCIES</div>
        <h2 className="big" style={{ marginBottom: '1rem' }}>
          BRANDS WE&apos;VE
          <br />
          ASSOCIATED WITH.
        </h2>
        <p className="brands-sub">
          A selection of the brands and agencies that trusted us with their
          stories.
        </p>
      </div>

      <div className="brand-wall reveal d1">
        {BRANDS.map((b) => (
          <div className="brand-cell" key={b.name}>
            {b.logo ? (
              <img
                className="brand-logo"
                src={b.logo}
                alt={b.name}
                loading="lazy"
                onError={(e) => {
                  const el = e.currentTarget;
                  const fallback = document.createElement('span');
                  fallback.className = 'brand-mark';
                  fallback.textContent = b.name;
                  el.replaceWith(fallback);
                }}
              />
            ) : (
              <span className="brand-mark">{b.name}</span>
            )}
          </div>
        ))}
      </div>

      <div className="agencies reveal d2">
        <div className="agencies-label">AGENCIES WE&apos;VE WORKED WITH</div>
        <div className="agencies-row">
          {AGENCIES.map((a) => (
            <span className="agency-name" key={a}>{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
