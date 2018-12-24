import React from 'react'
import { Subtitle } from '@shoutem/ui'
import { View } from 'react-native'

import Styles from './Logo.styles'

interface LogoProps {
  coin: string
}

const Logo: React.SFC<LogoProps> = ({ coin }) => {
  return (
    <View style={Styles.cells}>
      <Subtitle styleName="inflexible" style={Styles.subtitle}>
        {coin}
      </Subtitle>
    </View>
  )
}

export default Logo
