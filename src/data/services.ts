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
      'Análisis de arquitectura e integración de sistemas tecnológicos. Ingeniería y desarrollo de sistemas de control para todas las etapas del proyecto.',
  },
  {
    icon: 'settings_input_component',
    title: 'Ingeniería y Fabricación de Tableros',
    description:
      'Diseño, fabricación, ensayo y puesta en marcha de tableros RTU, eléctricos de BT, variadores de velocidad y control para baterías y plantas de procesos.',
  },
  {
    icon: 'terminal',
    title: 'Programación PLC y SCADA',
    description:
      'Desarrollo de lógica de control avanzada y sistemas de monitoreo remoto con HMI de alta visibilidad. Integradores Rockwell Automation.',
  },
  {
    icon: 'developer_board',
    title: 'Software Industrial',
    description:
      'Adquisición, almacenamiento y monitoreo remoto de datos para optimizar los procesos operativos.',
  },
  {
    icon: 'construction',
    title: 'Servicios de Campo',
    description:
      'Montajes, conexionado, configuración y calibración de instrumentos y tableros. Ensayos SAT, pre comisionado y comisionado de proyectos.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Servicios Especiales',
    description:
      'Software de control para hidratadoras (fracking), telemetría de equipos de perforación y cementadores, SCADA para Coiled Tubing y análisis de vibraciones de zarandas.',
  },
]
