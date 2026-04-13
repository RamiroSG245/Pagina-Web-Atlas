import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { fadeUp, slideFromLeft, slideFromRight, staggerContainer } from '../../lib/animations'

const reasons = [
  {
    number: '01',
    title: 'Experiencia en Oil & Gas',
    description:
      'Décadas de trayectoria resolviendo desafíos técnicos en los sectores más críticos de la industria.',
  },
  {
    number: '02',
    title: 'Tecnología de Vanguardia',
    description:
      'Integradores especializados en dispositivos de primera línea como Rockwell Automation, Siemens, Schneider y marcas reconocidas.',
  },
  {
    number: '03',
    title: 'Integración Completa',
    description:
      'Unificamos hardware y software con un conocimiento real de sus operaciones para desarrollar soluciones tecnológicas a medida.',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-16 lg:py-32 bg-surface micro-grid">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-20 lg:gap-20 items-center">
        {/* Photo grid — slides from left */}
        <motion.div
          className="order-2 lg:order-1"
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/images/about/DuoHermano.jpg"
                alt="Técnicos de ATLAS Tecnologías trabajando en campo"
                loading="lazy"
                width="400"
                height="256"
                className="w-full h-36 md:h-72 object-cover rounded-lg border border-outline-variant/20"
              />
              <div className="bg-surface-container-high/70 p-3 md:p-5 rounded-lg border border-outline-variant/20 flex flex-col gap-2 md:gap-3">
                <span className="text-[13px] font-mono font-bold tracking-[0.2em] uppercase" style={{ color: '#fca903' }}>Nuestro ADN Operativo</span>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Nuestra identidad se forja en el campo. Somos ingenieros con experiencia real en planta y yacimiento, trabajando para optimizar las operaciones críticas de Oil &amp; Gas en la Patagonia.
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-02">
              <div className="bg-surface-container-high p-4 rounded-lg border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  map
                </span>
                <div className="text-on-surface font-bold mt-2">
                  Presencia en toda la Patagonia
                </div>
              </div>
              <img
                src="/images/about/ComodoroRivadavia.png"
                alt="Vista de Comodoro Rivadavia, Patagonia"
                loading="lazy"
                width="400"
                height="256"
                className="w-full h-80 md:h-102 object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Text content — slides from right */}
        <motion.div
          className="order-1 lg:order-2"
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionLabel>nuestra identidad</SectionLabel>
          <h2 className="font-headline text-2xl md:text-5xl font-bold text-on-surface tracking-tighter mb-4 md:mb-8">
            ¿Por qué ATLAS?
          </h2>

          {/* Reasons — stagger */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4 md:space-y-8"
          >
            {reasons.map((reason) => (
              <motion.div key={reason.number} variants={fadeUp} className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold text-sm md:text-base">
                  {reason.number}
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-bold mb-1 md:mb-2">{reason.title}</h4>
                  <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
