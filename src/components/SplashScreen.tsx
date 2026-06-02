"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          style={{ backdropFilter: "blur(0px)" }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* Glow exterior — respira lento sincronizado con la barra de carga */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: [0, 0.6, 1, 0.5, 1], scale: [0.7, 0.9, 1, 0.97, 1.04] }}
            transition={{ duration: 2.8, ease: "easeInOut", times: [0, 0.2, 0.5, 0.75, 1], delay: 0.2 }}
            className="absolute w-[440px] h-[440px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(12,187,212,0.2) 0%, rgba(12,187,212,0.06) 55%, transparent 72%)",
            }}
          />
          {/* Glow interior — pulso suave y continuo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 1, 0.6, 1] }}
            transition={{ duration: 2.8, ease: "easeInOut", times: [0, 0.2, 0.5, 0.75, 1], delay: 0.2 }}
            className="absolute w-[260px] h-[260px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(12,187,212,0.3) 0%, rgba(12,187,212,0.1) 50%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />

          {/* Logo mark */}
          {/* Full logo with text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.78, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            className="relative z-10 drop-shadow-[0_0_40px_rgba(12,187,212,0.55)]"
          >
            <Image
              src="/logo-full.png"
              alt="Nexum Tax Lab"
              width={280}
              height={280}
              priority
              className="w-64 md:w-72 h-auto"
            />
          </motion.div>

          {/* Tagline below logo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="relative z-10 mt-4 text-xs tracking-[0.3em] uppercase text-white/30"
          >
            Fiscalidad Internacional
          </motion.p>

          {/* Loading bar at bottom */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 h-[2px] rounded-full overflow-hidden"
            style={{ width: 120, background: "rgba(255,255,255,0.08)" }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.8, ease: "linear", delay: 0.2 }}
              className="h-full rounded-full"
              style={{ background: "#0CBBD4" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
