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

import {postGetPaidApi} from '../../apis/health';
import ModalBase from '../../base/components/ModalBase';
import {
  ButtonClose,
  ButtonConfirm,
} from '../../base/components/ButtonText/ButtonModal';
import {broadcastShoppingCardChange} from '../../core/shoppingCart';
import {injectIntl} from 'react-intl';
import message from '../../msg/getPaid';

function GetPaidScreen(props) {
  const inputRef = useRef();
  const {navigation, intl} = props;
  const {accountbank, accountnumber, balance} = global;
  const [amount, setAmount] = useState(0);
  const [isWarning, setWarning] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isFailure, setFailure] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isCheckAccountBack, setCheckAccountBack] = useState(false);
  const {formatMessage} = intl;

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
      postGetPaidApi(amount, getPaidApiSuccess, getPaidApiFailure);
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
  };

  return (
    <ImageBackGround source={require('../../images/backgroundHome.png')}>
      <View style={styles.backGround}>
        <SafeAreaViewBase />
        <HeaderCustom
          title={formatMessage(message.titleHeader)}
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
            <SemiBoldText
              text={formatMessage(message.bank)}
              style={styles.textRow}
            />

            <View style={styles.viewRowName}>
              <SemiBoldText text={accountbank} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText
              text={formatMessage(message.accountnumber)}
              style={styles.textRow}
            />

            <View style={styles.viewRowName}>
              <SemiBoldText text={accountnumber} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText
              text={formatMessage(message.balance)}
              style={styles.textRow}
            />

            <View style={styles.viewRowName}>
              <SemiBoldText text={`$${balance}`} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText
              text={formatMessage(message.amount)}
              style={styles.textRow}
            />
            <Input
              ref={inputRef}
              value={amount}
              placeholder={formatMessage(message.amountEnter)}
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
            <SemiBoldText
              text={formatMessage(message.amount1)}
              style={styles.textRow}
            />

            <View style={styles.viewRowName}>
              <SemiBoldText text={`$${fee}`} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText
              text={formatMessage(message.total)}
              style={styles.textRow}
            />

            <View style={styles.viewRowName}>
              <SemiBoldText text={`$${total}`} style={styles.textRowName} />
            </View>
          </View>

          <View style={{marginBottom: heightToDP(20)}}>
            <SemiBoldText
              text={formatMessage(message.balanceAfter)}
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
          title={formatMessage(message.btngetPaid)}
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
        title={formatMessage(message.notification)}
        description={formatMessage(message.description)}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonConfirm
            text={formatMessage(message.btnClose)}
            onPress={onGoBack}
          />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isWarning}
        title={formatMessage(message.notification)}
        description={formatMessage(message.description1)}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonConfirm
            text={formatMessage(message.btnRetry)}
            onPress={onEnterInput}
          />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isSuccess}
        title={formatMessage(message.title1)}
        description={formatMessage(message.description2)}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonConfirm
            text={formatMessage(message.btnClose)}
            onPress={onCancelModal}
          />
        </View>
      </ModalBase>
      <ModalBase
        isVisible={isFailure}
        title={formatMessage(message.title2)}
        description={formatMessage(message.description3)}
        styleDescription={styles.descriptionModalStyle}>
        <View style={styles.btnStyles}>
          <ButtonClose
            text={formatMessage(message.btnClose)}
            onPress={onCancelModal}
          />
          <View style={styles.border} />
          <ButtonConfirm
            text={formatMessage(message.btnRetry1)}
            onPress={onGetPaidRetry}
          />
        </View>
      </ModalBase>
    </ImageBackGround>
  );
}

export default injectIntl(GetPaidScreen);
