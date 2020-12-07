/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/20/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import {color} from '../../../../../core/color';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: color,
  },

  infoUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingLeft: 16
  },

  fullName: {
    paddingLeft: 18,
  },
});

export default styles;
