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
import {useWindowDimensions, View} from 'react-native';
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
import {getPaidApi, cancelGetPaidApi} from '../../apis/health';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import WithdrawalLogList from './components/WithdrawalLogList';
import Text from '../../base/components/Text';
import {heightToDP} from '../../core/utils/dimension';

const renderScene = SceneMap({
  first: HistoryList,
  second: WithdrawalLogList,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({route, focused, color}) => (
      <Text style={[styles.titleTabBar, {color}]}>{route.title}</Text>
    )}
    indicatorStyle={{
      backgroundColor: 'white',
      height: 1,
      justifyContent: 'flex-end',
    }}
    indicatorContainerStyle={{height: heightToDP(54), alignItems: 'flex-end'}}
    tabStyle={{
      paddingBottom: 0,
    }}
    style={styles.tabItem}
  />
);

function TabViews() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Nhật ký tài khoản'},
    {key: 'second', title: 'Nhật ký rút tiền'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width: layout.width}}
      lazy
    />
  );
}

function HistoryDrawer(props) {
  const {intl} = props;
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
          <TabViews />
        </View>
      </ImageBackGround>
      <SafeAreaViewBase />
    </View>
  );
}

HistoryDrawer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HistoryDrawer);
