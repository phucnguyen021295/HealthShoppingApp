/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/5/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {View, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';

// Components
import {SemiBoldText} from '../../base/components/Text';
import ButtonBase from '../../base/components/ButtonBase';

// Storage
import {setCheckIntroduce} from '../../core/storage';

// Data
import global from '../../global';

// Styles
import styles from './styles/index.css';

const SCREEN_WIDTH = Dimensions.get('window').width;

class IntroduceScreen extends PureComponent {
  constructor(props) {
    super(props);
    const {dataIntroduce} = global;
    this.state = {
      data: dataIntroduce,
      activeSlide: 0,
    };
  }

  onPress = () => {
    const {activeSlide, data} = this.state;
    if (activeSlide === data.length - 1) {
      setCheckIntroduce(true);
      this.props.navigation.navigate('Login');
      return;
    }
    console.log('onPress', activeSlide);
    this.carouselRef.snapToItem(activeSlide + 1);
  };

  setRefCarousel = (ref) => {
    this.carouselRef = ref;
  };

  _renderItem = ({item}) => {
    return (
      <View key={item.id} style={[styles.slide1]}>
        <FastImage
          source={require('../../images/logo.png')}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />
        <SemiBoldText style={styles.text}>{item.description}</SemiBoldText>
      </View>
    );
  };

  render() {
    const {activeSlide, data} = this.state;
    const isCheck = activeSlide === data.length - 1;
    return (
      <View style={{flex: 1}}>
        <Carousel
          ref={this.setRefCarousel}
          data={data}
          containerCustomStyle={{backgroundColor: '#ffffff'}}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({activeSlide: index})}
          itemWidth={SCREEN_WIDTH}
          inactiveSlideOpacity={1}
          sliderWidth={SCREEN_WIDTH}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.containerStyle}
          dotContainerStyle={styles.dotContainerStyle}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotScale={1}
        />
        <ButtonBase
          title={isCheck ? 'Bắt đầu' : 'Tiếp tục'}
          styleLinearGradient={styles.btnContainerStyle}
          buttonStyle={styles.buttonStyle}
          onPress={this.onPress}
        />
      </View>
    );
  }
}

export default IntroduceScreen;
