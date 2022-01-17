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
import message from '../../../../msg/purchaseHistory';
import {injectIntl} from 'react-intl';

function NotifyItem(props) {
  const {item, intl} = props;
  const {formatMessage} = intl;
  return (
    <View style={styles.imageRow}>
      <Text text={convertDate(item.ordertime)} style={styles.date} />
      <HoursNotify time={item.ordertime} />
      <View style={styles.body}>
        <Text style={styles.brief}>
          {formatMessage(message.identity)}
          <SemiBoldText text={` ${item.identity}`} />
        </Text>

        <Text style={styles.brief}>
          {formatMessage(message.membercode)}
          <SemiBoldText text={` ${item.membercode}`} />
        </Text>

        <Text style={styles.brief}>
          {formatMessage(message.title)}
          <SemiBoldText text={` ${item.title}`} />
        </Text>

        <Text style={styles.brief}>
          {formatMessage(message.cost)}
          <SemiBoldText text={` $${item.cost}`} />
        </Text>

        <Text style={styles.brief}>
          {formatMessage(message.quality)}
          <SemiBoldText text={` ${item.quality}`} />
        </Text>

        <Text style={styles.brief}>
          {formatMessage(message.pv)}
          <SemiBoldText text={` ${item.pv}`} />
        </Text>

        <Text style={styles.brief}>
          {formatMessage(message.order)}
          <SemiBoldText
            text={` ${item.ordertype === '1' ? 'Online' : 'Offline'}`}
          />
        </Text>
      </View>
    </View>
  );
}

export default injectIntl(NotifyItem);
