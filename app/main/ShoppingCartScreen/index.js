/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/4/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';

// Component
import AppHeader from '../../base/components/AppHeader';
import CartItem from './CartItem';
import {MediumText} from '../../base/components/Text';

// Db
import {getListCarts} from '../../core/db/table/shopping';

// Styles
import styles from './styles/index.css';
import ButtonBase from '../../base/components/ButtonBase';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';
import {registerShoppingCardChange} from '../../core/shoppingCart';

class ShoppingCartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      totalMoney: 0,
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

  renderItem = ({item}) => <CartItem item={item} />;

  render() {
    const {data, totalMoney} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={'Giỏ hàng'} />
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.productId}
        />
        <View style={styles.btnBottom}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MediumText text={'Tổng cộng: '} style={styles.total} />
            <MediumText text={totalMoney} style={styles.total} />
          </View>
          <ButtonBase
            title={'Tiếp tục'}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onShoppingCard}
          />
        </View>
      </SafeAreaView>
    );
  }
}

ShoppingCartScreen.defaultProps = {};

export default ShoppingCartScreen;
