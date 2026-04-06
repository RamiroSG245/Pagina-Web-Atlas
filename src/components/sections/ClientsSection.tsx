import { useRef } from 'react'
import { motion } from 'framer-motion'
import { clients } from '../../data/clients'
import { stats } from '../../data/stats'
import { useStatCounter } from '../../hooks/useStatCounter'
import { fadeUp, staggerContainer } from '../../lib/animations'

function StatCard({ label, target }: { label: string; target: number }) {
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

function ClientMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const items = [...clients, ...clients]

  function handleClick() {
    if (!trackRef.current) return
    const current = trackRef.current.style.animationPlayState
    trackRef.current.style.animationPlayState = current === 'paused' ? 'running' : 'paused'
  }

  return (
    <div className="overflow-hidden cursor-pointer" onClick={handleClick}>
      <div ref={trackRef} className="marquee-track flex gap-16 items-center py-4">
        {items.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={client.logo}
              alt={client.name}
              style={{ width: `${client.width ?? 140}px`, height: 'auto' }}
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientsSection() {
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

      <ClientMarquee />

      {/* Stats */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto px-8 mt-24 grid grid-cols-2 md:grid-cols-5 gap-8"
      >
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            target={stat.value}
          />
        ))}
      </motion.div>
    </section>
  )
}
