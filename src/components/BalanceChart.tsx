import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { balanceHistory } from '../data/phase3Data'

const yen = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 })

export function BalanceChart({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`data-module ${compact ? 'is-compact' : ''}`} role="img" aria-label="外貨取引大会の残高推移。10万円から始まり、100,726円、98,917円、99,935円と変化。">
      <div className="module-head">
        <div><span>PERSONAL DATA</span><strong>¥ BALANCE TRACE</strong></div>
        <small>4 OBSERVATIONS</small>
      </div>
      <div className="chart-frame">
        <ResponsiveContainer width="100%" height={compact ? 175 : 220}>
          <AreaChart data={balanceHistory} margin={{ top: 18, right: 8, left: -12, bottom: 0 }}>
            <defs>
              <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8df0b2" stopOpacity={0.42} />
                <stop offset="100%" stopColor="#8df0b2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(202,255,222,.09)" vertical={false} />
            <XAxis dataKey="stage" tick={{ fill: '#8b9a92', fontSize: 9 }} axisLine={false} tickLine={false} />
            <YAxis domain={[98500, 101000]} tickFormatter={(v) => `${Math.round(v / 1000)}k`} tick={{ fill: '#8b9a92', fontSize: 9 }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(value) => [yen.format(Number(value)), 'Balance']} contentStyle={{ background: '#07100e', border: '1px solid rgba(141,240,178,.3)', fontSize: 11 }} />
            <ReferenceLine y={100000} stroke="rgba(255,255,255,.35)" strokeDasharray="3 4" />
            <Area type="monotone" dataKey="value" stroke="#8df0b2" strokeWidth={2} fill="url(#balanceFill)" dot={{ r: 4, fill: '#07100e', stroke: '#8df0b2', strokeWidth: 2 }} animationDuration={900} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="data-caption"><span>START ¥100,000</span><span>LOW ¥98,917</span><span>LATEST ¥99,935</span></div>
    </div>
  )
}
