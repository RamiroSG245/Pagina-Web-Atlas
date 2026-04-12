import { Mail, MapPin, Phone } from 'lucide-react'
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { services } from '../../data/services'
import { projects } from '../../data/projects'

const company = {
  name: 'ATLAS Tecnologías',
  description:
    'Ingeniería de precisión para un futuro industrial dinámico. Automatización, control e instrumentación industrial desde Comodoro Rivadavia.',
  logo: '/images/logo/AtlasNegroTransparente.png',
}

const socialLinks = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jorge-s-58a6a156/',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/atlastecnologias/?hl=es',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=5492974618990&text&type=phone_number&app_absent=0',
  },
]

const empresaLinks = [{ text: 'Nosotros', href: '#nosotros' }]

const contactInfo = [
  { icon: Mail, text: 'jorge.segovia@atlas-tecnologias.com', isAddress: false },
  { icon: MapPin, text: 'Comodoro Rivadavia, Patagonia, Argentina', isAddress: true },
]

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 w-full overflow-hidden pb-8">

      {/* Glow blobs */}
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Glass container */}
      <div className="glass-panel relative mx-auto max-w-screen-xl rounded-t-2xl border border-outline-variant/10 px-6 pt-16 pb-10 sm:px-8 lg:px-12">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <a href="#" className="flex items-center gap-3">
              <img
                src={company.logo}
                alt="ATLAS Tecnologías"
                className="h-40 w-auto"
              />
            </a>

            <p className="text-on-surface-variant mt-6 max-w-xs text-center text-sm leading-relaxed sm:text-left">
              {company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-3 sm:justify-start">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant/20 bg-surface-container text-primary transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:bg-surface-container-high"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2 text-center sm:text-left">

            {/* Empresa */}
            <div>
              <div className="mb-4 text-xs font-semibold tracking-widest text-primary uppercase">
                Empresa
              </div>
              <ul className="space-y-3 text-sm">
                {empresaLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <div className="mb-4 text-xs font-semibold tracking-widest text-primary uppercase">
                Servicios
              </div>
              <ul className="space-y-3 text-sm">
                {services.map(({ title }) => (
                  <li key={title}>
                    <a
                      href="#servicios"
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proyectos */}
            <div>
              <div className="mb-4 text-xs font-semibold tracking-widest text-primary uppercase">
                Proyectos
              </div>
              <ul className="space-y-3 text-sm">
                {projects.map(({ title }) => (
                  <li key={title}>
                    <a
                      href="#proyectos"
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Contact row */}
        <div className="mt-10 border-t border-outline-variant/10 pt-8">
          <ul className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8 text-sm">
            {contactInfo.map(({ icon: Icon, text, isAddress }) => (
              <li key={text}>
                <a
                  href="#contacto"
                  className="flex items-center gap-1.5"
                >
                  <Icon className="text-primary size-4 shrink-0" />
                  {isAddress ? (
                    <address className="text-on-surface-variant not-italic hover:text-primary transition-colors">
                      {text}
                    </address>
                  ) : (
                    <span className="text-on-surface-variant hover:text-primary transition-colors">
                      {text}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-6 text-center">
        <p className="text-on-surface-variant/40 text-xs">
          &copy; 2026 {company.name}. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  )
}
