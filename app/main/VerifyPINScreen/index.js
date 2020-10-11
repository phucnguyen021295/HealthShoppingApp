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
import {getAccountBalanceGlobal, setAccountBalanceGlobal} from '../../global';

class VerifyPINScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      pinCode: '',
    };
  }

  componentDidMount() {
    getAccountBalanceGlobal();
  }

  onChangeOTP = (otp) => {
    this.setState({otp});
  };

  pinInput = React.createRef();

  onVerifyOTP = () => {
    const {pinCode} = this.state;
    if (pinCode != '123456') {
      this.pinInput.current.shake().then(() => this.setState({pinCode: ''}));
    } else {
      this.props.onFinished();
    }
  };

  _checkCode = (pinCode) => {
    if (pinCode != '123456') {
      this.pinInput.current.shake().then(() => this.setState({pinCode: ''}));
    }
  };

  render() {
    const {name, pinCode} = this.state;
    return (
      <ImageBackGround
        source={require('./styles/images/background1.jpeg')}
        blurRadius={10}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <AppHeader title={'Xác thực mã PIN'} color={'#ffffff'} />
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
                value={pinCode}
                onTextChange={(pinCode) => this.setState({pinCode})}
                // onFulfill={this._checkCode}
                codeLength={6}
                onBackspace={() => console.log('No more back.')}
                password
                mask="﹡"
              />
              <Text
                text={'Vui lòng nhập mã Pin để tiếp tục đăng nhập.'}
                style={{color: '#ffffff', paddingTop: 30}}
              />
              <Button
                title="Xác thực PIN"
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

export default VerifyPINScreen;
