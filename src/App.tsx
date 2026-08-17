import { useEffect, useState } from 'react'
import { MapBackdrop } from './map/MapBackdrop'
import { Hero } from './sections/Hero'
import { StoryScene } from './sections/StoryScene'
import { scenes } from './data/scenes'

function App() {
  const [activeScene, setActiveScene] = useState('opening')

  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>('[data-scene]')]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveScene((visible.target as HTMLElement).dataset.scene ?? 'opening')
      },
      { rootMargin: '-25% 0px -45% 0px', threshold: [0, 0.25, 0.6] },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <MapBackdrop activeScene={activeScene} />
      <div className="map-shade" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#opening" aria-label="ページ先頭へ">
          YEN / WORLD
        </a>
        <span className="status"><i /> PERSONAL STUDENT PROJECT</span>
      </header>

      <Hero />
      <div className="story" aria-label="ストーリーマップ">
        {scenes.slice(1).map((scene, index) => (
          <StoryScene key={scene.id} scene={scene} index={index + 1} />
        ))}
      </div>

      <footer className="site-footer">
        <p>Created independently by a student of</p>
        <strong>Aoyama Gakuin University</strong>
        <p>School of Global Studies and Collaboration · Personal Student Project</p>
        <p className="disclaimer">This project is for educational and research purposes only. It does not constitute investment advice.</p>
      </footer>
    </main>
  )
}

export default App
