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
import {SafeAreaView, View, ScrollView} from 'react-native';

// Component
import AppHeader from '../../base/components/AppHeader';
import {MediumText} from '../../base/components/Text';

// Db
import {getListCarts} from '../../core/db/table/shopping';
import {getUserApi} from '../../apis/health';

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
    const {
      membercode,
      name,
      mobile,
      address,
      email,
      state,
      city,
      postalcode,
      countryname,
    } = global;
    this.state = {
      data: [],
      totalMoney: 0,
      code: '',
      membercode: membercode,
      receiver: {
        name: name,
        mobile: mobile,
        address: address,
        email: email,
        state: state,
        city: city,
        postalcode: postalcode || '+84',
        country: countryname,
      },
      paymenttype: 0,
      receivingtype: 1,
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
    const {totalMoney} = this.props;
    const {membercode, receiver, paymenttype, data, receivingtype} = this.state;
    this.props.navigation.navigate('AddressShopping', {
      membercode: membercode,
      receiver: receiver,
      paymenttype: paymenttype,
      carts: data,
      receivingtype: receivingtype,
      totalMoney: totalMoney
    });
  };

  onCheckInfo = () => {
    const {code} = this.state;
    getUserApi(
      code,
      (response) => {
        const {data} = response;
        const receiver = {
          name: data.name,
          mobile: data.mobile,
          address: data.address,
          email: data.email,
          state: data.state,
          city: data.city,
          postalcode: data.postalcode || '+84',
          country: data.countryname,
        };
        this.setState({receiver: receiver, membercode: data.membercode});
      },
      () => {
        alert('Có lỗi xảy ra vui lòng thử lại sau');
      },
    );
  };

  render() {
    const {data, totalMoney, code, membercode, receiver} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={'Mua hàng'} />
        <ScrollView>
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
            onPress={this.onCheckInfo}
            styleLinearGradient={{marginHorizontal: 20}}
          />
          <MediumText text={'Mua hàng cho:'} style={styles.titleShopping} />
          <MediumText
            text={`Mã thành viên: ${membercode}`}
            style={[styles.textName, {marginTop: 12}]}
          />
          <MediumText
            text={`Họ và tên: ${receiver.name}`}
            style={[styles.textName]}
          />
          <MediumText
            text={`Số điện thoại: ${receiver.mobile}`}
            style={[styles.textName]}
          />
          <MediumText
            text={`Địa chỉ: ${receiver.address}`}
            style={[styles.textName]}
          />
          <MediumText
            text={`Email: ${receiver.email}`}
            style={[styles.textName]}
          />
          <MediumText
            text={`Thông tin quận: ${receiver.state}`}
            style={[styles.textName]}
          />
          <MediumText
            text={`Thành phố: ${receiver.city}`}
            style={[styles.textName]}
          />
          <MediumText
            text={`Mã bưu chính: ${receiver.postalcode}`}
            style={[styles.textName]}
          />
          <MediumText
            text={`Quốc gia: ${receiver.country}`}
            style={[styles.textName]}
          />
          <View>
            <MediumText
              text={'Tóm tắt đơn hàng:'}
              style={styles.titleShopping}
            />
            {data.map((item) => {})}
          </View>
        </ScrollView>
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
