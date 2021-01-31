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

import {StyleSheet, Platform} from 'react-native';
import {transparent} from '../../../../../core/color';
import {heightToDP, widthToDP} from '../../../../../core/utils/dimension';
import {smaller} from '../../../../../core/fontSize';

export const SIZE_ICON = heightToDP(25);

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: transparent,
    ...Platform.select({
      android: {
        height: 64,
      }
    }),
    zIndex: 99,
  },

  buttonStyle: {
    backgroundColor: transparent,
  },

  textStyle: {
    fontSize: smaller,
  },

  containerStyleBadge: {
    position: 'absolute',
    top: 0,
    right: -widthToDP(4),
  },
});

export default styles;
