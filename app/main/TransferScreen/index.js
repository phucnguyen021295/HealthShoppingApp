/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/20/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, {PureComponent} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Input} from 'react-native-elements';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import ButtonBase from '../../base/components/ButtonBase';
import Text, {MediumText} from '../../base/components/Text';
import ScanQR from '../HomeScreen/components/ScanQR';

// Styles
import styles from './styles/index.css';

class TransferScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      money: '',
      description: '',
    };
  }

  onChangeCode = (code) => {
    this.setState({code: code});
  };

  onChangeMoney = (money) => {
    this.setState({money: money});
  };

  onChangeDes = (description) => {
    this.setState({description: description});
  };

  onTransfer = () => {
    const {code, money, description} = this.state;
    if (code && money) {
      alert('Chuyển tiền thành công');
    }
    this.setState({
      code: '',
      money: '',
      description: '',
    });
  };

  render() {
    const {code, money, description} = this.state;
    return (
      <ImageBackGround
        source={require('../../images/backgroundHome.jpeg')}
        blurRadius={4}>
        <SafeAreaView />
        <View style={{flex: 1}}>
          <MediumText text={'Chuyển tiền'} style={styles.textInfo} />
          <View style={styles.container}>
            <View style={styles.item}>
              <MediumText text={'Mã thành viên:'} style={styles.textRow} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Input
                  value={code}
                  placeholder="Mã thành viên"
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
                <ScanQR styleBtn={{marginLeft: 20}} />
              </View>
            </View>
            <View style={styles.item}>
              <MediumText text={'Số tiền:'} style={styles.textRow} />
              <Input
                value={money}
                placeholder="Số tiền"
                containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                renderErrorMessage={false}
                placeholderTextColor={'#dddddd'}
                onChangeText={this.onChangeMoney}
              />
            </View>
            <View style={styles.item}>
              <MediumText text={'Ghi chú:'} style={styles.textRow} />
              <Input
                value={description}
                placeholder="Ghi chú"
                containerStyle={styles.containerStyleNote}
                inputContainerStyle={styles.inputContainerStyleNote}
                inputStyle={styles.inputStyle}
                multiline
                renderErrorMessage={false}
                numberOfLines={5}
                placeholderTextColor={'#dddddd'}
                onChangeText={this.onChangeDes}
              />
            </View>
            <View style={{paddingTop: 30}}>
              <ButtonBase
                title="Chuyển tiền"
                buttonStyle={styles.btnButtonStyle}
                onPress={this.onTransfer}
              />
            </View>
          </View>
        </View>
      </ImageBackGround>
    );
  }
}

export default TransferScreen;
