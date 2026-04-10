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
                src="/images/about/DuoHermano.jpg"
                alt="Técnicos de ATLAS Tecnologías trabajando en campo"
                loading="lazy"
                width="400"
                height="256"
                className="w-full h-72 object-cover rounded-lg border border-outline-variant/20"
              />
              <div className="bg-surface-container-high/70 p-3 rounded-lg border border-outline-variant/20 flex flex-col gap-3">
                <span className="text-[13px] font-mono font-bold tracking-[0.2em] text-center uppercase" style={{ color: '#fca903' }}>Tecnologías</span>
                <div className="grid grid-cols-2 gap-2">
                  {([
                    {
                      name: 'Rockwell Automation',
                      color: '#CD163F',
                      viewBox: '0 0 24 24',
                      svgClass: 'w-7 h-7',
                      path: 'm23.1252 6.157-4.6678-4.6678a.7667.7667 0 0 0-.9801-.087l-8.983 6.0494c1.7005.1068 2.7313.7962 2.7313 2.3676 0 1.372-.74 2.2257-1.9913 2.3746v.0239c.5814.1067.9676.3763 1.254.74.0997.1264.1685.2752.2079.434l.7091 2.1498 3.0528-7.6475a.7082.7082 0 0 1 .6572-.4452h2.6821l3.5668 8.9325h-2.2075c-.448 0-.8664-.2837-1.056-.7078-.113-.3264-.229-.6527-.344-.9787h-3.2396l-.629 1.6865H9.0475c-.2584 0-.4789-.191-.5238-.4522l-.8046-2.3409c-.1124-.4002-.5098-.4634-.9016-.4634h-.7835v3.2565H3.2789v-5.4148l-1.6486 1.1093a.5568.5568 0 0 0-.2387.4564v3.4474c0 .222.132.4213.3342.5098l15.5408 6.5045a.7678.7678 0 0 0 .8468-.1601l5.0075-4.9865A2.983 2.983 0 0 0 24 15.7325v-7.465a2.9953 2.9953 0 0 0-.8748-2.1106ZM8.3749 10.2797c0-.806-.5504-.9226-1.1346-.9226H6.072v1.9h1.1262c.5954 0 1.1767-.0773 1.1767-.9774zm6.8682 2.4223h1.8143l-.8889-2.5234ZM6.8303 7.4348 16.431.3223c.1376-.1025.066-.3202-.1053-.3202H8.455a3.4405 3.4405 0 0 0-2.4336 1.0083L1.0083 6.022A3.4405 3.4405 0 0 0 0 8.4557v7.0886c0 .9128.3623 1.7876 1.0083 2.4336l5.0131 5.0117A3.4405 3.4405 0 0 0 8.455 23.998h6.8176c.1896 0 .2471-.257.0758-.3384l-13.5496-6.388a1.6147 1.6147 0 0 1-.9268-1.4604v-3.3997c0-.3552.1685-.6894.4536-.9l1.952-1.4465V7.4348Z',
                    },
                    {
                      name: 'Siemens',
                      color: '#009999',
                      viewBox: '0 9.5 24 5',
                      svgClass: 'w-full h-4',
                      path: 'M1.478 10.016c.24 0 .59.046 1.046.14v.726a2.465 2.465 0 0 0-.946-.213c-.41 0-.615.118-.615.354 0 .088.041.16.124.216.069.045.258.14.568.286.446.208.743.388.89.541.176.182.264.417.264.705 0 .415-.172.73-.516.949-.279.176-.64.264-1.085.264-.375 0-.753-.046-1.133-.139v-.755c.41.135.774.203 1.09.203.437 0 .655-.121.655-.362a.302.302 0 0 0-.095-.227c-.065-.065-.232-.155-.5-.27-.481-.208-.795-.384-.94-.53a.999.999 0 0 1-.284-.73c0-.377.137-.666.413-.864.272-.196.626-.294 1.064-.294zm21.19 0c.246 0 .565.04.956.123l.09.016v.727a2.471 2.471 0 0 0-.948-.213c-.409 0-.612.118-.612.354 0 .088.04.16.123.216.066.043.256.139.57.286.443.208.74.388.889.541.176.182.264.417.264.705 0 .415-.172.73-.514.949-.28.176-.643.264-1.087.264-.376 0-.754-.046-1.134-.139v-.755c.407.135.77.203 1.09.203.437 0 .655-.121.655-.362 0-.09-.03-.166-.092-.227-.066-.065-.233-.155-.503-.27-.48-.206-.793-.382-.94-.53a.997.997 0 0 1-.284-.732c0-.376.137-.664.413-.862.272-.196.627-.294 1.064-.294zm-12.674.066l.92 2.444.942-2.444h1.257v3.825h-.968v-2.708l-1.072 2.747h-.632l-1.052-2.747v2.708H8.67v-3.825zm-5.587 0v3.825H3.386v-3.825zm3.554 0v.692H6.327v.864H7.75v.63H6.327v.908h1.677v.73h-2.66v-3.824zm8.707 0v.692h-1.634v.864h1.422v.63h-1.422v.908h1.677v.73H14.05v-3.824zm1.898 0l1.255 2.56v-2.56h.719v3.825h-1.15l-1.288-2.595v2.595h-.72v-3.825z',
                    },
                    {
                      name: 'Schneider Electric',
                      color: '#3DCD58',
                      viewBox: '0 0 24 24',
                      svgClass: 'w-7 h-7',
                      path: 'M16.73.313c-3.56-.049-7.797 1.68-11.288 5.02-.87.83-1.607 1.725-2.28 2.642h3.042L5.497 9.99H1.864c-.346.636-.672 1.266-.922 1.906h4.307l-.687 2.016H.327c-.724 3.079-.262 5.953 1.559 7.777 3.54 3.538 11.01 2.292 16.591-3.048.977-.93 1.783-1.931 2.511-2.96h-3.906l.596-2.013h4.568c.334-.64.643-1.274.883-1.914h-4.992l.554-2.01h5.051c.623-2.917.132-5.62-1.638-7.39C20.76 1.01 18.867.34 16.73.312Zm-1.044 4.714h4.968l-.634 2.938h-3.002c-.323 0-.46.054-.592.201-.05.058-.07.115-.09.23l-1.639 6.22c-.385 2.179-3.065 4.359-6.555 4.359H3.288l.842-3.198h3.119a.984.984 0 0 0 .775-.347c.076-.09.177-.232.19-.377L9.509 9.62c.381-2.182 2.686-4.592 6.177-4.592Z',
                    },
                  ] as { name: string; color: string; viewBox: string; svgClass: string; path: string }[]).map(({ name, color, path, viewBox, svgClass }) => (
                    <div key={name} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-surface-container/40">
                      <svg role="img" viewBox={viewBox} className={svgClass} fill={color} aria-label={name}>
                        <path d={path} />
                      </svg>
                      <span className="text-[10px] text-on-surface-variant font-mono leading-tight text-center">{name}</span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-surface-container/40">
                    <svg role="img" viewBox="0 0 24 24" className="w-7 h-7" fill="#EB6A08" aria-label="Phoenix Contact">
                      <path d="m9.012 15.241-.188-.036c-1.34-.248-2.186-1.06-2.588-2.334-.25-.794.204-1.38 1.038-1.416.682-.032 1.15.36 1.562.816.532.588 1.02 1.216 1.542 1.814.754.86 1.64 1.412 2.854 1.24a5.404 5.404 0 0 0 2.86-1.308c.124-.108.26-.2.392-.302l-.084-.098a6.034 6.034 0 0 1-2.12.252c-1.092-.054-2.132-.282-3.064-.882-.848-.548-1.476-1.28-1.774-2.26-.24-.79.252-1.344 1.072-1.23.313.049.606.187.842.398.2.168.39.346.594.51.958.77 2.294.812 3.508-.022-1.996-.01-3.354-1.108-4.548-2.5-.466-.544-.922-1.1-1.4-1.636-.92-1.038-1.944-1.952-3.346-2.264-1.79-.398-3.518-.136-5.176.622A4.214 4.214 0 0 0 0 5.217h.352c.836-.022 1.464.35 1.916 1.034.328.498.482 1.06.6 1.64.176.86.086 1.734.188 2.598.26 2.22 1.394 3.768 3.506 4.56.774.292 1.568.39 2.45.19v.002zM3.674 5.113c-.334.084-.6-.05-.874-.328.47-.118.886-.164 1.332-.18a.562.562 0 0 1-.458.508zm10.938 12.96c-.03-.212-.212-.306-.356-.42-.634-.492-1.378-.668-2.164-.682a4.08 4.08 0 0 1-1.378-.208c-.204-.076-.43-.174-.426-.436.006-.266.238-.34.448-.404.174-.052.352-.084.548-.13-.5-.32-.988-.364-1.636-.102-1.024.41-2.032.36-3.052-.006-.574-.208-1.086-.534-1.618-.824l-.026.02c.44.722 1.038 1.304 1.71 1.8 1.296.96 2.712 1.53 4.37 1.276a22.8 22.8 0 0 1 1.614-.19c.676-.054 1.32.136 1.966.308v-.002zm-3.124-10.37c-.036-.026-.07-.09-.144-.024a5.258 5.258 0 0 0 2.284 1.776c1.488.604 3 .708 4.544.174 1.2-.414 2.06-.01 2.508 1.156.066-1.352-.73-2.338-1.996-2.53-.712-.11-1.37.128-2.038.32-1.856.54-3.584.274-5.16-.872h.002zm9.256 5.272.726.064c-.546-.48-1.212-.52-1.888-.48-1.026.058-1.766.65-2.44 1.356-.594.624-1.13 1.324-2.016 1.574l.02.04c.12.002.24.008.36.002 1.288-.058 2.5-.33 3.464-1.264.306-.294.576-.62.87-.926.226-.258.562-.394.904-.366zm-2.992-1.596c-.96.084-1.794.48-2.58 1.006-.602.404-1.248.594-1.972.468-.128-.022-.258-.04-.384-.058l-.006.054c.046.024.092.05.14.07.12.048.24.106.364.136 1.396.33 2.732.16 3.936-.618.76-.49 1.546-.582 2.398-.456.086.014.172.028.258.036.08.008.164.088.272 0a3.454 3.454 0 0 0-2.426-.638zm-3.434-3.26a2.68 2.68 0 0 0 1.534-.364c-.154.014-.22.014-.282.026a2.296 2.296 0 0 1-1.96-.472l-.646-.5c-.856-.652-1.836-.872-2.91-.852.018.052.02.088.038.106 1.168 1.18 2.52 1.996 4.226 2.054v.002zm8.452 6.06c-.724-.72-1.694-.81-2.59-.186.594.028 1.04.216 1.4.592.128.134.262.26.404.378.548.44 1.474.46 2.016.052-.636-.248-.636-.248-1.23-.838v.002zm-7.198 5.486c-.634-1.18-1.7-1.448-2.936-1.368.364.1.708.26 1.02.474.286.2.526.448.764.702.472.504 1.208.812 1.696.708-.224-.14-.546-.514-.546-.514h-.012l.008.006.004.018c.004-.02.006-.016.008-.01h.02l-.028-.012v.01l.01.004s.114.208-.008-.018z" />
                    </svg>
                    <span className="text-[10px] text-on-surface-variant font-mono leading-tight text-center">Phoenix Contact</span>
                  </div>
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
                src="/images/about/ComodoroRivadavia.png"
                alt="Vista de Comodoro Rivadavia, Patagonia"
                loading="lazy"
                width="400"
                height="256"
                className="w-full h-72 object-cover rounded-lg"
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
