/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/4/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import {transparent} from '../../../../../core/color';

const styles = StyleSheet.create({
  btnBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  btnTop: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  btnButtonStyle: {
    paddingVertical: 12,
    backgroundColor: transparent,
    marginHorizontal: 10,
  },
});

export default styles;
