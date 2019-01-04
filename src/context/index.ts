import * as React from 'react'
import { IAppState } from '../types'

const CryptoContext = React.createContext<IAppState | null>(null)

export default CryptoContext
