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
import {StatusBar, Animated, View, Keyboard, Platform} from 'react-native';
import {Input} from 'react-native-elements';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import ButtonBase from '../../base/components/ButtonBase';
import NotificationModal from '../../base/components/NotificationModal';

// Apis
import {loginUser} from '../../global';

// Styles
import styles from './styles/index.css';
import {heightToDP} from '../../core/utils/dimension';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
      isVisible: false,
    };

    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(heightToDP(200));

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassWord = this.onChangePassWord.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
       Platform.OS == 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
       Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: heightToDP(140),
      }),
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: heightToDP(200),
      }),
    ]).start();
  };

  onChangeName(username) {
    this.setState({username});
  }

  onChangePassWord(password) {
    this.setState({password});
  }

  onLogin = () => {
    const {username, password} = this.state;
    this.setState({loading: true}, () => {
      loginUser(
        username,
        password,
        (data) => {
          this.setState({loading: false, username: '', password: ''}, () => {
            this.props.navigation.replace('VerifyOTP');
          });
        },
        () => {
          this.setState({loading: false, password: '', isVisible: true});
        },
      );
    });
  };

  onCloseModal() {
    this.setState({isVisible: false});
  }

  render() {
    const {username, password, loading, isVisible} = this.state;
    return (
      <ImageBackGround
        source={require('../../images/backgroundHome.jpeg')}
        blurRadius={10}>
        <StatusBar barStyle="light-content" />
        <Animated.ScrollView
          style={{zIndex: 10, paddingBottom: this.keyboardHeight}}
          keyboardShouldPersistTaps={'handled'}>
          <View style={{alignItems: 'center'}}>
            <Animated.Image
              source={require('../LoginPinCode/styles/images/logo.png')}
              style={[styles.image, {height: this.imageHeight}]}
              resizeMode={'contain'}
            />
          </View>
          <View style={[styles.body]}>
            <Input
              value={username}
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
              loading={loading}
            />
          </View>
        </Animated.ScrollView>
        <NotificationModal
          isVisible={isVisible}
          title={'Thông báo'}
          description={'Tài khoản hoặc mật khẩu không chính xác'}
          titleButton={'Nhập lại'}
          onPress={this.onCloseModal}
        />
      </ImageBackGround>
    );
  }
}

export default LoginScreen;
