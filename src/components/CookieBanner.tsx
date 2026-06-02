"use client";

import { useState, useEffect } from "react";
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

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(8,13,28,0.97)",
        backdropFilter: "blur(20px)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: "1.5", textAlign: "center", margin: 0 }}>
        Utilizamos cookies analíticas (Google Analytics) para mejorar su experiencia.{" "}
        <Link href="/politica-de-privacidad" style={{ color: "#0CBBD4" }}>
          Más información
        </Link>
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
        <button
          onClick={reject}
          style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: "6px 4px" }}
        >
          Rechazar
        </button>
        <button
          onClick={accept}
          className="btn-shimmer"
          style={{ borderRadius: "9999px", padding: "8px 20px", fontSize: "13px", fontWeight: 600, color: "#000", cursor: "pointer", border: "none" }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
