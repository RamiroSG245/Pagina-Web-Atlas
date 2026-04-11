import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
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
    href: 'https://www.linkedin.com/company/atlas-tecnologias',
  },
  {
    icon: Globe,
    label: 'Sitio web',
    href: 'https://atlas-tecnologias.com',
  },
]

const empresaLinks = [{ text: 'Nosotros', href: '#nosotros' }]

const contactInfo = [
  { icon: Mail, text: 'info@atlas-tecnologias.com', isAddress: false },
  { icon: Phone, text: '+54 297 000-0000', isAddress: false },
  { icon: MapPin, text: 'Comodoro Rivadavia, Chubut, Argentina', isAddress: true },
]

export default function Footer() {
  return (
    <footer className="bg-surface-container-low mt-16 w-full place-self-end rounded-t-xl border-t border-outline-variant/10">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex justify-center gap-3 sm:justify-start">
              <img
                src={company.logo}
                alt="ATLAS Tecnologías"
                className="h-12 w-auto"
              />
            </div>

            <p className="text-on-surface-variant mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left text-sm">
              {company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">

            {/* Empresa */}
            <div className="text-center sm:text-left">
              <p className="text-on-surface text-lg font-medium">Empresa</p>
              <ul className="mt-8 space-y-4 text-sm">
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
            <div className="text-center sm:text-left">
              <p className="text-on-surface text-lg font-medium">Servicios</p>
              <ul className="mt-8 space-y-4 text-sm">
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
            <div className="text-center sm:text-left">
              <p className="text-on-surface text-lg font-medium">Proyectos</p>
              <ul className="mt-8 space-y-4 text-sm">
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
        <div className="mt-12 border-t border-outline-variant/10 pt-8">
          <ul className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8 text-sm">
            {contactInfo.map(({ icon: Icon, text, isAddress }) => (
              <li key={text}>
                <a
                  href="#contacto"
                  className="flex items-center justify-center gap-1.5"
                >
                  <Icon className="text-primary size-4 shrink-0" />
                  {isAddress ? (
                    <address className="text-on-surface-variant not-italic transition-colors hover:text-primary">
                      {text}
                    </address>
                  ) : (
                    <span className="text-on-surface-variant transition-colors hover:text-primary">
                      {text}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-outline-variant/5 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-on-surface-variant/50 text-sm">
              <span className="block sm:inline">Todos los derechos reservados.</span>
            </p>
            <p className="text-on-surface-variant/50 mt-4 text-sm sm:order-first sm:mt-0">
              &copy; 2026 {company.name}
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
