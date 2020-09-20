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
import {large} from '../../../core/fontSize';
import {blue_bluezone} from '../../../core/color';
import {heightPercentageToDP} from '../../../core/utils/dimension';

export const CONTAINER_MARGINVERTICAL = heightPercentageToDP((137 / 720) * 100);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  logo: {
    width: 124,
    height: 124,
  },

  modalFlash: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: CONTAINER_MARGINVERTICAL,
  },

  body: {
    alignItems: 'center',
  },

  icon_success: {
    width: 58,
    height: 59,
    marginBottom: 32,
  },

  text: {
    fontSize: large,
    color: '#000000',
    textAlign: 'center',
    paddingHorizontal: 10,
  },

  buttonInvite: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },

  textInvite: {
    color: blue_bluezone,
  },
});

export default styles;
