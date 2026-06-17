import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FPSCLogo } from "./Logo";

/**
 * Header navigation — Offside font, golden #FCCB3D accent,
 * transparent with frosted-glass on scroll, fullscreen mobile menu
 */

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Our Works" },
  { to: "/about", label: "The Storytellers" },
  { to: "/awards", label: "Awards" },
  { to: "/brands", label: "Clients" },
  { to: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fpsc-header ${scrolled ? "scrolled" : ""}`}>
        {/* Thin golden accent line at very top */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FCCB3D] to-transparent opacity-60" />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-4 flex items-center justify-between">
          {/*<Link to="/" className="flex items-center shrink-0" aria-label="Home">
            <FPSCLogo height={38} />
          </Link>*/}

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `fpsc-nav-link ${isActive ? "active" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 font-offside text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-none border border-[#FCCB3D]/50 text-[#FCCB3D] hover:bg-[#FCCB3D] hover:text-black transition-all duration-400"
          >
            Say Hello
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[1.5px] bg-[#FCCB3D] transition-all duration-300 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-[#FCCB3D] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-[#FCCB3D] transition-all duration-300 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ===== Mobile fullscreen menu ===== */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col transition-all duration-600 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20 pb-6 flex justify-center">
          <FPSCLogo height={50} />
        </div>

        <div className="fpsc-footer-divider mx-8" />

        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
              className={({ isActive }) =>
                `font-offside text-2xl tracking-[0.15em] uppercase py-3 transition-all duration-500 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } ${isActive ? "text-[#FCCB3D]" : "text-bone/60 hover:text-[#FCCB3D]"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="pb-10 flex justify-center gap-8">
          <a
            href="https://www.instagram.com/firstpictureshowcompany/"
            target="_blank"
            rel="noopener noreferrer"
            className="fpsc-footer-link hover:text-[#FCCB3D] text-[11px] uppercase tracking-[0.2em]"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/tfpscompany/"
            target="_blank"
            rel="noopener noreferrer"
            className="fpsc-footer-link hover:text-[#FCCB3D] text-[11px] uppercase tracking-[0.2em]"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/@firstpictureshowcompany7859"
            target="_blank"
            rel="noopener noreferrer"
            className="fpsc-footer-link hover:text-[#FCCB3D] text-[11px] uppercase tracking-[0.2em]"
          >
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/first-picture-show-company-217611323/"
            className="fpsc-footer-link hover:text-[#FCCB3D] text-[11px] uppercase tracking-[0.2em]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
