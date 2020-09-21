/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/8/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import {color} from '../../../core/color';
import * as fontSize from '../../../core/fontSize';

const styles = StyleSheet.create({
  inputOTPMax: {
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    paddingLeft: 12,
    fontSize: fontSize.large,
    marginBottom: 51,
    marginHorizontal: 30,
    textAlign: 'center',
    paddingTop: 9,
    paddingBottom: 9,
    color: '#000000',
  },

  btnButtonStyle: {
    marginTop: 30,
    paddingVertical: 10,
    backgroundColor: color,
    paddingHorizontal: 30,
  },
});

export default styles;