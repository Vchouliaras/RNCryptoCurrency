import * as React from 'react'
import * as d3 from 'd3'
import { ART, Dimensions } from 'react-native'
import groupby from 'lodash.groupby'
import { Spinner } from '@shoutem/ui'

import Styles from './Graph.styles'
import CryptoContext from '../../context'
import * as Config from '../../config'
import { Coins } from '../../utils'

import { IGraphProps, IAppState } from '../../types'

export default class Graph extends React.Component<IGraphProps, {}> {
  static contextType = CryptoContext

  static defaultProps: IGraphProps

  /**
   *
   *
   * @memberof Graph
   */
  normalizeData = (contextData: IAppState) => {
    const values = Object.entries(contextData).reduce((acc, data) => {
      const key = data[0]
      const mappedData = data[1].map(d => ({ time: d.time, [key]: d.price }))

      return [...acc, ...mappedData]
    }, [])

    // Group values by time.
    const grouped = groupby(values, value => value.time)

    const normalizedData = Object.entries(grouped).map(g => {
      return g[1].reduce((acc, data) => ({ ...acc, ...data }), {})
    })

    return normalizedData
  }

  /**
   *
   *
   * @memberof Graph
   */
  getStackedData = (normalizedData: Array<{ [key: string]: number }>) => {
    const stack = d3
      .stack()
      .keys(Config.Coins)
      .order(d3.stackOrderDescending)
      .offset(d3.stackOffsetSilhouette)

    const stackedData = stack(normalizedData)

    return stackedData
  }

  /**
   *
   *
   * @memberof Graph
   */
  generateGraphPath = (
    series: Array<[]>,
    normalizedData: Array<{ [key: string]: number }>
  ): d3.Area<[number, number]> => {
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(normalizedData, d => d.time))
      .range([0, this.props.width])

    const stackMax = (layer: Array<[number, number]>) => d3.max(layer, d => d[1])
    const stackMin = (layer: Array<[number, number]>) => d3.min(layer, d => d[0])

    const yScale = d3
      .scaleSqrt()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .range([0, this.props.height])

    const area = d3
      .area()
      .x(d => xScale(d['data']['time']))
      .y0(d => yScale(d[0]))
      .y1(d => yScale(d[1]))

    return area
  }

  render() {
    const isProductsEmpty = Coins.isProductsEmpty(this.context)

    if (isProductsEmpty) {
      return <Spinner style={{ ...Styles.spinner, size: 'large' }} />
    }

    const normalizedData = this.normalizeData(this.context)
    const series = this.getStackedData(normalizedData)
    const area = this.generateGraphPath(series, normalizedData)

    return (
      <ART.Surface width={this.props.width} height={this.props.height}>
        <ART.Group>
          {series.map((layer, index) => (
            <ART.Shape key={index} d={area(layer)} fill={Config.CoinsColor[index]} />
          ))}
        </ART.Group>
      </ART.Surface>
    )
  }
}

Graph.defaultProps = {
  width: Dimensions.get('window').width,
  height: 350,
}
