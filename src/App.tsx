import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";
import ScrollToTop from "./components/ScrollToTop";
import { VideoProvider } from "./context/VideoContext";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HashRouter>
      <VideoProvider>
        <ScrollToTop />
        <div className="grain bg-[#0a0a0a] text-bone min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <VideoModal />
      </VideoProvider>
    </HashRouter>
  );
}
