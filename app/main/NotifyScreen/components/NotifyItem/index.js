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
import {View, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Avatar, Image} from 'react-native-elements';

// Components
import Text, {SemiBoldText} from '../../../../base/components/Text';
import HoursNotify from '../../../../base/components/HoursNotify';

// Utils
import {convertDate, convertHours} from '../../../../utils/convertDate';

// Styles
import styles from './styles/index.css';
import {CUSTOM_STYLES} from '../../../DetailItemScreen/styles/index.css';
import HTML from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';

function NotifyItem(props) {
  const {item} = props;
  return (
    <View style={styles.imageRow}>
      <Text text={convertDate(item.time)} style={styles.date} />
      <HoursNotify time={item.time} />
      <View style={styles.body}>
        <View style={styles.image}>
          <Image
            source={{uri: item.image500}}
            style={styles.image500}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <SemiBoldText text={item.title} style={styles.title} />
        <Text text={item.des} style={styles.des} />
      </View>
    </View>
  );
}

export default NotifyItem;
