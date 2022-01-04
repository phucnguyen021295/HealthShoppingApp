/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 12/09/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  PureComponent,
} from 'react';
import {getReportApi} from '../../../../apis/health';
import {FlatList, View} from 'react-native';
import styles from './styles/index.css';
import PieChart from '../../../ChartScreen/PieChart';
import Text, {SemiBoldText} from '../../../../base/components/Text';

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

class DetailReport extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dataCharts: [],
      dataSelected: [],
    };
  }

  componentDidMount() {
    getReportApi(2, (response) => {
      const {data} = response;
      // console.log('getReportApi', data);
      this.setState({dataCharts: data});
    });
  }

  onViewableItemsChanged = ({changed}) => {
    console.log(
      {
        message: 'triggers change....1',
        changed: changed[0].index,
      },
      'CHECK',
    );
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.info}>
        <PieChart dataChart={item} />
      </View>
    );
  };

  render() {
    const {dataCharts} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={dataCharts}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.identity}
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 95,
            waitForInteraction: true
          }}
        />
        <View style={styles.bottom}>
          <SemiBoldText text={'Thang 1:'} style={styles.title} />
          <View style={styles.items}>
            {data.map((item, index) => {
              return (
                <View style={styles.item} key={index}>
                  <View style={[styles.dot, {backgroundColor: item.color}]} />
                  <Text
                    text={item.population || '0'}
                    style={styles.population}
                  />
                  <Text text={item.name} style={styles.name} />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default DetailReport;
