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
import {huge, large, normal} from '../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerStyle: {
    backgroundColor: '#0000000',
    borderTopWidth: 0,
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: 20
  },

  inputContainerStyle: {
    backgroundColor: '#ffffff52',
    height: 46,
    borderRadius: 23,
  },

  searchIcon: {color: '#ffffff', paddingLeft: widthToDP(10)},

  inputStyle: {
    color: '#ffffff',
    fontSize: huge,
  },

  modalContainer: {
    paddingTop: 8,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },

  title: {
    paddingHorizontal: 20,
    fontSize: huge,
    paddingVertical: 10
  },

  itemSelect: {
    paddingHorizontal: 40,
    fontSize: large,
    paddingVertical: 10
  },

  titleSelect: {
    paddingLeft: 20,
    fontSize: large,
    paddingVertical: 10
  },

  textClose: {
    color: color,
    fontSize: normal,
    paddingRight: 20,
  }
});

export default styles;
