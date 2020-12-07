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

import React, {PureComponent} from 'react';
import {
  Platform,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import {Input} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import ButtonBase from '../../base/components/ButtonBase';

// Styles
import styles from './styles/index.css';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  onChangeName = (name) => {
    this.setState({name});
  };

  onChangePassWord = (password) => {
    this.setState({password});
  };

  onLogin = () => {
    const {name, password} = this.state;
    if (name === 'Phucnhb' && password === '123456') {
      this.props.navigation.navigate('VerifyOTP');
    } else {
      alert('Tài khoẳn hoặc mật khẩu không chính xác');
    }
  };

  render() {
    const {name, password} = this.state;
    return (
      <ImageBackGround
        source={require('../../images/backgroundHome.jpeg')}
        blurRadius={10}>
        <StatusBar barStyle="light-content" />
        <View style={{alignItems: 'center'}}>
          <FastImage
            source={require('./styles/images/logo.png')}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.body}>
            <Input
              value={name}
              placeholder="Tên đăng nhập"
              style={{color: '#ffffff'}}
              onChangeText={this.onChangeName}
            />
            <Input
              value={password}
              placeholder="Mật khẩu"
              style={{color: '#ffffff'}}
              secureTextEntry={true}
              onChangeText={this.onChangePassWord}
            />
            <ButtonBase
              title="Đăng nhập"
              buttonStyle={styles.btnButtonStyle}
              onPress={this.onLogin}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackGround>
    );
  }
}

export default LoginScreen;
