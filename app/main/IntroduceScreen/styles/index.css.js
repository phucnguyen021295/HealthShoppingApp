/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/5/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import {huge} from '../../../core/fontSize';
import {color, transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: widthToDP(20),
    paddingTop: heightToDP(50),
  },
  text: {
    marginTop: heightToDP(100),
    color: color,
    fontSize: huge,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  btnContainerStyle: {
    position: 'absolute',
    bottom: heightToDP(60),
    right: widthToDP(30),
    borderRadius: heightToDP(25),
  },

  buttonStyle: {
    paddingHorizontal: widthToDP(20),
    paddingVertical: heightToDP(10),
    borderRadius: heightToDP(25),
    backgroundColor: transparent,
  },

  activeDot: {
    backgroundColor: color,
  },
});

export default styles;
