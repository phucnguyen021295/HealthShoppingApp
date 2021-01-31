/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/1/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet, Dimensions} from 'react-native';
import {transparent} from '../../../../../core/color';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  row: {alignItems: 'center', width: width / 4, paddingVertical: 8},

  containerStyle: {
    borderRadius: 20,
  },

  btnButtonStyle: {
    height: 60,
    width: 62,
    borderRadius: 25,
    backgroundColor: transparent,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    paddingTop: 8,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});

export default styles;
