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

import {StyleSheet} from 'react-native';
import {transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';
import {isIPhoneX} from '../../../core/utils/isIphoneX';

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  btnButtonStyle: {
    paddingVertical: heightToDP(12),
    marginHorizontal: widthToDP(10),
    backgroundColor: transparent,
  },

  image: {
    width: heightToDP(200),
    height: heightToDP(200),
    marginTop: heightToDP(isIPhoneX ? 50 : 30),
  },

  body: {
    paddingHorizontal: widthToDP(20),
    paddingTop: heightToDP(50),
  },
});

export default styles;
