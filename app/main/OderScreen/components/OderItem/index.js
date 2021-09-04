/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/28/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {TouchableOpacity, ActivityIndicator, View} from 'react-native';
import {Image, Rating} from 'react-native-elements';
import Modal from 'react-native-modal';

// Components
import Text, {SemiBoldText} from '../../../../base/components/Text';
import DetailItemScreen from '../../../DetailItemScreen';

// Styles
import styles from './styles/index.css';

class OderItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  onDetailItem = () => {
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
    const {item, oderType} = this.props;

    const price = item.priceusd;

    return (
      <TouchableOpacity onPress={this.onDetailItem} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item?.image150}}
            style={styles.image}
            PlaceholderContent={<ActivityIndicator />}
            resizeMode={'contain'}
          />
        </View>
        <SemiBoldText
          text={item.title}
          style={styles.title}
          numberOfLines={2}
        />
        <View style={styles.priceContainer}>
          <SemiBoldText
            text={price ? `${price} $` : 'Giá liên hệ'}
            style={styles.price}
          />
          <Rating
            ratingCount={3}
            imageSize={14}
            onFinishRating={this.onFinishRating}
          />
        </View>
        <Modal
          testID={'modal'}
          isVisible={isVisible}
          style={{justifyContent: 'flex-end', margin: 0}}>
          <DetailItemScreen
            item={item}
            oderType={oderType}
            onShoppingCard={this.onShoppingCard}
          />
        </Modal>
      </TouchableOpacity>
    );
  }
}

export default OderItem;
