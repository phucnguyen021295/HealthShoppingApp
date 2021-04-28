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
import {injectIntl, intlShape} from 'react-intl';

// Component
import AppHeader from '../../base/components/AppHeader';
import Text, {MediumText} from '../../base/components/Text';

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

import message from '../../msg/userShopping';

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
        country: 'Viet Nam',
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
    const {
      membercode,
      receiver,
      paymenttype,
      data,
      receivingtype,
    } = this.state;
    this.props.navigation.navigate('AddressShopping', {
      membercode: membercode,
      receiver: receiver,
      paymenttype: paymenttype,
      carts: data,
      receivingtype: receivingtype,
      totalMoney: totalMoney,
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
          country: 'Viet Nam', // data.countryname,
        };
        this.setState({
          receiver: receiver,
          membercode: data.membercode,
          address: data.address,
        });
      },
      () => {
        alert('Có lỗi xảy ra vui lòng thử lại sau');
      },
    );
  };

  render() {
    const { code, membercode, receiver} = this.state;
    const {intl} = this.props;
    const {formatMessage} = intl;
    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={formatMessage(message.titleHeader)} />
        <ScrollView>
          <Input
            value={code}
            placeholder={formatMessage(message.inputCode)}
            containerStyle={{paddingHorizontal: 20, marginVertical: 20}}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            renderErrorMessage={false}
            onChangeText={this.onChangeCode}
          />
          <ButtonBase
            title={formatMessage(message.btnCheck)}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onCheckInfo} 
            styleLinearGradient={{marginHorizontal: 20}}
          />
          <MediumText text={formatMessage(message.textPurchase)} style={styles.titleShopping} />
          <Text
            text={`${formatMessage(message.textMemberCode)} ${membercode}`}
            style={[styles.textName, {marginTop: 12}]}
          />
          <Text
            text={`${formatMessage(message.fullName)} ${receiver.name}`}
            style={[styles.textName]}
          />
          <Text
            text={`${formatMessage(message.phoneNumber)} ${receiver.mobile}`}
            style={[styles.textName]}
          />
          <Text
            text={`${formatMessage(message.address)} ${receiver.address}`}
            style={[styles.textName]}
          />
          <Text
            text={`${formatMessage(message.email)} ${receiver.email}`}
            style={[styles.textName]}
          />
          <Text
            text={`${formatMessage(message.infoDistrict)} ${receiver.state}`}
            style={[styles.textName]}
          />
          <Text
            text={`${formatMessage(message.city)} ${receiver.city}`}
            style={[styles.textName]}
          />
          <Text
            text={`${formatMessage(message.postalCode)} ${receiver.postalcode}`}
            style={[styles.textName]}
          />
          <Text
            text={`${formatMessage(message.nation)} ${receiver.country}`}
            style={[styles.textName]}
          />
          {/*<View>*/}
          {/*  <MediumText*/}
          {/*    text={'Tóm tắt đơn hàng:'}*/}
          {/*    style={styles.titleShopping}*/}
          {/*  />*/}
          {/*  {data.map((item) => {})}*/}
          {/*</View>*/}
        </ScrollView>
        <View style={styles.btnBottom}>
          <ButtonBase
            title={formatMessage(message.btnContinue)}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onContinue}
          />
        </View>
      </SafeAreaView>
    );
  }
}

UserShoppingScreen.defaultProps = {};

UserShoppingScreen.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(UserShoppingScreen);
