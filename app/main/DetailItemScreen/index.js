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

import React from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import {Button, Image} from 'react-native-elements';

// Components
import Text, {MediumText} from '../../base/components/Text';
import Quantity from './components/Quantity';
import ButtonBase from '../../base/components/ButtonBase';

import {broadcastShoppingCardChange} from '../../core/shoppingCart';

// db
import {
  replaceShopping,
  deleteShoppingItem,
  getCartItem,
} from '../../core/db/table/shopping';

// Styles
import styles from './styles/index.css';
import IconEntypo from 'react-native-vector-icons/Entypo';

class DetailItemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      total: 1,
      updateCart: false,
      isGetCart: false,
    };
  }

  updateTotal = (status) => {
    this.setState(status);
  };

  addShoppingCard = () => {
    const {total} = this.state;
    const {item} = this.props;

    this.props.onShoppingCard();
    const data = {
      productId: item.productId,
      name: item.name,
      price: item.price,
      image: item.image,
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
    const totalMoney = total * item.price;
    if (updateCart) {
      return `Cập nhật giỏ hàng - ${totalMoney}$`;
    }

    return `Thêm vào giỏ hàng - ${totalMoney}$`;
  };

  render() {
    const {total} = this.state;
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode={'contain'}
        />
        <View style={styles.row1}>
          <MediumText text={item.name} style={styles.title} numberOfLines={2} />
          <MediumText text={`${item.price}$`} style={styles.price} />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <MediumText text={'Thông tin sẳn phẩm:'} style={styles.description} />
          <MediumText text={'Công dụng:'} style={styles.detail} />
          <Text
            text={
              '- Bổ sung Canxi, Vitamin D3 cho cơ thể, hỗ trợ tăng cường hấp thu canxi, giúp xương và răng chắc khỏe.'
            }
            style={styles.detail}
          />
          <Text
            text={
              '- Hỗ trợ phát triển chiều cao ở trẻ, giảm nguy cơ loãng xương ở người lớn.'
            }
            style={styles.detail}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Quantity
            productId={item.productId}
            setQuantity={this.setQuantity}
            updateTotal={this.updateTotal}
          />
        </View>
        <View style={styles.btnAddShopping}>
          <ButtonBase
            title={this.setBtnText()}
            buttonStyle={styles.btnButtonStyle}
            onPress={this.addShoppingCard}
          />
        </View>
        <Button
          icon={<IconEntypo name="cross" size={22} color={'#ffffff'} />}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.containerStyle}
          onPress={this.addShoppingCard}
        />
      </View>
    );
  }
}

DetailItemScreen.defaultProps = {
  showBack: false,
  updateTotal: false,
};

export default DetailItemScreen;
