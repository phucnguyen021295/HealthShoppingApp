/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/7/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {View} from 'react-native';

// Component
import {MediumText} from '../../../../base/components/Text';
import LinearGradient from '../../../../base/components/LinearGradient';

// Styles
import styles from './styles/index.css';

const arrayColor = [
  '#247f24',
  '#b10e0e',
  '#b1590e',
  '#b1a40e',
  '#0eb193',
  '#0e39b1',
];

const makeColor = () => {
  const random = Math.floor(Math.random() * arrayColor.length);
  return ['#697f3f', arrayColor[random]];
};

class HistoryItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  convertDate = (timeStamp) => {
    const date = new Date(timeStamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  render() {
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient style={styles.linearGradient} colors={makeColor()}>
          <View style={styles.body}>
            <MediumText
              text={`Ngày mua hàng: ${this.convertDate(item.time)}`}
              style={styles.textTotalPrice}
            />
            <View />
            <MediumText
              text={`Tổng tiền: ${item.totalPrice} $`}
              style={styles.textTotalPrice}
            />
            <MediumText
              text={`Số dư trong tài khoản: ${item.accountBalance} $`}
              style={styles.textAccountBalance}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default HistoryItem;
