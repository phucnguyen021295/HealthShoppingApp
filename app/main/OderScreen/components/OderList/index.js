/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/28/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {FlatList} from 'react-native';

// Components
import OderItem from '../OderItem';

// Data
import data from './data';

class OderList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item}) => <OderItem item={item} />;

  render() {
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
      />
    );
  }
}

export default OderList;
