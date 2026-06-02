import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allInsights } from "@/data/insights";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const insight = allInsights.find((i) => i.slug === params.slug);
  if (!insight) return { title: "Insight no encontrado" };
  return {
    title: { absolute: insight.metaTitle },
    description: insight.metaDescription,
    keywords: insight.keywords,
    alternates: { canonical: `https://nexumtaxlab.com/insights/${params.slug}` },
    openGraph: {
      title: insight.metaTitle,
      description: insight.metaDescription,
      url: `https://nexumtaxlab.com/insights/${params.slug}`,
      type: "article",
      authors: ["Daniel Figueroa Zapata"],
    },
  };
}

export function generateStaticParams() {
  return allInsights.map((i) => ({ slug: i.slug }));
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = allInsights.find((i) => i.slug === params.slug);
  if (!insight) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    author: {
      "@type": "Person",
      name: "Daniel Figueroa Zapata",
      url: "https://es.linkedin.com/in/danielfigueroazapata43",
    },
    publisher: {
      "@type": "Organization",
      name: "Nexum Tax Lab",
      logo: { "@type": "ImageObject", url: "https://nexumtaxlab.com/logo-mark.png" },
    },
    url: `https://nexumtaxlab.com/insights/${params.slug}`,
    inLanguage: "es",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen bg-black">
        {/* Navbar back */}
        <div className="border-b border-white/[0.06] bg-black/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="mx-auto max-w-4xl px-6 py-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a Nexum Tax Lab
            </Link>
          </div>
        </div>

        <article className="mx-auto max-w-4xl px-6 py-20">
          <span className="inline-block rounded-full border border-[#0CBBD4]/25 bg-[#0CBBD4]/10 px-4 py-1.5 text-xs font-semibold text-[#0CBBD4] mb-6">
            {insight.tag}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            {insight.title}
          </h1>
          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-white/[0.06]">
            <div className="w-10 h-10 rounded-full bg-[#0CBBD4]/10 border border-[#0CBBD4]/20 flex items-center justify-center text-xs font-bold text-[#0CBBD4]">DFZ</div>
            <div>
              <p className="text-sm font-medium text-white">Daniel Figueroa Zapata</p>
              <p className="text-xs text-white/40">Especialista en Fiscalidad Internacional · Nexum Tax Lab</p>
            </div>
          </div>
          <p className="text-lg text-[#0CBBD4]/80 leading-relaxed border-l-2 border-[#0CBBD4]/40 pl-5 mb-10 font-medium">
            {insight.excerpt}
          </p>
          <div className="space-y-6">
            {insight.body.map((paragraph, i) => (
              <p key={i} className="text-white/65 leading-relaxed text-base">{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-white/[0.07] bg-[#080d1c] p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0CBBD4] mb-3">Conclusión</p>
            <p className="text-white/75 leading-relaxed">{insight.conclusion}</p>
          </div>
          <div className="mt-16 rounded-2xl border border-[#0CBBD4]/20 bg-[#0CBBD4]/5 p-8 text-center">
            <h2 className="font-heading text-xl font-bold text-white mb-2">¿Tiene una situación relacionada?</h2>
            <p className="text-white/50 text-sm mb-6">Consúltenos sin compromiso. Analizamos su caso con criterio técnico y enfoque estratégico.</p>
            <Link href="/#contacto" className="btn-shimmer inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-black">
              Solicitar consulta
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
