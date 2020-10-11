/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/11/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },

  linearGradient: {
    borderRadius: 14,
  },

  body: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  textDescription: {
    color: '#ffffff',
    fontSize: fontSize.smaller,
  },

  textTotalPrice: {
    color: '#ffffff',
    fontSize: fontSize.normal,
    lineHeight: 25,
  },

  textAccountBalance: {
    color: '#ffffff',
    fontSize: fontSize.normal,
    lineHeight: 25,
  },
});

export default styles;
