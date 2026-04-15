export interface Client {
  name: string
  logo: string
  /** Ancho en px. Si no se especifica, usa el default del componente (140px). */
  width?: number
}

export const clients: Client[] = [
  { name: 'SISCON', logo: '/images/clients/webp/siscon.webp', width: 160 },
  { name: 'ChampionX', logo: '/images/clients/webp/championx.webp', width: 220 },
  { name: 'Halliburton', logo: '/images/clients/webp/halliburton.webp', width: 120 },
  { name: 'YPF', logo: '/images/clients/webp/ypf.webp', width: 150 },
  { name: 'PECOM', logo: '/images/clients/webp/pecom.webp', width: 160 },
  { name: 'AESA', logo: '/images/clients/webp/aesa.webp', width: 100 },
  { name: 'CGC', logo: '/images/clients/webp/cgc.webp', width: 70 },
  { name: 'CAPSA-Capex', logo: '/images/clients/webp/capex.webp', width: 110 },
  { name: 'Tecpetrol', logo: '/images/clients/webp/tecpetrol.webp', width: 120 },
  { name: 'Geo Patagonia', logo: '/images/clients/webp/geopatagonia.webp', width: 160 },
  { name: 'CALFRAC', logo: '/images/clients/webp/calfrac.webp', width: 60 },
  { name: 'MARBAR', logo: '/images/clients/webp/marbar.webp', width: 170 },
  { name: 'DIPAR', logo: '/images/clients/webp/dipar.webp', width: 150 },
  { name: 'Racklatina', logo: '/images/clients/webp/racklatina.webp', width: 200 },
  { name: 'Rockwell Automation', logo: '/images/clients/webp/rockwell.webp', width: 180 },
  { name: 'Weatherford', logo: '/images/clients/webp/weatherford.webp', width: 200 },
  { name: 'NOV Tuboscope', logo: '/images/clients/webp/tuboscope.webp', width: 130 },
  { name: 'Tomrel', logo: '/images/clients/webp/tomrel.webp', width: 200 },
  { name: 'Polyar', logo: '/images/clients/webp/polyar.webp', width: 200 },
  { name: 'Norpatagonica', logo: '/images/clients/webp/norpatagonica.webp', width: 85 },
  { name: 'VERMAZ', logo: '/images/clients/webp/vermaz.webp', width: 120 },
  { name: 'Minera Santa Cruz', logo: '/images/clients/webp/minera.webp', width: 180 },
  { name: 'Palmero', logo: '/images/clients/webp/palmero.webp', width: 200 },
  { name: 'HF Comunicaciones', logo: '/images/clients/webp/hf-comunicaciones.webp', width: 290 },
  { name: 'MAG Well Services', logo: '/images/clients/webp/mag.webp', width: 120 },
  { name: 'Perforaciones Iglesianas', logo: '/images/clients/webp/perforaciones-iglesianas.webp', width: 120 },
]
