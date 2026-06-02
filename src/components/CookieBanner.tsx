"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookie-accepted"));
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
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "10px", background: "rgba(12,187,212,0.1)", border: "1px solid rgba(12,187,212,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#0CBBD4" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
          Utilizamos cookies analíticas (Google Analytics) para mejorar su experiencia.{" "}
          <Link href="/politica-de-privacidad" style={{ color: "#0CBBD4" }}>
            Más información
          </Link>
        </p>
      </div>
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
