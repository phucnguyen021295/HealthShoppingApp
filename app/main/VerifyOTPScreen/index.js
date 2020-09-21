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
  SafeAreaView,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import SmoothPinCodeInput from '../../base/components/SmoothPinCodeInput';

// Components
import AppHeader from '../../base/components/AppHeader';
import Text from '../../base/components/Text';

// Storage
import {setCheckVerifyOTP} from '../../core/storage';

// Styles
import styles from './styles/index.css';
import ImageBackGround from '../../base/components/ImageBackGround';

class VerifyOTPScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      code: '',
    };
    this.count = 0;
  }

  onChangeOTP = (otp) => {
    this.setState({otp});
  };

  pinInput = React.createRef();

  onVerifyOTP = () => {
    const {code} = this.state;
    if (code != '123456') {
      this.count++;
      this.pinInput.current.shake().then(() => this.setState({code: ''}));
    } else {
      setCheckVerifyOTP(true);
      this.props.navigation.navigate('VerifyPIN');
    }

    if (this.count === 5) {
      this.props.navigation.navigate('Login');
    }
  };

  _checkCode = (code) => {
    if (code != '123456') {
      this.pinInput.current.shake().then(() => this.setState({code: ''}));
    }
  };

  // setPinInput = (ref) => {
  //   this.pinInput = ref;
  // };

  render() {
    const {name, password, code} = this.state;
    return (
      <ImageBackGround
        source={require('./styles/images/background1.jpeg')}
        blurRadius={10}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <AppHeader title={'Xác thực mã OTP'} color={'#ffffff'} />
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: 80,
                alignItems: 'center',
              }}>
              <SmoothPinCodeInput
                ref={this.pinInput}
                value={code}
                onTextChange={(code) => this.setState({code})}
                // onFulfill={this._checkCode}
                codeLength={6}
                onBackspace={() => console.log('No more back.')}
              />
              <Text
                text={'Vui lòng nhập mã Pin để tiếp tục đăng nhập.'}
                style={{color: '#ffffff', paddingTop: 30}}
              />
              <Button
                title="Xác thực OTP"
                buttonStyle={styles.btnButtonStyle}
                onPress={this.onVerifyOTP}
              />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackGround>
    );
  }
}

export default VerifyOTPScreen;