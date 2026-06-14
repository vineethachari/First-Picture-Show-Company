/* ============================================================
   PAGE 3 — ABOUT US
   ============================================================ */
export default function About() {
  return (
    <section id="about-section">
      <div className="about-text reveal">
        <div className="section-label">03 — ABOUT US</div>
        <h2 className="big" style={{ marginBottom: '2.2rem' }}>
          WE&apos;RE NOT A CULT.
          <br />
          BUT PEOPLE DO
          <br />
          KEEP COMING BACK.
        </h2>
        <p className="about-lead">
          As a pair of determined storytellers, <strong>Brijith</strong> and{' '}
          <strong>Aiswarya</strong> love creating engaging scripts and thoughtful
          films that elevate the brands they&apos;re made for.
        </p>
        <p className="about-body">
          We believe the best films are built on listening — to the brand, the
          audience and the quiet details in between. From concept and script to
          shoot and grade, we keep craft at the centre and ego out of the room.
          The result is work that feels less like an ad and more like a story you
          actually want to finish.
        </p>

        <div className="about-founders">
          <div className="founder">
            <div className="founder-name">Brijith</div>
            <div className="founder-role">Director · Writer</div>
          </div>
          <div className="founder">
            <div className="founder-name">Aiswarya</div>
            <div className="founder-role">Producer · Creative</div>
          </div>
        </div>
      </div>
      <div className="about-media reveal d1">
        <div className="about-media-clip">
          <img
            className="about-img parallax-img"
            src="/firstpictureshowcompany/uploads/about.webp"
            alt="About First Picture Show Company"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
