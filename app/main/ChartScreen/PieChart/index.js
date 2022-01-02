/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 11/1/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {Dimensions, Text, View, ScrollView, processColor} from 'react-native';
import {BarChart, PieChart} from 'react-native-chart-kit';
import {heightToDP} from '../../../core/utils/dimension';

import {labels} from '../formatData';
import {month} from '../styles/data';

const {width} = Dimensions.get('window');
//
// "Weak Leg": 0,
//     "Direct": 0,
//     "Mega": 0,
//     "F1": 0,
//     "Level": 0,
//     "Bonus": 0,
//     "Leadership Bonus": 0,
//     "total": 0,
//     "Order": "552.00",
//     "Transfer": "200.00",
//     "month": "01",
//     "year": "2021"

const data = [
  {
    name: 'TN nhánh yếu',
    population: 10,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#ffffff',
    legendFontSize: 15,
    key: 'Weak Leg',
  },
  {
    name: 'TN trực tiếp',
    population: 12,
    color: '#F00',
    legendFontColor: '#ffffff',
    legendFontSize: 15,
    key: 'Direct',
  },
  {
    name: 'TN lãnh đạo',
    population: 35,
    color: 'red',
    legendFontColor: '#ffffff',
    legendFontSize: 15,
    key: 'Mega',
  },
  {
    name: 'TN đều tầng',
    population: 54,
    color: '#00ff33',
    legendFontColor: '#ffffff',
    legendFontSize: 15,
    key: 'Level',
  },
  {
    name: 'Thưởng lãnh đạo',
    population: 0,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#ffffff',
    legendFontSize: 15,
    key: 'Bonus',
  },
  {
    name: 'Thưởng LĐCC',
    population: 0,
    color: 'rgb(71,127,57)',
    legendFontColor: '#ffffff',
    legendFontSize: 15,
    key: 'Leadership Bonus',
  },
];

class PieChartScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const {dataChart} = this.props;

    // const data1 = data.map(item => {
      //     //     item.population = dataChart[item.key];
      //     //     return item;
      //     // });
      //     // this.setState({data: data1})
  }

  render() {
      const {dataChart} = this.props;
    return (
      <View>
        <Text style={{color: '#ffffff', paddingHorizontal: 20}}>
            {`Tháng ${dataChart.month}`}
        </Text>
        <PieChart
          data={data}
          width={width}
          height={heightToDP(180)}
          hasLegend={true}
          chartConfig={{
            // backgroundColor: '#fffffff',
            // backgroundGradientFrom: '#fb8c00',
            // backgroundGradientTo: '#00000059',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              color: '#ffffff',
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
            fillShadowGradient: 'skyblue',
            fillShadowGradientOpacity: 0.8,
            // backgroundGradientFrom:  "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0,
          }}
          // bezier
          style={{
            marginVertical: 8,
            color: '#ffffff',
          }}
          accessor="population"
          backgroundColor="transparent"
          // paddingLeft="15"
          absolute
        />
      </View>
    );
  }
}

export default PieChartScreen;
