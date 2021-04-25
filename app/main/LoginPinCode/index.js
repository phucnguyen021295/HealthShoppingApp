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
  TouchableOpacity,
  View,
  Image,
  InteractionManager,
} from 'react-native';
import {Avatar, Button, Input} from 'react-native-elements';
import TouchID from 'react-native-touch-id';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Styles
import styles from './styles/index.css';
import Text from '../../base/components/Text';
import ImageBackGround from '../../base/components/ImageBackGround';
import global, {
  getAccountBalanceGlobal,
  getUserGlobal,
  verifyTokenGlobal,
  setActiveBiometryGlobal,
  requestTokenFirebase,
  setLanguageGlobal,
} from '../../global';
import {requestPermission} from '../../core/fcm';
import ButtonBase from '../../base/components/ButtonBase';
import {color} from '../../core/color';
import ModalBase from '../../base/components/ModalBase';
import SmoothPinCodeInput from '../../base/components/SmoothPinCodeInput';
import {clearData, setCheckIntroduce} from '../../core/storage';
import {callBack} from '../../core/data';

const optionalConfigObject = {
  title: 'My New Way', // Android
  imageColor: '#a47520', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Chạm vào cảm biến vân tay', // Android
  sensorErrorDescription: 'Xác thực thất bại', // Android
  cancelText: 'Đóng', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: true, // use unified error messages (default false)
  passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

class LoginPinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pinCode: '',
      pinCodeActive: global.pinCode,
      biometryType: '',
      isVisibleModal: false,
      title: '',
      description: '',
      isActiveBiometry: global.isActiveBiometry,
      verifyPin: '',
      isVisibleAccuracy: false,
      errorVerifyPin: false,
      isVisibleTokenExpired: false,
    };
  }

  async componentDidMount() {
    const {membercode, token} = global;
    getAccountBalanceGlobal();

    verifyTokenGlobal(
      token,
      () => {
        getUserGlobal(membercode);
      },
      (error) => {
        console.log('verifyTokenGlobal', error);
        if (error.data.errorcode === 2) {
          this.setState({isVisibleTokenExpired: true});
        }
        getUserGlobal(membercode);
      },
    );

    TouchID.isSupported(optionalConfigObject)
      .then((biometryType) => {
        // Success code

        this.setState({biometryType});
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          this.setState({biometryType});
          console.log('TouchID is supported.');
        }
      })
      .catch((error) => {
        // Failure code
        console.log('TouchID', error);
      });

    // request Firebase
    requestPermission();
    requestTokenFirebase();
  }

  pinInput = React.createRef();

  onVerifyOTP = async () => {
    const {pinCodeActive, pinCode} = this.state;

    if (pinCode !== pinCodeActive) {
      this.pinInput.current.shake().then(() => this.setState({pinCode: ''}));
    } else {
      this.props.onFinished();
    }
  };

  onLogout = () => {
    this.setState({isVisibleTokenExpired: false}, () => {
      InteractionManager.runAfterInteractions(() => {
        clearData().then(() => {
          setCheckIntroduce(true);
          this.props.navigation.replace('Login');
        });
      });
    });
  };

  onChangeCode = (code) => {
    const {pinCodeActive, pinCode} = this.state;
    // if (code.length === 6 && pinCodeActive && !this.onFirstVerify) {
    //   if (code != pinCodeActive) {
    //     this.pinInput.current.shake().then(() => this.setState({pinCode: ''}));
    //   } else {
    //     this.props.onFinished();
    //   }
    // } else {
    this.setState({pinCode: code});
    // }
  };

  onSwipeBiometry = () => {
    TouchID.authenticate(
      Platform.OS === 'ios'
        ? 'Yêu cầu xác thực vân tay'
        : 'Xác thực bằng vân tay, vui lòng chạm vào cảm biến vân tay',
      optionalConfigObject,
    )
      .then((success) => {
        this.props.onFinished();
      })
      .catch((error) => {
        // this.setState({
        //   isVisibleModal: true,
        //   title: 'Thông báo',
        //   description: 'Xác thực thất bại!',
        // });
      });
  };

  onBiometry = () => {
    const {biometryType, isActiveBiometry} = this.state;

    if (isActiveBiometry) {
      this.onSwipeBiometry();
      return;
    }

    if (biometryType === 'FaceID') {
      this.setState({
        isVisibleModal: true,
        title: 'Thông báo',
        description: 'Kích hoạt tính năng nhận diện khuân mặt?',
      });
    } else {
      this.setState({
        isVisibleModal: true,
        title: 'Thông báo',
        description: 'Kích hoạt tính năng vân tay?',
      });
    }
  };

  onCloseModal = () => {
    this.setState({
      isVisibleModal: false,
      isVisibleAccuracy: false,
    });
  };

  onActivated = () => {
    this.setState(
      {
        isVisibleModal: false,
      },
      () => {
        InteractionManager.runAfterInteractions(() => {
          this.setState({isVisibleAccuracy: true});
        });
      },
    );
  };

  onNavigateNotification = () => {
    this.props.navigation.navigate('Notify', {showBack: true});
  };

  onDetail = () => {};

  onChangeLanguage = () => {
    const {Language} = global;
    setLanguageGlobal(Language === 'vi' ? 'en' : 'vi');
  };

  pinInput = React.createRef();

  onChangeCodeActivePin = (code) => {
    this.setState({verifyPin: code});
  };

  onAccuracy = () => {
    const {verifyPin, pinCodeActive} = this.state;
    if (verifyPin !== pinCodeActive) {
      this.pinInput.current
        .shake()
        .then(() => this.setState({verifyPin: '', errorVerifyPin: true}));
    } else {
      this.setState({isVisibleAccuracy: false}, () => {
        InteractionManager.runAfterInteractions(() => {
          setActiveBiometryGlobal(true);
          this.onSwipeBiometry();
        });
      });
    }
  };

  renderModal = () => {
    const {
      isVisibleModal,
      title,
      description,
      verifyPin,
      isVisibleAccuracy,
      errorVerifyPin,
      isVisibleTokenExpired,
    } = this.state;
    return (
      <>
        <ModalBase
          isVisibleModal={isVisibleModal}
          title={title}
          description={description}>
          <View style={{flexDirection: 'row'}}>
            <Button
              title={'Đóng'}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={styles.buttonStyleModal2}
              titleStyle={{color: color}}
              onPress={this.onCloseModal}
            />
            <Button
              title={'Kích hoạt'}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={styles.buttonStyleModal}
              onPress={this.onActivated}
            />
          </View>
        </ModalBase>

        <ModalBase
          isVisibleModal={isVisibleTokenExpired}
          title={'Thông báo'}
          description={
            'Phiên đăng nhập của bạn đã hết hạn, vui lòng đăng nhập lại.'
          }>
          <View style={{flexDirection: 'row'}}>
            <Button
              title={'Đồng ý'}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={styles.buttonStyleModal1}
              onPress={this.onLogout}
            />
          </View>
        </ModalBase>

        <ModalBase
          isVisibleModal={isVisibleAccuracy}
          title={'Xác thực mã pin'}
          description={
            'Vui lòng xác thực mã pin để được kích hoạt tính năng này'
          }>
          <View style={{flexDirection: 'column', paddingTop: 30}}>
            <View style={{alignItems: 'center'}}>
              <SmoothPinCodeInput
                ref={this.pinInput}
                value={verifyPin}
                onTextChange={this.onChangeCodeActivePin}
                codeLength={6}
                onBackspace={() => console.log('No more back.')}
                password
                mask="﹡"
                autoFocus
                cellStyle={{borderColor: '#dddddd', borderWidth: 1}}
                cellStyleFocused={{borderColor: '#dddddd', borderWidth: 1}}
                containerStyle={{paddingBottom: 30}}
              />
              {errorVerifyPin ? (
                <Text
                  text={'Mã pin xác thực không đúng'}
                  style={{color: 'red'}}
                />
              ) : null}
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button
                title={'Hủy'}
                containerStyle={{flex: 1, borderRadius: 0}}
                buttonStyle={styles.buttonStyleModal2}
                titleStyle={{color: color}}
                onPress={this.onCloseModal}
              />
              <Button
                title={'Xác thực'}
                containerStyle={{flex: 1, borderRadius: 0}}
                buttonStyle={styles.buttonStyleModal}
                onPress={this.onAccuracy}
              />
            </View>
          </View>
        </ModalBase>
      </>
    );
  };

  render() {
    const {pinCode, biometryType} = this.state;

    const {image} = global;
    const urlImage = image
      ? {uri: image}
      : require('../HomeScreen/styles/images/avatar.png');
    return (
      <ImageBackGround
        source={require('../../images/backgroundHome.jpeg')}
        blurRadius={4}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.language}>
            <View />
            <TouchableOpacity
              style={styles.changeLanguage}
              onPress={this.onChangeLanguage}>
              <Ionicons
                name={'ios-globe-outline'}
                size={20}
                style={styles.icon}
                color={'#ffffff'}
              />
              <Text style={styles.textLanguage} text={'Tiếng Việt'} />
            </TouchableOpacity>
          </View>

          <View style={styles.logoContainer}>
            <Image
              source={require('./styles/images/logo.png')}
              style={[styles.image]}
              resizeMode={'contain'}
            />

            <Avatar
              rounded
              activeOpacity={1}
              source={urlImage}
              style={styles.avatar}
            />
          </View>

          <View style={[styles.body]}>
            <Input
              value={pinCode}
              placeholder="Nhập mã pin"
              style={{color: '#ffffff'}}
              secureTextEntry={true}
              keyboardType={'numeric'}
              maxLength={6}
              onChangeText={this.onChangeCode}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.btnLogin}>
                <ButtonBase
                  title="Đăng nhập"
                  buttonStyle={styles.btnButtonStyle}
                  onPress={this.onVerifyOTP}
                />
              </View>
              {biometryType ? (
                <TouchableOpacity
                  style={styles.btnTouchId}
                  onPress={this.onBiometry}>
                  <Image
                    source={
                      biometryType === 'FaceID'
                        ? require('./styles/images/faceId.png')
                        : require('./styles/images/touchId.png')
                    }
                    style={styles.imageTouchId}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>

          <View style={styles.utilities}>
            <TouchableOpacity
              style={styles.btnNotify}
              onPress={this.onNavigateNotification}>
              <Ionicons
                name={'notifications-outline'}
                size={30}
                style={styles.icon}
                color={'#ffffff'}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNotify} onPress={this.onDetail}>
              <Ionicons
                name={'ios-apps-outline'}
                size={30}
                style={styles.icon}
                color={'#ffffff'}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {this.renderModal()}
      </ImageBackGround>
    );
  }
}

export default LoginPinCode;
