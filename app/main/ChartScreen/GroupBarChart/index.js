/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 1/10/21.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, Text, View, processColor} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

class StackedBarChartScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        wordWrapEnabled: true,
      },
      data: {
        dataSets: [
          {
            values: [5, 40, 77, 81, 43],
            label: 'Company A',
            config: {
              drawValues: false,
              colors: [processColor('red')],
            },
          },
          {
            values: [40, 5, 50, 23, 79],
            label: 'Company B',
            config: {
              drawValues: false,
              colors: [processColor('blue')],
            },
          },
        ],
        config: {
          barWidth: 0.2,
          group: {
            fromX: 0,
            groupSpace: 0.1,
            barSpace: 0.1,
          },
        },
      },
      xAxis: {
        valueFormatter: ['1990', '1991', '1992', '1993', '1994'],
        granularityEnabled: true,
        granularity: 1,
        axisMaximum: 5,
        axisMinimum: 0,
        centerAxisLabels: true,
      },

      marker: {
        enabled: true,
        markerColor: processColor('#F0C0FF8C'),
        textColor: processColor('white'),
        markerFontSize: 14,
      },
    };
  }

  componentDidMount() {
    // in this example, there are line, bar, candle, scatter, bubble in this combined chart.
    // according to MpAndroidChart, the default data sequence is line, bar, scatter, candle, bubble.
    // so 4 should be used as dataIndex to highlight bubble data.

    // if there is only bar, bubble in this combined chart.
    // 1 should be used as dataIndex to highlight bubble data.

    this.setState({
      ...this.state,
      highlights: [
        {x: 1, y: 40},
        {x: 2, y: 50},
      ],
    });
  }

  handleSelect(event) {
    let entry = event.nativeEvent;
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null});
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)});
    }

    console.log(event.nativeEvent);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 80}}>
          <Text style={{color: '#ffffff'}}>Thống kê gtheo ngày</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <BarChart
            style={styles.chart}
            xAxis={this.state.xAxis}
            data={this.state.data}
            legend={this.state.legend}
            drawValueAboveBar={false}
            onSelect={this.handleSelect.bind(this)}
            onChange={(event) => console.log(event.nativeEvent)}
            highlights={this.state.highlights}
            marker={this.state.marker}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
    height: 400
  },
  chart: {
    flex: 1,
  },
});

export default StackedBarChartScreen;