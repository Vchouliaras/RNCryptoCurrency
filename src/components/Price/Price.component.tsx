import * as React from 'react'
import { Title } from '@shoutem/ui'
import { View } from 'react-native'

interface PriceProps {
  price: string
}

const Price: React.SFC<PriceProps> = ({ price }) => (
  <View>
    <Title styleName="bold"> {Number(price).toFixed(3)} </Title>
  </View>
)

export default Price
