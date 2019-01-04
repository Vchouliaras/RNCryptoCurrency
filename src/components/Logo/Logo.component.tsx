import * as React from 'react'
import { Subtitle } from '@shoutem/ui'
import { View, Text } from 'react-native'

import { Coins } from '../../utils'
import Styles from './Logo.styles'
import { ILogoProps } from '../../types'

const Logo: React.SFC<ILogoProps> = ({ coin }) => {
  const name = Coins.getNormalName(coin)
  const coinColor = Coins.getCoinColor(coin)

  return (
    <View style={Styles.cells}>
      <Subtitle styleName="inflexible" style={Styles.subtitle}>
        {name}
      </Subtitle>
      <Text style={{ ...Styles.colorLabel, backgroundColor: coinColor }}> </Text>
    </View>
  )
}

export default Logo
