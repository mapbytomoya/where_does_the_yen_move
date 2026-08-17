import type { Scene } from '../data/scenes'
import { SceneVisualization } from '../components/SceneVisualization'

export function StoryScene({ scene, index }: { scene: Scene; index: number }) {
  return (
    <section className="scene" id={scene.id} data-scene={scene.id}>
      <article className={`scene-card scene-card--${scene.id}`}>
        <div className="scene-index">{String(index).padStart(2, '0')}<span>/ 10</span></div>
        <p className="eyebrow">{scene.eyebrow}</p>
        <h2>{scene.title}</h2>
        {scene.metric && <div className="metric"><strong>{scene.metric.value}</strong><span>{scene.metric.label}</span></div>}
        <p className="scene-body">{scene.body}</p>
        {scene.question && <blockquote>{scene.question}</blockquote>}
        <SceneVisualization sceneId={scene.id} />
        <div className="tag-row compact">{scene.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="phase-note"><i /> LIVE MAP / DATA-LINKED SCENE</div>
      </article>
    </section>
  )
}
