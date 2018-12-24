import * as React from 'react'
import { SafeAreaView } from 'react-native'

import { Screen } from '@shoutem/ui'

import Header from './components/Header/Header.component'
import Coins from './components/Coins/Coins.component'
import Graph from './components/Graph/Graph.component'

import * as Config from './config'

import CryptoContext from './context'

export interface AppState {
  [key: string]: {
    price: string
  }
}

class App extends React.Component<{}, AppState> {
  // Set initial state.
  state = Config.Coins.reduce((acc, coin) => ({ ...acc, [coin]: { price: '' } }), {})

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

    ws.onmessage = msg => {
      const { price, product_id } = JSON.parse(msg.data)
      this.setState({ [product_id]: { price } })
    }

    ws.onerror = e => {
      console.error(e)
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
          </CryptoContext.Provider>
        </SafeAreaView>
      </Screen>
    )
  }
}

export default App
