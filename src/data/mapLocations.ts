export type MapRegion = 'tokyo' | 'japan' | 'thailand' | 'africa'

export type MapLocation = {
  name: string
  coordinates: [number, number]
  region: MapRegion
  kind: 'city' | 'port' | 'university'
}

export type CameraStage = {
  center: [number, number]
  zoom: number
  pitch: number
  bearing: number
  offsetX: number
  markerGroup: MapRegion | 'world'
}

export const mapLocations: MapLocation[] = [
  { name: 'Tokyo', coordinates: [139.7671, 35.6812], region: 'tokyo', kind: 'city' },
  { name: 'Yokohama Port', coordinates: [139.6475, 35.453], region: 'japan', kind: 'port' },
  { name: 'Nagoya Port', coordinates: [136.8815, 35.032], region: 'japan', kind: 'port' },
  { name: 'Kobe Port', coordinates: [135.1955, 34.6814], region: 'japan', kind: 'port' },
  { name: 'Hakata Port', coordinates: [130.398, 33.612], region: 'japan', kind: 'port' },
  { name: 'Bangkok', coordinates: [100.5018, 13.7563], region: 'thailand', kind: 'city' },
  { name: 'Kasetsart University', coordinates: [100.5714, 13.8476], region: 'thailand', kind: 'university' },
  { name: 'Laem Chabang Port', coordinates: [100.883, 13.087], region: 'thailand', kind: 'port' },
  { name: 'Mombasa', coordinates: [39.6682, -4.0435], region: 'africa', kind: 'port' },
  { name: 'Durban', coordinates: [31.0218, -29.8587], region: 'africa', kind: 'port' },
  { name: 'Dar es Salaam', coordinates: [39.2083, -6.7924], region: 'africa', kind: 'port' },
  { name: 'Tema', coordinates: [-0.0166, 5.6698], region: 'africa', kind: 'port' },
  { name: 'Lagos', coordinates: [3.3792, 6.5244], region: 'africa', kind: 'city' },
]

const worldStage: CameraStage = {
  center: [74, 18], zoom: 1.25, pitch: 0, bearing: 0, offsetX: 0, markerGroup: 'world',
}

export const cameraStages: Record<string, CameraStage> = {
  opening: worldStage,
  tokyo: {
    center: [139.7671, 35.6812], zoom: 8.7, pitch: 38, bearing: -12, offsetX: 210, markerGroup: 'tokyo',
  },
  japan: {
    center: [136.6, 35.1], zoom: 4.75, pitch: 24, bearing: 0, offsetX: -180, markerGroup: 'japan',
  },
  thailand: {
    center: [100.68, 13.45], zoom: 6.35, pitch: 38, bearing: 8, offsetX: 210, markerGroup: 'thailand',
  },
  mobility: {
    center: [75, 15], zoom: 1.55, pitch: 18, bearing: 0, offsetX: -100, markerGroup: 'world',
  },
  africa: {
    center: [20, -3], zoom: 2.1, pitch: 18, bearing: 0, offsetX: 170, markerGroup: 'africa',
  },
  lenses: { ...worldStage, center: [62, 20], offsetX: -100 },
  gis: { ...worldStage, center: [75, 23], offsetX: 130 },
  ai: { ...worldStage, center: [55, 18], offsetX: -100 },
  intelligence: { ...worldStage, center: [72, 16], zoom: 1.5, pitch: 12, offsetX: 110 },
  return: {
    center: [139.7671, 35.6812], zoom: 9.35, pitch: 42, bearing: -8, offsetX: -190, markerGroup: 'tokyo',
  },
}

export const journeyStops = ['WORLD', 'TOKYO', 'JAPAN', 'THAILAND', 'WORLD', 'TOKYO'] as const

export function getJourneyProgress(sceneId: string) {
  if (sceneId === 'opening') return 0
  if (sceneId === 'tokyo') return 1
  if (sceneId === 'japan') return 2
  if (sceneId === 'thailand') return 3
  if (sceneId === 'return') return 5
  return 4
}
