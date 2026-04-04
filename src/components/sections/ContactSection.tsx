import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { fadeUp, slideFromRight, staggerContainer } from '../../lib/animations'

const schema = z.object({
  nombre: z.string().min(2, 'Ingresá tu nombre completo'),
  email: z.string().min(1, 'El email es requerido').email('Email inválido'),
  empresa: z.string().min(2, 'Ingresá el nombre de tu empresa'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof schema>

const contactInfo = [
  { icon: 'phone_in_talk', text: '+54 9 2974 61-8990' },
  { icon: 'alternate_email', text: 'jorge.segovia@atlas-tecnologias.com' },
  { icon: 'location_on', text: 'Comodoro Rivadavia, Patagonia, Argentina' },
]

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 text-xs text-error"
    >
      {message}
    </motion.p>
  )
}

export default function ContactSection() {
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800))
    setSuccess(true)
  }

  return (
    <section id="contacto" className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Info — stagger */}
          <motion.div
            className="lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>INICIEMOS TU PROYECTO</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tighter mb-8">
                Comenzá tu Proyecto
              </h2>
              <p className="text-on-surface-variant mb-12 leading-relaxed">
                Nuestro equipo está listo para asesorarte en la modernización de
                tus procesos industriales. Contáctanos hoy para una evaluación
                técnica.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.icon}
                  variants={fadeUp}
                  className="flex items-center gap-4"
                >
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                  <span className="text-on-surface font-medium text-sm">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-sm border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Form — slides from right */}
          <motion.div
            className="lg:col-span-3"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.34, 1.3, 0.64, 1] }}
                className="glass-panel p-8 md:p-12 border border-green-500/20 rounded-xl flex flex-col items-center justify-center gap-6 min-h-[400px] text-center"
              >
                {/* Animated SVG checkmark */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                  className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center"
                >
                  <svg width="44" height="44" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                    <motion.circle
                      cx="26"
                      cy="26"
                      r="24"
                      stroke="#4ade80"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                    <motion.path
                      d="M15 27l8 8 14-14"
                      stroke="#4ade80"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.45, ease: 'easeOut' }}
                    />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Nos contactaremos a la brevedad para coordinar la evaluación
                    técnica.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="glass-panel p-8 md:p-12 border border-outline-variant/10 rounded-xl space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      Nombre Completo
                    </label>
                    <input
                      {...register('nombre')}
                      id="nombre"
                      type="text"
                      autoComplete="name"
                      className={`w-full bg-surface-container-lowest border ${
                        errors.nombre
                          ? 'border-error'
                          : 'border-outline-variant/30'
                      } focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all px-4 py-3 text-on-surface rounded-sm outline-none`}
                    />
                    <FieldError message={errors.nombre?.message} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      Email Corporativo
                    </label>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={`w-full bg-surface-container-lowest border ${
                        errors.email
                          ? 'border-error'
                          : 'border-outline-variant/30'
                      } focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all px-4 py-3 text-on-surface rounded-sm outline-none`}
                    />
                    <FieldError message={errors.email?.message} />
                  </div>
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Empresa
                  </label>
                  <input
                    {...register('empresa')}
                    id="empresa"
                    type="text"
                    autoComplete="organization"
                    className={`w-full bg-surface-container-lowest border ${
                      errors.empresa
                        ? 'border-error'
                        : 'border-outline-variant/30'
                    } focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all px-4 py-3 text-on-surface rounded-sm outline-none`}
                  />
                  <FieldError message={errors.empresa?.message} />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Mensaje / Requerimiento
                  </label>
                  <textarea
                    {...register('mensaje')}
                    id="mensaje"
                    rows={4}
                    className={`w-full bg-surface-container-lowest border ${
                      errors.mensaje
                        ? 'border-error'
                        : 'border-outline-variant/30'
                    } focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all px-4 py-3 text-on-surface rounded-sm outline-none resize-none`}
                  />
                  <FieldError message={errors.mensaje?.message} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary-container text-white font-black uppercase tracking-widest hover:brightness-110 transition-all rounded-sm shadow-[0_0_20px_rgba(255,170,1,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Comenzar Proyecto'}
                </button>
                <p className="flex items-center justify-center gap-1.5 text-[10px] text-on-surface-variant/60 mt-3">
                  <span className="material-symbols-outlined text-sm leading-none">lock</span>
                  Tus datos están protegidos. Nos pondremos en contacto en menos de 24 horas.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
