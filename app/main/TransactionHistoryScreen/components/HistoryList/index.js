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
import {FlatList} from 'react-native';

// Components
import HistoryItem from '../HistoryItem';
import {MediumText} from '../../../../base/components/Text';

// Core
import {getListTransactionHistory} from '../../../../core/db/table/transaction_history';
import {registerShoppingCardChange} from '../../../../core/shoppingCart';

class HistoryList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    registerShoppingCardChange(this.onSumMoney);

    getListTransactionHistory((data) => {
      this.setState({data: data});
    });
  }

  onSumMoney = () => {
    getListTransactionHistory((data) => {
      this.setState({data: data});
    });
  };

  renderItem = ({item}) => <HistoryItem item={item} />;

  ListFooterComponent() {
    return (
      <MediumText
        text={'Chưa có giao dịch nào.'}
        style={{textAlign: 'center', color: '#ffffff'}}
      />
    );
  }

  render() {
    const {data} = this.state;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.transactionId}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={data.length === 0 && this.ListFooterComponent}
        contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 30}}
      />
    );
  }
}

export default HistoryList;
