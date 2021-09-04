/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/30/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet, Platform} from 'react-native';
import {heightToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: heightToDP(340),
    color: '#ffffff',
    zIndex: 99,
  },
  chart: {
    flex: 1,
    marginBottom: 20
  },
  dropdownContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    ...Platform.select({
      ios: {
        zIndex: 100,
      },
    }),
      marginBottom: 16,
      marginTop: 10
  },

    containerStyle: {height: 40,},

  square: {
    width: 14,
    height: 14,
  },

  overviewText: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 8,
  },

});

export default styles;
