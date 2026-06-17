import { brands, agencies } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Brands() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="brands" className="relative py-32 md:py-44 bg-[#0a0a0a] overflow-hidden min-h-screen page-in">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div ref={ref} className="reveal mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#FCCB3D] mb-4">
            05 — Collaborators
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[0.9]">
            Brands <span className="italic font-offside text-[#FCCB3D]">&</span> Agencies
            <br /> we've worked with.
          </h2>
        </div>

        {/* Brands grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between border-b border-bone/20 pb-4 mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">Brands</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">{brands.length}+ clients</p>
          </div>
          <LogoGrid items={brands} />
        </div>

        {/* Agencies grid */}
        <div>
          <div className="flex items-center justify-between border-b border-bone/20 pb-4 mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">Agencies</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
              {agencies.length}+ partners
            </p>
          </div>
          <LogoGrid items={agencies} />
        </div>
      </div>

      {/* Marquee 
      <div className="mt-24 border-y border-bone/10 py-8 overflow-hidden">
        <div className="marquee-track">
          {[...brands, ...agencies, ...brands].map((b, i) => (
            <span key={i} className="text-2xl md:text-3xl font-light text-bone/30 whitespace-nowrap">
              {b.name} <span className="text-[#FCCB3D] mx-6">✦</span>
            </span>
          ))}
        </div>
      </div>*/}
    </section>
  );
}

function LogoGrid({ items }: { items: { name: string; logo: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-bone/10">
      {items.map((b) => (
        <LogoCell key={b.name} name={b.name} logo={b.logo} />
      ))}
    </div>
  );
}

function LogoCell({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group relative aspect-[4/3] bg-[#0a0a0a] flex items-center justify-center p-8 hover:bg-bone/[0.03] transition-colors duration-500">
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="max-h-12 max-w-[80%] object-contain transition-all duration-500 group-hover:scale-110 grayscale brightness-80"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLImageElement).style.opacity = "1";
          (e.currentTarget as HTMLImageElement).style.filter = "grayscale(1) brightness(0.8)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLImageElement).style.opacity = "1";
          (e.currentTarget as HTMLImageElement).style.filter = "grayscale(1) brightness(0.8)";
        }}
        onError={(e) => {
          const t = e.currentTarget as HTMLImageElement;
          t.style.display = "none";
          (t.nextSibling as HTMLElement).style.display = "block";
        }}
      />
      <span
        className="text-bone/60 text-sm tracking-wider uppercase font-light"
        style={{ display: "none" }}
      >
        {name}
      </span>
      <p className="absolute bottom-3 text-[10px] uppercase tracking-[0.25em] text-[#FCCB3D] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {name}
      </p>
    </div>
  );
}
