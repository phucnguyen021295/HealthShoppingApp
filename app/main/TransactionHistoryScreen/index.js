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
import {SafeAreaView} from 'react-native';

// Components
import AppHeader from '../../base/components/AppHeader';
import HistoryList from './components/HistoryList';

// Styles
import styles from './styles/index.css';

class TransactionHistoryScreen extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {


    return (
      <SafeAreaView style={styles.container}>
        <AppHeader title={'Lịch sử giao dịch'} />
        <HistoryList />
      </SafeAreaView>
    );
  }
}

TransactionHistoryScreen.defaultProps = {};

export default TransactionHistoryScreen;
