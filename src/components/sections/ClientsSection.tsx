import { motion } from 'framer-motion'
import { clients } from '../../data/clients'
import { stats } from '../../data/stats'
import { useStatCounter } from '../../hooks/useStatCounter'
import { fadeUp, staggerContainer } from '../../lib/animations'

function StatCard({ value, label, target }: { value: number; label: string; target: number }) {
  const { value: count, ref } = useStatCounter(target)
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="p-6 bg-surface-container border-t-2 border-primary"
    >
      <div className="text-4xl font-headline font-bold text-on-surface mb-2">
        +{count}
      </div>
      <div className="text-on-surface-variant text-sm uppercase tracking-widest font-bold">
        {label}
      </div>
    </motion.div>
  )
}

export default function ClientsSection() {
  const marqueeItems = [...clients, ...clients]

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-8 mb-12 text-center"
      >
        <h2 className="font-headline text-2xl font-bold text-on-surface/60 uppercase tracking-widest">
          Empresas que Confían en Nosotros
        </h2>
      </motion.div>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content animate-scroll">
          {marqueeItems.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer text-3xl font-black font-headline text-on-surface italic"
            >
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto px-8 mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            target={stat.value}
          />
        ))}
      </motion.div>
    </section>
  )
}
