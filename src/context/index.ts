import * as React from 'react'

import { AppState } from '../index'

const CryptoContext = React.createContext<AppState | null>(null)

export default CryptoContext
