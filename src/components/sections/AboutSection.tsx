import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { fadeUp, slideFromLeft, slideFromRight, staggerContainer } from '../../lib/animations'

const reasons = [
  {
    number: '01',
    title: 'Experiencia en Oil & Gas y Minería',
    description:
      'Décadas de trayectoria resolviendo desafíos técnicos en los sectores más críticos de la economía nacional.',
  },
  {
    number: '02',
    title: 'Tecnología de Vanguardia',
    description:
      'Partners oficiales de Rockwell Automation y expertos certificados en SCADA Ignition y FactoryTalk.',
  },
  {
    number: '03',
    title: 'Equipo Multidisciplinario',
    description:
      'Ingenieros y técnicos especializados listos para operar en campo bajo condiciones extremas.',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-32 bg-surface micro-grid">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_5JANaCqTcjFXZ540RYQ82FYKFv-soItLXZFFqojs8uKEwW_TnuYvwhgogi2AU_N3PD-JUpBnJ6yyMorQduNiYcnsxa4mnR5B23cpFFbE2uHonilKx_0S2BIswCsAKm_wlX0i0fiBph331MRHa_UUxF_zleBgRAW6Dk9UpMsvfZvjCuz1D-CZNnj-0jozxBC650lYySNcAZd91XWPb1IEQce100W3sbp6ptSzfHLdX8MGpe3qYErxGohejvMKkh_409vUBNN4HUiq"
                alt="Industrial robotic arm"
                className="w-full h-64 object-cover rounded-lg border border-outline-variant/20"
              />
              <div className="bg-primary p-4 rounded-lg shadow-[0_0_20px_rgba(255,170,1,0.3)]">
                <span className="material-symbols-outlined text-on-primary text-3xl">
                  hub
                </span>
                <div className="text-on-primary font-bold mt-2">
                  Tecnología Allen-Bradley
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-surface-container-high p-4 rounded-lg border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  map
                </span>
                <div className="text-on-surface font-bold mt-2">
                  Presencia en toda la Patagonia
                </div>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL3tVHM88EqIBN3qPzJiRjx-byHn8ykbMkFpAvhVTPL-jMxrz50bfzepV3IhS0cy9hQ4UZ_qn2_mAJOFcgIcxnfHVoBePE1qk4pgPwok2SXXUZI4WZDW8JTpvUZAT1ZUhM-71H-9lt7EPzGqj50Rw4yxoVq_i1flghPkkr4y9vW4GVkQVoao4KyBckSFg3Iw2JFChnh-t_aW_NirlKapzdBN7cSSzJrobzgA1rkC4N8PoJg72SmonDGLGItKkjyqI4p8fOPqYbiCbe"
                alt="Snowy Andes"
                className="w-full h-64 object-cover rounded-lg border border-outline-variant/20"
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
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tighter mb-8">
            ¿Por qué ATLAS?
          </h2>

          {/* Reasons — stagger */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8"
          >
            {reasons.map((reason) => (
              <motion.div key={reason.number} variants={fadeUp} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold">
                  {reason.number}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">
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
