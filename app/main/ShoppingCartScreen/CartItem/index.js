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
import {TouchableOpacity, ActivityIndicator, View} from 'react-native';
import {Image, Button} from 'react-native-elements';
import Modal from 'react-native-modal';

// Components
import Text, {MediumText} from '../../../base/components/Text';
import DetailItemScreen from '../../DetailItemScreen';

// Core
import {formatMoneyToVN} from '../../../core/utils/formatMoney';

// Styles
import styles from './styles/index.css';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  onUpdateCartItem = () => {
    this.setState({isVisible: true});
  };

  onFinishRating = () => {};

  onCloseModal = () => {
    this.setState({isVisible: false});
  };

  onShoppingCard = () => {
    this.onCloseModal();
  };

  render() {
    const {isVisible} = this.state;
    const {item} = this.props;
    return (
      <TouchableOpacity onPress={this.onDetailItem} style={styles.container}>
        <Button
          title={`x${item.total}`}
          containerStyle={{marginRight: 12}}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
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
            <TouchableOpacity onPress={this.onUpdateCartItem}>
              <MediumText text={'Chỉnh sửa'} style={styles.textUpdate} />
            </TouchableOpacity>
            <Text
              text={`${formatMoneyToVN(item.price * item.total)}`}
              style={styles.price}
            />
          </View>
        </View>
        <Modal
          testID={'modal'}
          isVisible={isVisible}
          style={{justifyContent: 'flex-end', margin: 0}}>
          <DetailItemScreen item={item} onShoppingCard={this.onShoppingCard} />
        </Modal>
      </TouchableOpacity>
    );
  }
}

export default CartItem;
