/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/1/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {View, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';

// Components
import Header from '../Header';
import ImageBackGround from '../../../../base/components/ImageBackGround';
import {MediumText} from '../../../../base/components/Text';
import ButtonBase from '../../../../base/components/ButtonBase';

// styles
import styles from './styles/index.css';
import global, {updateUSer} from '../../../../global';
import {heightToDP} from '../../../../core/utils/dimension';

class PersonalPageDrawer extends PureComponent {
  constructor(props) {
    super(props);
    const {city, address, state, postalcode} = global;
    this.state = {
      city: city,
      address: address,
      state: state,
      postalcode: postalcode || '+84',
    };
  }

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
    const data = {
      city: city,
      address: address,
      state: state,
      postalcode: postalcode,
    };
    updateUSer(
      data,
      () => {
        alert('Cập nhật thành công');
      },
      () => {
        alert('Cập nhật thất bại');
      },
    );
  };

  render() {
    const {name, email, mobile} = global;
    const {city, postalcode, address, state} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ImageBackGround
          source={require('../../../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <View style={styles.info}>
            <ScrollView
              style={{flex: 1}}
              contentContainerStyle={{paddingTop: heightToDP(30)}}
              showsVerticalScrollIndicator={false}>
              <MediumText text={'Thông tin cá nhân'} style={styles.textInfo} />
              <View style={{marginBottom: heightToDP(14)}}>
                <MediumText
                  text={`Họ và tên: ${name}`}
                  style={styles.textRow}
                />
                <MediumText
                  text={`Số điện thoại: ${mobile}`}
                  style={styles.textRow}
                />
                <MediumText text={`Email: ${email}`} style={styles.textRow} />
              </View>
              <View style={{marginBottom: heightToDP(20)}}>
                <MediumText
                  text={'Thông tin thành phố:'}
                  style={styles.textRow}
                />
                <Input
                  value={city}
                  placeholder="Thông tin thành phố"
                  containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                  inputContainerStyle={styles.inputContainerStyle}
                  renderErrorMessage={false}
                  inputStyle={styles.inputStyle}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeFullName}
                />
              </View>

              <View style={{marginBottom: heightToDP(20)}}>
                <MediumText text={'Quận, huyện:'} style={styles.textRow} />
                <Input
                  value={state}
                  placeholder="Quận, huyện"
                  containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  onChangeText={this.onChangeAge}
                />
              </View>

              <View style={{marginBottom: heightToDP(20)}}>
                <MediumText text={'Địa chỉ:'} style={styles.textRow} />
                <Input
                  value={address}
                  placeholder="Địa chỉ"
                  containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                  inputContainerStyle={styles.inputContainerStyle}
                  renderErrorMessage={false}
                  placeholderTextColor={'#dddddd'}
                  inputStyle={styles.inputStyle}
                  onChangeText={this.onChangeAddress}
                />
              </View>

              <View style={{marginBottom: heightToDP(20)}}>
                <MediumText text={'Mã bưu điện:'} style={styles.textRow} />
                <Input
                  value={postalcode}
                  placeholder="Mã bưu điện"
                  containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  placeholderTextColor={'#dddddd'}
                  renderErrorMessage={false}
                  onChangeText={this.onChangeInterests}
                />
              </View>
            </ScrollView>
            <View style={{paddingTop: heightToDP(20)}}>
              <ButtonBase
                title="Lưu thông tin"
                buttonStyle={styles.btnButtonStyle}
                onPress={this.onUpdateUser}
              />
            </View>
          </View>
        </ImageBackGround>
      </View>
    );
  }
}

export default PersonalPageDrawer;
