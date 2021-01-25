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
import {MediumText} from '../../base/components/Text';
import InputScrollView from '../../base/components/InputScrollView';
import ScanQR from '../HomeScreen/components/ScanQR';
import NotificationModal from '../../base/components/NotificationModal';

// Apis
import {transferApi} from '../../apis/health';
import global, {setAccountBalanceGlobal} from '../../global';
import {broadcastShoppingCardChange} from '../../core/shoppingCart';

// Styles
import styles from './styles/index.css';
import {heightToDP} from '../../core/utils/dimension';

class TransferScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      membercode: '',
      amount: '',
      reason: '',
      descriptionModal: '',
      titleButton: '',
      isVisible: false,
      loading: false,
    };
  }

  onChangeCode = (membercode) => {
    this.setState({membercode: membercode});
  };

  onChangeMoney = (amount) => {
    this.setState({amount: amount});
  };

  onChangeDes = (reason) => {
    this.setState({reason: reason});
  };

  onTransfer = () => {
    const {membercode, amount, reason} = this.state;

    if (!membercode) {
      this.setState({
        isVisible: true,
        descriptionModal: 'Bạn chưa nhập mã thành viên',
        titleButton: 'Nhập mã thành viên',
      });
      return;
    }

    if (!amount) {
      this.setState({
        isVisible: true,
        descriptionModal: 'Bạn chưa nhập số tiền',
        titleButton: 'Nhập số tiền',
      });
      return;
    }

    const data = {
      membercode: membercode,
      amount: amount,
      reason: reason,
    };

    this.setState({loading: true}, () => {
      transferApi(
        data,
        () => {
          this.setState(
            {
              membercode: '',
              amount: '',
              reason: '',
              isVisible: true,
              descriptionModal: 'Chuyển tiền thành công',
              titleButton: 'Xác nhận',
            },
            () => {
              const {balance} = global;
              setAccountBalanceGlobal(balance - amount);
              broadcastShoppingCardChange();
            },
          );
        },
        () => {
          this.setState({
            isVisible: true,
            descriptionModal:
              'Có lỗi xảy ra, hoặc số tiền bạn chuyển vượt quá mức so với số tiền bạn đang có.',
            titleButton: 'Đồng ý',
          });
        },
      );
    });
  };

  onCloseModal = () => {
    this.setState({isVisible: false, loading: false});
  };

  render() {
    const {
      membercode,
      amount,
      reason,
      isVisible,
      descriptionModal,
      titleButton,
      loading,
    } = this.state;
    return (
      <ImageBackGround
        source={require('../../images/backgroundHome.jpeg')}
        blurRadius={4}>
        <SafeAreaView />
        <InputScrollView>
          <MediumText text={'Chuyển tiền'} style={styles.textInfo} />
          <View style={styles.container}>
            <View style={styles.item}>
              <MediumText text={'Mã thành viên:'} style={styles.textRow} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Input
                  value={membercode}
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
                <ScanQR
                  styleBtn={{marginLeft: 20}}
                  onChangeCode={this.onChangeCode}
                />
              </View>
            </View>
            <View style={styles.item}>
              <MediumText text={'Số tiền:'} style={styles.textRow} />
              <Input
                value={amount}
                placeholder="Số tiền"
                containerStyle={{paddingHorizontal: 0, paddingVertical: 0}}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                renderErrorMessage={false}
                placeholderTextColor={'#dddddd'}
                onChangeText={this.onChangeMoney}
                keyboardType={'phone-pad'}
              />
            </View>
            <View style={styles.item}>
              <MediumText text={'Ghi chú:'} style={styles.textRow} />
              <Input
                value={reason}
                placeholder="Ghi chú"
                containerStyle={styles.containerStyleNote}
                inputContainerStyle={styles.inputContainerStyleNote}
                inputStyle={[styles.inputStyle, {height: heightToDP(120), textAlignVertical: 'top'}]}
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
                loading={loading}
              />
            </View>
          </View>
        </InputScrollView>
        <NotificationModal
          isVisible={isVisible}
          title={'Thông báo'}
          description={descriptionModal}
          titleButton={titleButton}
          onPress={this.onCloseModal}
        />
      </ImageBackGround>
    );
  }
}

export default TransferScreen;
