/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/20/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {StyleSheet} from 'react-native';
import {color} from '../../../core/color';
import {normal} from '../../../core/fontSize';
import {heightToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  styleHeader: {
    backgroundColor: color,
  },

  textNote: {
    fontSize: normal,
    textAlign: 'center',
    paddingHorizontal: heightToDP(30),
    paddingTop: heightToDP(30),
    lineHeight: normal * 1.5
  }
});

export default styles;
