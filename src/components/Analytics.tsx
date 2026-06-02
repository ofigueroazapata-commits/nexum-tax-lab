"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-WVFL913QSL";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === "accepted") {
      setConsented(true);
    }
    const handler = () => setConsented(true);
    window.addEventListener("cookie-accepted", handler);
    return () => window.removeEventListener("cookie-accepted", handler);
  }, []);

  if (!consented) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
      onLoad={() => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(...args: any[]) { window.dataLayer.push(args); };
        window.gtag("js", new Date());
        window.gtag("config", GA_ID);
      }}
    />
  );
}
