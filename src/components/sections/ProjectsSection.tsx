import { projects } from '../../data/projects'
import { usePrecisionGrid } from '../../hooks/usePrecisionGrid'

export default function ProjectsSection() {
  const canvasRef = usePrecisionGrid()

  return (
    <section
      id="proyectos"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: '#090f1c' }}
    >
      {/* Precision grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4">
            <span className="w-8 h-[1px] bg-primary" />
            Casos de Éxito
            <span className="w-8 h-[1px] bg-primary" />
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tighter">
            Proyectos Destacados
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-surface-container-low overflow-hidden rounded-lg border border-outline-variant/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
