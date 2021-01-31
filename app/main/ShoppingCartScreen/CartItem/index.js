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
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  ScrollView,
} from 'react-native';
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
import {getPackageByProductId} from '../../../core/db/table/package_product';
import {getProduct} from '../../../core/db/table/product';

class CartItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      totalUpdate: props.item.total,
      listPackage: [],

      isRemoveProduct: false,
      isEditProduct: false,
      isEditProductPack: false,
      quality: 1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item !== this.props.item) {
      this.setState({item: this.props.item});
    }
  }

  onCloseModal = () => {
    this.setState({
      isEditProduct: false,
      isRemoveProduct: false,
      isEditProductPack: false,
    });
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
      this.setState({isEditProductPack: true});
    } else {
      this.setState({isEditProduct: true});
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
        nameProduct: item.nameProduct,
        namePack: item.namePack,
        type: item.type,
        packpriceusd: item.packpriceusd,
        image: item.image,
        quantity: 1,
        total: totalUpdate,
      };

      this.setState({item: data}, () => this.onCloseModal());
      replaceShopping(data, () => {
        broadcastShoppingCardChange();
      });
    }
  };

  onChangeItem = (item) => {
    const {data} = this.state;
    const itemPack = data.filter((it) => it.packid === item.value);
    this.setState({
      valueSelected: item.value,
      packSelected: itemPack[0],
    });
  };

  onRemoveProduct = () => {
    this.setState({isRemoveProduct: true});
  };

  onModalShow = () => {
    const {item} = this.state;
    debugger;
    getPackageByProductId(item.productid, item.type, (data) => {
      const _listPackage = data.filter((item) => item.packid !== '-1');
      alert(JSON.stringify(data));
      this.setState({
        listPackage: _listPackage,
      });
    });
  };

  onUpdateProductPack = (packSelected) => {
    const {item} = this.state;
    if(item.packid === packSelected.packid) {
      this.onCloseModal()
      return;
    }
    const data = {
      packid: packSelected.packid,
      productid: packSelected.productid,
      nameProduct: item.nameProduct,
      namePack: packSelected.title,
      type: packSelected.type,
      packpriceusd: packSelected.packpriceusd,
      image: item.image,
      quantity: 1,
      total: 1,
    };
    replaceShopping(data, () => {
      deleteShoppingItem(item.packid, item.productid, () => {
        broadcastShoppingCardChange();
      });
    });
    this.setState({item: data}, () => this.onCloseModal());
  };

  onModalShow = () => {
    const {item} = this.state;
    getProduct(item.productid, (data) => {
      this.setState({quality: data[0].quality});
    });
  };

  renderModal() {
    const {
      isEditProduct,
      isRemoveProduct,
      item,
      listPackage,
      isEditProductPack,
      quality
    } = this.state;
    return (
      <>
        <ModalBase
          isVisibleModal={isRemoveProduct}
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

        <ModalBase isVisibleModal={isEditProduct} title={item.nameProduct} onModalShow={this.onModalShow}>
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

        <ModalBase
          isVisibleModal={isEditProductPack}
          onModalShow={this.onModalShow}
          title={item.nameProduct}>
          <View style={{maxHeight: 500}}>
            <Text text={'Chọn lại gói sản phẩm'} style={styles.textSelect} />
            <ScrollView>
              {listPackage.map((item, index) => (
                <Button
                  title={item.title}
                  buttonStyle={styles.buttonStyleModal45}
                  titleStyle={{color: '#000000'}}
                  onPress={() => this.onUpdateProductPack(item)}
                />
              ))}
            </ScrollView>
            <View style={{flexDirection: 'row'}}>
              <Button
                title={'Quay lại'}
                containerStyle={{flex: 1, borderRadius: 0}}
                buttonStyle={[
                  styles.buttonStyleModal2,
                  {borderBottomLeftRadius: 14},
                ]}
                titleStyle={{color: color, textAlign: 'center'}}
                onPress={this.onCloseModal}
              />
            </View>
          </View>
        </ModalBase>
      </>
    );
  }

  render() {
    const {item} = this.state;
    return (
      <TouchableOpacity onPress={this.onDetailCart} style={styles.container}>
        <Button
          title={'x'}
          containerStyle={{marginRight: 12}}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={this.onRemoveProduct}
        />
        <Image
          source={{uri: item.image}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode={'contain'}
        />
        <View style={styles.priceContainer}>
          <MediumText
            text={item.nameProduct}
            style={styles.nameProduct}
            numberOfLines={1}
          />
          <Text
            text={
              item.packid === '-1' ? `${item.total} Bottles` : item.namePack
            }
            style={styles.title}
            numberOfLines={1}
          />
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
        {this.renderModal()}
      </TouchableOpacity>
    );
  }
}

export default CartItem;
