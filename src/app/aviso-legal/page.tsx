import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal e información sobre el titular del sitio web Nexum Tax Lab conforme a la LSSI-CE.",
  alternates: { canonical: "https://nexumtaxlab.com/aviso-legal" },
  robots: { index: false, follow: false },
};

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-black">
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
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Aviso Legal
        </h1>
        <p className="text-white/40 text-sm mb-12">Última actualización: junio de 2026</p>

        <div className="space-y-10 text-white/65 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Identificación del titular</h2>
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular de este sitio web es:</p>
            <ul className="space-y-1 pl-4 border-l border-white/[0.08]">
              <li><span className="text-white/40">Denominación:</span> Nexum Tax Lab</li>
              <li><span className="text-white/40">Profesional responsable:</span> Daniel Figueroa Zapata</li>
              <li><span className="text-white/40">Actividad:</span> Asesoría fiscal y tributaria internacional</li>
              <li><span className="text-white/40">Correo electrónico:</span> info@nexumtaxlab.com</li>
              <li><span className="text-white/40">Sitio web:</span> https://nexumtaxlab.com</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Objeto y ámbito de aplicación</h2>
            <p>El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong className="text-white/80">nexumtaxlab.com</strong> (en adelante, el "Sitio Web"). El acceso al Sitio Web implica la aceptación plena y sin reservas de las presentes condiciones.</p>
            <p>Nexum Tax Lab se reserva el derecho a modificar en cualquier momento las condiciones aquí determinadas, siendo debidamente publicadas tal y como aparecen en el presente lugar.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos del Sitio Web —incluyendo, sin carácter limitativo, textos, artículos de análisis fiscal, gráficos, logotipos, iconos, imágenes, diseño y arquitectura de la web— son propiedad de Nexum Tax Lab o de sus legítimos titulares, y están protegidos por la normativa española e internacional sobre propiedad intelectual e industrial.</p>
            <p>Queda expresamente prohibida la reproducción, distribución, transformación o comunicación pública, total o parcial, de los contenidos del Sitio Web con fines comerciales sin autorización previa y por escrito de Nexum Tax Lab.</p>
            <p>Los análisis e insights publicados en este sitio constituyen obras de creación intelectual protegidas. Su reproducción parcial con fines informativos o académicos requiere citar expresamente la fuente.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Naturaleza informativa del contenido</h2>
            <p>Los contenidos publicados en este Sitio Web, incluidos los análisis e insights fiscales, tienen carácter meramente <strong className="text-white/80">informativo y divulgativo</strong>. No constituyen asesoramiento jurídico, fiscal o financiero personalizado, ni pueden sustituir a una consulta profesional individualizada.</p>
            <p>Nexum Tax Lab no asume responsabilidad alguna por las decisiones adoptadas por el usuario basándose exclusivamente en los contenidos publicados en el Sitio Web. Cada situación fiscal debe ser analizada de forma particular atendiendo a las circunstancias concretas del contribuyente y a la normativa vigente en cada momento.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Exclusión de responsabilidad</h2>
            <p>Nexum Tax Lab no se responsabiliza de:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>La continuidad y disponibilidad del Sitio Web, sin perjuicio de realizar sus mejores esfuerzos al respecto</li>
              <li>La ausencia de errores en los contenidos, ni de que estén permanentemente actualizados</li>
              <li>La existencia de virus u otros elementos lesivos que pudieran causar daños en sistemas informáticos</li>
              <li>Los daños derivados del uso de los contenidos publicados en el Sitio Web como base para la toma de decisiones</li>
              <li>Los contenidos de sitios web de terceros enlazados desde este Sitio Web</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Enlaces a terceros</h2>
            <p>El Sitio Web puede contener enlaces a sitios web de terceros. Nexum Tax Lab no controla ni es responsable del contenido, políticas de privacidad o prácticas de dichos sitios. La inclusión de un enlace no implica recomendación ni aprobación del sitio enlazado.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">7. Legislación y jurisdicción aplicable</h2>
            <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso de este Sitio Web, las partes se someten a la jurisdicción de los Juzgados y Tribunales españoles competentes, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">8. Normativa aplicable</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE)</li>
              <li>Reglamento (UE) 2016/679 — Reglamento General de Protección de Datos (RGPD)</li>
              <li>Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD)</li>
              <li>Real Decreto Legislativo 1/1996, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual</li>
            </ul>
          </section>

        </div>

        <div className="mt-16 rounded-2xl border border-[#0CBBD4]/20 bg-[#0CBBD4]/5 p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-white mb-2">¿Tiene alguna consulta legal?</h2>
          <p className="text-white/50 text-sm mb-6">Puede contactarnos en info@nexumtaxlab.com para cualquier cuestión relacionada con el uso de este sitio.</p>
          <Link href="/#contacto" className="btn-shimmer inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-black">
            Contactar
          </Link>
        </div>
      </article>
    </div>
  );
}
