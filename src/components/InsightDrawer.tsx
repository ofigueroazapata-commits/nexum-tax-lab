"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { InsightData } from "@/data/insights";

interface InsightDrawerProps {
  insight: InsightData | null;
  onClose: () => void;
}

export default function InsightDrawer({ insight, onClose }: InsightDrawerProps) {
  useEffect(() => {
    if (!insight) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [insight, onClose]);

  return (
    <AnimatePresence>
      {insight && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[101] w-full max-w-2xl flex flex-col"
            style={{ background: "#080d1c", borderLeft: "1px solid rgba(12,187,212,0.15)" }}
          >
            {/* Top glow */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(12,187,212,0.08) 0%, transparent 65%)",
                transform: "translate(30%, -30%)",
              }}
            />

            {/* Header */}
            <div className="flex items-start justify-between p-8 pb-6 border-b border-white/[0.06]">
              <div className="flex-1 pr-4">
                <span
                  className="inline-block rounded-full border px-3 py-1 text-xs font-semibold mb-3"
                  style={{
                    background: "rgba(12,187,212,0.1)",
                    borderColor: "rgba(12,187,212,0.25)",
                    color: "#0CBBD4",
                  }}
                >
                  {insight.tag}
                </span>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-white leading-snug">
                  {insight.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-5">
              {/* Excerpt highlight */}
              <p className="text-base text-[#0CBBD4]/80 leading-relaxed font-medium border-l-2 border-[#0CBBD4]/40 pl-4">
                {insight.excerpt}
              </p>

              {/* Body paragraphs */}
              {insight.body.map((paragraph, i) => (
                <p key={i} className="text-white/60 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Conclusion */}
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5 mt-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#0CBBD4] mb-2">
                  Conclusión
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {insight.conclusion}
                </p>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-8 pt-6 border-t border-white/[0.06]">
              <p className="text-sm text-white/40 mb-4">
                ¿Tiene una situación relacionada con este análisis? Consúltenos.
              </p>
              <a
                href="#contacto"
                onClick={onClose}
                className="btn-shimmer w-full block text-center rounded-xl py-3.5 text-sm font-semibold text-black cursor-pointer"
              >
                Solicitar consulta sobre este tema
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
