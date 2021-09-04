/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/20/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet, Platform} from 'react-native';
import {transparent} from '../../../../../core/color';
import {heightToDP, widthToDP} from '../../../../../core/utils/dimension';
import {smaller, large} from '../../../../../core/fontSize';
import {isIphoneX} from "../../../../../core/utils/isIphoneX";

export const SIZE_ICON = 25;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: transparent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 99,
    alignItems: 'center',
    height: heightToDP(48),
    marginTop: (isIphoneX || Platform.OS === 'ios')  ? 0 : 20
  },

  buttonStyle: {
    backgroundColor: transparent,
    paddingLeft: 12,
    paddingRight: 20
  },

  buttonQRStyle: {
    backgroundColor: transparent,
    paddingHorizontal: 10
  },

  textStyle: {
    fontSize: smaller,
  },

  viewCenter: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
  },

  containerStyleBadge: {
    position: 'absolute',
    top: 0,
    right: widthToDP(10),
  },

  textTitle: {color: '#ffffff', fontSize: large, }
});

export default styles;
