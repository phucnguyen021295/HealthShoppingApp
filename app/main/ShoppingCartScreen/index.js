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

import React, {PureComponent} from 'react';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';

// Component
import AppHeader from '../../base/components/AppHeader';
import CartItem from './CartItem';
import {MediumText} from '../../base/components/Text';
import ButtonBase from '../../base/components/ButtonBase';

// Db
import {getListCarts} from '../../core/db/table/shopping';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';
import {registerShoppingCardChange} from '../../core/shoppingCart';
import message from '../../msg/shoppingCart';

// Styles
import styles from './styles/index.css';
import {injectIntl, intlShape} from 'react-intl';

class ShoppingCartScreen extends PureComponent {
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
          totalMoney: data[0].totalMoney || 0,
        });
      }
    });
    getListCarts((data) => {
      this.setState({data: data, isDataEmpty: data.length === 0}, () =>{
        if(data.length === 0) {
          this.props.navigation.goBack();
        }
      });
    });
  };

  onShoppingCard = () => {
    const {totalMoney} = this.state;
    this.props.navigation.navigate('UserShopping', {totalMoney: totalMoney});
  };

  renderItem = ({item}) => <CartItem item={item} />;

  render() {
    const {data, totalMoney} = this.state;
    const {intl} = this.props;
    const {formatMessage} = intl;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AppHeader title={formatMessage(message.titleHeader)} />
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.productid}
        />
        <View style={styles.btnBottom}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MediumText text={formatMessage(message.total)} style={styles.total} />
            <MediumText text={`${totalMoney} $`} style={styles.total} />
          </View>
          <ButtonBase
            title={formatMessage(message.btnContinue)}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.onShoppingCard}
          />
        </View>
      </SafeAreaView>
    );
  }
}

ShoppingCartScreen.defaultProps = {};

ShoppingCartScreen.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ShoppingCartScreen);
