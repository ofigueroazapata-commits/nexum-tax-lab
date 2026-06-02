"use client";

import { useState, useRef, useEffect } from "react";

const subjects = [
  "Planificación Patrimonial Internacional",
  "Estructuración Fiscal de Operaciones",
  "Fiscalidad Internacional / CDI",
  "Derecho Mercantil y Societario",
  "Otro",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-[#0CBBD4]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#0CBBD4]/20";

  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow left */}
      <div
        className="absolute left-0 bottom-0 w-[500px] h-[500px] -translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(12,187,212,0.08) 0%, transparent 65%)",
        }}
      />

      <div
        ref={sectionRef}
        className="reveal relative z-10 mx-auto max-w-7xl px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0CBBD4]">
              Contacto
            </span>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
              Hablemos de su
              <br />
              <span className="text-gradient">situación fiscal</span>
            </h2>
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              Si tiene una operación compleja, un cambio de residencia planificado o una
              estructura internacional que revisar, estamos a su disposición.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-5">
              <a
                href="mailto:info@nexumtaxlab.com"
                className="group flex items-center gap-4 cursor-pointer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0CBBD4]/20 bg-[#0CBBD4]/10 text-[#0CBBD4] flex-shrink-0 group-hover:bg-[#0CBBD4]/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-0.5">Email</p>
                  <p className="text-sm font-medium text-white group-hover:text-[#0CBBD4] transition-colors">
                    info@nexumtaxlab.com
                  </p>
                </div>
              </a>

              <a
                href="https://es.linkedin.com/in/danielfigueroazapata43"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 cursor-pointer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0CBBD4]/20 bg-[#0CBBD4]/10 text-[#0CBBD4] flex-shrink-0 group-hover:bg-[#0CBBD4]/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-0.5">LinkedIn</p>
                  <p className="text-sm font-medium text-white group-hover:text-[#0CBBD4] transition-colors">
                    Nexum Tax Lab
                  </p>
                </div>
              </a>
            </div>

            {/* GDPR note */}
            <p className="mt-10 text-xs text-white/25 leading-relaxed max-w-sm">
              Sus datos serán tratados con total confidencialidad conforme al Reglamento General
              de Protección de Datos (RGPD). No serán cedidos a terceros.
            </p>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#080d1c] p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "rgba(12,187,212,0.12)", border: "1px solid rgba(12,187,212,0.3)" }}
                >
                  <svg className="w-7 h-7 text-[#0CBBD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  Mensaje enviado
                </h3>
                <p className="text-white/40 text-sm">
                  Nos pondremos en contacto con usted en breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 font-medium">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Su nombre"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="su@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-1.5 font-medium">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-1.5 font-medium">
                    Asunto *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled>
                      Seleccione un área
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-[#080d1c]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-1.5 font-medium">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describa brevemente su consulta..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-shimmer w-full rounded-xl py-3.5 text-sm font-semibold text-black cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar consulta"
                  )}
                </button>

                <p className="text-center text-xs text-white/20">
                  * Campos obligatorios
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
