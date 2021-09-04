/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 1/3/21.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import {color} from '../../../../core/color';
import * as fontSize from '../../../../core/fontSize';

const styles = StyleSheet.create({
  containerStyle: {flex: 1, borderRadius: 0},

  buttonStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 0,
    borderTopColor: color,
    borderTopWidth: 1,
    paddingVertical: 10,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },

  titleStyle: {color: color},

  titleModalStyle: {
    fontSize: fontSize.huge,
  },

  descriptionModalStyle: {
    fontSize: fontSize.normal,
    paddingVertical: 8,
  },
});

export default styles;
