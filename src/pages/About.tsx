import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-32 md:py-44 bg-gradient-to-b from-[#0a0a0a] via-[#0d0a07] to-[#0a0a0a] overflow-hidden min-h-screen page-in">
      {/* Scrolling text band */}
      <div className="absolute top-12 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <div className="scroll-text text-[22vw] font-black tracking-tighter leading-none">
          THE STORYTELLERS · THE STORYTELLERS · THE STORYTELLERS ·
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div ref={ref} className="reveal max-w-5xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#FCCB3D] mb-6">
            03 — The Storytellers
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[1.05]">
            As a pair of determined <span className="italic font-offside text-[#FCCB3D]">storytellers</span>, Brijith and Aiswarya love creating engaging scripts and thoughtful films for the products that elevate the brand.
          </h2>
        </div>

        <div ref={ref2} className="reveal mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6 text-bone/70 text-base leading-relaxed">
            <p>
              We are film makers specialised in television commercials, digital films, corporate films, product videos and testimonials.
            </p>
            <p>
              Let us create a visual identity that is familiar to your audience. Give your brand or project some personality! Invest in ad films that were thoughtfully and strategically made for your brand.
            </p>
            <p>
              We craft impactful visual stories that connect with audiences. Let's collaborate to bring your brand's vision to life and create lasting market change.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <Value n="01" t="Story First" d="Every frame answers to a single emotional truth." />
            <Value n="02" t="Craft Obsessed" d="Lighting, sound, edit — nothing leaves the floor unfinished." />
            <Value n="03" t="Visually Driven" d="Creating a visual identity that is familiar to your audience." />
            <Value n="04" t="Strategic" d="Thoughtfully and strategically made films for your brand." />
          </div>
        </div>

        {/* Capabilities row */}
        <div className="mt-24 border-t border-bone/10 pt-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-bone/40 mb-8">What we do</p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-2xl md:text-4xl font-light tracking-tight">
            {[
              "Television Commercials",
              "Digital Films",
              "Corporate Films",
              "Product Videos",
              "Testimonials",
              "Brand Films",
              "Music Videos",
              "Post Production",
            ].map((c) => (
              <span
                key={c}
                className="text-bone/30 hover:text-[#FCCB3D] transition-colors duration-500 cursor-default"
              >
                {c}<span className="text-[#FCCB3D]">.</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Value({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="border border-bone/10 p-6 md:p-8 hover:border-[#FCCB3D]/40 transition-colors duration-500 group">
      <p className="text-[10px] tracking-[0.3em] text-[#FCCB3D]/80 mb-6">{n}</p>
      <h4 className="text-xl md:text-2xl font-light tracking-tight mb-3 group-hover:text-[#FCCB3D] transition-colors">{t}</h4>
      <p className="text-sm text-bone/50 leading-relaxed">{d}</p>
    </div>
  );
}
