/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 14/01/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text, {SemiBoldText} from '../../../../base/components/Text';
import {normal} from '../../../../core/fontSize';
import {widthToDP} from '../../../../core/utils/dimension';

function TextInfo(props) {
  const {label, value, containerStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text text={label} style={styles.text} />
      <SemiBoldText text={value} style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: widthToDP(8),
    borderBottomWidth: 0.5,
    borderBottomColor: '#ece9e9'
  },

  text: {
    fontSize: normal,
    color: '#fff',
  },
});

export default TextInfo;
