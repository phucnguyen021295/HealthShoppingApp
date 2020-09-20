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
import {View, useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Components
import OderScreen from '../OderScreen';
import Header from './components/Header';

// Styles
import styles from './styles/index.css';
import {color} from '../../core/color';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={OderScreen} />
      <Drawer.Screen name="Article" component={OderScreen} />
    </Drawer.Navigator>
  );
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MyDrawer />
      </View>
    );
  }
}

export default HomeScreen;
