/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 10/11/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import HistoryList from '../TransactionHistoryScreen/components/HistoryList';

// styles
import styles from './styles/index.css';
import LinearGradient from '../../base/components/LinearGradient';
import HeaderCustom from '../../base/components/HeaderCustom';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';

import message from '../../msg/history';
import {color} from '../../core/color';

const Tab = createMaterialTopTabNavigator();

function TabHistory() {
  return (
    <Tab.Navigator
      lazy={false}
      // initialRouteName="Tất cả"
      tabBarOptions={{
        activeTintColor: color,
        style: {
          backgroundColor: '#ffffff',
        },
        allowFontScaling: false,
      }}>
      <Tab.Screen name="Tất cả" component={HistoryList} />
      <Tab.Screen name="Chuyển khoản" component={HistoryList} />
    </Tab.Navigator>
  );
}

class HistoryDrawer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {intl} = this.props;
    const {formatMessage} = intl;
    return (
      <View style={styles.container}>
        <SafeAreaViewBase />
        <HeaderCustom
          title={formatMessage(message.titleHeader)}
          color={'#ffffff'}
          ViewComponent={LinearGradient}
        />
        <ImageBackGround
          source={require('../../images/backgroundHome.png')}
          blurRadius={4}>
          <View style={styles.info}>
            <HistoryList />
          </View>
        </ImageBackGround>
        <SafeAreaViewBase />
      </View>
    );
  }
}

HistoryDrawer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HistoryDrawer);
