"use client";

import { useEffect } from "react";

const GA_ID = "G-WVFL913QSL";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    dataLayer: unknown[];
  }
}

export default function Analytics() {
  useEffect(() => {
    // Only load on return visits where consent was already given
    const consent = localStorage.getItem("cookie-consent");
    if (consent !== "accepted") return;

    // Initialize gtag BEFORE loading the script
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args) { window.dataLayer.push(args); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { anonymize_ip: true });
    // Now load the script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
