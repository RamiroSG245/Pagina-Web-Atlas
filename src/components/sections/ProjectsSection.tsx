import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { usePrecisionGrid } from '../../hooks/usePrecisionGrid'
import { fadeUp, fadeIn, staggerContainer } from '../../lib/animations'

export default function ProjectsSection() {
  const canvasRef = usePrecisionGrid()

  return (
    <section
      id="proyectos"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: '#090f1c' }}
    >
      {/* Precision grid background */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-20 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4"
          >
            <span className="w-8 h-[1px] bg-primary" />
            Casos de Éxito
            <span className="w-8 h-[1px] bg-primary" />
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tighter"
          >
            Proyectos Destacados
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="group relative bg-surface-container-low overflow-hidden rounded-lg border border-outline-variant/10"
            >
              <div className="aspect-[4/3.2] overflow-hidden">
                <div
                  role="img"
                  aria-label={project.alt}
                  className="w-full h-full transition-[background-size] duration-700 opacity-60 group-hover:[background-size:115%]"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-secondary font-bold text-[10px] tracking-widest uppercase mb-2 block">
                  {project.client}
                </span>
                <h4 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="h-0 group-hover:h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <button className="text-sm font-bold text-primary flex items-center gap-2">
                    Ver detalles{' '}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
