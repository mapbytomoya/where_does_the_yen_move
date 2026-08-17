import { thailandFxBridge } from '../data/phase3Data'

export function ThailandBridge() {
  return (
    <div className="data-module bridge-module">
      <div className="module-head">
        <div><span>WORLD BANK · 2024 AVERAGE</span><strong>THAILAND FX BRIDGE</strong></div>
        <small>DERIVED CROSS RATE</small>
      </div>
      <div className="fx-bridge">
        <div><span>USD / JPY</span><strong>{thailandFxBridge.jpyPerUsd.toFixed(2)}</strong></div>
        <i>÷</i>
        <div><span>USD / THB</span><strong>{thailandFxBridge.thbPerUsd.toFixed(2)}</strong></div>
        <i>=</i>
        <div className="result"><span>JPY / THB</span><strong>{thailandFxBridge.jpyPerThb.toFixed(2)}</strong></div>
      </div>
      <div className="network-strip"><span>BANGKOK</span><i /><span>KASETSART</span><i /><span>LAEM CHABANG</span><i /><span>ASEAN</span></div>
      <p className="source-note">1 THB ≈ ¥{thailandFxBridge.jpyPerThb.toFixed(2)}, derived from annual average official exchange rates. Not a live quote.</p>
    </div>
  )
}
