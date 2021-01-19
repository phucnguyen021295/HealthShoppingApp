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
import {FlatList, View} from 'react-native';

// Components
import HistoryItem from '../HistoryItem';
import {MediumText} from '../../../../base/components/Text';

// Api
import {getEarningApi} from '../../../../apis/health';

// Core
import {getListTransactionHistory} from '../../../../core/db/table/transaction_history';
import DropDownPicker from '../../../../base/components/DropDownPicker';

const itemsSelect = [
  {
    label: 'Tất cả',
    value: 'all',
    hidden: true,
  },
  {
    label: 'Chuyển tiền',
    value: 'transfer',
  },
];

class HistoryList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataFull: [],
      total: 0,
      type: 'all',
    };
  }

  componentDidMount() {
    // registerShoppingCardChange(this.onSumMoney);
    //
    // getListTransactionHistory((data) => {
    //   this.setState({data: data});
    // });

    getEarningApi(1, (response) => {
      const items = response.data.items;
      this.setState({data: items, dataFull: items, total: response.data.total});
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

  onChangeItem = (item) => {
    const {dataFull} = this.state;
    if(item.value === 'transfer') {
      const dataFilter = dataFull.filter(item => item.brief === 'Transfer');
      this.setState({type: item.value, data: dataFilter});
    } else {
      this.setState({type: item.value, data: dataFull});
    }
  };

  render() {
    const {data} = this.state;
    return (
      <View style={{paddingVertical: 20}}>

        <DropDownPicker
          items={itemsSelect}
          defaultValue={this.state.type}
          containerStyle={{height: 40, marginHorizontal: 20}}
          style={{backgroundColor: '#fafafa', }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={this.onChangeItem}
        />
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.identity}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={data.length === 0 && this.ListFooterComponent}
          style={{ marginTop: 20, marginBottom: 50}}
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 10,}}
        />
      </View>
    );
  }
}

export default HistoryList;
