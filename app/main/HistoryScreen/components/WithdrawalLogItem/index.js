/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 15/01/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import {TouchableOpacity, View} from 'react-native';

// Components
import Text, {SemiBoldText} from '../../../../base/components/Text';
import HoursNotify from '../../../../base/components/HoursNotify';

// Utils
import {convertDate} from '../../../../utils/convertDate';

// Styles
import styles from './styles/index.css';

function WithdrawalLogItem(props) {
  const {item, onReport} = props;
  return (
    <View style={styles.imageRow}>
      <Text text={convertDate(item.time)} style={styles.date} />
      <HoursNotify time={item.time} />
      <View style={styles.body}>
        <Text style={styles.brief}>
          Mã yêu cầu:
          <SemiBoldText text={` ${item.code}`} />
        </Text>
        <Text style={styles.brief}>
          Số tiền rút:
          <SemiBoldText text={` ${item.value}`} />
        </Text>
        {item.status === '0' && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 8,
            }}>
            <TouchableOpacity style={styles.btn} onPress={() => onReport(item.id)}>
              <Text text={'Thu hồi yêu cầu'} style={styles.textBtn} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

export default WithdrawalLogItem;
