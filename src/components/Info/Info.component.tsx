import * as React from 'react'
import { View, Text } from '@shoutem/ui'

import Styles from './Info.styles'
import CryptoContext from '../../context'
import { Coins } from '../../utils'

import { IInfoState } from '../../types'

export default class Info extends React.Component<{}, IInfoState> {
  static contextType = CryptoContext

  state = { seconds: 0 }

  private timerID: number = 0

  tick = () => {
    this.setState(state => ({ seconds: state.seconds + 1 }))
  }

  componentDidUpdate(_prevProps: any, prevState: IInfoState) {
    if (prevState.seconds === this.state.seconds && this.state.seconds > 0) {
      this.setState({ seconds: 0 })
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    const areProductsEmpty = Coins.areProductsEmpty(this.context)

    if (areProductsEmpty) {
      return null
    }

    return (
      <View style={Styles.container}>
        <Text styleName="h-center">{`Last update ${this.state.seconds}s ago`}</Text>
      </View>
    )
  }
}
