/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/5/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {SafeAreaView, View} from 'react-native';

// Component
import AppHeader from '../../base/components/AppHeader';
import {MediumText} from '../../base/components/Text';

// Db
import {getListCarts} from '../../core/db/table/shopping';

// Styles
import styles from './styles/index.css';
import ButtonBase from '../../base/components/ButtonBase';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';
import {registerShoppingCardChange} from '../../core/shoppingCart';
import {Input} from 'react-native-elements';
import global from '../../global';

class UserShoppingScreen extends PureComponent {
  constructor(props) {
    super(props);
    const {membercode, name} = global;
    this.state = {
      data: [],
      totalMoney: 0,
      code: '',
      membercode: membercode,
      name: name,
    };
  }

  componentDidMount() {
    registerShoppingCardChange(this.onSumMoney);

    getListCarts((data) => {
      this.setState({data: data, isDataEmpty: data.length === 0});
    });

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

  onChangeCode = (code) => {
    this.setState({code: code});
  };

  onContinue = () => {
    this.props.navigation.navigate('AddressShopping');
  };

  render() {
    const {data, totalMoney, code, membercode, name} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={'Mua hàng'} />
        <View style={{paddingTop: 30}}>
          <MediumText text={'Mua hàng cho'} style={styles.titleShopping} />
          <MediumText text={`Họ và tên: ${name}`} style={[styles.textName, {marginTop: 12}]} />
          <MediumText text={`Mã thành viên: ${membercode}`} style={styles.textName} />
          <Input
            value={code}
            placeholder="Mã thành viên"
            containerStyle={{paddingHorizontal: 20, marginVertical: 20}}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            renderErrorMessage={false}
            onChangeText={this.onChangeCode}
          />
          <ButtonBase
            title={'Kiểm tra'}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onContinue}
            styleLinearGradient={{marginHorizontal: 20}}
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

UserShoppingScreen.defaultProps = {};

export default UserShoppingScreen;
