import * as Utils from '../index'
import { Coins, CoinsColor } from '../../config'
import { IAppState, ICoin } from '../../types'

jest.mock('Dimensions')

describe('Checking Utils methods', () => {
  test('If width is bigger than height, orientation should be LANDSCAPE', () => {
    const orientation = Utils.Orientation.getOrientation()
    expect(orientation).toBe(Utils.Orientation.LANDSCAPE)
  })

  test('If orientation mode is changing, cb should be call with the orientation value', () => {
    const cb = jest.fn()
    Utils.Orientation.detectOrientationMode(cb)

    expect(cb).toBeCalledWith(Utils.Orientation.LANDSCAPE)
  })

  test('If we get the canonical coin name from the Coinbase product name', () => {
    const coinName = Utils.Coins.getNormalName('ETH-EUR')
    expect(coinName).toBe('ETH')
  })

  test('If we get the currency symbol from the Coinbase product name', () => {
    const euro = Utils.Coins.getSymbol('ETH-EUR')
    const dollar = Utils.Coins.getSymbol('ETH-USD')

    expect(euro).toBe('€')
    expect(dollar).toBe('$')
  })

  test('If each product name have as corresponding hex color', () => {
    Coins.forEach(coin => {
      const color = Utils.Coins.getCoinColor(coin)
      expect(CoinsColor).toContain(color)
    })
  })

  test('If products in the state are empty', () => {
    let products: IAppState = {}
    let areProductsEmpty = Utils.Coins.areProductsEmpty(products)
    expect(areProductsEmpty).toBeTruthy()

    products = Coins.reduce((acc, coin) => ({ ...acc, [coin]: [{}] }), {})
    areProductsEmpty = Utils.Coins.areProductsEmpty(products)
    expect(areProductsEmpty).toBeFalsy()
  })

  test('If we can get last non zero value for a product', () => {
    let coinValues: Array<ICoin> = [{ price: 0, time: 12313 }, { price: 3, time: 456456 }, { price: 2, time: 123123 }]
    const { price } = Utils.Coins.getLastNonZeroValue(coinValues)
    expect(price).toStrictEqual(2)

    coinValues = [{ price: 0, time: 12313 }]
    {
      const { price } = Utils.Coins.getLastNonZeroValue(coinValues)
      expect(price).toBeNull()
    }
  })
})
