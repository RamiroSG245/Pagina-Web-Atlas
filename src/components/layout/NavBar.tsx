import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/animations'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

const sectionOffsets: Record<string, number> = {
  '#inicio': 80,
  '#nosotros': 140,
  '#servicios': -10,
  '#proyectos': -40,
  '#contacto': 80,
}

function scrollToSection(href: string, onClose?: () => void): void {
  const el = document.querySelector(href)
  if (!el) return
  const offset = sectionOffsets[href] ?? 80
  window.scrollTo({ top: (el as HTMLElement).offsetTop - offset, behavior: 'smooth' })
  onClose?.()
}

function handleNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onClose?: () => void,
): void {
  e.preventDefault()
  scrollToSection(href, onClose)
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 30)
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 h-20 border-b transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-surface/90 backdrop-blur-xl border-outline-variant/10'
          : 'bg-transparent backdrop-blur-none border-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="text-xl font-bold tracking-tighter text-on-surface font-headline hover:opacity-80 transition-opacity"
        >
          ATLAS <span className="text-primary">Tecnologías</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('#contacto')}
            className="hidden md:block bg-primary-container text-white px-6 py-2 font-bold scale-95 active:scale-90 transition-transform rounded-sm"
          >
            Contactar
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <motion.span
              className="block w-6 h-0.5 bg-on-surface origin-center"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-on-surface"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-on-surface origin-center"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-outline-variant/10 overflow-hidden md:hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col py-4 px-6 gap-1"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  variants={fadeUp}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, closeMenu)}
                  className="py-3 text-lg font-headline font-bold text-on-surface-variant hover:text-primary border-b border-outline-variant/10 last:border-0 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={fadeUp} className="pt-4 pb-2">
                <button
                  onClick={() => scrollToSection('#contacto', closeMenu)}
                  className="w-full bg-primary-container text-white px-6 py-3 font-bold rounded-sm"
                >
                  Contactar
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
