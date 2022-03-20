export interface ICountry {
  alpha3Code: string;
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

export type Flag = {
  svg: string
  png: string
}

export type Currency = {
  code: string
  name: string
  symbol: string
}

export type Language = {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

export type Country = {
  name: string
  topLevelDomain: string[]
  alpha2Code: string
  alpha3Code: string
  callingCodes: string[]
  capital: string
  altSpellings: string[]
  subregion: string
  region: string
  population: number
  latlng: number[]
  demonym: string
  area: number
  timezones: string[]
  nativeName: string
  numericCode: string
  flags: Flag
  currencies: Currency[]
  flag: string
  languages: Language[]
  borders: string[]
}
