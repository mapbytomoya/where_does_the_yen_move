export type Scene = {
  id: string
  eyebrow: string
  title: string
  body: string
  question?: string
  tags: string[]
  metric?: { value: string; label: string }
}

export const scenes: Scene[] = [
  {
    id: 'opening', eyebrow: 'Scene 00 · Opening', title: 'WHERE DOES THE YEN MOVE?',
    body: '青学から世界へ。10万円でたどる、為替のストーリーマップ。',
    tags: ['GIS', 'OpenStreetMap', 'Mobility', 'FX', 'AI', 'Data Visualization'],
  },
  {
    id: 'tokyo', eyebrow: 'Scene 01 · Tokyo', title: '数字だけを見ていた。',
    body: '10万円から外貨取引を始めた。利益、為替介入による急減、そして元本付近への回復。私たちは最初、ドル円の数字だけを見ていた。',
    question: 'でも、この数字はどこから来ているのだろう。', tags: ['USD / JPY', 'Balance'],
    metric: { value: '¥100,000 → ¥99,935', label: 'THE STARTING POINT' },
  },
  {
    id: 'japan', eyebrow: 'Scene 02 · Japan', title: '円の裏側にある輸出。',
    body: '横浜、名古屋、神戸、博多。港は、貿易・自動車・エネルギーと為替が接する場所だ。円安と輸出の関係は、相関と因果を分けて読む必要がある。',
    question: '円安は、日本の輸出にどんな影響を与えるのか？', tags: ['Ports', 'Automotive', 'Trade', 'Energy'],
  },
  {
    id: 'thailand', eyebrow: 'Scene 03 · Thailand', title: '地図上の国から、生活圏へ。',
    body: '2025年、私はタイのKasetsart Universityで生活した。日本車は日本だけで作られていない。Bangkok、Laem Chabang、EECをつなぐと、海外生産から見た為替が現れる。',
    question: '現地生産する企業には、為替はどう見えるのか？', tags: ['Bangkok', 'Kasetsart University', 'EEC', 'THB / JPY'],
  },
  {
    id: 'mobility', eyebrow: 'Scene 04 · Mobility', title: '一台の車は世界を移動する。',
    body: '自動車業界の海外業務を経験して感じたのは、一つの商品が届くまでに、為替、物流、商習慣、規制、距離がすべてつながっているということだった。公開可能な一般的な気づきだけを扱う。',
    tags: ['Southeast Asia', 'Middle East', 'Africa', 'Shipping'],
  },
  {
    id: 'africa', eyebrow: 'Scene 05 · Africa', title: '100ドルの重さは、国によって違う。',
    body: 'Kenya、South Africa、Tanzania、Ghana、Nigeria。為替、物価、所得、港湾への距離を重ねると、同じ価格が持つ意味の違いが見えてくる。',
    tags: ['100 USD', 'Local Currency', 'Inflation', 'Ports'],
  },
  {
    id: 'lenses', eyebrow: 'Scene 06 · Five Lenses', title: '世界経済を、5つのレンズで見る。',
    body: 'MONEY、TRADE、MOBILITY、ECONOMY、RISK。為替は一つの指標ではなく、異なる空間と時間を動くデータの交点として読む。',
    tags: ['Money', 'Trade', 'Mobility', 'Economy', 'Risk'],
  },
  {
    id: 'gis', eyebrow: 'Scene 07 · GIS', title: 'PLACE + CHANGE',
    body: 'GISは地図を描くためだけの技術ではない。「どこで、何が起きているか」をデータとして扱う技術だ。雪の日の札幌で、人流は地上から地下へ移るのか。ロードヒーティングは流れを変えるのか。',
    tags: ['Points', 'Lines', 'Polygons', 'OpenStreetMap', 'Mobility Data'],
  },
  {
    id: 'ai', eyebrow: 'Scene 08 · AI', title: '予言ではなく、見るべき場所を。',
    body: 'AIの役割は「明日円安になる」と断言することではない。異常変化を検出し、複数データを整理し、過去と比べ、人間の判断を補助する。',
    question: '今、世界のどこを見るべきか。', tags: ['Today’s Signals', 'Anomaly Detection', 'Human in the Loop'],
  },
  {
    id: 'intelligence', eyebrow: 'Scene 09 · Explorer', title: 'YEN INTELLIGENCE MAP',
    body: 'FX、金利、貿易、自動車、港、エネルギー、モビリティ、リスク。ここまでのレイヤーを、自由に探索できる一枚の地図へ統合する。',
    tags: ['FX', 'Rates', 'Trade', 'Automotive', 'Ports', 'Energy', 'Mobility', 'Risk'],
  },
  {
    id: 'return', eyebrow: 'Scene 10 · Return to Tokyo', title: '世界からチャートを見る。',
    body: '数字の向こうでは、人が動き、船が動き、車が動き、企業が動き、世界が動いていた。10万円は、そのつながりをたどる入口だった。',
    question: 'チャートから世界を見るのではなく、世界からチャートを見る。', tags: ['¥100,000', 'What would you do?'],
    metric: { value: '¥99,935', label: 'BACK NEAR THE START' },
  },
]
