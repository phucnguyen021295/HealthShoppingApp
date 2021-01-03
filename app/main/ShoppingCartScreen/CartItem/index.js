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
import {TouchableOpacity, ActivityIndicator, View} from 'react-native';
import {Image, Button} from 'react-native-elements';

// Components
import Text, {MediumText} from '../../../base/components/Text';
import ModalBase from '../../../base/components/ModalBase';
// import DetailItemScreen from '../../DetailItemScreen';

// Styles
import styles from './styles/index.css';
import {color} from '../../../core/color';
import {
  deleteShoppingItem,
  replaceShopping,
} from '../../../core/db/table/shopping';
import {broadcastShoppingCardChange} from '../../../core/shoppingCart';
import Quantity from '../../DetailItemScreen/components/Quantity';

class CartItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisiblePackageProduct: false,
      isVisibleProduct: false,
      item: props.item,
      totalUpdate: props.item.total,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item !== this.props.item) {
      this.setState({item: this.props.item});
    }
  }

  onUpdateCartItem = () => {
    this.setState({isVisiblePackageProduct: true});
  };

  onFinishRating = () => {};

  onCloseModal = () => {
    this.setState({isVisiblePackageProduct: false, isVisibleProduct: false});
  };

  onShoppingCard = () => {
    this.onCloseModal();
  };

  onCancelPackageProduct = () => {
    const {item} = this.state;
    const {packid, productid} = item;
    deleteShoppingItem(
      packid,
      productid,
      () => {
        broadcastShoppingCardChange();
        this.onCloseModal();
      },
      () => {
        this.onCloseModal();
      },
    );
  };

  onDetailCart = () => {
    const {item} = this.state;
    if (item.packid !== '-1') {
      this.onUpdateCartItem();
    } else {
      this.setState({isVisibleProduct: true});
    }
  };

  setQuantity = (total) => {
    this.setState({totalUpdate: total});
  };

  onUpdateProduct = () => {
    const {item, totalUpdate} = this.state;
    if (totalUpdate === item.total) {
      return;
    }

    if (totalUpdate === 0) {
      deleteShoppingItem(item.packid, item.productid, () => {
        broadcastShoppingCardChange();
      });
    } else {
      const data = {
        packid: item.packid,
        productid: item.productid,
        name: item.title,
        packpriceusd: item.packpriceusd,
        image: item.image,
        quantity: totalUpdate,
        total: totalUpdate,
      };
      replaceShopping(data, () => {
        broadcastShoppingCardChange();
      });
    }
  };

  render() {
    const {isVisiblePackageProduct, isVisibleProduct, item} = this.state;
    return (
      <TouchableOpacity onPress={this.onDetailCart} style={styles.container}>
        <Button
          title={item.packid === '-1' ? `x${item.total}` : 'pk'}
          containerStyle={{marginRight: 12}}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={this.onDetailCart}
        />
        <Image
          source={{uri: item.image}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode={'contain'}
        />
        <View style={styles.priceContainer}>
          <View style={styles.item}>
            <MediumText
              text={item.name}
              style={styles.title}
              numberOfLines={2}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={this.onDetailCart}>
              <MediumText text={'Chỉnh sửa'} style={styles.textUpdate} />
            </TouchableOpacity>
            <Text
              text={`${item.packpriceusd * item.total} $`}
              style={styles.price}
            />
          </View>
        </View>
        <ModalBase
          isVisibleModal={isVisiblePackageProduct}
          title={item.name}
          description={'Bạn muốn hủy không mua gói sản phẩm này?'}>
          <View style={{flexDirection: 'row'}}>
            <Button
              title={'Hủy bỏ'}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={styles.buttonStyleModal}
              onPress={this.onCancelPackageProduct}
            />
            <Button
              title={'Quay lại'}
              containerStyle={{flex: 1, borderRadius: 0}}
              buttonStyle={styles.buttonStyleModal2}
              titleStyle={{color: color}}
              onPress={this.onCloseModal}
            />
          </View>
        </ModalBase>

        <ModalBase isVisibleModal={isVisibleProduct} title={item.name}>
          <View>
            <View
              style={{
                fjustifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              <Quantity
                packid={item.packid}
                productid={item.productid}
                quantity={item.quantity}
                setQuantity={this.setQuantity}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button
                title={'Cập nhật'}
                containerStyle={{flex: 1, borderRadius: 0}}
                buttonStyle={styles.buttonStyleModal}
                onPress={this.onUpdateProduct}
              />
              <Button
                title={'Quay lại'}
                containerStyle={{flex: 1, borderRadius: 0}}
                buttonStyle={styles.buttonStyleModal2}
                titleStyle={{color: color}}
                onPress={this.onCloseModal}
              />
            </View>
          </View>
        </ModalBase>
        {/*<Modal*/}
        {/*  testID={'modal'}*/}
        {/*  isVisible={isVisible}*/}
        {/*  style={{justifyContent: 'flex-end', margin: 0}}>*/}
        {/*  <DetailItemScreen item={item} onShoppingCard={this.onShoppingCard} />*/}
        {/*</Modal>*/}
      </TouchableOpacity>
    );
  }
}

export default CartItem;
