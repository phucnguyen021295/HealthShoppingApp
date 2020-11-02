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
import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Components
import DrawerContent from './components/DrawerContent';
import Home from './components/HomeDrawer';
import History from './components/HistoryDrawer';
import PersonalPage from './components/PersonalPageDrawer';
import Detail from './components/DetailDrawer';

const Drawer = createDrawerNavigator();

function HomeDrawer() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      drawerStyle={isLargeScreen ? null : {width: '85%'}}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="PersonalPage" component={PersonalPage} />
      <Drawer.Screen name="Detail" component={Detail} />
    </Drawer.Navigator>
  );
}

export default HomeDrawer;
