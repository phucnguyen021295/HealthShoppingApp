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

import React, {PureComponent} from 'react';
import {
  Platform,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';

// Styles
import styles from './styles/index.css';
import AppHeader from '../../base/components/AppHeader';
import SmoothPinCodeInput from '../../base/components/SmoothPinCodeInput';
import Text from '../../base/components/Text';
import ImageBackGround from '../../base/components/ImageBackGround';
import global, {
  getAccountBalanceGlobal,
  getUserGlobal,
  verifyTokenGlobal,
} from '../../global';
import {setPinCode, getPinCode} from '../../core/storage';

class VerifyPINScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pinCode: '',
      pinCodeActive: global.pinCode,
    };

    this.onFirstVerify = false;
  }

  componentDidMount() {
    const {membercode, token} = global;
    getAccountBalanceGlobal();

    verifyTokenGlobal(
      token,
      () => {
        getUserGlobal(membercode);
      },
      () => {
        getUserGlobal(membercode);
      },
    );
  }

  pinInput = React.createRef();

  onVerifyOTP = async () => {
    const {pinCodeActive, pinCode} = this.state;

    if (!pinCodeActive) {
      setPinCode(pinCode);
      this.setState({pinCodeActive: pinCode, pinCode: ''});
      this.onFirstVerify = true;
    } else {
      if (pinCode != pinCodeActive) {
        this.pinInput.current.shake().then(() => this.setState({pinCode: ''}));
      } else {
        this.props.onFinished();
      }
    }
  };

  _checkCode = (pinCode) => {
    if (pinCode != '123456') {
      this.pinInput.current.shake().then(() => this.setState({pinCode: ''}));
    }
  };

  onChanegeCode = (code) => {
    const {pinCodeActive, pinCode} = this.state;
    if (code.length === 6 && pinCodeActive && !this.onFirstVerify) {
      if (code != pinCodeActive) {
        this.pinInput.current.shake().then(() => this.setState({pinCode: ''}));
      } else {
        this.props.onFinished();
      }
    } else {
      this.setState({pinCode: code});
    }
  };

  render() {
    const {pinCodeActive, pinCode} = this.state;
    return (
      <ImageBackGround
        source={require('./styles/images/background2.jpeg')}
        blurRadius={10}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <AppHeader
            showBack={false}
            title={pinCodeActive ? 'Xác thực mã PIN' : 'Nhập mã PIN'}
            color={'#ffffff'}
          />
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.container}>
              <SmoothPinCodeInput
                ref={this.pinInput}
                value={pinCode}
                onTextChange={this.onChanegeCode}
                // onFulfill={this._checkCode}
                codeLength={6}
                onBackspace={() => console.log('No more back.')}
                password
                mask="﹡"
                autoFocus
              />
              <Text
                text={
                  pinCodeActive
                    ? 'Vui lòng xác thực mã Pin để tiếp tục đăng nhập'
                    : 'Đăng nhập lần đầu. Vui lòng nhập mã Pin để tiếp tục đăng nhập.'
                }
                style={styles.text}
              />
              {pinCodeActive ? (
                <Button
                  title="Xác thực mã PIN"
                  buttonStyle={styles.btnButtonStyle}
                  onPress={this.onVerifyOTP}
                />
              ) : (
                <Button
                  title="Nhập mã PIN"
                  buttonStyle={styles.btnButtonStyle}
                  onPress={this.onVerifyOTP}
                />
              )}
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackGround>
    );
  }
}

export default VerifyPINScreen;
