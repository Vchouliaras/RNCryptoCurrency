export interface ICoin {
  price: number | null
  time: number | null
}

export interface IAppState {
  [key: string]: Array<ICoin>
}

export interface IPriceProps {
  price: number | null
  symbol: string
}

export interface IGraphState {
  width: number
  height: number
}

export interface ILogoProps {
  coin: string
}

export interface IInfoState {
  seconds: number
}
