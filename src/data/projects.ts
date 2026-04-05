export interface Project {
  client: string
  title: string
  image: string
  alt: string
  /** CSS background-position override. Default: 'center'. E.g. 'top', 'center 20%' */
  imagePosition?: string
}

export const projects: Project[] = [
  {
    client: 'CALFRAC',
    title: 'Software Unidad Hidratadora',
    image: '/images/projects/calfrac.jpeg',
    alt: 'Sistema de control de unidad hidratadora para CALFRAC',
  },
  {
    client: 'CAPSA',
    title: 'Control de Polímeros',
    image: '/images/projects/capsa.jpeg',
    alt: 'Sistema SCADA de control de polímeros para CAPSA',
  },
  {
    client: 'CGC',
    title: 'Sist. Ctrl. Cañadón Salto',
    image: '/images/projects/cgc.jpeg',
    alt: 'Sistema de control para yacimiento Cañadón Salto de CGC',
  },
  {
    client: 'CAPEX',
    title: 'Planta de Inyección',
    image: '/images/projects/capex.jpeg',
    alt: 'Tablero de control para planta de inyección CAPEX',
    imagePosition: 'center 35%', // 'center 20%' si necesitás más precisión
  },
  {
    client: 'GEO PATAGONIA',
    title: 'Monitoreo de Cementadores para VAN',
    image: '/images/projects/geopatagonia.jpeg',
    alt: 'Sistema de monitoreo de cementadores para VAN de GEO PATAGONIA',
  },
  {
    client: 'YPF',
    title: 'Variador de Bomba',
    image: '/images/projects/ypf.jpeg',
    alt: 'Variador de velocidad para bomba en instalación YPF',
  },
]
