// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import {Bar,StockLine,SmoothLine,Scatterplot,Radar,Tree,Pie} from 'react-native-pathjs-charts'
import sampleData from '../Services/PathJS'

// Styles
import styles from './Styles/PathJSScreenStyle'

export default class PathJSScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Bar data={sampleData.bar.data} options={sampleData.bar.options} accessorKey='v'/>
          <Pie
            data={sampleData.pie.data}
            options={sampleData.pie.options}
            accessorKey="population" />
          <StockLine data={sampleData.stockLine.data} options={sampleData.stockLine.options} xKey='x' yKey='y' />
          <SmoothLine data={sampleData.smoothLine.data} options={sampleData.smoothLine.options} xKey='x' yKey='y' />
          <View style={{marginTop:20,marginBottom:20}}>
            <Scatterplot data={sampleData.scatterplot.data} options={sampleData.scatterplot.options} xKey="episode" yKey="rating" />
          </View>
          <Radar data={sampleData.radar.data} options={sampleData.radar.options} />
          <Tree data={sampleData.tree.data} options={sampleData.tree.options}  />
        </ScrollView>
      </View>
    )
  }
}
