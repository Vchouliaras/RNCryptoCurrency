// @ts-nocheck

import { SafeAreaView, ART } from 'react-native'
import * as d3 from 'd3'
import React, { Component } from 'react'

const width = 400
const height = 400

// var data = [4, 8, 15, 16, 23, 42];

// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, 420]);

/*
From https://bl.ocks.org/mbostock/4060954. Customizing and confirming it works with D3 v5.
*/

var n = 2, // number of layers
  m = 100, // number of samples per layer
  k = 10 // number of bumps per layer

// Inspired by Lee Byron’s test data generator.
const bump = (a, n) => {
  var x = 1 / (0.1 + Math.random()),
    y = 2 * Math.random() - 0.5,
    z = 10 / (0.1 + Math.random())
  for (var i = 0; i < n; i++) {
    var w = (i / n - y) * z
    a[i] += x * Math.exp(-w * w)
  }
}

const bumps = (n, m) => {
  var a = [],
    i
  for (i = 0; i < n; ++i) a[i] = 0
  for (i = 0; i < m; ++i) bump(a, n)
  return a
}

const stackMax = layer => d3.max(layer, d => d[1])

const stackMin = layer => d3.min(layer, d => d[0])

var stack = d3
  .stack()
  .keys(d3.range(n))
  .offset(d3.stackOffsetWiggle)
var layers0 = stack(d3.transpose(d3.range(n).map(() => bumps(m, k))))
var layers1 = stack(d3.transpose(d3.range(n).map(() => bumps(m, k))))
var layers = layers0.concat(layers1)

var x = d3
  .scaleLinear()
  .domain([0, m - 1])
  .range([0, width])

var y = d3
  .scaleLinear()
  .domain([d3.min(layers, stackMin), d3.max(layers, stackMax)])
  .range([height, 0])

var z = d3.interpolateCool

var area = d3
  .area()
  .x((d, i) => x(i))
  .y0(d => y(d[0]))
  .y1(d => y(d[1]))

// debuggers

class Graph extends Component {
  render() {
    return (
      <ART.Surface width={width} height={height}>
        <ART.Group>
          {layers.map((l, i) => (
            <ART.Shape key={i} d={area(l)} fill={z(Math.random())} />
          ))}
        </ART.Group>
      </ART.Surface>
    )
  }
}

export default Graph
