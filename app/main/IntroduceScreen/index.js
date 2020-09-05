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

import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

// Components
import Logo from '../../base/components/Logo';

// Data
import data from './data';

// Styles
import styles from './styles/index.css';

class IntroduceScreen extends React.Component {
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
      // Navigate login
      return;
    }
    console.log('onPress', index);
    this.setState((state) => ({
      index: state.index + 1,
    }));
  };

  render() {
    const {index} = this.state;
    const isCheck = index === data.length - 1;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 1}}>
          <Swiper
            style={styles.wrapper}
            index={index}
            onIndexChanged={this.onIndexChanged}
            loadMinimal
            loadMinimalSize={1}
            loop={false}>
            {data.map((item) => (
              <View key={item.id} style={[styles.slide1]}>
                <Logo />
                <Text style={styles.text}>{item.description}</Text>
              </View>
            ))}
          </Swiper>
          <Button
            title={isCheck ? 'Bắt đầu' : 'Tiếp tục'}
            containerStyle={styles.btnContainerStyle}
            buttonStyle={styles.buttonStyle}
            onPress={this.onPress}
          />
        </View>
      </>
    );
  }
}

export default IntroduceScreen;
