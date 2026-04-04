const footerLinks = {
  empresa: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Trayectoria', href: '#' },
    { label: 'Seguridad', href: '#' },
  ],
  servicios: [
    { label: 'Automatización', href: '#servicios' },
    { label: 'PLC & SCADA', href: '#servicios' },
    { label: 'Tableros', href: '#servicios' },
  ],
  legal: [
    { label: 'Privacidad', href: '#' },
    { label: 'Términos', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 font-body text-sm antialiased">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-2xl font-black text-on-surface tracking-tighter font-headline">
            ATLAS
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Precision Engineering for a dynamic industrial future. Based in the
            heart of Patagonia.
          </p>
          <div className="flex gap-4">
            <a
              href="https://atlas-tecnologias.com"
              aria-label="Sitio web de ATLAS Tecnologías"
              className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors"
            >
              language
            </a>
            <a
              href="https://www.linkedin.com/company/atlas-tecnologias"
              aria-label="ATLAS Tecnologías en LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors"
            >
              public
            </a>
          </div>
        </div>

        {/* Empresa */}
        <div>
          <h5 className="text-on-surface font-bold mb-6 uppercase tracking-widest text-xs">
            Empresa
          </h5>
          <ul className="space-y-4">
            {footerLinks.empresa.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h5 className="text-on-surface font-bold mb-6 uppercase tracking-widest text-xs">
            Servicios
          </h5>
          <ul className="space-y-4">
            {footerLinks.servicios.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="text-on-surface font-bold mb-6 uppercase tracking-widest text-xs">
            Legal
          </h5>
          <ul className="space-y-4">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-on-surface-variant/50 font-bold tracking-widest uppercase">
        <div>© 2024 ATLAS Tecnologías. Precision Engineering.</div>
        <div className="flex gap-8">
          <span>Comodoro Rivadavia</span>
          <span>Chubut</span>
          <span>Argentina</span>
        </div>
      </div>
    </footer>
  )
}
