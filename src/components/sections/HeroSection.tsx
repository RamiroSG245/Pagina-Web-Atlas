import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useParticleCanvas } from '../../hooks/useParticleCanvas'
import { fadeUp, slideFromRight, heroStagger } from '../../lib/animations'

function scrollToSection(href: string) {
  const el = document.querySelector(href)
  if (!el) return
  const isMobile = window.innerWidth < 768
  const offsets: Record<string, number> = {
    '#contacto': isMobile ? 70 : 80,
    '#proyectos': isMobile ? 80 : -40,
  }
  const offset = offsets[href] ?? 80
  window.scrollTo({ top: (el as HTMLElement).offsetTop - offset, behavior: 'smooth' })
}

export default function HeroSection() {
  const canvasRef = useParticleCanvas()
  const { scrollY } = useScroll()

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const parallaxY = useTransform(scrollY, [0, 600], [0, isMobile ? 0 : -80])

  return (
    <section
      id="inicio"
      className="relative min-h-screen lg:min-h-[1024px] flex items-center pt-20 overflow-hidden bg-surface-container-lowest"
    >
      {/* Particle canvas — parallax desktop only, static on mobile */}
      <motion.div className="absolute inset-0 z-0" style={isMobile ? undefined : { y: parallaxY }}>
        <canvas ref={canvasRef} aria-hidden="true" className="absolute top-0 left-0 w-full h-full pointer-events-none" />
        <div className="absolute inset-0 bg-surface-container-lowest/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,170,1,0.1)_0%,_transparent_60%)]" />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left content — staggered entry */}
        <motion.div
          className="lg:col-span-7"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-secondary-container" />
            <span className="text-secondary-container text-xs font-black tracking-[0.3em] uppercase">
              TELEMETRÍA • CONTROL • AUTOMATIZACIÓN
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-headline text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-white"
          >
            Ingeniería y <br />
            <span className="gradient-text" style={{ fontFamily: '"michroma",sans-serif', WebkitTextStroke: '0px #ffaa01', letterSpacing: '-0.001em', lineHeight: '1em', fontSize: '0.7em',fontWeight: 600 }}>Automatización <br />
            </span>que Transforma
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-on-surface-variant text-base sm:text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light"
          >
            Soluciones integrales en{' '}
            <span className="text-on-surface font-medium underline decoration-primary/30">
              SCADA
            </span>
            , programación PLC y servicios de campo para la industria energética
            en Comodoro Rivadavia.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 items-start">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contacto') }}
              className="inline-flex items-center justify-center font-black uppercase tracking-widest rounded-sm transition-all px-6 py-3 sm:px-10 sm:py-5 text-sm sm:text-base bg-primary-container text-white hover:shadow-[0_0_30px_rgba(255,170,1,0.4)]"
            >
              Comenzar Proyecto
            </a>
            <a
              href="#proyectos"
              onClick={(e) => { e.preventDefault(); scrollToSection('#proyectos') }}
              className="font-black uppercase tracking-widest rounded-sm transition-all px-6 py-3 sm:px-10 sm:py-5 text-sm sm:text-base border border-outline-variant text-on-surface hover:bg-white/5 flex items-center gap-3"
            >
              Portafolio{' '}
              <span className="material-symbols-outlined text-sm sm:text-base leading-none">
                arrow_outward
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right panel — slide in from right */}
        <motion.div
          className="lg:col-span-5 relative hidden lg:block"
          variants={slideFromRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative z-10 p-1 bg-gradient-to-br from-outline-variant/20 to-transparent rounded-xl">
            <div className="aspect-square glass-panel rounded-lg border border-white/5 overflow-hidden shadow-2xl relative">
              <img
                src="/images/hero/panel-control.jpg"
                alt="Tablero de control fabricado por ATLAS Tecnologías"
                fetchPriority="high"
                width="600"
                height="600"
                className="w-full h-full object-cover mix-blend-luminosity opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,170,1,0.15)_0%,_transparent_50%)]" />

              {/* Load monitoring badge */}
              <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                <div className="w-24 h-1 bg-primary-container/30 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-primary-container" />
                </div>
                <span className="text-[10px] font-mono text-primary/60 uppercase">
                  Monitoreo de Carga
                </span>
              </div>

              {/* Center overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full border border-primary/20 rounded-lg flex items-center justify-center relative group">
                  <div className="p-8 glass-panel border border-primary/40 rounded-lg transition-all group-hover:scale-105 group-hover:border-primary/80 group-hover:shadow-[0_0_18px_rgba(255,170,1,0.55)]">
                    <span className="material-symbols-outlined text-7xl text-primary mb-4 block">
                      developer_board
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface">
                      Núcleo de Control Lógico
                    </h3>
                    <p className="text-on-surface-variant text-sm mt-2 font-mono">
                      STATUS: PROGRAMA EN EJECUCIÓN
                    </p>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
