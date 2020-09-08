/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/8/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  View,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

// Styles
import styles from './styles/index.css';

class VerifyOTPScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    };
  }

  onChangeOTP = (otp) => {
    this.setState({otp});
  };

  onVerifyOTP = () => {};

  render() {
    const {name, password} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{paddingHorizontal: 20, paddingTop: 50}}>
              <TextInput
                ref={(ref) => (this.ref = ref)}
                value={name}
                placeholder="Nhập mã OTP"
                style={{color: '#ffffff'}}
                keyboardType={'number-pad'}
                maxLength={6}
                autoFocus={true}
                allowFontScaling={false}
                onChangeText={this.onChangeOTP}
              />
              <Button
                title="Đăng nhập"
                buttonStyle={styles.btnButtonStyle}
                disabled={!name || !password}
                onPress={this.onVerifyOTP}
              />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default VerifyOTPScreen;
