import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { FPSCLogo } from "../components/Logo";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });

  return (
    <section id="contact" className="relative py-32 md:py-44 bg-[#0a0a0a] overflow-hidden min-h-screen page-in">
      {/* Big text bg */}
      <div className="absolute -bottom-20 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.04]">
        <p className="text-[20vw] font-black tracking-tighter leading-none whitespace-nowrap">
          SAY HELLO
        </p>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#FCCB3D] mb-6">
              06 — Contact Us
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.03em] leading-[0.95]">
              Speak
              <br />
              to <span className="italic font-offside text-[#FCCB3D]">us.</span>
            </h2>

            {/*<div className="mt-10 flex justify-start">
              <FPSCLogo height={50} />
            </div>*/}

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#FCCB3D]/70 mb-2">
                  Aiswarya Suresh — Creative Producer
                </p>
                <a href="tel:+918086084320" className="text-lg font-light text-bone hover:text-[#FCCB3D] transition-colors hover-line block">
                  +91 8086084320
                </a>
                <a href="mailto:aiswarya@firstpictureshowcompany.com" className="text-sm text-bone/60 hover:text-[#FCCB3D] transition-colors hover-line block mt-1">
                  aiswarya@firstpictureshowcompany.com
                </a>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#FCCB3D]/70 mb-2">
                  Brijith Bkv — Director
                </p>
                <a href="tel:+919745260143" className="text-lg font-light text-bone hover:text-[#FCCB3D] transition-colors hover-line block">
                  +91 9745260143
                </a>
                <a href="mailto:brijith.bkv@firstpictureshowcompany.com" className="text-sm text-bone/60 hover:text-[#FCCB3D] transition-colors hover-line block mt-1">
                  brijith.bkv@firstpictureshowcompany.com
                </a>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#FCCB3D]/70 mb-2">
                  For Careers
                </p>
                <a href="mailto:sayhello@firstpictureshowcompany.com" className="text-lg font-light text-bone hover:text-[#FCCB3D] transition-colors hover-line block">
                  sayhello@firstpictureshowcompany.com
                </a>
              </div>
            </div>

            <div className="mt-10 flex gap-5">
              {[
                { label: "Instagram", href: "https://www.instagram.com/firstpictureshowcompany/" },
                { label: "Facebook", href: "https://www.facebook.com/tfpscompany/" },
                { label: "YouTube", href: "https://www.youtube.com/@firstpictureshowcompany7859" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/first-picture-show-company-217611323/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.25em] text-bone/50 hover-line hover:text-[#FCCB3D] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center border border-[#FCCB3D]/30 bg-[#FCCB3D]/[0.03] rounded-sm p-12">
                <div className="w-16 h-16 rounded-full border border-[#FCCB3D] flex items-center justify-center text-[#FCCB3D] text-2xl mb-6">
                  ✓
                </div>
                <p className="text-2xl font-light tracking-tight mb-2">Message received.</p>
                <p className="text-bone/50 text-sm">We'll be in touch within 24 hours.</p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", project: "", message: "" });
                  }}
                  className="mt-8 text-[10px] uppercase tracking-[0.25em] text-[#FCCB3D] hover-line"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-2"
              >
                <Field
                  label="Your Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <Field
                  label="Project Type"
                  value={form.project}
                  onChange={(v) => setForm({ ...form, project: v })}
                  placeholder="TVC / Digital Film / Corporate Film / Other"
                />
                <Field
                  label="Tell us about the project"
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  textarea
                  required
                />

                <button
                  type="submit"
                  className="mt-8 group inline-flex items-center gap-4 font-offside text-sm uppercase tracking-[0.2em] px-8 py-5 bg-[#FCCB3D] text-black hover:bg-bone transition-colors duration-500"
                >
                  Send Message
                  <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea,
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block group border-b border-bone/15 pb-2 pt-6 focus-within:border-[#FCCB3D] transition-colors">
      <span className="text-[10px] uppercase tracking-[0.3em] text-bone/40 block mb-2">
        {label} {required && <span className="text-[#FCCB3D]">*</span>}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={4}
          placeholder={placeholder}
          className="w-full bg-transparent text-lg md:text-xl font-light text-bone placeholder-bone/20 outline-none resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          className="w-full bg-transparent text-lg md:text-xl font-light text-bone placeholder-bone/20 outline-none"
        />
      )}
    </label>
  );
}
