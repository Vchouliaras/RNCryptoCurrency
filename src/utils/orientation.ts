import { Dimensions } from 'react-native'

export const LANDSCAPE: string = 'landscape'
export const PORTRAIT: string = 'portrait'

export const getOrientation = (): string => {
  const { width, height } = Dimensions.get('window')

  return width > height ? LANDSCAPE : PORTRAIT
}

export const detectOrientationMode = (cb: (orientation: string) => void) => {
  Dimensions.addEventListener('change', () => {
    const orientation: string = getOrientation()
    cb(orientation)
  })
}
