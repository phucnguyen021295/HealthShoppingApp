/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 11/1/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, {PureComponent} from 'react';
import {View, ScrollView, Animated, Keyboard} from 'react-native';
import {Input} from 'react-native-elements';
import {injectIntl, intlShape} from 'react-intl';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import Text, {SemiBoldText} from '../../base/components/Text';
import ButtonBase from '../../base/components/ButtonBase';
import HeaderCustom from '../../base/components/HeaderCustom';
import LinearGradient from '../../base/components/LinearGradient';
import NotificationModal from '../../base/components/NotificationModal';
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';
import InfoUser from './components/InfoUser';
import UploadAvatar from './components/UploadAvatar';

// styles
import styles from './styles/index.css';
import global, {updateUSer} from '../../global';
import {widthToDP} from '../../core/utils/dimension';
import message from '../../msg/personalPage';

class PersonalPageDrawer extends PureComponent {
  constructor(props) {
    super(props);
    const {city, address, state, postalcode} = global;
    this.state = {
      city: city,
      address: address,
      state: state,
      postalcode: postalcode || '+84',
      descriptionModal: '',
      isVisible: false,
      titleButton: '',
      loading: false,
    };

    this.keyboardHeight = new Animated.Value(0);
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
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
        toValue: event.endCoordinates.height - 60,
      }),
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
    ]).start();
  };

  onChangeFullName = (city) => {
    this.setState({city});
  };

  onChangeAddress = (address) => {
    this.setState({address});
  };

  onChangeInterests = (postalcode) => {
    this.setState({postalcode});
  };

  onChangeAge = (state) => {
    this.setState({state});
  };

  onUpdateUser = () => {
    const {city, address, state, postalcode} = this.state;
    const {intl} = this.props;
    const {formatMessage} = intl;
    const data = {
      city: city,
      address: address,
      state: state,
      postalcode: postalcode,
    };
    this.setState({loading: true}, () => {
      updateUSer(
        data,
        () => {
          this.setState({
            isVisible: true,
            descriptionModal: formatMessage(message.descriptionModal1),
            titleButton: formatMessage(message.btnClose),
          });
        },
        () => {
          this.setState({
            isVisible: true,
            descriptionModal: formatMessage(message.descriptionModal2),
            titleButton: formatMessage(message.btnRetry),
          });
        },
      );
    });
  };

  onCloseModal = () => {
    this.setState({isVisible: false, loading: false});
  };

  render() {
    const {
      city,
      postalcode,
      address,
      state,
      isVisible,
      descriptionModal,
      titleButton,
      loading,
    } = this.state;
    const {intl} = this.props;
    const {formatMessage} = intl;

    return (
      <View style={styles.container}>
        <ImageBackGround source={require('../../images/backgroundHome.png')}>
          <SafeAreaViewBase />
          <HeaderCustom
            title={formatMessage(message.titleHeader)}
            color={'#ffffff'}
            ViewComponent={LinearGradient}
          />

          <Animated.View
            style={[styles.info, {paddingBottom: this.keyboardHeight}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.uploadImage}>
                <UploadAvatar />
              </View>
              <InfoUser />
              <SemiBoldText text={formatMessage(message.editInfo)} style={styles.editInfo} />
              <View style={{marginBottom: widthToDP(15)}}>
                <Text
                  text={`${formatMessage(message.city)}:`}
                  style={styles.textRow}
                />
                <Input
                  value={city}
                  placeholder={formatMessage(message.city)}
                  containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                  inputContainerStyle={styles.inputContainerStyle}
                  renderErrorMessage={false}
                  inputStyle={styles.inputStyle}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeFullName}
                />
              </View>

              <View style={{marginBottom: widthToDP(15)}}>
                <Text
                  text={`${formatMessage(message.district)}:`}
                  style={styles.textRow}
                />
                <Input
                  value={state}
                  placeholder={formatMessage(message.district)}
                  containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeAge}
                />
              </View>

              <View style={{marginBottom: widthToDP(15)}}>
                <Text
                  text={`${formatMessage(message.address)}:`}
                  style={styles.textRow}
                />
                <Input
                  value={address}
                  placeholder={formatMessage(message.address)}
                  containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                  inputContainerStyle={styles.inputContainerStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  inputStyle={styles.inputStyle}
                  onChangeText={this.onChangeAddress}
                />
              </View>

              <View style={{marginBottom: widthToDP(15)}}>
                <Text
                  text={`${formatMessage(message.zipCode)}:`}
                  style={styles.textRow}
                />
                <Input
                  value={postalcode}
                  placeholder={formatMessage(message.zipCode)}
                  containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  placeholderTextColor={'#dddddd'}
                  renderErrorMessage={false}
                  onChangeText={this.onChangeInterests}
                />
              </View>
              <View
                style={{
                  paddingTop: widthToDP(20),
                  paddingBottom: widthToDP(20),
                }}>
                <ButtonBase
                  title={formatMessage(message.btnSaveInfo)}
                  buttonStyle={styles.btnButtonStyle}
                  onPress={this.onUpdateUser}
                  loading={loading}
                />
              </View>
            </ScrollView>
          </Animated.View>
          <NotificationModal
            isVisible={isVisible}
            title={formatMessage(message.titleModal)}
            description={descriptionModal}
            titleButton={titleButton}
            onPress={this.onCloseModal}
          />
        </ImageBackGround>
        <SafeAreaViewBase />
      </View>
    );
  }
}

PersonalPageDrawer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(PersonalPageDrawer);
