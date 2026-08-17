# WHERE DOES THE YEN MOVE?

> 青学から世界へ。10万円でたどる、為替のストーリーマップ。

青山学院大学 地球社会共生学部の学生が個人で制作する、スクロール型のデータ可視化Webプロジェクトです。青山学院大学の公式プロジェクトではありません。

**Personal Student Project**<br>
**Created independently by a student of Aoyama Gakuin University**

## Project overview

中心となる問いは「1ドル＝160円という数字の裏側で、世界のどこで何が動いているのか？」です。為替をチャート単体で見るのではなく、金利、貿易、自動車、港湾、船舶、エネルギー、人流、海外生産、地政学、AI、地理空間情報を世界地図上でつなぎます。

最大のメッセージは、**「チャートから世界を見るのではなく、世界からチャートを見る。」**です。

## Personal context

- **GIS at Aoyama Gakuin University:** GIS、OpenStreetMap、Web Mapping、地理空間データ、ドローン、データ可視化の学びを土台にしています。札幌で積雪、地下歩行空間、ロードヒーティングと人流の関係を可視化するゼミ論構想にもつながります。
- **Study abroad in Thailand:** 2025年のKasetsart University留学を、Bangkok、Laem Chabang Port、Eastern Economic Corridor、タイの自動車生産を読み解く個人的な入口にします。
- **Automotive internship:** Bosch Japan Mobility Aftermarketでの長期インターン経験から得た、為替・物流・距離・規制・商習慣が一つの取引でつながるという一般的な気づきだけを扱います。顧客情報、契約、価格、社内資料などの機密情報は扱いません。
- **Foreign currency trading competition:** 10万円から始まった残高推移（100,000円 → 100,726円 → 98,917円 → 99,935円）を物語の入口と出口に置きます。

## Phase status

### Phase 1 — complete

- React / TypeScript / Viteの基盤
- 地図を固定したHeroとScrollytelling構造
- 全11 Sceneの本文骨格とプレースホルダー
- Black / Deep Navy / White / Green Accentのデザインシステム
- レスポンシブ対応の基本設計
- GitHub Pages用ワークフロー
- データ出典・方法論ドキュメント

### Phase 2 — complete

- スクロール位置と地図Sceneの同期
- 東京 → 日本 → タイ → 世界 → 東京のカメラ遷移
- 東京、日本の主要港、Bangkok、Kasetsart University、Laem Chabang、アフリカ主要都市・港の地点レイヤー
- Sceneに合わせた地点表示の切り替え
- カメラの現在地を示すJourney Rail
- モバイルと視差効果軽減設定への対応

### Phase 3 — complete

- 外貨取引大会の実残高推移チャート
- World BankのUSD/JPY年平均推移
- 2024年の日本の自動車関連貿易額
- JAMAの地域別自動車輸出台数
- USD/JPYとUSD/THBから算出するタイのクロスレート
- アフリカ5か国の為替・GDP per capita・インフレ比較
- 100 USDを現地通貨へ換算するインタラクティブ機能
- 年平均値、派生値、非リアルタイム値の明示

### Phase 4 — complete

- 自由操作型のYEN INTELLIGENCE MAP
- FX / Interest Rates / Trade / Automotive / Ports / Energy / Mobility / Riskの8レイヤー
- MapLibreによるドラッグ・ズーム操作
- 地点クリックとキーボード操作可能な地点インデックス
- Country、Currency、FX、Trade、Automotive、Mobility、Key Indicatorsの詳細パネル
- “Why it matters for the yen”の地点別説明
- Japan → Thailand → Middle East / AfricaのDEMO ROUTES
- 実航路・ライブ金利・リアルタイムリスクではない旨の明示

### Next phases

1. 投票、TODAY'S SIGNALS、アニメーション、モバイル最適化

## Technology

- React
- TypeScript
- Vite
- MapLibre GL JS
- Recharts（可視化フェーズで使用予定）
- OpenStreetMap
- GitHub Pages / GitHub Actions

## Data

データセット、提供者、URL、ライセンス、取得日、用途は [DATA_SOURCES.md](./DATA_SOURCES.md) に記録します。データの解釈方針は [METHODOLOGY.md](./METHODOLOGY.md) を参照してください。架空値・試作値を使う場合は画面と文書の両方で **DEMO DATA** と明記します。

## Local development

Node.js 22以上を推奨します。

```bash
corepack enable
pnpm install
pnpm dev
```

本番ビルド：

```bash
pnpm build
pnpm preview
```

## GitHub Pages

1. リポジトリの **Settings → Pages** を開く
2. **Source** を **GitHub Actions** に設定
3. `main` ブランチへpush
4. `.github/workflows/deploy-pages.yml` がビルドと公開を実行

Viteは相対パスでビルドするため、プロジェクトサイト形式のURLでも動作します。対象リポジトリは [mapbytomoya/where_does_the_yen_move](https://github.com/mapbytomoya/where_does_the_yen_move) です。GitHub Pagesはまだ有効化されていないため、公開URLは未発行です。有効化・初回デプロイ後は `https://mapbytomoya.github.io/where_does_the_yen_move/` で公開される想定です。

## Disclaimer

**This project is for educational and research purposes only. It does not constitute investment advice.**

地理空間データやAIの出力だけから円高・円安を断定したり、特定通貨の売買を推奨したりしません。AIは予測装置ではなく、情報整理、異常検出、比較、分析補助として扱います。

## License

リポジトリ作成時から設定されている [MIT License](./LICENSE) をソースコードへ引き継ぎます。オリジナル文章・図と第三者データは将来個別に整理できる構成とし、外部データは各提供者の利用条件に従います。MIT Licenseは第三者データの利用条件を上書きしません。
