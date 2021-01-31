/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/6/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {Platform, StyleSheet} from 'react-native';
import {transparent} from '../../../../core/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },

  buttonStyle: {
    backgroundColor: transparent,
  },

  icon: {
    paddingLeft: 20,
    paddingRight: 30,
  },

  containerStyle: {
    backgroundColor: transparent,
    ...Platform.select({
      android: {
        height: 64,
      },
    }),
  },
});

export default styles;
