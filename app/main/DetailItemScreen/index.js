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
import {
  ActivityIndicator,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Button, Image} from 'react-native-elements';
import HTML from 'react-native-render-html';

// Components
import Quantity from './components/Quantity';
import ButtonBase from '../../base/components/ButtonBase';
import ModalBase from '../../base/components/ModalBase';

import {broadcastShoppingCardChange} from '../../core/shoppingCart';

// db
import {
  replaceShopping,
  deleteShoppingItem,
} from '../../core/db/table/shopping';

// Styles
import styles, {CUSTOM_STYLES} from './styles/index.css';
import IconEntypo from 'react-native-vector-icons/Entypo';
import global from '../../global';
import {sumMoneyTotal} from '../../core/db/Sqlitedb';
import {heightToDP, widthToDP} from '../../core/utils/dimension';
import {color} from '../../core/color';

class DetailItemScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      total: 1,
      updateCart: false,
      isGetCart: false,
      totalMoney: 0,
      isVisibleWarning: false,
    };
  }

  componentDidMount() {
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

  updateTotal = (status) => {
    this.setState(status);
  };

  addShoppingCard = () => {
    const {total, totalMoney} = this.state;
    const {item, detailItem} = this.props;
    const {balance} = global;

    let totalItem = item.packpriceusd;
    if (item.packid === -1) {
      totalItem = item.packpriceusd * total;
    }

    if (balance < totalMoney + totalItem) {
      this.setState({isVisibleWarning: true});
    } else {
      this.props.onShoppingCard();
      if (total === 0) {
        deleteShoppingItem(item.packid, item.productid, () => {
          broadcastShoppingCardChange();
        });
      } else {
        const data = {
          packid: item.packid,
          productid: item.productid,
          name: item.title,
          packpriceusd: item.packpriceusd,
          image: detailItem?.image150,
          quantity: item.packid === -1 ? total : item.quantity,
          total: item.packid === -1 ? total : 1,
        };
        replaceShopping(data, () => {
          broadcastShoppingCardChange();
        });
      }
    }
  };

  onCloseModal = () => {
    this.props.onShoppingCard();
  };

  setQuantity = (total) => {
    this.setState({total: total});
  };

  setBtnText = () => {
    const {total, updateCart} = this.state;
    const {item} = this.props;

    let totalMoney = 0;

    if (item.packid === -1) {
      if (total === 0) {
        return 'Quay lại';
      }
      totalMoney = total * item.packpriceusd;
    } else {
      totalMoney = item.packpriceusd;
    }

    if (updateCart) {
      return `Cập nhật giỏ hàng - ${totalMoney} $`;
    }

    return `Thêm vào giỏ hàng - ${totalMoney} $`;
  };

  onCloseModalWarning = () => {
    this.setState({isVisibleWarning: false});
  };

  onPay = () => {
    this.setState({isVisibleWarning: true});
  };

  render() {
    const {isVisibleWarning} = this.state;
    const {item, detailItem} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: detailItem?.image500}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode={'contain'}
        />
        {item.packid === -1 ? (
          <View
            style={{
              fjustifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <Quantity
              productid={item.productid}
              packid={item.packid}
              quantity={item.quantity}
              setQuantity={this.setQuantity}
              updateTotal={this.updateTotal}
            />
          </View>
        ) : null}
        <ScrollView>
          <View style={{paddingHorizontal: widthToDP(20)}}>
            <HTML
              source={{html: detailItem?.des}}
              imagesMaxWidth={Dimensions.get('window').width - 40}
              allowFontScaling={false}
              tagsStyles={CUSTOM_STYLES}
            />
          </View>
        </ScrollView>
        {item.packpriceusd ? (
          <View style={styles.btnAddShopping}>
            <ButtonBase
              title={this.setBtnText()}
              buttonStyle={styles.btnButtonStyle}
              textStyle={styles.textStyle}
              onPress={this.addShoppingCard}
            />
          </View>
        ) : null}

        <Button
      icon={
            <IconEntypo name="cross" size={heightToDP(22)} color={'#ffffff'} />
          }
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.containerStyle}
          onPress={this.onCloseModal}
        />
        <ModalBase
          isVisibleModal={isVisibleWarning}
          title={'Thông báo'}
          description={
            'Số tiền hiện tại của bạn không đủ để mua thêm sản phẩm'
          }>
          <View style={{flexDirection: 'row'}}>
            <Button
              title={'Thanh toán'}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={{
                backgroundColor: color,
                borderRadius: 0,
                borderTopColor: color,
                borderTopWidth: 1,
                borderBottomLeftRadius: 14,
              }}
              onPress={this.onCloseModal}
            />
            <Button
              title={'Quay lại'}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={{
                backgroundColor: '#ffffff',
                borderRadius: 0,
                borderTopColor: color,
                borderTopWidth: 1,
                borderBottomRightRadius: 14,
              }}
              titleStyle={{color: color}}
              onPress={this.onCloseModalWarning}
            />
          </View>
        </ModalBase>
        <SafeAreaView />
      </View>
    );
  }
}

DetailItemScreen.defaultProps = {
  showBack: false,
  updateTotal: false,
};

export default DetailItemScreen;
