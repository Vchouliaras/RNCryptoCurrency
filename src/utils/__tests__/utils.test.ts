import * as Utils from '../index'

jest.mock('Dimensions')

describe('Checking orientation methods', () => {
  test('If width is bigger than height, orientation should be LANDSCAPE', () => {
    const orientation = Utils.Orientation.getOrientation()
    expect(orientation).toBe(Utils.Orientation.LANDSCAPE)
  })

  test('If orientation mode is changing, cb should be call with the orientation value', () => {
    const cb = jest.fn()
    Utils.Orientation.detectOrientationMode(cb)

    expect(cb).toBeCalledWith(Utils.Orientation.LANDSCAPE)
  })
})
