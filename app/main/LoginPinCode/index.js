/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/8/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {injectIntl, intlShape} from 'react-intl';
import {
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  InteractionManager,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
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

import {LanguageContext} from '../../../ContextProvider';

import message from '../../msg/loginPinCode';

class LoginPinCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pinCode: '',
      pinCodeActive: global.pinCode,
      biometryType: '',
      isVisible: false,
      title: '',
      description: '',
      isActiveBiometry: global.isActiveBiometry,
      verifyPin: '',
      isVisibleAccuracy: false,
      errorVerifyPin: false,
      isVisibleTokenExpired: false,
    };

    const {intl} = props;
    const {formatMessage} = intl;

    this.optionalConfigObject = {
      title: 'My New Way', // Android
      imageColor: '#a47520', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: formatMessage(message.sensorDescription), // Android
      sensorErrorDescription: formatMessage(message.sensorErrorDescription), // Android
      cancelText: formatMessage(message.btnClosed), // Android
      fallbackLabel: formatMessage(message.fallbackLabel), // iOS (if empty, then label is hidden)
      unifiedErrors: true, // use unified error messages (default false)
      passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };
  }

  async componentDidMount() {
    const {membercode, token} = global;
    getAccountBalanceGlobal();

    verifyTokenGlobal(
      token,
      (data) => {
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

    TouchID.isSupported(this.optionalConfigObject)
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
    this.setState({pinCode: code});
  };

  onSwipeBiometry = () => {
    const {intl} = this.props;
    const {formatMessage} = intl;
    TouchID.authenticate(
      Platform.OS === 'ios'
        ? formatMessage(message.requireFinIOS)
        : formatMessage(message.requireFinAndroid),
      this.optionalConfigObject,
    )
      .then((success) => {
        this.props.onFinished();
      })
      .catch((error) => {
        // this.setState({
        //   isVisible: true,
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

    const {intl} = this.props;
    const {formatMessage} = intl;

    this.setState({
      isVisible: true,
      title: formatMessage(message.titleModal),
      description:
        biometryType === 'FaceID'
          ? formatMessage(message.activeFaceID)
          : formatMessage(message.activeTouch),
    });
  };

  onCloseModal = () => {
    this.setState({
      isVisible: false,
      isVisibleAccuracy: false,
    });
  };

  onActivated = () => {
    this.setState(
      {
        isVisible: false,
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
    const {language} = this.context;
    const _language = language === 'vi' ? 'en' : 'vi';
    setLanguageGlobal(_language);
    this.context.updateLanguage(_language);
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
      isVisible,
      title,
      description,
      verifyPin,
      isVisibleAccuracy,
      errorVerifyPin,
      isVisibleTokenExpired,
    } = this.state;

    const {intl} = this.props;
    const {formatMessage} = intl;
    return (
      <>
        <ModalBase
          isVisible={isVisible}
          title={title}
          description={description}>
          <View style={{flexDirection: 'row'}}>
            <Button
              title={formatMessage(message.btnCloseModal)}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={styles.buttonStyleModal2}
              titleStyle={{color: color}}
              onPress={this.onCloseModal}
            />
            <Button
              title={formatMessage(message.btnActive)}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={styles.buttonStyleModal}
              onPress={this.onActivated}
            />
          </View>
        </ModalBase>

        <ModalBase
          isVisible={isVisibleTokenExpired}
          title={formatMessage(message.titleModal)}
          description={formatMessage(message.tokenExpired)}>
          <View style={{flexDirection: 'row'}}>
            <Button
              title={formatMessage(message.btnAgree)}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={styles.buttonStyleModal1}
              onPress={this.onLogout}
            />
          </View>
        </ModalBase>

        <ModalBase
          isVisible={isVisibleAccuracy}
          title={formatMessage(message.pinCodeVerifyTitle)}
          description={formatMessage(message.pinCodeVerifyDes)}>
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
                  text={formatMessage(message.pinCodeVerifyText)}
                  style={{color: 'red'}}
                />
              ) : null}
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button
                title={formatMessage(message.btnCancel)}
                containerStyle={{flex: 1, borderRadius: 0}}
                buttonStyle={styles.buttonStyleModal2}
                titleStyle={{color: color}}
                onPress={this.onCloseModal}
              />
              <Button
                title={formatMessage(message.btnVerify)}
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
    const {intl} = this.props;
    const {formatMessage} = intl;

    const {image} = global;
    const urlImage = image
      ? {uri: image}
      : require('../HomeScreen/styles/images/avatar.png');
    return (
      <ImageBackGround
        source={require('../../images/backgroundHome.png')}
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
              <Text
                style={styles.textLanguage}
                text={formatMessage(message.language)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.logoContainer}>
            <Image
              source={require('./styles/images/logo.png')}
              style={[styles.image]}
              resizeMode={'contain'}
            />

            <Image
              rounded
              activeOpacity={1}
              source={urlImage}
              style={styles.avatar}
            />
          </View>

          <View style={[styles.body]}>
            <Input
              value={pinCode}
              placeholder={formatMessage(message.insertPinCode)}
              style={{color: '#ffffff'}}
              secureTextEntry={true}
              keyboardType={'numeric'}
              maxLength={6}
              onChangeText={this.onChangeCode}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.btnLogin}>
                <ButtonBase
                  title={formatMessage(message.login)}
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

LoginPinCode.propTypes = {
  intl: intlShape.isRequired,
};

LoginPinCode.contextType = LanguageContext;

export default injectIntl(LoginPinCode);
