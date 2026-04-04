import SectionLabel from '../ui/SectionLabel'

const contactInfo = [
  { icon: 'phone_in_talk', text: '+54 9 2974 61-8990' },
  { icon: 'alternate_email', text: 'jorge.segovia@atlas-tecnologias.com' },
  { icon: 'location_on', text: 'Comodoro Rivadavia, Patagonia, Argentina' },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Info */}
          <div className="lg:col-span-2">
            <SectionLabel>INICIEMOS TU PROYECTO</SectionLabel>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tighter mb-8">
              Comenzá tu Proyecto
            </h2>
            <p className="text-on-surface-variant mb-12 leading-relaxed">
              Nuestro equipo está listo para asesorarte en la modernización de
              tus procesos industriales. Contáctanos hoy para una evaluación
              técnica.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.icon} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                  <span className="text-on-surface font-medium text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-sm border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form className="glass-panel p-8 md:p-12 border border-outline-variant/10 rounded-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all px-4 py-3 text-on-surface rounded-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Email Corporativo
                  </label>
                  <input
                    type="email"
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all px-4 py-3 text-on-surface rounded-sm outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all px-4 py-3 text-on-surface rounded-sm outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Mensaje / Requerimiento
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all px-4 py-3 text-on-surface rounded-sm outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary-container text-white font-black uppercase tracking-widest hover:brightness-110 transition-all rounded-sm shadow-[0_0_20px_rgba(255,170,1,0.2)]"
              >
                Comenzar Proyecto
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
