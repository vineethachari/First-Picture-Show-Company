/* ============================================================
   PAGE 6 — GET IN TOUCH (no address)
   ============================================================ */
export default function Contact() {
  return (
    <section id="contact-section">
      <div className="contact-inner reveal">
        <div className="section-label">06 — GET IN TOUCH</div>
        <h2 className="contact-title">
          LET&apos;S MAKE
          <br />
          SOMETHING WORTH
          <br />
          WATCHING.
        </h2>
        <div className="contact-grid">
          <a className="contact-link" href="mailto:sayhello@firstpictureshowcompany.com">
            <span className="contact-link-label">EMAIL</span>
            <span className="contact-link-value">sayhello@firstpictureshowcompany.com</span>
          </a>
          <a className="contact-link" href="tel:+918086084320">
            <span className="contact-link-label">PHONE</span>
            <span className="contact-link-value">+91 80860 84320</span>
          </a>
        </div>
        <div className="contact-socials">
          <a href="https://www.instagram.com/firstpictureshowcompany/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@firstpictureshowcompany7859" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://www.facebook.com/tfpscompany/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/in/first-picture-show-company-217611323/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
