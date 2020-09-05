/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/6/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {View, Text, StatusBar, SafeAreaView, TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {BlurView} from '@react-native-community/blur';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import Logo from '../../base/components/Logo';

// Styles
import styles from './styles/index.css';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    return (
      <ImageBackGround source={require('./styles/images/background.jpeg')}>
        {/*<BlurView style={styles.absolute} blurType="dark" />*/}
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>

        </SafeAreaView>
      </ImageBackGround>
    );
  }
}

export default LoginScreen;
