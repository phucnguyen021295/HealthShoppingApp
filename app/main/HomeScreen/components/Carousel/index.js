/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/20/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, {PureComponent} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  Dimensions,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native';

// Components
import {MediumText} from '../../../../base/components/Text';

// Apis
import {getNewHomeApi} from '../../../../apis/health';

const ENTRIES1 = [
  {
    time: '1612685842',
    title: '',
    brief: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    des: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image150: '',
    image500: '',
  },
  {
    time: '1612685842',
    title: '',
    brief: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    des: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image150: '',
    image500: '',
  },
];
const {width: screenWidth} = Dimensions.get('window');

class MyCarousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      entries: ENTRIES1,
    };

    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    getNewHomeApi({}, (response) => {
      const {data} = response;
      if (data.length === 0) {
        return;
      }
      const {items, total} = data;
      this.setState({entries: items.slice(0, 5)});
    });
  }

  onDetailNew = (item) => {
    this.props.navigation.navigate('NewDetail', {item});
  };

  _renderItem({item, index}, parallaxProps) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.onDetailNew(item)}>
        <ParallaxImage
          source={{uri: item.image500}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <MediumText style={styles.title} numberOfLines={1}>
          {item.title}
        </MediumText>
      </TouchableOpacity>
    );
  }

  render() {
    const {entries} = this.state;
    return (
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={this._renderItem}
        hasParallaxImages={true}
      />
    );
  }
}

export default MyCarousel;

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: 180,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: '#dddddd',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    color: '#ffffff',
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: screenWidth - 100,
  },
});
