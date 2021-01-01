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
import Text, {MediumText} from '../../base/components/Text';
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
    const {item} = this.props;
    const {AccountBalance} = global;

    if (AccountBalance < totalMoney + item.price * total) {
      this.setState({isVisibleWarning: true});
    } else {
      this.props.onShoppingCard();
      const data = {
        productId: item.productid,
        name: item.title,
        price: item.priceusd,
        image: item.image150,
        total: total,
      };
      if (total === 0) {
        deleteShoppingItem(item.productId, () => {
          broadcastShoppingCardChange();
        });
      } else {
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
    if (total === 0) {
      return 'Quay lại';
    }
    const totalMoney = total * item.priceusd;
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
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.image500}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode={'contain'}
        />
        <ScrollView>
          <View style={{paddingHorizontal: widthToDP(20)}}>
            <HTML
              source={{html: item.des}}
              imagesMaxWidth={Dimensions.get('window').width - 40}
              allowFontScaling={false}
              tagsStyles={CUSTOM_STYLES}
            />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Quantity
              productId={item.productId}
              setQuantity={this.setQuantity}
              updateTotal={this.updateTotal}
            />
          </View>
        </ScrollView>
        <View style={styles.btnAddShopping}>
          <ButtonBase
            title={this.setBtnText()}
            buttonStyle={styles.btnButtonStyle}
            textStyle={styles.textStyle}
            onPress={this.addShoppingCard}
          />
        </View>
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
                backgroundColor: '#247f24',
                borderRadius: 0,
                borderTopColor: '#247f24',
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
                borderTopColor: '#247f24',
                borderTopWidth: 1,
                borderBottomRightRadius: 14,
              }}
              titleStyle={{color: '#247f24'}}
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
