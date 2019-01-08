import * as React from 'react'
import { Title } from '@shoutem/ui'
import { View, Text } from 'react-native'

import { IPriceProps } from '../../types'

const Price: React.SFC<IPriceProps> = ({ price = 0, symbol }) => (
  <View>
    <Title>
      <Text>{symbol}</Text>
      {price && price.toFixed(2)}
    </Title>
  </View>
)

export default Price
