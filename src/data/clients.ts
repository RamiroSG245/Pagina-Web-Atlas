export interface Client {
  name: string
  logo: string
  /** Ancho en px. Si no se especifica, usa el default del componente (140px). */
  width?: number
}

export const clients: Client[] = [
  { name: 'YPF', logo: '/images/clients/ypf.jpg', width: 150 },
  { name: 'PECOM', logo: '/images/clients/pecom.png', width: 160 },
  { name: 'AESA', logo: '/images/clients/aesa.jpg', width: 100 },
  { name: 'CGC', logo: '/images/clients/cgc.png', width: 70 },
  { name: 'CAPSA-Capex', logo: '/images/clients/capex.png', width: 170 },
  { name: 'Geo Patagonia', logo: '/images/clients/geopatagonia.png', width: 160 },
  { name: 'CALFRAC', logo: '/images/clients/calfrac.png', width: 60 },
  { name: 'MARBAR', logo: '/images/clients/marbar.png', width: 170 },
  { name: 'Tecpetrol', logo: '/images/clients/tecpetrol.png', width: 100 },
  { name: 'DIPAR', logo: '/images/clients/dipar.png', width: 150 },
  { name: 'Racklatina', logo: '/images/clients/racklatina.png', width: 200 },
  { name: 'Rockwell Automation', logo: '/images/clients/rockwell.png', width: 180 },
  { name: 'SISCON', logo: '/images/clients/siscon.png', width: 160 },
  { name: 'ChampionX', logo: '/images/clients/championx.png', width: 220 },
  { name: 'Halliburton', logo: '/images/clients/halliburton.png', width: 120 },
  { name: 'Weatherford', logo: '/images/clients/weatherford.png', width: 200 },
  { name: 'NOV Tuboscope', logo: '/images/clients/tuboscope.png' },
  { name: 'Tomrel', logo: '/images/clients/tomrel.png', width: 200 },
  { name: 'Polyar', logo: '/images/clients/polyar.png', width: 200 },
  { name: 'Norpatagonica', logo: '/images/clients/norpatagonica.png', width: 85 },
  { name: 'VERMAZ', logo: '/images/clients/vermaz.png', width: 120 },
  { name: 'Minera Santa Cruz', logo: '/images/clients/minera.png', width: 180 },
  { name: 'Palmero', logo: '/images/clients/palmero.png', width: 200 },
  { name: 'HF Comunicaciones', logo: '/images/clients/hf-comunicaciones.png', width: 290 },
  { name: 'MAG Well Services', logo: '/images/clients/mag.png', width: 120 },
  { name: 'Perforaciones Iglesianas', logo: '/images/clients/perforaciones-iglesianas.png', width: 120 },
]
