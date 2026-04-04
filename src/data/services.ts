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
      'Planificación técnica exhaustiva y esquemas eléctricos de precisión para infraestructuras industriales críticas.',
  },
  {
    icon: 'settings_input_component',
    title: 'Tableros Eléctricos',
    description:
      'Diseño y fabricación propia de tableros de control y potencia bajo normas internacionales de seguridad.',
  },
  {
    icon: 'terminal',
    title: 'Programación PLC y SCADA',
    description:
      'Desarrollo de lógica de control avanzada y sistemas de monitoreo remoto con HMI de alta visibilidad.',
  },
  {
    icon: 'developer_board',
    title: 'Software Industrial',
    description:
      'Soluciones de software dedicadas para la integración de datos y optimización de procesos operativos.',
  },
  {
    icon: 'construction',
    title: 'Asistencia de Campo',
    description:
      'Soporte técnico especializado "on-site" y mantenimiento preventivo en yacimientos y plantas.',
  },
  {
    icon: 'rocket_launch',
    title: 'Ejecución de Proyectos',
    description:
      'Gestión integral "llave en mano" desde la concepción hasta el comisionado final del sistema.',
  },
]
