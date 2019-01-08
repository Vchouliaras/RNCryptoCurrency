import React from 'react'
import { Heading, Divider, View } from '@shoutem/ui'

import Styles from './Header.styles'

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View style={Styles.container}>
          <Heading> Live Gryptos </Heading>
        </View>
        <Divider style={Styles.divider} styleName="line" />
      </React.Fragment>
    )
  }
}
