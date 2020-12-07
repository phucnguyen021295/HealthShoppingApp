/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/1/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../../core/fontSize';
import {transparent} from '../../../../../core/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  info: {
    backgroundColor: '#00000059',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  textRow: {
    color: '#ffffff',
    fontSize: fontSize.normal,
    marginBottom: 10,
  },

  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff52',
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  btnButtonStyle: {
    paddingVertical: 12,
    backgroundColor: transparent,
  },

  inputStyle: {
    color: '#ffffff',
  },

  inputInterestsContainerStyle: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff52',
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 120,
  },
});

export default styles;