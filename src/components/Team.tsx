"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quienes-somos" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050a14]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] translate-x-1/2 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(12,187,212,0.07) 0%, transparent 65%)",
        }}
      />

      <div ref={sectionRef} className="reveal relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0CBBD4]">
              Quiénes Somos
            </span>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
              Especialización,
              <br />
              criterio técnico
              <br />
              y enfoque estratégico.
            </h2>
            <p className="mt-6 text-white/55 text-lg leading-relaxed">
              Nexum Tax Lab nace de la convicción de que la fiscalidad internacional requiere
              una aproximación técnica rigurosa, orientada a la toma de decisiones con
              perspectiva a largo plazo.
            </p>
            <p className="mt-4 text-white/40 text-base leading-relaxed">
              Nuestro enfoque combina el análisis normativo, la doctrina administrativa y la
              jurisprudencia con una orientación práctica que prioriza soluciones sólidas
              y sostenibles frente a estructuras de alto riesgo.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "+10", label: "Años de experiencia" },
                { value: "+50", label: "Jurisdicciones" },
                { value: "100%", label: "Enfoque técnico" },
              ].map((stat, i) => (
                <div key={i} className="border-t border-white/[0.08] pt-4">
                  <p className="font-heading text-2xl font-bold text-[#0CBBD4]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/40 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Person card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/[0.08] bg-[#080d1c] p-8 md:p-10">
              {/* Avatar */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border border-white/[0.08] flex-shrink-0">
                  <Image
                    src="/fotoperfil.png"
                    alt="Daniel Figueroa Zapata"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-heading text-xl font-semibold text-white">
                    Daniel Figueroa Zapata
                  </p>
                  <p className="text-sm text-[#0CBBD4] mt-1">
                    Especialista en Fiscalidad Internacional
                  </p>
                  <a
                    href="https://es.linkedin.com/in/danielfigueroazapata43"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              <div
                className="h-px my-6"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />

              <p className="text-white/55 text-sm leading-relaxed">
                Mi trayectoria combina el análisis legislativo, la doctrina administrativa y la
                jurisprudencia con una orientación práctica hacia la toma de decisiones. Especializado
                en estructuración de operaciones complejas con implicaciones fiscales internacionales.
              </p>

              <p className="mt-4 text-white/40 text-sm leading-relaxed">
                Comprometido con el rigor técnico y la búsqueda de soluciones sostenibles frente
                a estructuras de alto riesgo.
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Fiscalidad Internacional",
                  "Planificación Patrimonial",
                  "Estructuración Societaria",
                  "Derecho Mercantil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
