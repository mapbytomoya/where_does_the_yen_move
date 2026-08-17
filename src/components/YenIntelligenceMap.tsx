import { useEffect, useRef, useState } from 'react'
import type { GeoJSONSource, Map } from 'maplibre-gl'
import { intelligenceLayers, intelligencePoints, intelligenceRoutes, pointCollection, pointsForLayer, type IntelligenceLayer } from '../data/intelligenceData'

export function YenIntelligenceMap() {
  const container = useRef<HTMLDivElement>(null)
  const map = useRef<Map | null>(null)
  const layerRef = useRef<IntelligenceLayer>('fx')
  const [activeLayer, setActiveLayer] = useState<IntelligenceLayer>('fx')
  const [selectedId, setSelectedId] = useState('tokyo')
  const [mapReady, setMapReady] = useState(false)

  const selected = intelligencePoints.find((point) => point.id === selectedId) ?? intelligencePoints[0]
  const visiblePoints = pointsForLayer(activeLayer)

  useEffect(() => {
    if (!container.current || map.current) return
    let cancelled = false
    const containerElement = container.current

    void import('maplibre-gl').then(({ default: maplibregl }) => {
      if (cancelled || !containerElement) return
      const mapInstance = new maplibregl.Map({
        container: containerElement,
        center: [74, 17],
        zoom: 1.15,
        minZoom: 1,
        maxZoom: 8,
        attributionControl: false,
        style: {
          version: 8,
          sources: {
            osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, attribution: '© OpenStreetMap contributors' },
          },
          layers: [{ id: 'osm', type: 'raster', source: 'osm', paint: { 'raster-saturation': -1, 'raster-contrast': 0.32, 'raster-brightness-max': 0.5 } }],
        },
      })
      map.current = mapInstance
      mapInstance.scrollZoom.disable()
      mapInstance.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-left')

      mapInstance.once('load', () => {
        mapInstance.addSource('intelligence-routes', { type: 'geojson', data: intelligenceRoutes })
        mapInstance.addLayer({
          id: 'intelligence-routes', type: 'line', source: 'intelligence-routes',
          layout: { visibility: 'none', 'line-cap': 'round', 'line-join': 'round' },
          paint: { 'line-color': '#8df0b2', 'line-width': 1.6, 'line-opacity': 0.65, 'line-dasharray': [2, 2] },
        })
        mapInstance.addSource('intelligence-points', { type: 'geojson', data: pointCollection(layerRef.current) })
        mapInstance.addLayer({
          id: 'intelligence-glow', type: 'circle', source: 'intelligence-points',
          paint: { 'circle-radius': 12, 'circle-color': '#1ed978', 'circle-opacity': 0.16, 'circle-blur': 0.6 },
        })
        mapInstance.addLayer({
          id: 'intelligence-points', type: 'circle', source: 'intelligence-points',
          paint: { 'circle-radius': 5, 'circle-color': '#8df0b2', 'circle-stroke-color': '#07100e', 'circle-stroke-width': 2 },
        })
        mapInstance.on('mouseenter', 'intelligence-points', () => { mapInstance.getCanvas().style.cursor = 'pointer' })
        mapInstance.on('mouseleave', 'intelligence-points', () => { mapInstance.getCanvas().style.cursor = '' })
        mapInstance.on('click', 'intelligence-points', (event) => {
          const id = event.features?.[0]?.properties?.id
          if (typeof id === 'string') {
            const point = intelligencePoints.find((item) => item.id === id)
            if (point) {
              setSelectedId(point.id)
              mapInstance.easeTo({ center: point.coordinates, zoom: Math.max(mapInstance.getZoom(), 3.2), duration: 800 })
            }
          }
        })
        setMapReady(true)
      })
    })

    return () => {
      cancelled = true
      map.current?.remove()
      map.current = null
    }
  }, [])

  useEffect(() => {
    layerRef.current = activeLayer
    if (!mapReady || !map.current) return
    const source = map.current.getSource('intelligence-points') as GeoJSONSource | undefined
    source?.setData(pointCollection(activeLayer))
    map.current.setLayoutProperty('intelligence-routes', 'visibility', ['mobility', 'trade', 'automotive', 'energy'].includes(activeLayer) ? 'visible' : 'none')
  }, [activeLayer, mapReady])

  const chooseLayer = (layer: IntelligenceLayer) => {
    const nextPoints = pointsForLayer(layer)
    setActiveLayer(layer)
    if (!nextPoints.some((point) => point.id === selectedId)) setSelectedId(nextPoints[0]?.id ?? 'tokyo')
  }

  const choosePoint = (id: string) => {
    const point = intelligencePoints.find((item) => item.id === id)
    if (!point) return
    setSelectedId(id)
    map.current?.easeTo({ center: point.coordinates, zoom: Math.max(map.current.getZoom(), 3.2), duration: 800 })
  }

  return (
    <div className="data-module intelligence-module">
      <div className="module-head intelligence-head">
        <div><span>PHASE 4 · INTERACTIVE EXPLORER</span><strong>YEN INTELLIGENCE MAP</strong></div>
        <small><i /> {mapReady ? 'MAP ONLINE' : 'INITIALIZING'}</small>
      </div>
      <div className="intelligence-layers" aria-label="表示するデータレイヤー">
        {intelligenceLayers.map((layer) => (
          <button type="button" key={layer.id} className={activeLayer === layer.id ? 'is-active' : ''} aria-pressed={activeLayer === layer.id} onClick={() => chooseLayer(layer.id)}>
            <i />{layer.short}<span>{layer.label}</span>
          </button>
        ))}
      </div>
      <div className="intelligence-workspace">
        <div className="intelligence-map-wrap">
          <div ref={container} className="intelligence-map-canvas" aria-label="ドラッグとズームが可能な世界地図" />
          <div className="map-mode">DRAG TO EXPLORE · SCROLL CONTINUES STORY</div>
          <div className="intel-attribution">© OpenStreetMap contributors</div>
        </div>
        <aside className="intelligence-panel" aria-live="polite">
          <div className="panel-sequence">SELECTED NODE / {String(visiblePoints.findIndex((point) => point.id === selected.id) + 1).padStart(2, '0')}</div>
          <h3>{selected.name}</h3>
          <p className="panel-country">{selected.country} · {selected.currency}</p>
          <dl>
            <div><dt>FX</dt><dd>{selected.fx}</dd></div>
            <div><dt>TRADE</dt><dd>{selected.trade}</dd></div>
            <div><dt>AUTOMOTIVE</dt><dd>{selected.automotive}</dd></div>
            <div><dt>MOBILITY</dt><dd>{selected.mobility}</dd></div>
            <div><dt>KEY INDICATORS</dt><dd>{selected.indicators}</dd></div>
          </dl>
          <div className="why-yen"><span>WHY IT MATTERS FOR THE YEN</span><p>{selected.whyYen}</p></div>
        </aside>
      </div>
      <div className="intelligence-index" aria-label="表示中の地点">
        {visiblePoints.map((point) => (
          <button type="button" key={point.id} className={point.id === selected.id ? 'is-active' : ''} onClick={() => choosePoint(point.id)}>
            <i />{point.name}<span>{point.country}</span>
          </button>
        ))}
      </div>
      <p className="source-note">Official statistics are dated in each panel. Route lines are <strong>DEMO ROUTES</strong> for narrative connection only—not AIS tracks or verified shipping itineraries.</p>
    </div>
  )
}
