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

import React from 'react';
import {View} from 'react-native';
// import QRCode from 'react-native-qrcode';

// Components
import Header from '../Header';
// import {MediumText} from '../../../../base/components/Text';

// styles
import styles from '../../styles/index.css';
import ImageBackGround from '../../../../base/components/ImageBackGround';

const data = [
  [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
  ],
];

class HomeDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrcode: 'https://github.com/cssivision/react-native-qrcode',
    };
  }

  render() {
    const {qrcode} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ImageBackGround
          source={require('../../../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <View style={{flex: 1, backgroundColor: 'rgba(62,66,212,0.25)'}}>
          </View>
        </ImageBackGround>
      </View>
    );
  }
}

export default HomeDrawer;
