/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/1/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';

// Components
import Header from '../Header';
import ImageBackGround from '../../../../base/components/ImageBackGround';
import PieChart from '../../../ChartScreen/PieChart';

// Apis
import {getReportApi} from '../../../../apis/health';

// styles
import styles from './styles/index.css';
import HistoryItem from '../../../TransactionHistoryScreen/components/HistoryItem';

class DetailDrawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataCharts: [],
    };
  }

  componentDidMount() {
    getReportApi(2, (response) => {
      const {data} = response;
      this.setState({dataCharts: data});
    });
  }

  renderItem = ({item}) => (
    <View style={styles.info}>
      <PieChart dataChart={item} />
    </View>
  );

  render() {
    const {navigation} = this.props;
    const {dataCharts} = this.state;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ImageBackGround
          source={require('../../../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <FlatList
            data={dataCharts}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.identity}
            showsVerticalScrollIndicator={false}
          />
          {/*<View style={{flex: 1}}>*/}
          {/*  <View style={styles.info}>*/}
          {/*    <PieChart />*/}
          {/*  </View>*/}
          {/*</View>*/}
        </ImageBackGround>
      </View>
    );
  }
}

export default DetailDrawer;
