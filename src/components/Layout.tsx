import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Logo, NAV_ITEMS, buildModalEmbedSrc, parseVideoUrl, type Video } from '../data';
import { ModalContext } from '../context';

/* ============================================================
   LAYOUT — shared shell: cursor, smooth scroll, nav, menu,
   video modal, scroll-reveal re-init, footer.
   ============================================================ */

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<{
    open: boolean;
    source: Video | null;
    title: string;
    tag: string;
    key: number;
  }>({ open: false, source: null, title: '', tag: '', key: 0 });
  const [urlInput, setUrlInput] = useState('');

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const openModal = useCallback((source: Video, title: string, tag: string) => {
    setUrlInput('');
    setModal({ open: true, source, title, tag, key: Date.now() });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModal((m) => ({ ...m, open: false, source: null }));
    document.body.style.overflow = '';
  }, []);

  /* ---------- Smooth Scrolling with Lenis (once) ---------- */
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* ---------- Custom cursor (once) ---------- */
  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    };
    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          'a, button, .work-row, .hero-showcase, .filter-link, .brand-cell, .agency-name, .contact-link, .play-dot'
        )
      ) {
        document.body.classList.add('cursor-hover');
      }
    };
    const out = () => document.body.classList.remove('cursor-hover');

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  /* ---------- Scroll reveal + scroll-to-top + parallax (per route) ---------- */
  useEffect(() => {
    window.scrollTo(0, 0);

    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => io.observe(el));

    const parallaxImgs = () =>
      Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
    const onScroll = () => {
      parallaxImgs().forEach((img) => {
        const section = img.closest('section, .page');
        const rect = (section ?? img).getBoundingClientRect();
        const vH = window.innerHeight;
        const pr = Math.max(0, Math.min(1, (vH - rect.top) / (vH + rect.height)));
        const imgScale = 1 + pr * 0.06;
        const translateY = (pr - 0.5) * -30;
        img.style.transform = `scale(${imgScale}) translateY(${translateY}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [location.pathname]);

  /* ---------- Modal escape ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modal.open) closeModal();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modal.open, closeModal]);

  const loadFromUrl = useCallback(() => {
    const parsed = parseVideoUrl(urlInput);
    if (!parsed) {
      // eslint-disable-next-line no-alert
      alert('Could not detect a YouTube or Vimeo URL. Please paste a valid link.');
      return;
    }
    setModal((m) => ({
      ...m,
      source: parsed,
      title: parsed.type === 'youtube' ? 'YouTube Video' : 'Vimeo Video',
      tag: parsed.type.toUpperCase(),
      key: Date.now(),
    }));
  }, [urlInput]);

  return (
    <ModalContext.Provider value={openModal}>
      {/* Cursor */}
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorRingRef} className="cursor-ring" />

      {/* Video Lightbox Modal */}
      <div
        className={`video-modal ${modal.open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Video player"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <button className="modal-close" onClick={closeModal} aria-label="Close video">
          CLOSE <span className="modal-close-x">✕</span>
        </button>
        <div className="modal-body">
          <div className="modal-video-wrap">
            {modal.open && modal.source && (
              <>
                {modal.source.type === 'mp4' ? (
                  <video key={modal.key} src={modal.source.url} autoPlay controls playsInline style={{ background: '#000' }} />
                ) : (
                  <iframe
                    key={modal.key}
                    src={buildModalEmbedSrc(modal.source) ?? undefined}
                    title={modal.title}
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </>
            )}
          </div>
          <div className="modal-meta">
            <div className="modal-title">{modal.title}</div>
            <div className="modal-tag">{modal.tag}</div>
          </div>
          <div className="modal-source-row">
            <span className="modal-source-label">YouTube / Vimeo URL</span>
            <input
              className="modal-source-input"
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') loadFromUrl();
              }}
              placeholder="Paste a YouTube or Vimeo link to override…"
            />
            <button className="modal-source-btn" onClick={loadFromUrl}>LOAD</button>
          </div>
        </div>
        <div className="modal-hint">Press ESC to close</div>
      </div>

      {/* Fullscreen Menu */}
      <div className={`fullmenu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-top">
          <Link to="/" className="menu-logo" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>
          <button className="menu-close" onClick={() => setMenuOpen(false)}>CLOSE ✕</button>
        </div>
        <ul className="menu-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.num}>
              <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                {({ isActive }) => (
                  <>
                    <span className={isActive ? 'is-active-link' : ''}>{item.label}</span>
                    <span className="num">{item.num}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="menu-bottom">
          <span className="menu-bottom-label">SOCIALS:</span>
          <a href="https://www.instagram.com/firstpictureshowcompany/" target="_blank" rel="noreferrer" className="menu-social">INSTAGRAM</a>
          <a href="https://www.youtube.com/@firstpictureshowcompany7859" target="_blank" rel="noreferrer" className="menu-social">YOUTUBE</a>
          <a href="https://www.linkedin.com/in/first-picture-show-company-217611323/" target="_blank" rel="noreferrer" className="menu-social">LINKEDIN</a>
          <a href="https://www.facebook.com/tfpscompany/" target="_blank" rel="noreferrer" className="menu-social">FACEBOOK</a>
        </div>
      </div>

      {/* Navigation Header */}
      <nav className="site-nav">
        <Link to="/" className="nav-logo"><Logo /></Link>
        <div className="nav-right">
          <Link to="/contact" className="nav-talk">LET'S TALK</Link>
          <button className="nav-menu-btn" onClick={() => setMenuOpen(true)}>MENU</button>
        </div>
      </nav>

      {/* Page content */}
      <main className="page">
        <Outlet />
      </main>

      {/* Footer (unchanged design) */}
      <footer className="page_footer">
        <div className="page_footer_contain u-container">
          <div className="page_footer_layout u-grid-custom">
            <div className="page_footer_main_col u-column-custom">
              <div className="page_footer_inner_layout u-grid-custom">
                <div className="page_footer_inner_col u-column-4">
                  <div className="page_footer_heading_wrap">
                    <p className="page_footer_heading_text h5-alt">
                      Got a vision? We&rsquo;ve got caffeine and emotional availability.
                    </p>
                  </div>
                </div>
                <div className="page_footer_inner_col u-column-4 is--middle">
                  <div className="page_footer_inner_empty"></div>
                </div>
                <div className="page_footer_inner_col u-column-4">
                  <div className="page_footer_link_wrap">
                    <ul role="list" className="page_nav_ul is--footer w-list-unstyled">
                      <li className="page_nav_li is--footer">
                        <Link to="/work" className="page_nav_link_wrap w-inline-block">
                          <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">Work</p></div>
                        </Link>
                      </li>
                      <li className="page_nav_li is--footer">
                        <Link to="/about" className="page_nav_link_wrap w-inline-block">
                          <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">About</p></div>
                        </Link>
                      </li>
                      <li className="page_nav_li is--footer">
                        <Link to="/awards" className="page_nav_link_wrap w-inline-block">
                          <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">Awards &amp; News</p></div>
                        </Link>
                      </li>
                      <li className="page_nav_li is--footer">
                        <Link to="/brands" className="page_nav_link_wrap w-inline-block">
                          <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">Brands</p></div>
                        </Link>
                      </li>
                      <li className="page_nav_li is--footer">
                        <Link to="/contact" className="page_nav_link_wrap w-inline-block">
                          <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">Contact</p></div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="page_footer_inner_col u-column-4">
                  <div className="page_footer_util_wrap">
                    <div className="page_footer_util_flex">
                      <div className="page_footer_util_heading_wrap">
                        <p className="page_footer_util_heading_text p-xs">OUR ADDRESS</p>
                      </div>
                      <ul role="list" className="page_nav_ul is--footer w-list-unstyled">
                        <li className="page_nav_li is--footer">
                          <a href="https://maps.app.goo.gl/GzpzuWxeD5izwD3RA" target="_blank" rel="noreferrer" className="page_nav_link_wrap w-inline-block">
                            <div className="page_nav_link_page">
                              <p className="page_nav_link_text p-sm">
                                SRA E7, Soumya nagar, Alinchuvad<br />
                                Padivattom, Edapally South<br />
                                Cochin, Kerala 682028
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="page_footer_inner_line_top"></div>
                  </div>
                </div>
                <div className="page_footer_inner_col u-column-4">
                  <div className="page_footer_util_wrap">
                    <div className="page_footer_util_flex">
                      <div className="page_footer_util_heading_wrap">
                        <p className="page_footer_util_heading_text p-xs">GET IN TOUCH</p>
                      </div>
                      <ul role="list" className="page_nav_ul is--footer w-list-unstyled">
                        <li className="page_nav_li is--footer">
                          <a href="mailto:sayhello@firstpictureshowcompany.com" className="page_nav_link_wrap w-inline-block">
                            <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">sayhello@firstpictureshowcompany.com</p></div>
                          </a>
                        </li>
                        <li className="page_nav_li is--footer">
                          <a href="tel:+918086084320" className="page_nav_link_wrap w-inline-block">
                            <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">+91 80860 84320</p></div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="page_footer_inner_line_top"></div>
                  </div>
                </div>
                <div className="page_footer_inner_col u-column-4">
                  <div className="page_footer_util_wrap">
                    <div className="page_footer_util_flex">
                      <div className="page_footer_util_heading_wrap">
                        <p className="page_footer_util_heading_text p-xs">SOCIALS</p>
                      </div>
                      <ul role="list" className="page_nav_ul is--footer w-list-unstyled">
                        <li className="page_nav_li is--footer">
                          <a href="https://www.instagram.com/firstpictureshowcompany/" target="_blank" rel="noreferrer" className="page_nav_link_wrap w-inline-block">
                            <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">Instagram</p></div>
                          </a>
                        </li>
                        <li className="page_nav_li is--footer">
                          <a href="https://www.youtube.com/@firstpictureshowcompany7859" target="_blank" rel="noreferrer" className="page_nav_link_wrap w-inline-block">
                            <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">Youtube</p></div>
                          </a>
                        </li>
                        <li className="page_nav_li is--footer">
                          <a href="https://www.facebook.com/tfpscompany/" target="_blank" rel="noreferrer" className="page_nav_link_wrap w-inline-block">
                            <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">Facebook</p></div>
                          </a>
                        </li>
                        <li className="page_nav_li is--footer">
                          <a href="https://www.linkedin.com/in/first-picture-show-company-217611323/" target="_blank" rel="noreferrer" className="page_nav_link_wrap w-inline-block">
                            <div className="page_nav_link_page"><p className="page_nav_link_text p-sm">LinkedIn</p></div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="page_footer_inner_line_top"></div>
                  </div>
                </div>
              </div>
              <div className="page_footer_util_layout">
                <div className="page_footer_copyright_wrap">
                  <p className="page_footer_copyright_text p-xs">© First Picture Show Company, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ModalContext.Provider>
  );
}
