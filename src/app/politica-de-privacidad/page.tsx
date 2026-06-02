import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos de Nexum Tax Lab conforme al RGPD y la LOPD-GDD.",
  alternates: { canonical: "https://nexumtaxlab.com/politica-de-privacidad" },
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidad() {
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
          Política de Privacidad
        </h1>
        <p className="text-white/40 text-sm mb-12">Última actualización: junio de 2026</p>

        <div className="space-y-10 text-white/65 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Responsable del tratamiento</h2>
            <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD), le informamos que el responsable del tratamiento de sus datos personales es:</p>
            <ul className="space-y-1 pl-4 border-l border-white/[0.08]">
              <li><span className="text-white/40">Denominación:</span> Nexum Tax Lab</li>
              <li><span className="text-white/40">Actividad:</span> Asesoría fiscal y tributaria internacional</li>
              <li><span className="text-white/40">Correo electrónico:</span> info@nexumtaxlab.com</li>
              <li><span className="text-white/40">Sitio web:</span> https://nexumtaxlab.com</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Datos que recogemos</h2>
            <p>A través del formulario de contacto del sitio web, recogemos los siguientes datos personales que usted nos facilita voluntariamente:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
              <li>Asunto y contenido del mensaje</li>
            </ul>
            <p>No recogemos datos especialmente protegidos ni datos de menores de 14 años. No realizamos perfilado automatizado ni tomamos decisiones automatizadas.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Finalidad y base jurídica del tratamiento</h2>
            <p>Sus datos se tratan con las siguientes finalidades y bases jurídicas:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/[0.08] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-white/[0.04] text-white/60">
                    <th className="text-left p-3 font-medium">Finalidad</th>
                    <th className="text-left p-3 font-medium">Base jurídica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="p-3">Gestionar y responder su consulta</td>
                    <td className="p-3">Consentimiento (art. 6.1.a RGPD)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Prestar los servicios de asesoría contratados</td>
                    <td className="p-3">Ejecución de contrato (art. 6.1.b RGPD)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Cumplimiento de obligaciones legales y fiscales</td>
                    <td className="p-3">Obligación legal (art. 6.1.c RGPD)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Plazo de conservación</h2>
            <p>Los datos facilitados a través del formulario de contacto se conservarán mientras exista una relación comercial o profesional, o hasta que solicite su supresión. Una vez finalizada la relación, se conservarán durante los plazos legalmente exigibles (con carácter general, hasta 5 años en materia fiscal y mercantil) y posteriormente se eliminarán de forma segura.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Destinatarios y transferencias internacionales</h2>
            <p>Sus datos no se ceden a terceros salvo obligación legal. Para el envío del formulario de contacto utilizamos servicios de infraestructura técnica (alojamiento web) cuyos proveedores actúan como encargados del tratamiento bajo las garantías del RGPD.</p>
            <p>No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo, salvo que sea estrictamente necesario y con las garantías adecuadas.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Sus derechos</h2>
            <p>En virtud del RGPD y la LOPD-GDD, puede ejercer los siguientes derechos enviando un correo a <a href="mailto:info@nexumtaxlab.com" className="text-[#0CBBD4] hover:underline">info@nexumtaxlab.com</a> con copia de su documento de identidad:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-white/80">Acceso:</strong> conocer qué datos tratamos sobre usted</li>
              <li><strong className="text-white/80">Rectificación:</strong> corregir datos inexactos o incompletos</li>
              <li><strong className="text-white/80">Supresión:</strong> solicitar la eliminación de sus datos</li>
              <li><strong className="text-white/80">Oposición:</strong> oponerse al tratamiento en determinadas circunstancias</li>
              <li><strong className="text-white/80">Limitación:</strong> solicitar la restricción del tratamiento</li>
              <li><strong className="text-white/80">Portabilidad:</strong> recibir sus datos en formato estructurado</li>
              <li><strong className="text-white/80">Retirar el consentimiento</strong> en cualquier momento, sin efectos retroactivos</li>
            </ul>
            <p>Tiene derecho a presentar una reclamación ante la <strong className="text-white/80">Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#0CBBD4] hover:underline">www.aepd.es</a>.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">7. Cookies</h2>
            <p>Este sitio web no utiliza cookies propias de seguimiento ni de publicidad. Únicamente se pueden generar cookies técnicas estrictamente necesarias para el funcionamiento del sitio. No se instalan cookies de terceros con fines analíticos o publicitarios.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">8. Seguridad</h2>
            <p>Nexum Tax Lab aplica las medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, conforme al artículo 32 del RGPD. El sitio web utiliza protocolo HTTPS con certificado SSL.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">9. Modificaciones</h2>
            <p>Nos reservamos el derecho a actualizar esta política para adaptarla a cambios normativos o en nuestros servicios. Le recomendamos revisarla periódicamente. La fecha de última actualización figura al inicio de este documento.</p>
          </section>

        </div>

        <div className="mt-16 rounded-2xl border border-[#0CBBD4]/20 bg-[#0CBBD4]/5 p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-white mb-2">¿Tiene alguna consulta sobre sus datos?</h2>
          <p className="text-white/50 text-sm mb-6">Contáctenos en info@nexumtaxlab.com y le responderemos en el plazo máximo de un mes.</p>
          <Link href="/#contacto" className="btn-shimmer inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-black">
            Contactar
          </Link>
        </div>
      </article>
    </div>
  );
}
