export type IntelligenceLayer = 'fx' | 'interest' | 'trade' | 'automotive' | 'ports' | 'energy' | 'mobility' | 'risk'

export type IntelligencePoint = {
  id: string
  name: string
  country: string
  coordinates: [number, number]
  layers: IntelligenceLayer[]
  currency: string
  fx: string
  trade: string
  automotive: string
  mobility: string
  indicators: string
  whyYen: string
}

export const intelligenceLayers: Array<{ id: IntelligenceLayer; label: string; short: string }> = [
  { id: 'fx', label: 'FX', short: 'FX' },
  { id: 'interest', label: 'Interest Rates', short: 'RATES' },
  { id: 'trade', label: 'Trade', short: 'TRADE' },
  { id: 'automotive', label: 'Automotive', short: 'AUTO' },
  { id: 'ports', label: 'Ports', short: 'PORTS' },
  { id: 'energy', label: 'Energy', short: 'ENERGY' },
  { id: 'mobility', label: 'Mobility', short: 'MOBILITY' },
  { id: 'risk', label: 'Risk', short: 'RISK' },
]

export const intelligencePoints: IntelligencePoint[] = [
  {
    id: 'tokyo', name: 'Tokyo', country: 'Japan', coordinates: [139.7671, 35.6812],
    layers: ['fx', 'interest', 'trade', 'automotive', 'energy', 'risk'], currency: 'JPY',
    fx: '151.37 JPY per USD · 2024 average', trade: 'Automotive-related exports ¥22.5T · 2024',
    automotive: 'Japan exported 4,217,044 motor vehicles · 2024', mobility: 'National decision and market centre',
    indicators: 'FX average · trade value · export units', whyYen: 'Policy expectations, export receipts and energy-import costs meet in the yen market.',
  },
  {
    id: 'washington', name: 'Washington, D.C.', country: 'United States', coordinates: [-77.0369, 38.9072],
    layers: ['fx', 'interest', 'risk'], currency: 'USD', fx: 'Base currency in USD/JPY', trade: 'Major destination for Japanese exports',
    automotive: 'North America received 1,600,811 vehicles from Japan · 2024', mobility: 'Monetary-policy context',
    indicators: 'Policy expectations · USD conditions', whyYen: 'Changes in expected US rates can alter the relative attraction of dollar and yen assets.',
  },
  {
    id: 'nagoya', name: 'Nagoya Port', country: 'Japan', coordinates: [136.8815, 35.032],
    layers: ['trade', 'automotive', 'ports', 'mobility'], currency: 'JPY', fx: 'Japan FX context', trade: 'Automotive export gateway',
    automotive: 'Production and export geography', mobility: 'Port connection to global markets', indicators: 'Representative port point',
    whyYen: 'Export value, overseas demand and production location affect how exchange rates appear in company accounts.',
  },
  {
    id: 'yokohama', name: 'Yokohama Port', country: 'Japan', coordinates: [139.6475, 35.453],
    layers: ['trade', 'automotive', 'ports', 'energy', 'mobility'], currency: 'JPY', fx: 'Japan FX context', trade: 'Kanto maritime gateway',
    automotive: 'Vehicle and parts logistics context', mobility: 'Port-to-market connection', indicators: 'Representative port point',
    whyYen: 'Ports make the physical side of trade visible: cargo must move even when prices change instantly.',
  },
  {
    id: 'bangkok', name: 'Bangkok', country: 'Thailand', coordinates: [100.5018, 13.7563],
    layers: ['fx', 'trade', 'automotive', 'mobility'], currency: 'THB', fx: '35.29 THB per USD · 2024 average',
    trade: 'ASEAN production and consumption hub', automotive: 'Thailand production-network context', mobility: 'Bangkok–EEC connection',
    indicators: 'JPY/THB derived cross-rate: 4.29 · 2024', whyYen: 'Overseas production means firms face multiple currencies, not only the export rate from Japan.',
  },
  {
    id: 'kasetsart', name: 'Kasetsart University', country: 'Thailand', coordinates: [100.5714, 13.8476],
    layers: ['mobility'], currency: 'THB', fx: 'Personal lived geography', trade: 'Learning point, not a trade facility',
    automotive: 'Connects personal experience to regional industry', mobility: 'Study-abroad life in 2025', indicators: 'Representative campus point',
    whyYen: 'A place becomes more than a country label when economic change is connected to lived experience.',
  },
  {
    id: 'laem-chabang', name: 'Laem Chabang Port', country: 'Thailand', coordinates: [100.883, 13.087],
    layers: ['trade', 'automotive', 'ports', 'mobility'], currency: 'THB', fx: 'Thailand FX context', trade: 'Eastern Economic Corridor gateway',
    automotive: 'Vehicle-production logistics context', mobility: 'ASEAN maritime connection', indicators: 'Representative port point',
    whyYen: 'Local production and cross-border supply chains change where currency exposure appears.',
  },
  {
    id: 'nairobi', name: 'Nairobi', country: 'Kenya', coordinates: [36.8219, -1.2921],
    layers: ['fx', 'trade'], currency: 'KES', fx: '134.82 KES per USD · 2024 average', trade: 'East African market context',
    automotive: 'Vehicle and parts demand context', mobility: 'Connected through Mombasa', indicators: 'GDP/capita $2,132 · inflation 4.5% · 2024',
    whyYen: 'Local currency, income and inflation shape the weight of a dollar-priced product.',
  },
  {
    id: 'mombasa', name: 'Mombasa Port', country: 'Kenya', coordinates: [39.6682, -4.0435],
    layers: ['trade', 'ports', 'mobility'], currency: 'KES', fx: 'Kenya FX context', trade: 'East African gateway context',
    automotive: 'Vehicle and parts logistics lens', mobility: 'Indian Ocean connection', indicators: 'Representative port point',
    whyYen: 'Port access links inland demand to maritime cost, distance and currency conversion.',
  },
  {
    id: 'johannesburg', name: 'Johannesburg', country: 'South Africa', coordinates: [28.0473, -26.2041],
    layers: ['fx', 'trade', 'automotive'], currency: 'ZAR', fx: '18.33 ZAR per USD · 2024 average', trade: 'Southern African market context',
    automotive: 'Regional automotive-market context', mobility: 'Connected through Durban', indicators: 'GDP/capita $6,267 · inflation 4.4% · 2024',
    whyYen: 'Market size, local production and currency conditions combine differently from other African economies.',
  },
  {
    id: 'durban', name: 'Durban Port', country: 'South Africa', coordinates: [31.0218, -29.8587],
    layers: ['trade', 'ports', 'automotive', 'mobility'], currency: 'ZAR', fx: 'South Africa FX context', trade: 'Southern Africa maritime gateway',
    automotive: 'Automotive logistics context', mobility: 'Indian Ocean route connection', indicators: 'Representative port point',
    whyYen: 'The route from production to market carries freight, time and currency risk together.',
  },
  {
    id: 'dar-es-salaam', name: 'Dar es Salaam', country: 'Tanzania', coordinates: [39.2083, -6.7924],
    layers: ['fx', 'trade', 'ports', 'mobility'], currency: 'TZS', fx: '2,597.90 TZS per USD · 2024 average', trade: 'East African gateway context',
    automotive: 'Vehicle and parts market context', mobility: 'Port and city connection', indicators: 'GDP/capita $1,187 · inflation 3.1% · 2024',
    whyYen: 'A large local-currency number does not by itself indicate affordability or economic scale.',
  },
  {
    id: 'accra', name: 'Accra / Tema', country: 'Ghana', coordinates: [-0.0166, 5.6698],
    layers: ['fx', 'trade', 'ports', 'mobility'], currency: 'GHS', fx: '14.18 GHS per USD · 2024 average', trade: 'West African gateway context',
    automotive: 'Vehicle and parts market context', mobility: 'Tema maritime connection', indicators: 'GDP/capita $2,391 · inflation 22.8% · 2024',
    whyYen: 'Inflation adds essential context to a simple currency conversion.',
  },
  {
    id: 'lagos', name: 'Lagos', country: 'Nigeria', coordinates: [3.3792, 6.5244],
    layers: ['fx', 'trade', 'ports', 'mobility', 'risk'], currency: 'NGN', fx: '1,478.97 NGN per USD · 2024 average', trade: 'Large West African market context',
    automotive: 'Vehicle and parts market context', mobility: 'Port-city logistics', indicators: 'GDP/capita $1,084 · inflation 33.2% · 2024',
    whyYen: 'Rapid price and currency changes can alter the local weight of the same dollar price.',
  },
  {
    id: 'hormuz', name: 'Strait of Hormuz', country: 'Regional waters', coordinates: [56.35, 26.55],
    layers: ['energy', 'mobility', 'risk'], currency: 'MULTI', fx: 'Energy-price transmission context', trade: 'Maritime chokepoint',
    automotive: 'Indirect input-cost relevance', mobility: 'Global energy shipping route', indicators: 'Geographic risk lens',
    whyYen: 'Energy-import prices and route disruption can affect Japan’s trade balance and market risk perception.',
  },
  {
    id: 'suez', name: 'Suez Canal', country: 'Egypt', coordinates: [32.55, 30.45],
    layers: ['trade', 'energy', 'mobility', 'risk'], currency: 'EGP', fx: 'Transport-cost context', trade: 'Asia–Europe connection',
    automotive: 'Vehicle-shipping route context', mobility: 'Maritime chokepoint', indicators: 'Geographic risk lens',
    whyYen: 'Longer routes can change freight cost and delivery time before they appear in financial data.',
  },
]

export const intelligenceRoutes = {
  type: 'FeatureCollection' as const,
  features: [
    { type: 'Feature' as const, properties: { id: 'jp-th', label: 'Japan → Thailand' }, geometry: { type: 'LineString' as const, coordinates: [[136.88, 35.03], [126, 28], [112, 20], [100.88, 13.09]] } },
    { type: 'Feature' as const, properties: { id: 'th-ke', label: 'Thailand → Kenya' }, geometry: { type: 'LineString' as const, coordinates: [[100.88, 13.09], [82, 8], [62, 2], [39.67, -4.04]] } },
    { type: 'Feature' as const, properties: { id: 'th-me', label: 'Thailand → Middle East' }, geometry: { type: 'LineString' as const, coordinates: [[100.88, 13.09], [83, 11], [66, 17], [56.35, 26.55]] } },
    { type: 'Feature' as const, properties: { id: 'me-za', label: 'Middle East → South Africa' }, geometry: { type: 'LineString' as const, coordinates: [[56.35, 26.55], [49, 8], [43, -10], [31.02, -29.86]] } },
  ],
}

export function pointsForLayer(layer: IntelligenceLayer) {
  return intelligencePoints.filter((point) => point.layers.includes(layer))
}

export function pointCollection(layer: IntelligenceLayer) {
  return {
    type: 'FeatureCollection' as const,
    features: pointsForLayer(layer).map((point) => ({
      type: 'Feature' as const,
      properties: { id: point.id, name: point.name },
      geometry: { type: 'Point' as const, coordinates: point.coordinates },
    })),
  }
}
