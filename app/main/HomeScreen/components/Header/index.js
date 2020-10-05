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
import {View} from 'react-native';
import {Header, Button, Badge} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import LinearGradient from '../../../../base/components/LinearGradient';

// Styles
import styles from './styles/index.css';
import {color} from '../../../../core/color';
import {registerShoppingCardChange} from '../../../../core/shoppingCart';
import {sumMoneyTotal} from '../../../../core/db/Sqlitedb';

class HeaderHomeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueBadge: '0',
    };

    this.onChangeMenu = this.onChangeMenu.bind(this);
    this.onShopping = this.onShopping.bind(this);
  }

  componentDidMount() {
    registerShoppingCardChange(this.onSumMoney);

    this.onSumMoney();
  }

  onSumMoney = () => {
    sumMoneyTotal((data) => {
      if (data.length > 0) {
        this.setState({
          valueBadge: data[0].totalProduct,
        });
      }
    });
  };

  onChangeMenu() {
    const {navigation} = this.props;
    navigation.openDrawer();
  }

  onShopping() {}

  renderLeftComponent() {
    return (
      <Button
        buttonStyle={styles.buttonStyle}
        icon={<MaterialCommunityIcons name="menu" size={25} color="white" />}
        onPress={this.onChangeMenu}
      />
    );
  }

  renderRightComponent() {
    const {valueBadge} = this.state;
    return (
      <View>
        <Button
          buttonStyle={styles.buttonStyle}
          icon={
            <MaterialCommunityIcons name="shopping" size={25} color="white" />
          }
          onPress={this.onShopping}
        />
        <Badge
          value={valueBadge}
          status="error"
          containerStyle={{position: 'absolute', top: 0, right: -4}}
          textStyle={{fontSize: 14}}
        />
      </View>
    );
  }

  render() {
    return (
      <LinearGradient style={{borderRadius: 0}}>
        <Header
          placement="center"
          leftComponent={this.renderLeftComponent()}
          centerComponent={{text: '100.000.000 VNĐ', style: {color: '#fff'}}}
          rightComponent={this.renderRightComponent()}
          containerStyle={styles.containerStyle}
        />
      </LinearGradient>
    );
  }
}

export default HeaderHomeTab;
