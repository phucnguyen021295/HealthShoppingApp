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
import * as fontSize from '../../../core/fontSize';
import {transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthToDP(20),
  },
  textInfo: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: fontSize.huge,
    paddingVertical: heightToDP(30),
    marginBottom: heightToDP(30),
  },
  textRow: {
    color: '#ffffff',
    fontSize: fontSize.normal,
    marginBottom: heightToDP(10),
  },

  btnButtonStyle: {
    paddingVertical: heightToDP(12),
    backgroundColor: transparent,
  },

  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff52',
    paddingHorizontal: widthToDP(12),
    borderRadius: heightToDP(8),
  },

  inputStyle: {
    color: '#ffffff',
    fontSize: fontSize.normal,
  },

  item: {marginBottom: heightToDP(30)},

  inputContainerStyleNote: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff52',
    paddingHorizontal: widthToDP(12),
    borderRadius: heightToDP(8),
    height: heightToDP(120),
  },

  containerStyleNote: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: heightToDP(120),
  }
});

export default styles;
