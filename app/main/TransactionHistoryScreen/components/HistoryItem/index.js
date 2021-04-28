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
import {injectIntl, intlShape} from 'react-intl';

// Component
import Text from '../../../../base/components/Text';
import LinearGradient from '../../../../base/components/LinearGradient';

// Utils
import {convertDate} from '../../../../utils/convertDate';

// Styles
import styles from './styles/index.css';

import message from '../../../../msg/history';

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
      colors: makeColor(),
    };
  }

  render() {
    const {colors} = this.state;
    const {item, intl} = this.props;
    const {formatMessage} = intl;
    return (
      <View style={styles.container}>
        <LinearGradient style={styles.linearGradient} colors={colors}>
          <View style={styles.body}>
            <Text
              text={`${formatMessage(message.date)} ${convertDate(item.time)}`}
              style={styles.textTotalPrice}
            />
            <View />
            <Text
              text={`${formatMessage(message.type)} ${item.brief}`}
              style={styles.textTotalPrice}
            />
            <Text
              text={`${formatMessage(message.transfer)} ${item.des}`}
              style={styles.textTotalPrice}
            />
            <Text
              text={`${formatMessage(message.total)} ${item.value} $`}
              style={styles.textTotalPrice}
            />
            <Text
              text={`${formatMessage(message.balance)} ${item.accountlog} $`}
              style={styles.textAccountBalance}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

HistoryItem.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HistoryItem);
