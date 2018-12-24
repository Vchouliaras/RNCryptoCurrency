import React, { Component, Fragment } from 'react'
import { View } from 'react-native'
import { Heading, Divider } from '@shoutem/ui'

import Styles from './Header.styles'

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <View style={Styles.container}>
          <Heading> Live Gryptos </Heading>
        </View>
        <Divider style={Styles.divider} styleName="line" />
      </Fragment>
    )
  }
}
