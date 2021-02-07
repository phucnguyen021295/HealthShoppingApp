/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/20/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTab from '../HomeScreen';
import TransferTab from '../TransferScreen';
import OderTab from '../OderScreen';
import NotifyTab from '../NotifyScreen';

import {small} from '../../core/fontSize';
import {heightToDP} from '../../core/utils/dimension';

const Tab = createBottomTabNavigator();

// TODO Can thuc hien doi text theo trang thai goi API that trong components nay. VD: Dang khoi tao cau hinh, Dang khoi tao resource....
class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          activeTintColor: '#ffffff',
          inactiveTintColor: '#dddddd',
          activeBackgroundColor: 'rgba(122,87,28,0.92)',
          indicatorStyle: {
            opacity: 0,
          },
          style: {
            backgroundColor: 'rgba(122,87,24,0.92)',
          },
          tabStyle: {
            borderRadius: 8,
            marginHorizontal: 10,
          },
          labelStyle: {
            fontSize: small,
            textTransform: 'capitalize',
            paddingBottom: heightToDP(3),
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Ionicons
                name={'ios-home'}
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notify"
          component={NotifyTab}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Ionicons
                name={'ios-notifications-sharp'}
                size={23}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Transfer"
          component={TransferTab}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={'cog-transfer'}
                size={25}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Oder"
          component={OderTab}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={'shopping'}
                size={22}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default MainScreen;
