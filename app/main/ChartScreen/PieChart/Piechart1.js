/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 1/19/21.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, Text, View, processColor} from 'react-native';

import {PieChart} from 'react-native-charts-wrapper';

class PieChartScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 15,
        form: 'CIRCLE',

        horizontalAlignment: 'RIGHT',
        verticalAlignment: 'CENTER',
        orientation: 'VERTICAL',
        wordWrapEnabled: true,
      },
      data: {
        dataSets: [
          {
            values: [
              {value: 45, label: 'Sandwiches'},
              {value: 21, label: 'Salads'},
              {value: 15, label: 'Soup'},
              {value: 9, label: 'Beverages'},
              {value: 15, label: 'Desserts'},
            ],
            label: 'Pie dataset',
            config: {
              colors: [
                processColor('#C0FF8C'),
                processColor('#FFF78C'),
                processColor('#FFD08C'),
                processColor('#8CEAFF'),
                processColor('#FF8C9D'),
              ],
              valueTextSize: 20,
              valueTextColor: processColor('green'),
              sliceSpace: 5,
              selectionShift: 13,
              // xValuePosition: "OUTSIDE_SLICE",
              // yValuePosition: "OUTSIDE_SLICE",
              valueFormatter: "#.#'%'",
              valueLineColor: processColor('green'),
              valueLinePart1Length: 0.5,
            },
          },
        ],
      },
      highlights: [{x: 2}],
      description: {
        text: 'This is Pie chart description',
        textSize: 15,
        textColor: processColor('darkgray'),
      },
    };
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
      <View>
        <PieChart
          style={{
            flex: 1,
          }}
          chartBackgroundColor={processColor('#FFF')}
          data={{
            dataSets: [
              {
                values: [{value: 45, label: 'Sandwiches'},
                  {value: 21, label: 'Salads'}],
                label: '',
                config: {
                  colors: [processColor('#45ED5C'), processColor('#008FFF')],
                  sliceSpace: 1,
                  drawValues: false,
                  valueLineVariableLength: true,
                  valueLinePart1Length: 5,
                  valueLinePart2Length: 5,
                  valueLineWidth: 5,
                },
              },
            ],
          }}
          touchEnabled={true}

          holeRadius={80}
          transparentCircleRadius={0}
          transparentCircleColor={processColor('red')}
          chartDescription={{
            text: '',
            textSize: 15,
            textColor: processColor('darkgray'),
          }}
          legend={{enabled: false}}
          animation={{
            durationX: 1000,
            durationY: 1000,
          }}
          drawEntryLabels={true}
          drawInside={true}
          onSelect={this.handleSelect}
          onChange={(event) => console.log(event.nativeEvent)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    flex: 1,
  },
});

export default PieChartScreen;
