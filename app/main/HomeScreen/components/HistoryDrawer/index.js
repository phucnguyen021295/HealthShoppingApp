/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/11/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import {View} from 'react-native';

// Components
import Header from '../Header';
import ImageBackGround from '../../../../base/components/ImageBackGround';
import HistoryList from '../../../TransactionHistoryScreen/components/HistoryList';

// styles
import styles from './styles/index.css';

class HistoryDrawer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ImageBackGround
          source={require('../../../../images/backgroundHome.jpeg')}
          blurRadius={4}>
          <View style={styles.info}>
              <HistoryList />
          </View>
        </ImageBackGround>
      </View>
    );
  }
}

export default HistoryDrawer;
