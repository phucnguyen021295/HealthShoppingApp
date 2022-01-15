/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 10/6/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {CheckBox, Image, Input} from 'react-native-elements';
import {injectIntl, intlShape} from 'react-intl';

// Component
import AppHeader from '../../base/components/AppHeader';
import Text, {MediumText, SemiBoldText} from '../../base/components/Text';
import ButtonBase from '../../base/components/ButtonBase';
// import ConfirmGoogleCaptcha from '../../base/components/ReCaptcha-v2';

// Core
import generateId from '../../core/utils/generateId';
import {deleteShopping} from '../../core/db/table/shopping';
import {broadcastShoppingCardChange} from '../../core/shoppingCart';

// Api
import {oderApi} from '../../apis/health';

// Global
import global, {setAccountBalanceGlobal} from '../../global';

// Styles
import styles from './styles/index.css';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';
import NotificationModal from '../../base/components/NotificationModal';

import message from '../../msg/addressShopping';

class AddressShoppingScreen extends PureComponent {
  constructor(props) {
    super(props);
    const {
      membercode,
      receiver,
      paymenttype,
      carts,
      receivingtype,
      totalMoney,
    } = this.props.route.params;
    this.state = {
      totalMoney: totalMoney,
      membercode: membercode,
      receiver: receiver,
      paymenttype: paymenttype,
      data: carts,
      receivingtype: receivingtype,
      isVisible: false,
      descriptionModal: '',
      titleButton: '',
      checked: 'home', // distributor
    };

    this.onContinue = this.onContinue.bind(this);
    // this.setWebviewRef = this.setWebviewRef.bind(this);
  }

  componentDidMount() {
    this.onSumMoney();
  }

  onSumMoney = () => {
    sumMoneyTotal((data) => {
      if (data.length > 0) {
        this.setState({
          totalMoney: data[0].totalMoney,
        });
      }
    });
  };

  onContinue() {
    const {intl} = this.props;
    const {membercode, receiver, paymenttype, receivingtype, data} = this.state;
    const {formatMessage} = intl;

    const cart = data.map((item) => ({
      id: item.productid,
      quantity: item.quantity * item.total,
      packid: item.packid,
    }));

    this.setState({loading: true}, () => {
      oderApi(
        membercode,
        receiver,
        paymenttype,
        receivingtype,
        cart,
        (response) => {
          // Todo: Kich ban, mua hang thanh cong, lap tuc luu lich sử và xóa data shopping,
          const {balance} = global;
          const _accountBalance = balance - this.state.totalMoney;

          const data = {
            transactionId: generateId(5),
            description: 'Test',
            totalPrice: this.state.totalMoney,
            accountBalance: _accountBalance,
            time: new Date().getTime(),
          };

          // addTransactionHistory(data, () => {
          //   deleteShopping(() => {
          //     broadcastShoppingCardChange();
          //     setAccountBalanceGlobal(_accountBalance);
          //     this.props.navigation.popToTop();
          //   });
          // });

          this.setState({
            isVisible: true,
            descriptionModal: formatMessage(message.descriptionModal1),
            titleButton: formatMessage(message.btnModal1),
          });
        },
        (response) => {
          if (response?.data?.errorcode === 5) {
            this.setState({
              isVisible: true,
              descriptionModal: formatMessage(message.descriptionModal2),
              titleButton: formatMessage(message.btnModal2),
            });
          } else {
            this.setState({
              isVisible: true,
              descriptionModal: formatMessage(message.descriptionModal3),
              titleButton: formatMessage(message.btnModal2),
            });
          }
        },
      );
    });
  }

  onCloseModal = () => {
    const {titleButton} = this.state;
    this.setState({isVisible: false, loading: false}, () => {
      if (titleButton === 'Xong' || titleButton === 'Accomplished') {
        const {balance} = global;
        const _accountBalance = balance - this.state.totalMoney;
        deleteShopping(() => {
          broadcastShoppingCardChange();
          setAccountBalanceGlobal(_accountBalance);
          this.props.navigation.popToTop();
        });
      }
    });
  };

  // onMessage = (event) => {
  //   if (event && event.nativeEvent.data) {
  //     if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
  //       debugger;
  //       this.captchaForm.hide();
  //       return;
  //     } else {
  //       console.log('Verified code from Google', event.nativeEvent.data);
  //       setTimeout(() => {
  //         debugger
  //         this.captchaForm.hide();
  //         // do what ever you want here
  //       }, 1500);
  //     }
  //   }
  // };
  //
  // setWebviewRef(_ref) {
  //   debugger;
  //   this.captchaForm = _ref
  // }

  onChangeName = (name) => {
    this.setState((preState) => ({
      receiver: Object.assign({}, preState.receiver, {name}),
    }));
  };

  onChangeAddress = (address) => {
    this.setState((preState) => ({
      receiver: Object.assign({}, preState.receiver, {address}),
    }));
  };

  onChangePhone = (mobile) => {
    this.setState((preState) => ({
      receiver: Object.assign({}, preState.receiver, {mobile}),
    }));
  };

  onChangeEmail = (email) => {
    this.setState((preState) => ({
      receiver: Object.assign({}, preState.receiver, {email}),
    }));
  };

  onChangeState = (state) => {
    this.setState((preState) => ({
      receiver: Object.assign({}, preState.receiver, {state}),
    }));
  };

  onChangeCity = (city) => {
    this.setState((preState) => ({
      receiver: Object.assign({}, preState.receiver, {city}),
    }));
  };

  onChangePostalcode = (postalcode) => {
    this.setState((preState) => ({
      receiver: Object.assign({}, preState.receiver, {postalcode}),
    }));
  };

  onChangeCountry = (country) => {
    this.setState((preState) => ({
      receiver: Object.assign({}, preState.receiver, {country}),
    }));
  };

  render() {
    const {intl} = this.props;
    const {
      data,
      totalMoney,
      isVisible,
      descriptionModal,
      titleButton,
      checked,
      receiver,
      loading,
    } = this.state;
    const {formatMessage} = intl;
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={formatMessage(message.titleHeader)} />
        <ScrollView
          style={{paddingTop: 30}}
          contentContainerStyle={{paddingBottom: 150}}>
          <SemiBoldText text={formatMessage(message.titleShopping)} style={styles.titleShopping} />

          <>
            <SemiBoldText text={formatMessage(message.modeOfReceipt)} style={styles.textName} />
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                title={formatMessage(message.atHome)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={checked === 'home'}
                onPress={() => this.setState({checked: 'home'})}
                containerStyle={{
                  backgroundColor: '#ffffff',
                  borderColor: '#ffffff',
                }}
              />
              <CheckBox
                title={formatMessage(message.distributor)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={checked === 'distributor'}
                onPress={() => this.setState({checked: 'distributor'})}
                containerStyle={{
                  backgroundColor: '#ffffff',
                  borderColor: '#ffffff',
                }}
              />
            </View>
          </>

          {checked === 'home' && (
            <>
              <>
                <SemiBoldText text={formatMessage(message.fullNameText)} style={styles.textName} />
                <Input
                  value={receiver.name}
                  defaultValue={receiver.name}
                  placeholder={formatMessage(message.fullNameInput)}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeName}
                />
              </>

              <>
                <SemiBoldText text={formatMessage(message.phoneText)} style={styles.textName} />
                <Input
                  value={receiver.mobile}
                  defaultValue={receiver.mobile}
                  placeholder={formatMessage(message.phoneInput)}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangePhone}
                />
              </>

              <>
                <SemiBoldText text={formatMessage(message.emailText)} style={styles.textName} />
                <Input
                  value={receiver.email}
                  defaultValue={receiver.email}
                  placeholder={formatMessage(message.emailInput)}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeEmail}
                />
              </>

              <>
                <SemiBoldText text={formatMessage(message.addressText)} style={styles.textName} />
                <Input
                  value={receiver.address}
                  defaultValue={receiver.address}
                  placeholder={formatMessage(message.addressInput)}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeAddress}
                />
              </>

              <>
                <SemiBoldText text={formatMessage(message.districtText)} style={styles.textName} />
                <Input
                  value={receiver.state}
                  defaultValue={receiver.state}
                  placeholder={formatMessage(message.districtInput)}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeState}
                />
              </>

              <>
                <SemiBoldText text={formatMessage(message.cityText)} style={styles.textName} />
                <Input
                  value={receiver.city}
                  defaultValue={receiver.city}
                  placeholder={formatMessage(message.cityInput)}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeCity}
                />
              </>

              <>
                <SemiBoldText text={formatMessage(message.zipCodeText)} style={styles.textName} />
                <Input
                  value={receiver.postalcode}
                  defaultValue={receiver.postalcode}
                  placeholder={formatMessage(message.zipCodeInput)}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangePostalcode}
                />
              </>

              <>
                <SemiBoldText text={formatMessage(message.nationText)} style={styles.textName} />
                <Input
                  value={receiver.country}
                  defaultValue={receiver.country}
                  placeholder={formatMessage(message.nationInput)}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeCountry}
                />
              </>
            </>
          )}

          <SemiBoldText
            text={formatMessage(message.orderSummary)}
            style={[styles.titleShopping, {marginTop: 12}]}
          />
          {data.map((item) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 12,
              }}>
              <Image
                source={{uri: item.image}}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}
                resizeMode={'contain'}
              />
              <View style={{flex: 1}}>
                <MediumText
                  text={item.nameProduct}
                  style={styles.title}
                  numberOfLines={1}
                />
                <Text
                  text={item.namePack}
                  style={styles.title}
                  numberOfLines={1}
                />
              </View>
              <Text
                text={`${item.packpriceusd * item.total} $`}
                style={styles.price}
              />
            </View>
          ))}
        </ScrollView>
        {/*<ConfirmGoogleCaptcha*/}
        {/*  ref={this.setWebviewRef}*/}
        {/*  siteKey={siteKey}*/}
        {/*  baseUrl={baseUrl}*/}
        {/*  languageCode="en"*/}
        {/*  onMessage={this.onMessage}*/}
        {/*/>*/}
        <View style={styles.btnBottom}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 12,
            }}>
            <SemiBoldText text={formatMessage(message.total)} style={styles.textTotalPrice} />
            <SemiBoldText
              text={`${totalMoney} $`}
              style={styles.textTotalPrice}
            />
          </View>
          <ButtonBase
            title={formatMessage(message.order)}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onContinue}
            loading={loading}
          />
        </View>
        <NotificationModal
          isVisible={isVisible}
          title={formatMessage(message.titleModal)}
          description={descriptionModal}
          titleButton={titleButton}
          onPress={this.onCloseModal}
        />
      </SafeAreaView>
    );
  }
}

AddressShoppingScreen.defaultProps = {};

AddressShoppingScreen.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AddressShoppingScreen);
