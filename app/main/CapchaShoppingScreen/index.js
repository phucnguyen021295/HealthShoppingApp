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
import {FlatList, SafeAreaView, View} from 'react-native';

// Component
import AppHeader from '../../base/components/AppHeader';
import {MediumText} from '../../base/components/Text';

// Styles
import styles from './styles/index.css';
import ButtonBase from '../../base/components/ButtonBase';
import {Input} from 'react-native-elements';

class AddressShoppingScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      totalMoney: 0,
      address: 'Ngõ 165 Yên Hòa, Cầu Giấy, Hà Nội',
      value: '',
    };
  }

  onChangeText = (value) => {
    this.setState({value: value, address: value});
  };

  render() {
    const {data, value, address} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={'Xác nhận đơn hàng'} />
        <View style={{paddingTop: 30}}>
          <MediumText
            text={'Nhập mã Capcha'}
            style={[styles.textName, {marginTop: 12}]}
          />

          <Input
            value={value}
            placeholder="Nhập mã capcha"
            containerStyle={{paddingHorizontal: 20, marginVertical: 20}}
            inputContainerStyle={styles.inputContainerStyle}
            renderErrorMessage={false}
            onChangeText={this.onChangeText}
          />
        </View>
        <View style={styles.btnBottom}>
          <ButtonBase
            title={'Xác nhận'}
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
