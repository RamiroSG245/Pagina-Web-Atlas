import { motion } from 'framer-motion'
import { services } from '../../data/services'
import SectionLabel from '../ui/SectionLabel'
import { fadeUp, staggerContainer } from '../../lib/animations'

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>nuestros</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tighter">
              Servicios Especializados
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-on-surface-variant max-w-md border-l border-outline-variant/30 pl-6 py-2"
          >
            Ingeniería de alta precisión diseñada para los entornos más
            exigentes de la industria energética y minera.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group p-8 bg-surface-container border-l-4 border-transparent hover:border-primary hover:bg-surface-container-high transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container/10 text-primary mb-8 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(255,170,1,0.55)] transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
