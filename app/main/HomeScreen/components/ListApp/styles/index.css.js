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

import {StyleSheet, Dimensions} from 'react-native';
import {transparent} from '../../../../../core/color';
import {heightToDP, widthToDP} from '../../../../../core/utils/dimension';
import {fontSize9} from '../../../../../core/fontSize';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthToDP(16),
  },

  columnWrapperStyle: {
    justifyContent: 'space-between',
  },

  row: {
    alignItems: 'center',
    width: (width - heightToDP(30)) / 4,
    paddingBottom: heightToDP(12),
  },

  containerStyle: {
    borderRadius: 20,
  },

  btnButtonStyle: {
    height: 58,
    width: 60,
    borderRadius: 25,
    backgroundColor: transparent,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    paddingTop: 8,
    textAlign: 'center',
    paddingHorizontal: 8,
    fontSize: fontSize9,
  },

  image: {
    height: heightToDP(50),
    width: heightToDP(50),
  },
});

export default styles;
