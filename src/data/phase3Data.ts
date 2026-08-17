export const balanceHistory = [
  { stage: 'START', value: 100000, note: '10万円から開始' },
  { stage: 'GAIN', value: 100726, note: '一時的な利益' },
  { stage: 'SHOCK', value: 98917, note: '為替介入局面で急減' },
  { stage: 'HOLD', value: 99935, note: '米ドル保有・経過観察' },
]

// World Bank indicator PA.NUS.FCRF: annual average JPY per USD.
export const usdJpyAnnualAverage = [
  { year: '2020', value: 106.77 },
  { year: '2021', value: 109.75 },
  { year: '2022', value: 131.50 },
  { year: '2023', value: 140.49 },
  { year: '2024', value: 151.37 },
]

export const japanAutomotiveTrade = {
  year: 2024,
  exportsTrillionJpy: 22.5,
  importsTrillionJpy: 3.3,
}

// JAMA, Motor Industry of Japan 2025: motor vehicle exports by destination in 2024.
export const vehicleExportsByDestination = [
  { destination: 'N. America', vehicles: 1600811 },
  { destination: 'Europe', vehicles: 662819 },
  { destination: 'Asia', vehicles: 583340 },
  { destination: 'Middle East', vehicles: 526110 },
  { destination: 'Oceania', vehicles: 473465 },
  { destination: 'Latin America', vehicles: 265290 },
  { destination: 'Africa', vehicles: 96414 },
]

export const japanPorts = [
  { name: 'Yokohama', role: 'KANTO GATEWAY' },
  { name: 'Nagoya', role: 'AUTOMOTIVE' },
  { name: 'Kobe', role: 'CONTAINER' },
  { name: 'Hakata', role: 'EAST ASIA' },
]

export const thailandFxBridge = {
  year: 2024,
  jpyPerUsd: 151.37,
  thbPerUsd: 35.29,
  jpyPerThb: 151.37 / 35.29,
}

export type AfricaCountry = {
  id: 'KE' | 'ZA' | 'TZ' | 'GH' | 'NG'
  name: string
  currency: string
  currencyName: string
  localPerUsd: number
  gdpPerCapitaUsd: number
  inflationPercent: number
  port: string
}

// World Bank, 2024 values. Exchange rates are period averages, not live quotes.
export const africaCountries: AfricaCountry[] = [
  { id: 'KE', name: 'Kenya', currency: 'KES', currencyName: 'Kenyan shilling', localPerUsd: 134.82, gdpPerCapitaUsd: 2132.4, inflationPercent: 4.5, port: 'Mombasa' },
  { id: 'ZA', name: 'South Africa', currency: 'ZAR', currencyName: 'South African rand', localPerUsd: 18.33, gdpPerCapitaUsd: 6267.2, inflationPercent: 4.4, port: 'Durban' },
  { id: 'TZ', name: 'Tanzania', currency: 'TZS', currencyName: 'Tanzanian shilling', localPerUsd: 2597.90, gdpPerCapitaUsd: 1186.7, inflationPercent: 3.1, port: 'Dar es Salaam' },
  { id: 'GH', name: 'Ghana', currency: 'GHS', currencyName: 'Ghanaian cedi', localPerUsd: 14.18, gdpPerCapitaUsd: 2390.8, inflationPercent: 22.8, port: 'Tema' },
  { id: 'NG', name: 'Nigeria', currency: 'NGN', currencyName: 'Nigerian naira', localPerUsd: 1478.97, gdpPerCapitaUsd: 1084.2, inflationPercent: 33.2, port: 'Lagos' },
]
