/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 07/02/2021.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {View} from 'react-native';

// Components
import Text, {SemiBoldText} from '../../../../base/components/Text';
import HoursNotify from '../../../../base/components/HoursNotify';

// Utils
import {convertDate} from '../../../../utils/convertDate';

// Styles
import styles from './styles/index.css';

function NotifyItem(props) {
  const {item} = props;
  return (
    <View style={styles.imageRow}>
      <Text text={convertDate(item.ordertime)} style={styles.date} />
      <HoursNotify time={item.ordertime} />
      <View style={styles.body}>
        <Text style={styles.brief}>
          Mã đơn hàng:
          <SemiBoldText text={` ${item.identity}`} />
        </Text>

        <Text style={styles.brief}>
          Tên sản phẩm:
          <SemiBoldText text={` ${item.title}`} />
        </Text>

        <Text style={styles.brief}>
          Giá sản phẩm:
          <SemiBoldText text={` $${item.cost}`} />
        </Text>

        <Text style={styles.brief}>
          Số lượng:
          <SemiBoldText text={` ${item.quantity}`} />
        </Text>

        <Text style={styles.brief}>
          Điểm tích lũy:
          <SemiBoldText text={` ${item.pv}`} />
        </Text>
      </View>
    </View>
  );
}

export default NotifyItem;
