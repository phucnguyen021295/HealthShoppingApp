/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 08/02/2021.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import {color} from '../../../core/color';
import {normal} from '../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  styleHeader: {
    backgroundColor: color,
  },

  textNote: {
    fontSize: normal,
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
    lineHeight: 25,
  },

  body: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  }
});

export default styles;
