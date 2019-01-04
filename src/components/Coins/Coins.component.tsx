import * as React from 'react'
import { View, GridRow, ListView } from '@shoutem/ui'

import Logo from '../Logo/Logo.component'
import Price from '../Price/Price.component'
import Styles from './Coins.styles'

import * as Config from '../../config'
import CryptoContext from '../../context'
import { Coins as CoinsUtil } from '../../utils'
import { ICoin } from '../../types'

export default class Coins extends React.Component {
  renderRow(groupedCoins: any) {
    const cells = groupedCoins.map((coin: any) => (
      <View key={coin} style={Styles.cells}>
        <Logo coin={coin} />

        <CryptoContext.Consumer>
          {data => {
            const currentCoin: Array<ICoin> = data !== null ? data[coin] : []

            if (currentCoin.length === 0) {
              return null
            }

            const { price } = CoinsUtil.getLastValue(currentCoin)
            const symbol = CoinsUtil.getSymbol(coin)

            return <Price symbol={symbol} price={price} />
          }}
        </CryptoContext.Consumer>
      </View>
    ))

    return (
      <GridRow style={Styles.row} columns={2}>
        {cells}
      </GridRow>
    )
  }

  render() {
    const groupedData = GridRow.groupByRows(Config.Coins, Config.Coins.length)

    return (
      <View style={Styles.container}>
        <ListView data={groupedData} renderRow={this.renderRow} />
      </View>
    )
  }
}
