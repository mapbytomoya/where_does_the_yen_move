import { japanAutomotiveTrade, japanPorts } from '../data/phase3Data'

export function JapanTradePanel() {
  const max = japanAutomotiveTrade.exportsTrillionJpy
  return (
    <div className="data-module trade-module">
      <div className="module-head">
        <div><span>JAMA / MOF · 2024</span><strong>AUTOMOTIVE TRADE VALUE</strong></div>
        <small>JPY · TRILLION</small>
      </div>
      <div className="trade-bars" aria-label="2024年の日本の自動車関連輸出額22.5兆円、輸入額3.3兆円">
        <div><span>EXPORT</span><i style={{ width: '100%' }} /><strong>¥22.5T</strong></div>
        <div><span>IMPORT</span><i style={{ width: `${(japanAutomotiveTrade.importsTrillionJpy / max) * 100}%` }} /><strong>¥3.3T</strong></div>
      </div>
      <p className="causality-note">円安と輸出額が同時に動いても、それだけで輸出数量の増加を意味しない。</p>
      <div className="port-grid">
        {japanPorts.map((port) => <div key={port.name}><i /><span>{port.name}</span><small>{port.role}</small></div>)}
      </div>
      <p className="source-note">Trade values: JAMA, citing Ministry of Finance “Summary Report on Trade of Japan 2024”. Port roles are qualitative context, not rankings.</p>
    </div>
  )
}
