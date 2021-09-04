/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 04/09/2021.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import {heightToDP} from '../../../../core/utils/dimension';
import * as fontSize from '../../../../core/fontSize';

const styles = StyleSheet.create({
  viewHours: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightToDP(12),
    marginLeft: heightToDP(20),
    marginRight: heightToDP(10),
  },

  hours: {
    color: '#cfcfcf',
    fontSize: fontSize.fontSize14,
    paddingLeft: heightToDP(8),
    flex: 1,
  },

  icon: {
    height: heightToDP(15),
    width: heightToDP(15),
  },

  iconDot: {
    paddingLeft: heightToDP(20),
    paddingRight: heightToDP(4),
  },
});

export default styles;
