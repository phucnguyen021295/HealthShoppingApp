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
import {View, FlatList, ScrollView} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

// Components
import Header from '../HomeScreen/components/Header';
import ImageBackGround from '../../base/components/ImageBackGround';
import PieChart from '../ChartScreen/PieChart';

// Apis
import {getReportApi} from '../../apis/health';

// styles
import styles from './styles/index.css';
import HistoryItem from '../TransactionHistoryScreen/components/HistoryItem';
import ChartScreen from '../ChartScreen';
import LinearGradient from '../../base/components/LinearGradient';
import HeaderCustom from '../../base/components/HeaderCustom';

class DetailDrawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataCharts: [],
      selectedIndex: 0,
    };
  }

  componentDidMount() {
    getReportApi(2, (response) => {
      const {data} = response;
      this.setState({dataCharts: data});
    });
  }

  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex});
  };

  renderItem = ({item}) => (
    <View style={styles.info}>
      <PieChart dataChart={item} />
    </View>
  );

  render() {
    const buttons = ['All', 'Detail'];
    const {navigation} = this.props;
    const {dataCharts, selectedIndex} = this.state;
    return (
      <View style={styles.container}>
        <HeaderCustom title={'Report'} color={'#ffffff'} ViewComponent={LinearGradient} />
        <ImageBackGround
          source={require('../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: 12,
            }}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{height: 40, width: 180, borderRadius: 20}}
              selectedButtonStyle={{backgroundColor: '#dddddd'}}
            />
          </View>

          {selectedIndex === 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0,0,0,0.49)',
                  paddingVertical: 10,
                }}>
                <ChartScreen styleChart={{height: 400}} />
              </View>
            </ScrollView>
          ) : (
            <FlatList
              data={dataCharts}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.identity}
              showsVerticalScrollIndicator={false}
            />
          )}

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
