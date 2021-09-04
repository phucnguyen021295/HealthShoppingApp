/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/30/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {Dimensions, StyleSheet, Text, View, processColor} from 'react-native';
import {LineChart, BarChart} from 'react-native-chart-kit';

class StackedBarChartScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

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
      <>
        <Text style={{color: '#ffffff', paddingVertical: 10}}>Thống kê theo ngày</Text>
        <BarChart
          data={{
            labels: [
              'Thứ 2',
              'Thứ 3',
              'Thứ 4',
              'Thứ 5',
              'Thứ 6',
              'Thứ 7',
              'CN',
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={300}
          // yAxisLabel="$"
          yAxisSuffix="$"
          // yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            // backgroundColor: '#fffffff',
            // backgroundGradientFrom: '#fb8c00',
            // backgroundGradientTo: '#00000059',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '1',
              stroke: '#ffa726',
            },
            fillShadowGradient: 'skyblue',
            fillShadowGradientOpacity: 1,
            // backgroundGradientFrom:  "#1E2923",
            backgroundGradientFromOpacity: 0,
            // backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0,
          }}
          // bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            backgroundColor: '#fffffff',
          }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
    color: '#ffffff',
  },
});

export default StackedBarChartScreen;
