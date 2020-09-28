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
import {
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  View,
  SafeAreaView,
} from 'react-native';
import {Image, Rating} from 'react-native-elements';
import Modal from 'react-native-modal';

// Components
import Text, {MediumText} from '../../../../base/components/Text';
import DetailItemScreen from '../../../DetailItemScreen';

// Styles
import styles from './styles/index.css';

const {width} = Dimensions.get('window');
const HEIGHT_IMAGE = (width * 2) / 3;

class OderItem extends React.Component {
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

  render() {
    const {isVisible} = this.state;
    const {item} = this.props;
    return (
      <TouchableOpacity onPress={this.onDetailItem} style={styles.container}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode={'contain'}
        />
        <Text text={item.name} style={styles.title} numberOfLines={2} />
        <View style={styles.priceContainer}>
          <MediumText text={`${item.price}$`} style={styles.price} />
          <Rating
            ratingCount={5}
            imageSize={16}
            onFinishRating={this.onFinishRating}
          />
        </View>
        <Modal
          testID={'modal'}
          isVisible={isVisible}
          onSwipeComplete={this.close}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={{justifyContent: 'flex-end', margin: 0}}>
          <DetailItemScreen item={item} />
        </Modal>
      </TouchableOpacity>
    );
  }
}

export default OderItem;
