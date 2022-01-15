/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/20/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeTab from '../HomeScreen';
import TransferTab from '../TransferScreen';
import OderTab from '../OderScreen';
import NotifyTab from '../NotifyScreen';
import IndividualTab from '../IndividualScreen';

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
        tabBarInactiveBackgroundColor={{backgroundColor: 'red'}}
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          activeTintColor: '#e39307',
          inactiveTintColor: '#dddddd',
          // activeBackgroundColor: '#5d451b',
          indicatorStyle: {
            opacity: 0,
          },
          style: {
            backgroundColor: 'rgba(125, 94, 39, 0.8)',
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0,
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
              <Ionicons name={'ios-home'} size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="NotifyTab"
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
          name="TransferTab"
          component={(props) => <TransferTab {...props} showBack={false} />}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <MaterialIcons
                name={'monetization-on'}
                size={25}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Oder"
          component={IndividualTab}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome5
                name={'user-alt'}
                size={19}
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
