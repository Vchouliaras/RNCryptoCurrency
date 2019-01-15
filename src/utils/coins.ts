import { Coins, CoinsColor } from '../config'
import { ICoin, IAppState } from '../types'
import findlast from 'lodash.findlast'

export function getNormalName(name: string, character: string = '-'): string {
  return name.substring(0, name.indexOf(character))
}

export function getSymbol(name: string): string {
  let symbol = '-'
  const symbolName = name.split('-')[1]
  switch (symbolName) {
    case 'EUR':
      symbol = '€'
      break
    case 'USD':
      symbol = '$'
      break
  }

  return symbol
}

export function getCoinColor(coin: string): string {
  const index: number = Coins.indexOf(coin)
  return index !== -1 ? CoinsColor[index] : ''
}

export function areProductsEmpty(products: IAppState): Boolean {
  return Object.values(products).every(product => product.length === 0)
}

export function getLastNonZeroValue(values: Array<ICoin>): ICoin {
  const lastValue = findlast(values, value => value.price !== 0)

  if (typeof lastValue === 'undefined') {
    return {
      price: null,
      time: null,
    }
  }

  return {
    price: lastValue.price,
    time: lastValue.time,
  }
}
