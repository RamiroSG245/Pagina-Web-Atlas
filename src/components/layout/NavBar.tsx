const navLinks = [
  { label: 'Inicio', href: '#inicio', active: true },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 h-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
          ATLAS <span className="text-primary">Tecnologías</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="bg-primary-container text-white px-6 py-2 font-bold scale-95 active:scale-90 transition-transform rounded-sm">
          Contactar
        </button>
      </div>
    </nav>
  )
}
