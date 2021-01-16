/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/30/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import { StyleSheet, View, processColor} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {BarChart} from 'react-native-charts-wrapper';

// Components
import DropDownPicker from '../../base/components/DropDownPicker';
import Text from '../../base/components/Text';

class StackedBarChartScreen extends PureComponent {
  constructor() {
    super();

    this.state = {
      country: 0,
      legend: {
        enabled: true,
        textSize: 15,
        stroke: '#ffffff',
        formSize: 15,
        xEntrySpace: 15,
        yEntrySpace: 10,
        wordWrapEnabled: true,

        color: processColor('white'),
        textColor: processColor('white'),
      },
      data: {
        dataSets: [
          {
            values: [5, 40, 77, 81, 43, 86, 86],
            label: 'Company fff',
            config: {
              drawValues: false,
              colors: [processColor('red')],
            },
          },
          {
            values: [40, 5, 50, 23, 79, 67, 78],
            label: 'Company B',
            config: {
              drawValues: false,
              colors: [processColor('blue')],
            },
          },
        ],
        config: {
          textColor: processColor('white'),
          barWidth: 0.2,
          group: {
            fromX: 0, // Tính từ khoảng cách số 0
            groupSpace: 0.4, // Khoảng cách giữa các group bar
            barSpace: 0.1, // Khoảng cách giữa các cột trong một cốt y
          },
        },
        barSpacePercent: 40,
      },
      xAxis: {
        valueFormatter: ['1990', '1991', '1992', '1993', '1994', '1997', '1977'],
        granularityEnabled: true,
        granularity: 0.5, // khoảng cách các mốc
        axisMaximum: 7, // Hiển thị tối đa số cột y
        axisMinimum: 0, // Hiển thị ít nhất số cột y
        centerAxisLabels: true,
        position: 'BOTTOM',
        textColor: processColor('white'),
        textSize: 15,
      },

      yAxis: {
        textSize: 15,
        textColor: processColor('white'),
        left: {
          color: processColor('white'),
          drawGridLines: true,
          gridLineWidth: 1,
          drawAxisLine: true,
          drawLabels: true,
          yOffset: -5,
          position: 'INSIDE_CHART',
          textSize: 15,
          gridColor: processColor('white'),
        },
        right: {
          enabled: false,
        },
      },

      marker: { // Hiển thị tolltip
        enabled: true,
        markerColor: processColor('#F0C0FF8C'),
        textColor: processColor('white'),
        markerFontSize: 14,
      },
    };
  }

  componentDidMount() {

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
  }

  render() {
    return (
      <View>
        <Text text={'Xem theo:'} />
        <DropDownPicker
            items={[
              {label: 'Ngày', value: 0, icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
              {label: 'Tuần', value: 1, icon: () => <Icon name="flag" size={18} color="#900" />},
              {label: 'Thán', value: 2, icon: () => <Icon name="flag" size={18} color="#900" />},
            ]}
            defaultValue={this.state.country}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa',}}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => this.setState({
              country: item.value
            })}
        />

        {/*<View style={{height: 80}}>*/}
        {/*  <Text> selected entry</Text>*/}
        {/*  <Text> {this.state.selectedEntry}</Text>*/}
        {/*</View>*/}

        <View style={styles.container}>
          <BarChart
            style={styles.chart}
            xAxis={this.state.xAxis}
            data={this.state.data}
            legend={this.state.legend}
            drawValueAboveBar={false}
            onSelect={this.handleSelect.bind(this)}
            onChange={(event) => console.log(event.nativeEvent)}
            // highlights={this.state.highlights}
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
    height: 400,
    color: '#ffffff'
  },
  chart: {
    flex: 1,
  },
});

export default StackedBarChartScreen;
