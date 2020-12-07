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
import {heightToDP, widthToDP} from '../../../core/utils/dimension';
import {color} from '../../../core/color';
import {huge} from '../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerStyle: {
    backgroundColor: color,
    borderTopWidth: 0,
    paddingHorizontal: widthToDP(20),
  },

  inputContainerStyle: {
    backgroundColor: '#ffffff52',
    height: heightToDP(46),
    borderRadius: heightToDP(23),
  },

  searchIcon: {color: '#ffffff', paddingLeft: widthToDP(10)},

  inputStyle: {
    color: '#ffffff',
    fontSize: huge,
  },
});

export default styles;
