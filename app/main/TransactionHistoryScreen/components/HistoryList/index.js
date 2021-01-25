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
      numberPage: 1,
      pages: [
        {
          label: 'Trang 1',
          value: 1,
          hidden: true,
        },
      ],
    };
  }

  componentDidMount() {
    // registerShoppingCardChange(this.onSumMoney);
    //
    // getListTransactionHistory((data) => {
    //   this.setState({data: data});
    // });

    const {type, numberPage} = this.state;

    this.getDataEarningApi(type, numberPage);
  }

  getDataEarningApi = (type, page) => {
    getEarningApi(type, page, (response) => {
      const {data} = response;
      const {items, total} = data;

      this.getPages(total);
      this.setState({data: items, dataFull: items, total: total}, () => {
        this.toTop();
      });
    });
  };

  getPages = (total) => {
    let totalPage = 1;
    const number = total / 20;
    if (number === parseInt(number)) {
      totalPage = number;
    }

    if (number > parseInt(number)) {
      totalPage = parseInt(number) + 1;
    }

    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push({
        label: `Trang ${i}`,
        value: i,
      });
    }

    this.setState({pages});
  };

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
    this.setState({type: item.value, numberPage: 1}, () => {
      this.getDataEarningApi(item.value, 1);
    })
  };

  onChangePage = (item) => {
    const {type} = this.state;
    this.setState({numberPage: item.value}, () => {
      this.getDataEarningApi(type, item.value);
    });
  };

  toTop = () => {
    // use current
    this.setFlatlistRef && this.setFlatlistRef.scrollToOffset({ animated: true, offset: 0 });
  };

  setRef = (ref) => {
    this.setFlatlistRef = ref;
  };

  render() {
    const {data, type, numberPage, pages} = this.state;
    return (
      <View style={{paddingVertical: 20}}>
        <View style={{flexDirection: 'row', zIndex: 99}}>
          <DropDownPicker
            items={itemsSelect}
            defaultValue={type}
            containerStyle={{height: 40, marginHorizontal: 20, flex: 1}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={this.onChangeItem}
          />
          <DropDownPicker
            items={pages}
            defaultValue={numberPage}
            containerStyle={{height: 40, marginRight: 20, width: 130}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={this.onChangePage}
          />
        </View>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.identity}
          ref={this.setRef}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={data.length === 0 && this.ListFooterComponent}
          style={{marginTop: 20, marginBottom: 50}}
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 10}}
        />
      </View>
    );
  }
}

export default HistoryList;
