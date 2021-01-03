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
import {View} from 'react-native';
import {Header, Button, Badge} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import LinearGradient from '../../../../base/components/LinearGradient';

// Apis
import {getBalanceApi} from '../../../../apis/health';

// Styles
import styles, {SIZE_ICON} from './styles/index.css';
import {registerShoppingCardChange} from '../../../../core/shoppingCart';
import {sumMoneyTotal} from '../../../../core/db/Sqlitedb';
import global, {setAccountBalanceGlobal} from '../../../../global';
import NotificationModal from '../../../../base/components/NotificationModal';

class HeaderHomeTab extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      valueBadge: 0,
      accountBalance: global.balance,
      isVisible: false,
    };

    this.onChangeMenu = this.onChangeMenu.bind(this);
    this.onShopping = this.onShopping.bind(this);
  }

  componentDidMount() {
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
      if (data.length > 0) {
        this.setState({
          valueBadge: data[0].totalProduct,
        });
      }
      this.setState({accountBalance: global.balance});
    });
  };

  onChangeMenu() {
    const {navigation} = this.props;
    navigation.openDrawer();
  }

  onShopping() {
    const {valueBadge} = this.state;
    if (valueBadge > 0) {
      this.props.navigation.navigate('ShoppingCart');
    } else {
      this.setState({isVisible: true});
    }
  }

  renderLeftComponent() {
    return (
      <Button
        buttonStyle={styles.buttonStyle}
        icon={
          <MaterialCommunityIcons name="menu" size={SIZE_ICON} color="white" />
        }
        onPress={this.onChangeMenu}
      />
    );
  }

  onCloseModal = () => {
    this.setState({isVisible: false});
  };

  renderRightComponent() {
    const {valueBadge, isVisible} = this.state;
    return (
      <View>
        <Button
          buttonStyle={styles.buttonStyle}
          icon={
            <MaterialCommunityIcons
              name="shopping"
              size={SIZE_ICON}
              color="white"
            />
          }
          onPress={this.onShopping}
        />
        <Badge
          value={valueBadge}
          status="error"
          containerStyle={styles.containerStyleBadge}
          textStyle={styles.textStyle}
        />
        <NotificationModal
          isVisible={isVisible}
          title={'Thông báo'}
          description={'Bạn chưa chọn sản phẩm nào.'}
          titleButton={'Đóng'}
          onPress={this.onCloseModal}
        />
      </View>
    );
  }

  render() {
    const {accountBalance} = this.state;
    return (
      <LinearGradient style={{borderRadius: 0}}>
        <Header
          placement="center"
          leftComponent={this.renderLeftComponent()}
          centerComponent={{
            text: `${accountBalance} $`,
            style: {color: '#fff'},
          }}
          rightComponent={this.renderRightComponent()}
          containerStyle={styles.containerStyle}
        />
      </LinearGradient>
    );
  }
}

export default HeaderHomeTab;
