export function Hero() {
  return (
    <section className="hero" id="opening" data-scene="opening">
      <div className="hero-inner">
        <p className="kicker">Aoyama Gakuin University · Personal Student Project</p>
        <h1>WHERE DOES<br />THE YEN <em>MOVE?</em></h1>
        <div className="hero-grid">
          <div>
            <p className="lead">青学から世界へ。<br />10万円でたどる、為替のストーリーマップ。</p>
            <p className="from">From Aoyama Gakuin University to the World.</p>
          </div>
          <div className="identity">
            <span>Aoyama Gakuin University</span>
            <span>School of Global Studies and Collaboration</span>
            <strong>Created independently by a student</strong>
          </div>
        </div>
        <div className="tag-row" aria-label="プロジェクトテーマ">
          {['GIS', 'OpenStreetMap', 'Mobility', 'FX', 'AI', 'Data Visualization'].map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <a href="#tokyo" className="scroll-cue"><i /> SCROLL TO TRACE THE YEN</a>
      </div>
    </section>
  )
}
