/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/09/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  InteractionManager,
} from 'react-native';

// Components
import SafeAreaViewBase from '../../base/components/SafeAreaViewBase';
import HeaderCustom from '../../base/components/HeaderCustom';
import LinearGradient from '../../base/components/LinearGradient';
import ImageBackGround from '../../base/components/ImageBackGround';

import styles from './styles/index.css';
import {heightToDP} from '../../core/utils/dimension';
import {SemiBoldText} from '../../base/components/Text';
import global, {setAccountBalanceGlobal} from '../../global';
import {Input} from 'react-native-elements';
import ButtonBase from '../../base/components/ButtonBase';
import ModalNotify from './components/ModalNotify';

import {getPaidApi} from '../../apis/health';
import ModalBase from '../../base/components/ModalBase';
import {
  ButtonClose,
  ButtonConfirm,
} from '../../base/components/ButtonText/ButtonModal';
import {broadcastShoppingCardChange} from '../../core/shoppingCart';

function GetPaidScreen(props) {
  const inputRef = useRef();
  const {navigation} = props;
  const {accountbank, accountnumber, balance} = global;
  const [amount, setAmount] = useState(0);
  const [isWarning, setWarning] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isFailure, setFailure] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isCheckAccountBack, setCheckAccountBack] = useState(false);

  const fee = (amount * 5) / 100;
  const total = parseFloat(amount) + fee;

  const balanceAfter = balance - total;

  const onGetPaid = () => {
    if (!accountnumber) {
      setCheckAccountBack(true);
      return;
    }

    if (amount < 50) {
      setWarning(true);
      return;
    }

    setLoading(true);
    InteractionManager.runAfterInteractions(() => {
      getPaidApi(amount, getPaidApiSuccess, getPaidApiFailure);
    });
  };

  const onGetPaidRetry = () => {
    onCancelModal();
    InteractionManager.runAfterInteractions(() => {
      onGetPaid();
    });
  };

  const getPaidApiSuccess = (data) => {
    setLoading(false);
    setAccountBalanceGlobal(balanceAfter);
    broadcastShoppingCardChange();
    InteractionManager.runAfterInteractions(() => {
      setSuccess(true);
      setAmount(0);
    });
  };

  const getPaidApiFailure = () => {
    setLoading(false);
    InteractionManager.runAfterInteractions(() => {
      setFailure(true);
    });
  };

  const onCancelModal = () => {
    setWarning(false);
    setSuccess(false);
    setFailure(false);
    setCheckAccountBack(false);
  };

  const onEnterInput = () => {
    onCancelModal();
    InteractionManager.runAfterInteractions(() => {
      inputRef.current.focus();
    });
  };

  const onGoBack = () => {
    onCancelModal();
    InteractionManager.runAfterInteractions(() => {
      navigation.goBack();
      return true;
    });
  }

  return (
    <ImageBackGround source={require('../../images/backgroundHome.png')}>
      <View style={styles.backGround}>
        <SafeAreaViewBase />
        <HeaderCustom
          title={'RÚT TIỀN'}
          color={'#ffffff'}
          ViewComponent={LinearGradient}
        />
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            paddingHorizontal: heightToDP(20),
            marginVertical: heightToDP(30),
            paddingBottom: heightToDP(40),
          }}>
          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText text={'Tên ngân hàng:'} style={styles.textRow} />

            <View style={styles.viewRowName}>
              <SemiBoldText text={accountbank} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText text={'Số tài khoản:'} style={styles.textRow} />

            <View style={styles.viewRowName}>
              <SemiBoldText text={accountnumber} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText text={'Số dư tài khoản:'} style={styles.textRow} />

            <View style={styles.viewRowName}>
              <SemiBoldText text={`$${balance}`} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText text={'Số tiền:'} style={styles.textRow} />
            <Input
              ref={inputRef}
              value={amount}
              placeholder={'Nhập số tiền'}
              containerStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                marginTop: heightToDP(8),
              }}
              keyboardType={'number-pad'}
              inputContainerStyle={styles.inputContainerStyle}
              renderErrorMessage={false}
              placeholderTextColor={'#dddddd'}
              inputStyle={styles.inputStyle}
              onChangeText={(text) => setAmount(text)}
            />
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText text={'Phí rút tiền(5%):'} style={styles.textRow} />

            <View style={styles.viewRowName}>
              <SemiBoldText text={`$${fee}`} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText text={'Tổng cộng:'} style={styles.textRow} />

            <View style={styles.viewRowName}>
              <SemiBoldText text={`$${total}`} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText
              text={'Số dư sau khi rút tiền:'}
              style={styles.textRow}
            />

            <View style={styles.viewRowName}>
              <SemiBoldText
                text={`$${balanceAfter}`}
                style={styles.textRowName}
              />
            </View>
          </View>
        </ScrollView>
        <ButtonBase
          title={'Rút tiền'}
          buttonStyle={styles.btnButtonStyle}
          styleLinearGradient={styles.btnContainerStyle}
          onPress={onGetPaid}
        />
      </View>
      <ModalBase
        isVisible={isLoading}
        contentStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </ModalBase>
      <ModalBase
        isVisible={isCheckAccountBack}
        title={'Thông báo'}
        description={
          'Bạn cần phải đăng kí tài khoản ngân hàng thì mới rút tiền được.'
        }
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonConfirm text={'Đóng'} onPress={onGoBack} />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isWarning}
        title={'Thông báo'}
        description={'Số tiền bạn rút ít nhất là 50$'}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonConfirm text={'Nhập lại'} onPress={onEnterInput} />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isSuccess}
        title={'Rút tiền thành công'}
        description={'Gửi yêu cầu rút tiền thành công'}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonConfirm text={'Đóng'} onPress={onCancelModal} />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isFailure}
        title={'Rút tiền thất bại'}
        description={'Đã có lỗi xảy ra. Vui lòng thử lại.'}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonClose text={'Đóng'} onPress={onCancelModal} />
          <View style={styles.border} />
          <ButtonConfirm text={'Thử lại'} onPress={onGetPaidRetry} />
        </View>
      </ModalBase>
    </ImageBackGround>
  );
}

export default GetPaidScreen;
