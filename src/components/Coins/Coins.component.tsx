import React, { Component } from 'react'
import { View } from 'react-native'
import { GridRow, ListView } from '@shoutem/ui'

import Logo from '../Logo/Logo.component'
import Price from '../Price/Price.component'
import Styles from './Coins.styles'

import * as Config from '../../config'
import CryptoContext from '../../context'

class Coins extends Component {
  renderRow(groupedCoins: any) {
    const cells = groupedCoins.map((coin: any) => (
      <View key={coin} style={Styles.cells}>
        <Logo coin={coin} />
        <CryptoContext.Consumer>{data => data && <Price price={data[coin].price} />}</CryptoContext.Consumer>
      </View>
    ))

    return (
      <GridRow style={Styles.row} columns={2}>
        {cells}
      </GridRow>
    )
  }

  render() {
    const groupedData = GridRow.groupByRows(Config.Coins, 2)

    return (
      <View style={Styles.container}>
        <ListView data={groupedData} renderRow={this.renderRow} />
      </View>
    )
  }
}

export default Coins
