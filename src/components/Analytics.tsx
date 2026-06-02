"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-WVFL913QSL";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    dataLayer: unknown[];
  }
}

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // Check on mount (return visits)
    if (localStorage.getItem("cookie-consent") === "accepted") {
      setConsented(true);
    }
    // Listen for accept event from CookieBanner (first visit)
    const handler = () => setConsented(true);
    window.addEventListener("cookie-accepted", handler);
    return () => window.removeEventListener("cookie-accepted", handler);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
