import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react'

const AfricaExplorer = lazy(() => import('./AfricaExplorer').then((module) => ({ default: module.AfricaExplorer })))
const BalanceChart = lazy(() => import('./BalanceChart').then((module) => ({ default: module.BalanceChart })))
const FxContextChart = lazy(() => import('./FxContextChart').then((module) => ({ default: module.FxContextChart })))
const JapanTradePanel = lazy(() => import('./JapanTradePanel').then((module) => ({ default: module.JapanTradePanel })))
const MobilityExports = lazy(() => import('./MobilityExports').then((module) => ({ default: module.MobilityExports })))
const ThailandBridge = lazy(() => import('./ThailandBridge').then((module) => ({ default: module.ThailandBridge })))
const YenIntelligenceMap = lazy(() => import('./YenIntelligenceMap').then((module) => ({ default: module.YenIntelligenceMap })))
const visualScenes = new Set(['tokyo', 'japan', 'thailand', 'mobility', 'africa', 'intelligence', 'return'])

export function SceneVisualization({ sceneId }: { sceneId: string }) {
  const host = useRef<HTMLDivElement>(null)
  const [isNearViewport, setIsNearViewport] = useState(false)

  useEffect(() => {
    if (!host.current || !visualScenes.has(sceneId)) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsNearViewport(true)
        observer.disconnect()
      }
    }, { rootMargin: '320px 0px' })
    observer.observe(host.current)
    return () => observer.disconnect()
  }, [sceneId])

  if (!visualScenes.has(sceneId)) return null

  let visualization: ReactNode = null

  if (isNearViewport && sceneId === 'tokyo') visualization = <><BalanceChart /><FxContextChart /></>
  if (isNearViewport && sceneId === 'japan') visualization = <JapanTradePanel />
  if (isNearViewport && sceneId === 'thailand') visualization = <ThailandBridge />
  if (isNearViewport && sceneId === 'mobility') visualization = <MobilityExports />
  if (isNearViewport && sceneId === 'africa') visualization = <AfricaExplorer />
  if (isNearViewport && sceneId === 'intelligence') visualization = <YenIntelligenceMap />
  if (isNearViewport && sceneId === 'return') visualization = <BalanceChart compact />

  return (
    <div ref={host} className="visualization-host">
      {isNearViewport ? <Suspense fallback={<div className="data-module data-loading">LOADING DATA LAYER…</div>}>{visualization}</Suspense> : <div className="data-module data-loading">DATA LAYER STANDBY</div>}
    </div>
  )
}
