import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050a14]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={28} />
              <span className="font-heading text-sm font-bold tracking-widest text-white/80 uppercase">
                Nexum Tax Lab
              </span>
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              Especialización, criterio técnico y enfoque estratégico en entornos fiscales
              internacionales complejos.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {[
                ["Quiénes Somos", "#quienes-somos"],
                ["Servicios", "#servicios"],
                ["Insights", "#insights"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
              Contacto
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:info@nexumtaxlab.com"
                  className="text-sm text-white/40 hover:text-[#0CBBD4] transition-colors"
                >
                  info@nexumtaxlab.com
                </a>
              </li>
              <li>
                <a
                  href="https://es.linkedin.com/in/danielfigueroazapata43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-[#0CBBD4] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.05] pt-8">
          <p className="text-xs text-white/25">
            © 2026 Nexum Tax Lab. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
