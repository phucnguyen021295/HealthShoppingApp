/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 11/1/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {Platform, StyleSheet} from 'react-native';
import * as fontSize from '../../../core/fontSize';
import {color} from '../../../core/color';
import {transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  styleHeader: {
    backgroundColor: color
  },

  info: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: widthToDP(20),
    paddingBottom: heightToDP(30),
  },

  textInfo: {
    color: '#ffffff',
    fontSize: fontSize.huge,
    marginBottom: heightToDP(20),
    textAlign: 'center'
  },

  textRow: {
    color: '#ffffff',
    fontSize: fontSize.normal,
    marginBottom: heightToDP(10),
  },

  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff52',
    paddingHorizontal: widthToDP(12),
    borderRadius: 8,
    ...Platform.select({
      android: {
        height: 40,
      }
    })
  },

  btnButtonStyle: {
    paddingVertical: 12,
    backgroundColor: transparent,
  },

  inputStyle: {
    color: '#ffffff',
    fontSize: fontSize.normal
  },

  inputInterestsContainerStyle: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff52',
    paddingHorizontal: widthToDP(12),
    borderRadius: 8,
    height: 120,
  },
});

export default styles;
