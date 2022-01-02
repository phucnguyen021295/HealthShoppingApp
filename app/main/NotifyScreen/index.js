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

import React from 'react';
import {
  View,
  useWindowDimensions,
} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// Components
import HeaderCustom from '../../base/components/HeaderCustom';
import LinearGradient from '../../base/components/LinearGradient';
import ImageBackGround from '../../base/components/ImageBackGround';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';
import NotifyList from './components/NotifyList';
import HistoryList from '../TransactionHistoryScreen/components/HistoryList';
import Text from '../../base/components/Text';

// styles
import styles from './styles/index.css';

import message from '../../msg/notify';
import {heightToDP} from '../../core/utils/dimension';

const renderScene = SceneMap({
  first: NotifyList,
  second: HistoryList,
  three: NotifyList,
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
    {key: 'first', title: 'Khuyến mại'},
    {key: 'second', title: 'Biến động'},
    {key: 'three', title: 'Tin khác'},
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

function NotifyScreen(props) {
  const {route, intl} = props;
  const {formatMessage} = intl;
  const showBack = route?.params?.showBack || false;
  return (
    <View style={styles.container}>
      <ImageBackGround source={require('../../images/backgroundHome.png')}>
        <View style={styles.backGround}>
          <SafeAreaViewBase />
          <HeaderCustom
            title={formatMessage(message.titleHeader)}
            color={'#ffffff'}
            showBack={showBack}
            ViewComponent={LinearGradient}
          />
          <TabViews />
        </View>
      </ImageBackGround>
    </View>
  );
}

NotifyScreen.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(NotifyScreen);
