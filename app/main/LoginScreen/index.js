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
import {
  Platform,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';

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
          <View style={{alignItems: 'center'}}>
            <FastImage
              source={require('./styles/images/logo.png')}
              style={{width: 200, height: 200, marginTop: 30}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{paddingHorizontal: 20, paddingTop: 50}}>
              <Input placeholder="Tên đăng nhập" style={{color: '#ffffff'}} />
              <Input placeholder="Mật khẩu" style={{color: '#ffffff'}} secureTextEntry={true} />
              <Button title="Đăng nhập" buttonStyle={styles.btnButtonStyle} />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackGround>
    );
  }
}

export default LoginScreen;
