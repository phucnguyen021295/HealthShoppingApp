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
import {SafeAreaView, View} from 'react-native';
import {Input} from 'react-native-elements';

// Component
import AppHeader from '../../base/components/AppHeader';
import {MediumText} from '../../base/components/Text';
import ButtonBase from '../../base/components/ButtonBase';

// Core
import generateId from '../../core/utils/generateId';
import {addTransactionHistory} from '../../core/db/table/transaction_history';
import {deleteShopping} from '../../core/db/table/shopping';
import {broadcastShoppingCardChange} from '../../core/shoppingCart';

// Global
import global, {setAccountBalanceGlobal} from '../../global';

// Styles
import styles from './styles/index.css';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';

class AddressShoppingScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      totalMoney: 0,
      address: 'Ngõ 165 Yên Hòa, Cầu Giấy, Hà Nội',
      value: '',
    };

    this.onContinue = this.onContinue.bind(this);
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

  onChangeText = (value) => {
    this.setState({value: value, address: value});
  };

  onContinue() {
    // Todo: Kich ban, mua hang thanh cong, lap tuc luu lich sử và xóa data shopping,
    const {AccountBalance} = global;
    const _accountBalance = AccountBalance - this.state.totalMoney;

    const data = {
      transactionId: generateId(5),
      description: 'Test',
      totalPrice: this.state.totalMoney,
      accountBalance: _accountBalance,
      time: new Date().getTime(),
    };

    addTransactionHistory(data, () => {
      deleteShopping(() => {
        broadcastShoppingCardChange();
        setAccountBalanceGlobal(_accountBalance);
        this.props.navigation.popToTop();
      });
    });
  }

  render() {
    const {data, value, address} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={'Địa chỉ'} />
        <View style={{paddingTop: 30}}>
          <MediumText
            text={address}
            style={[styles.textName, {marginTop: 12}]}
          />

          <Input
            value={value}
            placeholder="Nhập địa chỉ"
            containerStyle={{paddingHorizontal: 20, marginVertical: 20}}
            inputContainerStyle={styles.inputContainerStyle}
            renderErrorMessage={false}
            inputStyle={styles.inputStyle}
            onChangeText={this.onChangeText}
          />
        </View>
        <View style={styles.btnBottom}>
          <ButtonBase
            title={'Tiếp tục'}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onContinue}
          />
        </View>
      </SafeAreaView>
    );
  }
}

AddressShoppingScreen.defaultProps = {};

export default AddressShoppingScreen;
