export interface Service {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'architecture',
    title: 'Ingeniería de Detalle',
    description:
      'Diseño y desarrollo de soluciones de ingeniería en instrumentación, control, tableros eléctricos y comunicaciones industriales, garantizando integración, confiabilidad y cumplimiento de especificaciones.',
  },
  {
    icon: 'settings_input_component',
    title: 'Fabricación de tableros',
    description:
      'Diseño, fabricación, ensayo y puesta en marcha de tableros RTU, tableros eléctricos de baja tensión, variadores de velocidad y sistemas de control, orientados a la automatización completa de instalaciones.',
  },
  {
    icon: 'terminal',
    title: 'Programación de PLC, HMI y SCADA',
    description:
      'Soluciones de programación de autómatas e interfaces que permiten controlar, monitorear y mejorar el desempeño de sus procesos de forma eficiente y segura.',
  },
  {
    icon: 'developer_board',
    title: 'Software Industrial',
    description:
      'Creamos software dedicado, ofreciendo soluciones customizadas para interfaces GUI, protocolos especiales de comunicación, almacenamiento de datos y supervisión remota.',
  },
  {
    icon: 'construction',
    title: 'Servicios de Campo',
    description:
      'Montajes, conexionado, configuración y calibración de instrumentos, ensayos SAT, Pre Comisionado, Comisionado y PEM. Capacitaciones de personal y auditorías en su compañía.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Servicios Especiales',
    description:
      'Software de control para hidratadoras (fracking), dosificación de químicos geo controlado, telemetría de perforadores, cementadores y coiled tubing, análisis de vibración y reparación de zarandas.',
  },
]
