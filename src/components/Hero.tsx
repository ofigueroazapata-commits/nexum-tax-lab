"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-bg" />

      {/* Radial glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] -translate-y-1/3 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(12,187,212,0.12) 0%, rgba(12,187,212,0.04) 40%, transparent 70%)",
        }}
      />
      {/* Side glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(12,187,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0CBBD4]/30 bg-[#0CBBD4]/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0CBBD4] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-[#0CBBD4] uppercase">
              Asesoría Fiscal Internacional
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-white">Fiscalidad internacional</span>
            <br />
            <span className="text-gradient">
              y estructuración de
            </span>
            <br />
            <span className="text-white">operaciones complejas</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...fadeUp(0.35)}
            className="mt-8 max-w-2xl text-lg md:text-xl text-white/55 leading-relaxed"
          >
            Asesoría técnica en planificación patrimonial, estructuras internacionales
            y optimización fiscal en entornos transfronterizos.
          </motion.p>

          {/* Philosophy line */}
          <motion.p
            {...fadeUp(0.45)}
            className="mt-4 max-w-xl text-sm text-white/35 italic leading-relaxed border-l-2 border-[#0CBBD4]/40 pl-4"
          >
            No se trata solo de cumplir con la normativa, sino de anticipar riesgos
            y estructurar soluciones con criterio técnico y visión estratégica.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#contacto"
              className="btn-shimmer rounded-full px-8 py-3.5 text-base font-semibold text-black cursor-pointer"
            >
              Solicitar Consulta
            </a>
            <a
              href="#servicios"
              className="group flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              Ver Servicios
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/25 tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#0CBBD4]/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
