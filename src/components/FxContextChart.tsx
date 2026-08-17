import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { usdJpyAnnualAverage } from '../data/phase3Data'

export function FxContextChart() {
  return (
    <div className="data-module fx-module" role="img" aria-label="2020年から2024年までのUSD/JPY年平均推移。">
      <div className="module-head">
        <div><span>WORLD BANK · PA.NUS.FCRF</span><strong>USD / JPY ANNUAL AVERAGE</strong></div>
        <small>2020—2024</small>
      </div>
      <div className="chart-frame">
        <ResponsiveContainer width="100%" height={185}>
          <LineChart data={usdJpyAnnualAverage} margin={{ top: 20, right: 12, left: -18, bottom: 0 }}>
            <XAxis dataKey="year" tick={{ fill: '#8b9a92', fontSize: 9 }} axisLine={false} tickLine={false} />
            <YAxis domain={[100, 160]} tick={{ fill: '#8b9a92', fontSize: 9 }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(value) => [`¥${Number(value).toFixed(2)}`, 'JPY per USD']} contentStyle={{ background: '#07100e', border: '1px solid rgba(141,240,178,.3)', fontSize: 11 }} />
            <Line type="monotone" dataKey="value" stroke="#f4f7f5" strokeWidth={2} dot={{ r: 3, fill: '#8df0b2', strokeWidth: 0 }} animationDuration={900} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="source-note">Annual period averages—not the competition’s daily execution rate. CC BY 4.0.</p>
    </div>
  )
}
