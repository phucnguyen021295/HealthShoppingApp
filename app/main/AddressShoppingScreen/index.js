/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/6/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
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
import {Button, Image, Input} from 'react-native-elements';

// Component
import AppHeader from '../../base/components/AppHeader';
import Text, {MediumText} from '../../base/components/Text';
import ButtonBase from '../../base/components/ButtonBase';
import ConfirmGoogleCaptcha from '../../base/components/ReCaptcha-v2';

// Core
import generateId from '../../core/utils/generateId';
import {addTransactionHistory} from '../../core/db/table/transaction_history';
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

const siteKey = '6LfFxh4aAAAAAC6i_FgaSqYJT4xdf24HVzIAOoQc';
const baseUrl = 'http://nmways.com';

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
      address: receiver?.address,
      membercode: membercode,
      receiver: receiver,
      paymenttype: paymenttype,
      data: carts,
      receivingtype: receivingtype,
      isVisible: false,
      descriptionModal: '',
      titleButton: '',
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
    const {membercode, receiver, paymenttype, receivingtype, data} = this.state;

    const cart = data.map((item) => ({
      id: item.productid,
      quantity: item.quantity,
      packid: item.packid,
    }));

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
          descriptionModal: 'Đặt hàng thành công.!',
          titleButton: 'Xong',
        });
      },
      (response) => {
        if (response?.data?.errorcode === 5) {
          this.setState({
            isVisible: true,
            descriptionModal:
              'Bạn không có đủ tiền, hoặc số lương bạn đặt vượt quá mức cho phép.!',
            titleButton: 'Đồng ý',
          });
        } else {
          this.setState({
            isVisible: true,
            descriptionModal: 'Đã có lỗi xảy ra. Vui lòng thử lại sau.!',
            titleButton: 'Đồng ý',
          });
        }
      },
    );
  }

  onCloseModal = () => {
    const {titleButton} = this.state;
    this.setState({isVisible: false}, () => {
      if (titleButton === 'Xong') {
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

  onChangeCode = (text) => {
    this.setState({address: text});
  };

  render() {
    const {
      data,
      totalMoney,
      address,
      isVisible,
      descriptionModal,
      titleButton,
    } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={'Đặt đơn'} />
        <ScrollView style={{paddingTop: 30}}>
          <MediumText
            text={'Giao hàng tại địa chỉ:'}
            style={styles.titleShopping}
          />
          <Input
            value={address}
            defaultValue={address}
            placeholder="Nhập địa chỉ"
            containerStyle={{
              paddingHorizontal: 0,
              flex: 1,
              paddingVertical: 0,
            }}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            renderErrorMessage={false}
            placeholderTextColor={'#dddddd'}
            onChangeText={this.onChangeCode}
          />
          <MediumText
            text={'Tóm tắt đơn hàng:'}
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
              <View style={{ flex: 1,}}>
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
            <MediumText text={'Tổng cộng:'} style={styles.textTotalPrice} />
            <MediumText
              text={`${totalMoney} $`}
              style={styles.textTotalPrice}
            />
          </View>
          <ButtonBase
            title={'Đặt đơn'}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onContinue}
          />
        </View>
        <NotificationModal
          isVisible={isVisible}
          title={'Thông báo'}
          description={descriptionModal}
          titleButton={titleButton}
          onPress={this.onCloseModal}
        />
      </SafeAreaView>
    );
  }
}

AddressShoppingScreen.defaultProps = {};

export default AddressShoppingScreen;
