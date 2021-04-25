/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 08/02/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import {Avatar, Image} from 'react-native-elements';

// Components
import Text, {MediumText} from '../../../../base/components/Text';

// Utils
import {convertDate} from '../../../../utils/convertDate';

// Styles
import styles from './styles/index.css';

function NewItem(props) {
  const {item} = props;
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('NewDetail', {item})}
      style={styles.imageRow}>
      <Avatar rounded size="xlarge" source={{uri: item.image150}} style={styles.image150} />
      <View style={styles.body}>
        <MediumText text={item.title} style={styles.title} numberOfLines={5} />
        <Text text={convertDate(item.time)} style={styles.date} />
      </View>
    </TouchableOpacity>
  );
}

export default withNavigation(NewItem);
