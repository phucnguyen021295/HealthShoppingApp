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
import {View} from 'react-native';
import {Input} from 'react-native-elements';

// Components
import Header from '../Header';
import ImageBackGround from '../../../../base/components/ImageBackGround';
import {MediumText} from '../../../../base/components/Text';
import ButtonBase from '../../../../base/components/ButtonBase';

// styles
import styles from './styles/index.css';

class PersonalPageDrawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'Nguyễn Văn A',
      address: 'Ngõ 165 Yên Hòa, Cầu Giấy, Hà Nội',
      age: '26',
      interests: '',
    };
  }

  onChangeFullName = (fullName) => {
    this.setState({fullName});
  };

  onChangeAddress = (address) => {
    this.setState({address});
  };

    onChangeInterests = (interests) => {
        this.setState({interests});
    };

    onChangeAge = (age) => {
        this.setState({age});
    };

  render() {
    const {fullName, interests, address, age} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ImageBackGround
          source={require('../../../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <View style={styles.info}>
            <View style={{marginBottom: 30}}>
              <MediumText text={'Họ và tên:'} style={styles.textRow} />
              <Input
                value={fullName}
                placeholder="Họ và tên"
                containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                inputContainerStyle={styles.inputContainerStyle}
                renderErrorMessage={false}
                inputStyle={styles.inputStyle}
                placeholderTextColor={'#dddddd'}
                onChangeText={this.onChangeFullName}
              />
            </View>

            <View style={{marginBottom: 30}}>
              <MediumText text={'Tuổi:'} style={styles.textRow} />
              <Input
                value={age}
                placeholder="Tuổi"
                containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                renderErrorMessage={false}
                placeholderTextColor={'#dddddd'}
                onChangeText={this.onChangeAge}
              />
            </View>

            <View style={{marginBottom: 30}}>
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

            <View style={{marginBottom: 30}}>
              <MediumText text={'Sở thích:'} style={styles.textRow} />
              <Input
                value={interests}
                placeholder="Sở thích"
                containerStyle={{
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                  height: 120,
                }}
                inputContainerStyle={styles.inputInterestsContainerStyle}
                inputStyle={styles.inputStyle}
                multiline
                placeholderTextColor={'#dddddd'}
                renderErrorMessage={false}
                numberOfLines={5}
                onChangeText={this.onChangeInterests}
              />
            </View>

            <View style={{paddingTop: 30}}>
              <ButtonBase
                title="Lưu thông tin"
                buttonStyle={styles.btnButtonStyle}
                onPress={this.onTransfer}
              />
            </View>
          </View>
        </ImageBackGround>
      </View>
    );
  }
}

export default PersonalPageDrawer;
