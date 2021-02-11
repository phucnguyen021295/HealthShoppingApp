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
import {View, ScrollView, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {Accessory, Avatar} from 'react-native-elements';

// Components
import Header from './components/Header';
import Text, {MediumText} from '../../base/components/Text';
import ImageBackGround from '../../base/components/ImageBackGround';
import ChartScreen from '../ChartScreen';
import Carousel from './components/Carousel';
import ListApp from './components/ListApp';
import LinearGradient from '../../base/components/LinearGradient';

// Data
import {handleGetProducts} from '../../core/data';

// styles
import styles from './styles/index.css';

import global, {setAccountBalanceGlobal} from '../../global';
import {registerShoppingCardChange} from '../../core/shoppingCart';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';
import {getBalanceApi} from '../../apis/health';


class HomeDrawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: global.balance,
    };
  }

  componentDidMount() {
    handleGetProducts();
    registerShoppingCardChange(this.onSumMoney);

    this.onSumMoney();

    getBalanceApi((response) => {
      const {data} = response;
      this.setState({accountBalance: data.balance});
      setAccountBalanceGlobal(data.balance);
    });
  }

  onSumMoney = () => {
    sumMoneyTotal((data) => {
      this.setState({accountBalance: global.balance});
    });
  };

  onPersonalPage = () => {
    this.props.navigation.navigate('PersonalPage');
  };

  render() {
    const {accountBalance} = this.state;
    const {name, membercode, image} = global;
    const {navigation} = this.props;
    const urlImage = image ? {uri: image} : require('./styles/images/avatar.png');
    return (
      <View style={styles.container}>
        <LinearGradient>
          <SafeAreaView />
          <Header navigation={navigation} />
        </LinearGradient>

        <TouchableOpacity style={styles.infoUser} onPress={this.onPersonalPage}>
          <Avatar
            rounded
            activeOpacity={1}
            source={urlImage}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <ImageBackGround
          source={require('../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.viewRow, {paddingTop: 40}]}>
              <Carousel navigation={navigation} />
              <View style={{paddingTop: 12}}>
                <ListApp />
              </View>

              <View style={{alignItems: 'center', paddingTop: 30}}>
                <Image
                  source={require('./styles/images/icons8-merchant-account-100.png')}
                  style={{width: 100, height: 100, marginBottom: 12}}
                />
                <MediumText text={'Tài khoản thanh toán'} style={styles.account} />
                <Text text={name} style={styles.name} />
                <Text text={`Số dư: ${accountBalance} $`} style={styles.name} />
                <Text text={`Mã code: ${membercode} $`} style={styles.name} />
              </View>
            </View>

            <View style={styles.viewChart}>
              <MediumText text={'THỐNG KÊ'} style={styles.textReport} />
              <ChartScreen />
            </View>
          </ScrollView>
        </ImageBackGround>
      </View>
    );
  }
}

export default HomeDrawer;
