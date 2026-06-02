"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InsightDrawer from "./InsightDrawer";
import { allInsights } from "@/data/insights";
import type { InsightData } from "@/data/insights";

const PAGE_SIZE = 6;

const tagColors: Record<string, string> = {
  "Residencia Fiscal":           "bg-[#0CBBD4]/15 text-[#0CBBD4] border-[#0CBBD4]/40",
  "Estructuración Internacional":"bg-[#1D4ED8]/20 text-[#93C5FD] border-[#93C5FD]/40",
  "Fiscalidad Internacional":    "bg-[#0E7490]/20 text-[#67E8F9] border-[#67E8F9]/40",
  "Planificación Patrimonial":   "bg-[#1E3A8A]/20 text-[#BFDBFE] border-[#BFDBFE]/40",
};

export default function Insights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(PAGE_SIZE);
  const [activeInsight, setActiveInsight] = useState<InsightData | null>(null);
  const newCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const displayedInsights = allInsights.slice(0, shown);
  const hasMore = shown < allInsights.length;

  const handleVerMas = () => {
    setShown((prev) => Math.min(prev + PAGE_SIZE, allInsights.length));
    setTimeout(() => {
      newCardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <section id="insights" className="relative py-28 overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0CBBD4]">
              Insights
            </span>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl font-bold text-white">
              Análisis y criterio técnico
            </h2>
            <p className="mt-4 max-w-2xl text-white/50 text-lg leading-relaxed">
              Publicaciones sobre fiscalidad internacional, estructuración y planificación patrimonial.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {displayedInsights.map((insight, i) => {
                const isNew = i >= shown - PAGE_SIZE && shown > PAGE_SIZE;
                return (
                  <motion.div
                    key={insight.id}
                    ref={i === shown - PAGE_SIZE && shown > PAGE_SIZE ? newCardsRef : undefined}
                    initial={isNew ? { opacity: 0, y: 24 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: isNew ? (i % PAGE_SIZE) * 0.07 : 0 }}
                    onClick={() => setActiveInsight(insight)}
                    className="card-glow group rounded-2xl border border-white/[0.07] bg-[#080d1c] p-7 flex flex-col cursor-pointer"
                  >
                    {/* Number + tag */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-heading text-xs font-bold tracking-widest text-white/20">
                        Insight #{insight.id}
                      </span>
                      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${tagColors[insight.tag] ?? "bg-white/5 text-white/40 border-white/10"}`}>
                        {insight.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-base font-semibold text-white leading-snug mb-3 flex-grow">
                      {insight.title}
                    </h3>

                    <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                      {insight.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-1.5 text-[#0CBBD4] text-sm font-medium">
                      <span className="group-hover:underline">Leer análisis</span>
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Ver más / contador */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-xs text-white/25">
              Mostrando {displayedInsights.length} de {allInsights.length} análisis
            </p>
            {hasMore && (
              <motion.button
                onClick={handleVerMas}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2.5 rounded-full border border-[#0CBBD4]/30 bg-[#0CBBD4]/5 px-7 py-3 text-sm font-semibold text-[#0CBBD4] hover:bg-[#0CBBD4]/10 hover:border-[#0CBBD4]/50 transition-all duration-200 cursor-pointer"
              >
                Ver más análisis
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            )}
            {!hasMore && allInsights.length > PAGE_SIZE && (
              <p className="text-xs text-white/25">Has leído todos los análisis disponibles</p>
            )}
          </div>
        </div>
      </section>

      <InsightDrawer insight={activeInsight} onClose={() => setActiveInsight(null)} />
    </>
  );
}
