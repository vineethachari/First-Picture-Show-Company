import { Link } from "react-router-dom";
import { FPSCLogo } from "./Logo";

/**
 * Footer — Offside font, golden accent, 3-column layout
 * with logo + social, navigation, and real contact info
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="fpsc-footer">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FCCB3D]/30 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: Logo + tagline + social icons */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <Link to="/">
              <FPSCLogo height={85} />
            </Link>
            <p className="font-offside text-[11px] tracking-[0.2em] uppercase text-bone/30 mt-5">
              Our Films Speak About Us
            </p>
            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://www.instagram.com/firstpictureshowcompany/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group"
              >
                <svg viewBox="0 0 24 24" className="fpsc-social-icon">
                <path d="M12 0C8.74 0 8.333.015 7.053.072C5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053C.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384a5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913c.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071c1.17.055 1.805.249 2.227.415c.562.217.96.477 1.382.896c.419.42.679.819.896 1.381c.164.422.36 1.057.413 2.227c.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382a3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413c-1.274.057-1.649.07-4.859.07c-3.211 0-3.586-.015-4.859-.074c-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899a3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235c-.045-1.26-.061-1.649-.061-4.844c0-3.196.016-3.586.061-4.861c.061-1.17.255-1.814.42-2.234c.21-.57.479-.96.9-1.381c.419-.419.81-.689 1.379-.898c.42-.166 1.051-.361 2.221-.421c1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324a6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0a1.44 1.44 0 0 1 2.88 0z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/tfpscompany/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group"
              >
                <svg viewBox="0 0 24 24"  className="fpsc-social-icon"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669c1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@firstpictureshowcompany7859"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="group"
              >
                <svg viewBox="0 0 24 24" className="fpsc-social-icon">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/first-picture-show-company-217611323/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="group"
              >
                <svg viewBox="0 0 24 24" className="fpsc-social-icon">
                  <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Center: Quick links */}
          <div className="md:col-span-4 flex flex-col items-center">
            <p className="font-offside text-[10px] tracking-[0.3em] uppercase text-[#FCCB3D] mb-6">
              Explore
            </p>
            <div className="flex flex-col items-center gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/work", label: "Our Works" },
                { to: "/about", label: "The Storytellers" },
                { to: "/awards", label: "Awards & News" },
                { to: "/brands", label: "Clients" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="fpsc-footer-link uppercase hover:text-[#FCCB3D]"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right">
            <p className="font-offside text-[10px] tracking-[0.3em] uppercase text-[#FCCB3D] mb-6">
              Speak to us
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-bone/50">
                  Aiswarya Suresh — Creative Producer
                </p>
                <a
                  href="tel:+918086084320"
                  className="fpsc-footer-link block mt-1 hover:text-[#FCCB3D]"
                >
                  +91 8086084320
                </a>
                <a
                  href="mailto:aiswarya@firstpictureshowcompany.com"
                  className="fpsc-footer-link block mt-0.5 hover:text-[#FCCB3D] normal-case"
                >
                  aiswarya@firstpictureshowcompany.com
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-bone/50">
                  Brijith Bkv — Director
                </p>
                <a
                  href="tel:+919745260143"
                  className="fpsc-footer-link block mt-1 hover:text-[#FCCB3D]"
                >
                  +91 9745260143
                </a>
                <a
                  href="mailto:brijith.bkv@firstpictureshowcompany.com"
                  className="fpsc-footer-link block mt-0.5 hover:text-[#FCCB3D] normal-case"
                >
                  brijith.bkv@firstpictureshowcompany.com
                </a>
              </div>
              <div className="pt-2">
                <p className="text-[11px] tracking-[0.15em] uppercase text-bone/50">Careers</p>
                <a
                  href="mailto:sayhello@firstpictureshowcompany.com"
                  className="fpsc-footer-link block mt-1 hover:text-[#FCCB3D] normal-case"
                >
                  sayhello@firstpictureshowcompany.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="fpsc-footer-divider" />

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-offside text-[10px] tracking-[0.2em] uppercase text-bone/25">
            © {year} First Picture Show Company. All rights reserved.
          </p>
          <p className="font-offside text-[10px] tracking-[0.2em] uppercase text-bone/20">
            Our Films Speak About Us
          </p>
        </div>
      </div>
    </footer>
  );
}
