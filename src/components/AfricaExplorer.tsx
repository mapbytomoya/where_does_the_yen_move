import { useState } from 'react'
import { africaCountries } from '../data/phase3Data'

const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 })
const decimal = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 })

export function AfricaExplorer() {
  const [countryId, setCountryId] = useState('KE')
  const [amount, setAmount] = useState(100)
  const country = africaCountries.find((item) => item.id === countryId) ?? africaCountries[0]
  const safeAmount = Number.isFinite(amount) ? Math.min(Math.max(amount, 0), 100000) : 0

  return (
    <div className="data-module africa-explorer">
      <div className="module-head">
        <div><span>WORLD BANK · 2024</span><strong>WHAT DOES 100 USD MEAN?</strong></div>
        <small>ANNUAL AVERAGES</small>
      </div>
      <div className="country-tabs" role="tablist" aria-label="比較する国">
        {africaCountries.map((item) => (
          <button key={item.id} type="button" role="tab" aria-selected={item.id === country.id} className={item.id === country.id ? 'is-active' : ''} onClick={() => setCountryId(item.id)}>
            <span>{item.id}</span>{item.name}
          </button>
        ))}
      </div>
      <div className="converter">
        <label><span>PRODUCT PRICE</span><span className="amount-input"><b>$</b><input type="number" min="0" max="100000" value={amount} onChange={(event) => setAmount(Number(event.target.value))} aria-label="米ドルでの商品価格" /></span></label>
        <i>→</i>
        <div><span>2024 AVG. LOCAL VALUE</span><strong>{number.format(safeAmount * country.localPerUsd)} <small>{country.currency}</small></strong></div>
      </div>
      <div className="country-metrics">
        <div><span>GDP / CAPITA</span><strong>${number.format(country.gdpPerCapitaUsd)}</strong><small>CURRENT USD · 2024</small></div>
        <div><span>INFLATION</span><strong>{decimal.format(country.inflationPercent)}%</strong><small>ANNUAL · 2024</small></div>
        <div><span>FX AVERAGE</span><strong>{decimal.format(country.localPerUsd)}</strong><small>{country.currency} PER USD</small></div>
        <div><span>PORT LENS</span><strong>{country.port}</strong><small>GEOGRAPHIC CONTEXT</small></div>
      </div>
      <p className="country-insight">The same ${number.format(safeAmount)} becomes {number.format(safeAmount * country.localPerUsd)} {country.currency} in {country.name}. Exchange-rate conversion alone does not measure affordability; income and inflation add essential context.</p>
      <p className="source-note">World Development Indicators: PA.NUS.FCRF, NY.GDP.PCAP.CD, FP.CPI.TOTL.ZG. CC BY 4.0. Period-average exchange rates—not live quotes.</p>
    </div>
  )
}
