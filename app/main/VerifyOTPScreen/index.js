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

// Api
import {getActiveApi, verifyOTPApi} from '../../apis/health';

// Styles
import styles from './styles/index.css';
import ImageBackGround from '../../base/components/ImageBackGround';
import {setAccountBalanceGlobal, setMemberCodeGlobal} from '../../global';

class VerifyOTPScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      code: '',
    };
    this.count = 0;
  }

  componentDidMount() {
    getActiveApi(
      () => {},
      () => {
        alert('Đã xảy ra xự cố. vui lòng thử lại sau');
      },
    );
  }

  pinInput = React.createRef();

  onVerifyOTP = () => {
    const {code} = this.state;
    this.setState({loading: true}, () => {
      verifyOTPApi(
        code,
        (response) => {
          const membercode = response.data;
          setCheckVerifyOTP(true);
          // // TODO: Set tạm số tiến
          // setAccountBalanceGlobal(1000);
          setMemberCodeGlobal(membercode);
          this.props.navigation.navigate('VerifyPIN');
          this.setState({loading: false});
        },
        () => {
          this.count++;
          this.pinInput.current
            .shake()
            .then(() => this.setState({code: '', loading: false}));
          if (this.count === 5) {
            this.props.navigation.navigate('Login');
          }
        },
      );
    });
  };

  render() {
    const {loading, code} = this.state;
    return (
      <ImageBackGround
        source={require('./styles/images/background2.jpeg')}
        blurRadius={10}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <AppHeader showBack={false} title={'Xác thực mã OTP'} color={'#ffffff'} />
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.body}>
              <SmoothPinCodeInput
                ref={this.pinInput}
                value={code}
                onTextChange={(code) => this.setState({code})}
                // onFulfill={this._checkCode}
                codeLength={7}
                keyboardType={'default'}
                onBackspace={() => console.log('No more back.')}
                autoFocus={true}
              />
              <Text
                text={'Vui lòng nhập mã OTP để tiếp tục đăng nhập.'}
                style={{color: '#ffffff', paddingTop: 30}}
              />
              <Button
                title="Xác thực OTP"
                buttonStyle={styles.btnButtonStyle}
                onPress={this.onVerifyOTP}
                loading={loading}
              />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackGround>
    );
  }
}

export default VerifyOTPScreen;
