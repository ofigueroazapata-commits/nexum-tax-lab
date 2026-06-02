export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://nexumtaxlab.com/#organization",
    name: "Nexum Tax Lab",
    url: "https://nexumtaxlab.com",
    logo: "https://nexumtaxlab.com/logo-mark.png",
    image: "https://nexumtaxlab.com/logo-full.png",
    description:
      "Asesoría especializada en fiscalidad internacional, planificación patrimonial, estructuración de operaciones complejas, NHR Portugal, convenios de doble imposición, régimen FEAC, fiscalidad de criptomonedas y derecho mercantil en entornos transfronterizos.",
    email: "info@nexumtaxlab.com",
    sameAs: ["https://es.linkedin.com/in/danielfigueroazapata43"],
    areaServed: { "@type": "Place", name: "Internacional" },
    knowsAbout: [
      "Fiscalidad Internacional",
      "Planificación Patrimonial Internacional",
      "Cambio de Residencia Fiscal",
      "Régimen NHR Portugal",
      "Holdings Internacionales",
      "Convenios de Doble Imposición",
      "Régimen FEAC",
      "Fiscalidad de Criptomonedas",
      "Teletrabajo Internacional",
      "Derecho Mercantil y Societario",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Asesoría Fiscal Internacional",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Planificación Patrimonial Internacional",
            description:
              "Diseño y optimización de estructuras patrimoniales en entornos nacionales e internacionales, con especial atención a la eficiencia fiscal, la protección del patrimonio y la planificación a largo plazo.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estructuración Fiscal de Operaciones",
            description:
              "Análisis y diseño de estructuras para operaciones societarias y transacciones complejas, incluyendo inversiones internacionales, reorganizaciones y planificación fiscal estratégica.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fiscalidad Internacional",
            description:
              "Asesoramiento especializado en tributación transfronteriza, convenios de doble imposición, residencia fiscal y movilidad internacional.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Derecho Mercantil y Asesoría Societaria",
            description:
              "Asistencia en la constitución, reorganización y gestión de sociedades, con un enfoque integrado entre la normativa mercantil y su impacto fiscal.",
          },
        },
      ],
    },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://nexumtaxlab.com/#daniel-figueroa",
    name: "Daniel Figueroa Zapata",
    jobTitle:
      "Especialista en Fiscalidad Internacional y Estructuración de Operaciones",
    description:
      "Especialista en fiscalidad internacional y estructuración de operaciones con enfoque técnico basado en el análisis normativo y la planificación estratégica.",
    worksFor: { "@id": "https://nexumtaxlab.com/#organization" },
    url: "https://es.linkedin.com/in/danielfigueroazapata43",
    sameAs: ["https://es.linkedin.com/in/danielfigueroazapata43"],
    knowsAbout: [
      "Fiscalidad Internacional",
      "Planificación Patrimonial",
      "Estructuración Societaria Internacional",
      "Convenios de Doble Imposición",
      "Residencia Fiscal",
      "Régimen NHR Portugal",
      "Holdings Internacionales",
      "Régimen FEAC",
      "Fiscalidad Criptomonedas",
      "Teletrabajo Internacional",
      "Derecho Mercantil",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nexumtaxlab.com/#website",
    url: "https://nexumtaxlab.com",
    name: "Nexum Tax Lab",
    description:
      "Especialización, criterio técnico y enfoque estratégico en fiscalidad internacional y estructuración de operaciones complejas.",
    publisher: { "@id": "https://nexumtaxlab.com/#organization" },
    inLanguage: "es",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué riesgos tiene el cambio de residencia fiscal desde España?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El principal riesgo del cambio de residencia fiscal desde España es la cuarentena fiscal de 4 años aplicable a territorios de baja tributación, durante la cual el contribuyente sigue tributando como residente en España. Además, puede activarse el exit tax sobre participaciones y activos financieros significativos. La Administración también analiza la continuidad de intereses económicos y la vinculación familiar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Sigue siendo válido el régimen NHR de Portugal para españoles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El régimen NHR fue reformado en 2024 y sustituido por el IFICI, con acceso más restringido a investigadores, profesionales cualificados e inversores. Sigue siendo válido para perfiles concretos, pero requiere acreditar una vinculación real con Portugal. La Administración española cuestiona los certificados de residencia cuando no existe una verdadera vinculación económica y personal con el país.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo es válido usar un holding en Países Bajos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un holding holandés sigue siendo válido cuando responde a una lógica empresarial real y cuenta con sustancia económica genuina: empleados, decisiones de gestión locales y actividad real. Las estructuras puramente instrumentales, sin justificación económica más allá de la optimización fiscal, están sujetas a cláusulas antiabuso y riesgo de reinterpretación por las autoridades españolas y holandesas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo tributan las criptomonedas en España?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En España, no solo la compraventa de criptomonedas genera tributación en el IRPF. Las permutas entre criptoactivos, el staking, los airdrops y la obtención gratuita de tokens también generan hechos imponibles, incluso sin conversión a moneda fiat. Además, existe obligación de declarar saldos y operaciones ante la Agencia Tributaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es el régimen FEAC y cuándo se puede aplicar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El régimen FEAC (fusiones, escisiones, aportaciones y canjes de valores) permite diferir la tributación de plusvalías latentes en operaciones de reorganización empresarial. Su aplicación no es automática: la Administración puede denegarlo si considera que la operación carece de motivos económicos válidos o tiene finalidad exclusivamente fiscal. La documentación previa de la lógica empresarial es fundamental.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia fiscal hay entre invertir en fondos y en acciones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La inversión en acciones genera tributación en IRPF en cada transmisión. Los fondos de inversión permiten el diferimiento fiscal mediante traspasos sin tributar hasta el reembolso final. Este diferimiento convierte a los fondos en una herramienta más eficiente fiscalmente a largo plazo, especialmente en carteras con rotación frecuente.",
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://nexumtaxlab.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: "https://nexumtaxlab.com/#servicios",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Insights",
        item: "https://nexumtaxlab.com/#insights",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Quiénes Somos",
        item: "https://nexumtaxlab.com/#quienes-somos",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contacto",
        item: "https://nexumtaxlab.com/#contacto",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
