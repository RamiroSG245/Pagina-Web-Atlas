import { motion, useScroll, useTransform } from 'framer-motion'
import { useParticleCanvas } from '../../hooks/useParticleCanvas'
import Button from '../ui/Button'
import { fadeUp, slideFromRight, heroStagger } from '../../lib/animations'

export default function HeroSection() {
  const canvasRef = useParticleCanvas()
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 600], [0, -80])

  return (
    <section
      id="inicio"
      className="relative min-h-[1024px] flex items-center pt-20 overflow-hidden bg-surface-container-lowest"
    >
      {/* Particle canvas — parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: parallaxY }}>
        <canvas ref={canvasRef} aria-hidden="true" className="absolute top-0 left-0 w-full h-full pointer-events-none" />
        <div className="absolute inset-0 bg-surface-container-lowest/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,170,1,0.1)_0%,_transparent_60%)]" />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left content — staggered entry */}
        <motion.div
          className="lg:col-span-7"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-secondary-container" />
            <span className="text-secondary-container text-xs font-black tracking-[0.3em] uppercase">
              Industrial Forge v2.0
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-headline text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-white"
          >
            Ingeniería y <br />
            <span className="gradient-text italic">Automatización</span> <br />
            que Transforma
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-light"
          >
            Soluciones integrales en{' '}
            <span className="text-on-surface font-medium underline decoration-primary/30">
              SCADA
            </span>
            , programación PLC y servicios de campo para la industria energética
            en la Patagonia.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
            <Button variant="primary">Comenzar Proyecto</Button>
            <Button variant="outline">
              Portafolio{' '}
              <span className="material-symbols-outlined text-xl">
                arrow_outward
              </span>
            </Button>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsnjGOtt4MzTGZNmtZ0-93nwkoH-O3uvBJX6gMWIZYL1y-zxOlImGmcRJfqaeQiEiDuLguYbYt8srMkBQ1tC1uvuXWDhiD-pz96U7d4LCG6Wiz_i7Fm55x7cH0Mwlmn4ACIAW74j4a2G6EZpcDW6z7UhFz1BlmndtGpNzokzLUwdWVoOKtd8xlpiZM5gJ3hO7JdRrc2Fi70fPw7-AFBJf5VrZp0AWDAB6crQ3Z4Limi7DbW4KorA1vP3oEX4NYUXDCOpjm0K03RVSZ"
                alt="Industrial electrical control panel with blue indicators"
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
                  Load Monitoring
                </span>
              </div>

              {/* Center overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full border border-primary/20 rounded-lg flex items-center justify-center relative group">
                  <div className="p-8 glass-panel border border-primary/40 rounded-lg transition-all group-hover:scale-105 group-hover:border-primary/80">
                    <span className="material-symbols-outlined text-7xl text-primary mb-4 block">
                      precision_manufacturing
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface">
                      Núcleo de Precisión
                    </h3>
                    <p className="text-on-surface-variant text-sm mt-2 font-mono">
                      NODE_STATUS: OPTIMAL
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
