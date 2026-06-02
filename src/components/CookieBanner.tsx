"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const loadGA = () => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-WVFL913QSL";
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.gtag = function (...args: any[]) { window.dataLayer.push(args); };
      window.gtag("js", new Date());
      window.gtag("config", "G-WVFL913QSL", { anonymize_ip: true });
    };
  };

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    loadGA();
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          style={{ position: "fixed", bottom: "24px", left: 0, right: 0, zIndex: 200, display: "flex", justifyContent: "center", padding: "0 16px" }}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-white/[0.1] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: "rgba(8,13,28,0.96)", backdropFilter: "blur(20px)" }}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(12,187,212,0.1)", border: "1px solid rgba(12,187,212,0.2)" }}>
              <svg className="w-5 h-5 text-[#0CBBD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>

            {/* Text */}
            <p className="text-sm text-white/55 leading-relaxed flex-1">
              Utilizamos cookies analíticas (Google Analytics) para entender cómo se usa el sitio y mejorar su experiencia. Puede aceptar o rechazar su uso.{" "}
              <Link href="/politica-de-privacidad" className="text-[#0CBBD4] hover:underline">
                Más información
              </Link>
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={reject}
                className="text-xs text-white/35 hover:text-white/60 transition-colors cursor-pointer"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="btn-shimmer rounded-full px-5 py-2 text-xs font-semibold text-black cursor-pointer"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
