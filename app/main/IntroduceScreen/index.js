/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/5/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {View, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';

// Components
import {MediumText} from '../../base/components/Text';
import ButtonBase from '../../base/components/ButtonBase';

// Storage
import {setCheckIntroduce} from '../../core/storage';

// Data
import data from './data';

// Styles
import styles from './styles/index.css';
import {heightToDP} from '../../core/utils/dimension';

class IntroduceScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onIndexChanged = (index) => {
    if (index === data.length) {
      // Navigate login
      return;
    }
    this.setState({index});
    console.log('index', index);
  };

  onPress = () => {
    const {index} = this.state;
    if (index === data.length - 1) {
      setCheckIntroduce(true);
      this.props.navigation.navigate('Login');
      return;
    }
    console.log('onPress', index);
    this.setState((prev) => ({
      index: prev.index + 1,
    }));
  };

  render() {
    const {index} = this.state;
    const isCheck = index === data.length - 1;
    return (
      <>
        <View style={{flex: 1}}>
          <Swiper
            style={styles.wrapper}
            index={index}
            onIndexChanged={this.onIndexChanged}
            loadMinimal
            loadMinimalSize={1}
            activeDotStyle={styles.activeDot}
            loop={false}>
            {data.map((item) => (
              <View key={item.id} style={[styles.slide1]}>
                <FastImage
                  source={require('../../images/logo.png')}
                  style={[{width: heightToDP(250), height: heightToDP(250)}]}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <MediumText style={styles.text}>{item.description}</MediumText>
              </View>
            ))}
          </Swiper>
          <ButtonBase
            title={isCheck ? 'Bắt đầu' : 'Tiếp tục'}
            styleLinearGradient={styles.btnContainerStyle}
            buttonStyle={styles.buttonStyle}
            onPress={this.onPress}
          />
        </View>
      </>
    );
  }
}

export default IntroduceScreen;
