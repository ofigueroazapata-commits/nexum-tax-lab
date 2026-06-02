"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-WVFL913QSL";

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(localStorage.getItem("cookie-consent") === "accepted");
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
