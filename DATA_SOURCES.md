# Data Sources

このファイルは、使用する公開データの来歴と利用条件を記録するデータ台帳です。Phase 1の画面はストーリー構造のみで、統計値はまだ組み込んでいません。残高推移は制作者本人が提供した値です。

Access date: 2026-08-17

| Dataset name | Provider | URL | License / terms | Access date | How it is used |
|---|---|---|---|---|---|
| Standard map tiles & © contributors | OpenStreetMap contributors | https://www.openstreetmap.org/copyright | ODbL; tile use subject to OSM tile usage policy | 2026-08-17 | Background basemap and geographic context |
| Representative place coordinates | Project-authored selection using OpenStreetMap geographic context | https://www.openstreetmap.org/ | ODbL attribution applies to OSM-derived geographic context | 2026-08-17 | Phase 2 camera targets and point markers for cities, ports and Kasetsart University; coordinates are representative map points, not facility boundaries |
| Foreign currency competition balance history | Project creator | Not public | Original personal data; no external license | 2026-08-17 | Opening/closing narrative and balance chart |
| Official exchange rate (LCU per US$, period average), PA.NUS.FCRF | World Bank World Development Indicators; underlying source IMF IFS | https://data.worldbank.org/indicator/PA.NUS.FCRF | CC BY 4.0 | 2026-08-17 | USD/JPY annual-average context, Thailand cross-rate derivation, and Africa 100 USD converter |
| GDP per capita (current US$), NY.GDP.PCAP.CD | World Bank World Development Indicators | https://data.worldbank.org/indicator/NY.GDP.PCAP.CD | CC BY 4.0 | 2026-08-17 | 2024 country comparison for Kenya, South Africa, Tanzania, Ghana and Nigeria |
| Inflation, consumer prices (annual %), FP.CPI.TOTL.ZG | World Bank World Development Indicators; underlying source IMF IFS | https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG | CC BY 4.0 | 2026-08-17 | 2024 country comparison and affordability context |
| Motor Industry of Japan 2025 | Japan Automobile Manufacturers Association | https://www.jama.or.jp/english/reports/docs/MIoJ2025_e.pdf | Provider terms apply; source attribution retained | 2026-08-17 | 2024 motor-vehicle exports by destination |
| Automobile-related trade value, based on Summary Report on Trade of Japan 2024 | Japan Automobile Manufacturers Association, citing Ministry of Finance Japan | https://www.jama.or.jp/statistics/facts/industry/index.html | Provider terms apply; source attribution retained | 2026-08-17 | 2024 automobile-related export and import value |
| YEN INTELLIGENCE MAP narrative routes | Project-authored | Not public | Original project content | 2026-08-17 | **DEMO ROUTES** connecting Japan, Thailand, the Middle East and Africa; illustrative narrative lines only, not AIS tracks or verified itineraries |

## Planned public datasets

以下は候補であり、実データ採用時にデータセット名、個別URL、利用条件、取得日、加工方法を確定します。

| Dataset family | Preferred provider | Planned use |
|---|---|---|
| Monetary policy and intervention | Bank of Japan, Ministry of Finance Japan, IMF | Policy rates, intervention dates and monetary context |
| Trade | UN Comtrade, Ministry of Finance Japan, e-Stat | Exports, imports, trade balance, automotive trade |
| Ports and freight | Ministry of Land, Infrastructure, Transport and Tourism; national port authorities | Port markers and cargo context |
| Macroeconomic indicators | World Bank, IMF, OECD, national statistics offices | GDP per capita, CPI, industrial indicators |
| Geospatial features | OpenStreetMap contributors | Ports, cities, roads and contextual geography |

## DEMO DATA policy

架空値、簡略化した値、説明目的のシグナルを使用する場合は、データファイル・画面表示・本台帳のすべてで **DEMO DATA** と表示します。実測値や最新値であるようには見せません。

Phase 3のUSD/JPYと国別為替は年平均であり、リアルタイム相場ではありません。タイのJPY/THB値は、同一年の `JPY per USD ÷ THB per USD` で算出した派生値です。

Phase 4のInterest Rates、Energy、Riskレイヤーは現時点では地理的・概念的な探索レイヤーです。ライブ金利、リアルタイム船舶位置、リアルタイムリスク評価を表示しているものではありません。
