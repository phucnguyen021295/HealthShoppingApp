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

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Input} from 'react-native-elements';

// Components
import ImageBackGround from '../../base/components/ImageBackGround';
import ButtonBase from '../../base/components/ButtonBase';
import Text, {MediumText} from '../../base/components/Text';
import ScanQR from '../HomeScreen/components/ScanQR';

// Styles
import styles from './styles/index.css';

class TransferScreen extends React.Component {
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

          <View style={{paddingHorizontal: 20}}>
            <View style={{marginBottom: 30}}>
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
                  inputContainerStyle={{
                    borderWidth: 1,
                    borderColor: '#dddddd',
                    backgroundColor: '#ffffff52',
                    paddingHorizontal: 12,
                    borderRadius: 8,
                  }}
                  renderErrorMessage={false}
                  onChangeText={this.onChangeCode}
                />
                <ScanQR styleBtn={{marginLeft: 20}} />
              </View>
            </View>
            <View style={{marginBottom: 30}}>
              <MediumText text={'Số tiền:'} style={styles.textRow} />
              <Input
                value={money}
                placeholder="Số tiền"
                containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                inputContainerStyle={{
                  borderWidth: 1,
                  borderColor: '#dddddd',
                  backgroundColor: '#ffffff52',
                  paddingHorizontal: 12,
                  borderRadius: 8,
                }}
                renderErrorMessage={false}
                onChangeText={this.onChangeMoney}
              />
            </View>
            <View style={{marginBottom: 30}}>
              <MediumText text={'Ghi chú:'} style={styles.textRow} />
              <Input
                value={description}
                placeholder="Ghi chú"
                containerStyle={{
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                  height: 120,
                }}
                inputContainerStyle={{
                  borderWidth: 1,
                  borderColor: '#dddddd',
                  backgroundColor: '#ffffff52',
                  paddingHorizontal: 12,
                  borderRadius: 8,
                  height: 120,
                }}
                multilineButtonBase
                renderErrorMessage={false}
                numberOfLines={5}
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
