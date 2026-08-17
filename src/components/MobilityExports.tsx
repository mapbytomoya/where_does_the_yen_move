import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { vehicleExportsByDestination } from '../data/phase3Data'

const compactNumber = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })

export function MobilityExports() {
  return (
    <div className="data-module" role="img" aria-label="2024年の日本の自動車輸出台数を地域別に比較したグラフ">
      <div className="module-head">
        <div><span>JAMA · 2024 · VEHICLES</span><strong>EXPORTS BY DESTINATION</strong></div>
        <small>TOTAL 4,217,044</small>
      </div>
      <div className="chart-frame exports-chart">
        <ResponsiveContainer width="100%" height={270}>
          <BarChart data={vehicleExportsByDestination} layout="vertical" margin={{ top: 8, right: 20, left: 8, bottom: 0 }}>
            <XAxis type="number" tickFormatter={(v) => compactNumber.format(v)} tick={{ fill: '#8b9a92', fontSize: 9 }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="destination" width={82} tick={{ fill: '#c8d3cd', fontSize: 9 }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(value) => [Number(value).toLocaleString('en-US'), 'Vehicles']} contentStyle={{ background: '#07100e', border: '1px solid rgba(141,240,178,.3)', fontSize: 11 }} />
            <Bar dataKey="vehicles" fill="#8df0b2" radius={[0, 2, 2, 0]} animationDuration={900} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="source-note">JAMA, Motor Industry of Japan 2025. “Other destinations” are excluded from the bars.</p>
    </div>
  )
}
