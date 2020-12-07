/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/28/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {FlatList, View} from 'react-native';
import {withNavigation} from '@react-navigation/compat';

// Components
import OderItem from '../OderItem';
import ButtonBase from '../../../../base/components/ButtonBase';

// db
import {sumMoneyTotal} from '../../../../core/db/Sqlitedb';
import {getProducts} from '../../../../core/db/table/product';
import {registerShoppingCardChange} from '../../../../core/shoppingCart';
import {formatMoneyToVN} from '../../../../core/utils/formatMoney';

// Styles
import styles from './styles/index.css';

class OderList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      totalMoney: 0,
      totalProduct: 0,
    };
  }

  componentDidMount() {
    registerShoppingCardChange(this.onSumMoney);

    getProducts((data) => {
      this.setState({data: data});
    });

    this.onSumMoney();
  }

  onSumMoney = () => {
    sumMoneyTotal((data) => {
      if (data.length > 0) {
        this.setState({
          totalProduct: data[0].totalProduct,
          totalMoney: data[0].totalMoney,
        });
      }
    });
  };

  onShoppingCard = () => {
    this.props.navigation.navigate('ShoppingCart');
  };

  ListFooterComponent = () => {
    const {totalProduct, totalMoney} = this.state;
    return (
      <View style={styles.btnBottom}>
        <ButtonBase
          title={`Xem giỏ hàng - ${totalProduct} món - ${formatMoneyToVN(
            totalMoney,
          )}`}
          buttonStyle={styles.btnButtonStyle}
          onPress={this.onShoppingCard}
        />
      </View>
    );
  };

  renderItem = ({item}) => <OderItem item={item} />;

  render() {
    const {data, totalProduct} = this.state;
    return (
      <>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.productId}
          numColumns={2}
          style={{marginBottom: totalProduct > 0 ? 80 : 0}}
        />
        {totalProduct > 0 && this.ListFooterComponent()}
      </>
    );
  }
}

export default withNavigation(OderList);
