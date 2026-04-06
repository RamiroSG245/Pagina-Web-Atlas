export interface Client {
  name: string
  logo: string
  /** Ancho en px. Si no se especifica, usa el default del componente (140px). */
  width?: number
}

export const clients: Client[] = [
  { name: 'YPF', logo: '/images/clients/ypf.jpg', width: 150 },
  { name: 'AESA', logo: '/images/clients/aesa.jpg', width: 100 },
  { name: 'CGC', logo: '/images/clients/cgc.png', width: 70 },
  { name: 'CAPEX', logo: '/images/clients/capex.png', width: 90 },
  { name: 'Tecpetrol', logo: '/images/clients/tecpetrol.png', width: 120 },
  { name: 'CALFRAC', logo: '/images/clients/calfrac.png', width: 70 },
  { name: 'MARBAR', logo: '/images/clients/marbar.png' },
  { name: 'Geo Patagonia', logo: '/images/clients/geopatagonia.png' },
  { name: 'DIPAR', logo: '/images/clients/dipar.png', width: 80 },
  { name: 'Racklatina', logo: '/images/clients/racklatina.png', width: 200 },
  { name: 'Rockwell Automation', logo: '/images/clients/rockwell.png' },
  { name: 'SISCON', logo: '/images/clients/siscon.png' },
  { name: 'ChampionX', logo: '/images/clients/championx.png', width: 200 },
  { name: 'Halliburton', logo: '/images/clients/halliburton.png', width: 120 },
  { name: 'Weatherford', logo: '/images/clients/weatherford.png', width: 150 },
  { name: 'NOV Tuboscope', logo: '/images/clients/tuboscope.png' },
  { name: 'Tomrel', logo: '/images/clients/tomrel.png', width: 200 },
  { name: 'Polyar', logo: '/images/clients/polyar.png', width: 200 },
  { name: 'Norpatagonica', logo: '/images/clients/norpatagonica.png', width: 100 },
  { name: 'Pan American Energy', logo: '/images/clients/panamerican.png' },
  { name: 'Sinopec', logo: '/images/clients/sinopec.png' },
  { name: 'Palmero', logo: '/images/clients/palmero.png', width: 200 },
  { name: 'HF Comunicaciones', logo: '/images/clients/hf-comunicaciones.png', width: 250 },
  { name: 'Perforaciones Iglesianas', logo: '/images/clients/perforaciones-iglesianas.png' },
  { name: 'Buckman', logo: '/images/clients/buckman.png' },
  { name: 'ADG', logo: '/images/clients/adg.png' },
  { name: 'Antu', logo: '/images/clients/antu.png' },
  { name: 'AVG', logo: '/images/clients/avg.png', width: 150 },
  { name: 'Goland', logo: '/images/clients/goland.png', width: 180},
  { name: 'Minera Santa Cruz', logo: '/images/clients/minera.png', width: 100 },
]
