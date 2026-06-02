import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const BASE_URL = "https://nexumtaxlab.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nexum Tax Lab | Asesor Fiscal Internacional España",
    template: "%s | Nexum Tax Lab",
  },
  description:
    "Asesoría especializada en fiscalidad internacional, planificación patrimonial, estructuración de operaciones complejas, cambio de residencia fiscal, NHR Portugal, convenios de doble imposición, régimen FEAC, criptomonedas y fondos de inversión.",
  keywords: [
    "asesor fiscal internacional España",
    "planificación fiscal internacional",
    "planificación patrimonial internacional",
    "cambio de residencia fiscal España",
    "asesoría NHR Portugal",
    "NHR Portugal españoles",
    "convenio doble imposición España",
    "estructuración fiscal operaciones",
    "holding internacional España",
    "holding Países Bajos España",
    "exit tax España",
    "cuarentena fiscal España",
    "trust fiscal España",
    "asesor fiscal expatriados",
    "teletrabajo internacional fiscalidad",
    "conflicto residencia fiscal",
    "régimen FEAC España",
    "aportaciones no dinerarias fiscalidad",
    "motivos económicos válidos FEAC",
    "fiscalidad criptomonedas España",
    "staking tributación España",
    "fondos inversión vs acciones fiscalidad",
    "diferimiento fiscal fondos inversión",
    "rotación cartera fiscalidad",
    "estructuración societaria internacional",
    "fiscalidad transfronteriza",
    "Daniel Figueroa Zapata",
    "Nexum Tax Lab",
  ],
  authors: [
    {
      name: "Daniel Figueroa Zapata",
      url: "https://es.linkedin.com/in/danielfigueroazapata43",
    },
  ],
  creator: "Daniel Figueroa Zapata",
  publisher: "Nexum Tax Lab",
  category: "Asesoría Fiscal y Tributaria Internacional",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    siteName: "Nexum Tax Lab",
    title: "Nexum Tax Lab | Asesor Fiscal Internacional España",
    description:
      "Especialización en fiscalidad internacional, planificación patrimonial, NHR Portugal, holdings, cambio de residencia fiscal, régimen FEAC, criptomonedas y estructuración de operaciones complejas.",
    images: [
      {
        url: "/logo-full.png",
        width: 1024,
        height: 1024,
        alt: "Nexum Tax Lab - Asesoría Fiscal Internacional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexum Tax Lab | Asesor Fiscal Internacional España",
    description:
      "Especialización en fiscalidad internacional, planificación patrimonial y estructuración de operaciones complejas.",
    images: ["/logo-full.png"],
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "es-ES": BASE_URL },
  },
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
    shortcut: "/logo-mark.png",
  },
  verification: {
    google: "OhlKArZz2DH5o5VvtbCaVSeFB_KgZclGVtsLw2lNdFU",
    other: {
      "msvalidate.01": "A18BA7060FFFCB5E3A4D2D3FC79E28AE",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
