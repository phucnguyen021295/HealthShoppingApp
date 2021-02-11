/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 07/02/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

// Components
import Text, {MediumText} from '../../../../base/components/Text';

// Utils
import {convertDate} from '../../../../utils/convertDate';

// Styles
import styles from './styles/index.css';

function NotifyItem(props) {
  const {item} = props;
  return (
    <View style={styles.imageRow}>
      <FastImage source={{uri: item.image150}} style={styles.image150} />
      <View style={styles.body}>
        <FastImage source={{uri: item.image500}} style={styles.image500} />
        <Text text={convertDate(item.time)} style={styles.date} />
        <MediumText text={item.title} style={styles.title} />
        <Text text={item.des} style={styles.des} />
      </View>
    </View>
  );
}

export default NotifyItem;
