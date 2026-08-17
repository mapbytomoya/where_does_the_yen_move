import { useEffect, useRef } from 'react'
import type { Map, Marker } from 'maplibre-gl'
import { cameraStages, getJourneyProgress, journeyStops, mapLocations, type MapRegion } from '../data/mapLocations'

type Props = { activeScene: string }

const sceneLabels: Record<string, string> = {
  opening: 'THE WORLD', tokyo: 'TOKYO / 35.68°N 139.76°E', japan: 'JAPAN',
  thailand: 'THAILAND', mobility: 'GLOBAL ROUTES', africa: 'AFRICA', lenses: 'FIVE LENSES',
  gis: 'PLACE + CHANGE', ai: 'TODAY’S SIGNALS', intelligence: 'YEN INTELLIGENCE MAP', return: 'TOKYO',
}

export function MapBackdrop({ activeScene }: Props) {
  const container = useRef<HTMLDivElement>(null)
  const map = useRef<Map | null>(null)
  const activeSceneRef = useRef(activeScene)
  const markers = useRef<Array<{ marker: Marker; region: MapRegion; element: HTMLDivElement }>>([])

  activeSceneRef.current = activeScene

  const applyScene = (mapInstance: Map, sceneId: string) => {
    const stage = cameraStages[sceneId] ?? cameraStages.opening
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = window.innerWidth < 720

    mapInstance.easeTo({
      center: stage.center,
      zoom: stage.zoom,
      pitch: stage.pitch,
      bearing: stage.bearing,
      offset: [mobile ? 0 : stage.offsetX, 0],
      duration: reduceMotion ? 0 : 1800,
      easing: (time) => 1 - Math.pow(1 - time, 3),
      essential: true,
    })

    markers.current.forEach(({ region, element }) => {
      const visible = stage.markerGroup === 'world' || region === stage.markerGroup || (stage.markerGroup === 'japan' && region === 'tokyo')
      element.classList.toggle('is-visible', visible)
      element.classList.toggle('is-context', stage.markerGroup === 'world')
    })
  }

  useEffect(() => {
    if (!container.current || map.current) return
    let cancelled = false
    const containerElement = container.current

    void import('maplibre-gl').then(({ default: maplibregl }) => {
      if (cancelled || !containerElement) return
      map.current = new maplibregl.Map({
        container: containerElement,
        center: [75, 18],
        zoom: 1.25,
        minZoom: 1,
        maxZoom: 8,
        attributionControl: false,
        interactive: false,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '© OpenStreetMap contributors',
            },
          },
          layers: [{ id: 'osm', type: 'raster', source: 'osm', paint: { 'raster-saturation': -1, 'raster-contrast': 0.25, 'raster-brightness-max': 0.45 } }],
        },
      })

      mapLocations.forEach((location) => {
        const element = document.createElement('div')
        element.className = `map-marker map-marker--${location.kind}`
        const dot = document.createElement('i')
        const label = document.createElement('span')
        label.textContent = location.name
        element.append(dot, label)

        const marker = new maplibregl.Marker({ element, anchor: 'center' })
          .setLngLat(location.coordinates)
          .addTo(map.current!)
        markers.current.push({ marker, region: location.region, element })
      })

      map.current.once('load', () => {
        if (map.current) applyScene(map.current, activeSceneRef.current)
      })
    })

    return () => {
      cancelled = true
      markers.current.forEach(({ marker }) => marker.remove())
      markers.current = []
      map.current?.remove()
      map.current = null
    }
  }, [])

  useEffect(() => {
    if (map.current?.loaded()) applyScene(map.current, activeScene)
  }, [activeScene])

  const progress = getJourneyProgress(activeScene)

  return (
    <div className="map-shell" aria-hidden="true">
      <div className="map" ref={container} />
      <div className="journey-rail">
        <span className="journey-label">CAMERA JOURNEY</span>
        <ol>
          {journeyStops.map((stop, index) => (
            <li key={`${stop}-${index}`} className={index === progress ? 'is-active' : index < progress ? 'is-past' : ''}>
              <i /><span>{stop}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="map-coordinates"><span>ACTIVE LAYER / 01</span><strong>{sceneLabels[activeScene] ?? 'THE WORLD'}</strong></div>
      <div className="map-attribution">© OpenStreetMap contributors</div>
    </div>
  )
}
