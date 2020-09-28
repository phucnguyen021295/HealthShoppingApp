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

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeTab from '../HomeScreen';
import TransferTab from '../TransferScreen';
import OderTab from '../OderScreen';

// Styles
import styles from './styles/index.css';
import {smaller} from '../../core/fontSize';
import {color} from '../../core/color';

const Tab = createBottomTabNavigator();

// TODO Can thuc hien doi text theo trang thai goi API that trong components nay. VD: Dang khoi tao cau hinh, Dang khoi tao resource....
class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showIcon: true,
          activeTintColor: '#ffffff',
          inactiveTintColor: '#dddddd',
          indicatorStyle: {
            opacity: 0,
          },
          style: {
            backgroundColor: '#7a7a7a',
          },
          labelStyle: {
            fontSize: 12,
            textTransform: 'capitalize',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons name={'home'} size={25} color={color} />
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
                size={25}
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
