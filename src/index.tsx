import * as React from 'react'
import { SafeAreaView } from 'react-native'
import { Screen } from '@shoutem/ui'
// import takeright from 'lodash.takeright'

import Header from './components/Header/Header.component'
import Coins from './components/Coins/Coins.component'
import Graph from './components/Graph/Graph.component'
import Info from './components/Info/Info.component'

import * as Config from './config'
import CryptoContext from './context'
import { IAppState, ICoin } from './types'
import { Coins as CoinsUtil } from './utils'

export default class App extends React.Component<{}, IAppState> {
  // Set initial state.
  state = Config.Coins.reduce((acc, coin) => ({ ...acc, [coin]: [] }), {})

  /**
   * Determine whether state needs to be updated.
   *
   * We do not update when WS response returns no data
   * or returns updates for same coin prices.
   *
   * @memberof App
   */
  shouldUpdateState = (currentProductId: string, currentPrice: string): Boolean => {
    let shouldUpdate = true

    if (typeof currentProductId === 'undefined') {
      shouldUpdate = false
    }

    const lastCoinValue: ICoin = CoinsUtil.getLastValue(this.state[currentProductId])
    if (lastCoinValue.price === Number(currentPrice)) {
      shouldUpdate = false
    }

    return shouldUpdate
  }

  /**
   * Helper to update state.
   *
   * @memberof App
   */
  updateState = (product_id: string, price: string): void => {
    let newState: IAppState = {}

    this.setState(state => {
      const now = Date.now()
      Object.entries(state).map(([id, values]) => {
        // let prevValues = values.length > 5
        //   ? takeright(values, 3)
        //   : [...values]

        // debugger

        newState[id] = [
          ...values,
          {
            price: id === product_id ? Number(price) : 0,
            time: now,
          },
        ]
      })

      return newState
    })
  }

  componentDidMount() {
    const ws = new WebSocket(Config.Endpoints.WEBSOCKET_FEED_URL)

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: 'subscribe',
          channels: ['ticker'],
          product_ids: Config.Coins,
        })
      )
    }

    ws.onmessage = ({ data }) => {
      const { product_id, price } = JSON.parse(data)

      // eslint-disable-next-line
      console.log(product_id, price)

      if (!this.shouldUpdateState(product_id, price)) {
        return null
      }

      this.updateState(product_id, price)

      return
    }

    ws.onerror = e => {
      console.log(e)
    }
  }

  render() {
    return (
      <Screen>
        <SafeAreaView>
          <Header />
          <CryptoContext.Provider value={this.state}>
            <Coins />
            <Graph />
            <Info />
          </CryptoContext.Provider>
        </SafeAreaView>
      </Screen>
    )
  }
}
