/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/09/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import {useWindowDimensions, View} from 'react-native';

// Components
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';
import HeaderCustom from '../../base/components/HeaderCustom';
import LinearGradient from '../../base/components/LinearGradient';
import ImageBackGround from '../../base/components/ImageBackGround';
import PurchaseHistoryList from './components/PurchaseHistoryList';
import OnlineOrderList from './components/OnlineOrderList';

import styles from './styles/index.css';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Text from '../../base/components/Text';
import {heightToDP} from '../../core/utils/dimension';
import {injectIntl} from 'react-intl';
import message from '../../msg/purchaseHistory';

const renderScene = SceneMap({
  first: PurchaseHistoryList,
  second: OnlineOrderList,
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

function TabViews(props) {
  const {formatMessage} = props;
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: formatMessage(message.purchaseHistoryList)},
    {key: 'second', title: formatMessage(message.onlineOrderList)},
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

function PurchaseHistoryScreen(props) {
  const {intl} = props;
  const {formatMessage} = intl;
  return (
    <ImageBackGround source={require('../../images/backgroundHome.png')}>
      <View style={styles.backGround}>
        <SafeAreaViewBase />
        <HeaderCustom
          title={formatMessage(message.titleHeader)}
          color={'#ffffff'}
          ViewComponent={LinearGradient}
        />
        <TabViews formatMessage={formatMessage} />
      </View>
    </ImageBackGround>
  );
}

export default injectIntl(PurchaseHistoryScreen);
