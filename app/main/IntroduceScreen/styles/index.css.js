/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/5/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {StyleSheet} from 'react-native';
import {huge, large} from '../../../core/fontSize';
import {color, transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: widthToDP(20),
    paddingTop: heightToDP(50),
  },
  text: {
    marginTop: heightToDP(50),
    color: color,
    fontSize: large,
    lineHeight: large * 1.47,
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

  image: {
    width: heightToDP(250),
    height: heightToDP(250),
  },

  containerStyle: {
    paddingBottom: heightToDP(16),
    paddingTop: heightToDP(6),
    marginHorizontal: heightToDP(2),
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: heightToDP(20),
  },

  dotContainerStyle: {
    marginHorizontal: heightToDP(4),
  },

  dotStyle: {
    width: heightToDP(8),
    height: heightToDP(8),
    borderRadius: heightToDP(4),
    marginHorizontal: heightToDP(1),
    backgroundColor: color,
  },

  inactiveDotStyle: {
    width: heightToDP(8),
    height: heightToDP(8),
    borderRadius: heightToDP(4),
    backgroundColor: '#979797',
  },
});

export default styles;
