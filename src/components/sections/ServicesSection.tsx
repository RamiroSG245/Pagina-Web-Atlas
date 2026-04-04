import { services } from '../../data/services'
import SectionLabel from '../ui/SectionLabel'

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <SectionLabel>nuestros</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tighter">
              Servicios Especializados
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md border-l border-outline-variant/30 pl-6 py-2">
            Ingeniería de alta precisión diseñada para los entornos más
            exigentes de la industria energética y minera.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-surface-container border-l-4 border-transparent hover:border-primary hover:bg-surface-container-high transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container/10 text-primary mb-8 group-hover:scale-110 transition-transform">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
