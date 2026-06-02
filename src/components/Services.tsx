"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    tag: "01",
    title: "Planificación Patrimonial Internacional",
    description:
      "Optimización de estructuras patrimoniales con énfasis en eficiencia fiscal y planificación a largo plazo. Diseño de soluciones adaptadas a la complejidad transfronteriza.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    tag: "02",
    title: "Estructuración Fiscal de Operaciones",
    description:
      "Diseño para transacciones societarias y operaciones complejas, incluyendo inversiones internacionales. Análisis de la carga fiscal global y optimización de la estructura.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    tag: "03",
    title: "Fiscalidad Internacional",
    description:
      "Asesoría transfronteriza, convenios de doble imposición y residencia fiscal. Análisis de implicaciones fiscales en operaciones con presencia en múltiples jurisdicciones.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    tag: "04",
    title: "Derecho Mercantil y Asesoría Societaria",
    description:
      "Constitución de sociedades, reorganizaciones y gestión corporativa. Apoyo jurídico-mercantil en operaciones de M&A, joint ventures y restructuraciones societarias.",
  },
];

export default function Services() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050a14]" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="reveal mb-16" ref={(el) => { refs.current[0] = el; }}>
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0CBBD4]">
            Servicios
          </span>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl font-bold text-white">
            Áreas de especialización
          </h2>
          <p className="mt-4 max-w-2xl text-white/50 text-lg leading-relaxed">
            Soluciones técnicas de alto valor para entornos fiscales internacionales complejos.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="reveal card-glow rounded-2xl border border-white/[0.07] bg-[#080d1c] p-8 cursor-default"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top row */}
              <div className="flex items-start mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0CBBD4]/20 bg-[#0CBBD4]/10 text-[#0CBBD4]">
                  {service.icon}
                </div>
              </div>

              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom link */}
              <div className="mt-6 flex items-center gap-2 text-[#0CBBD4] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Saber más</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
