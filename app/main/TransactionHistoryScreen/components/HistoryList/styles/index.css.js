/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 03/09/2021.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {StyleSheet} from 'react-native';
import {heightToDP} from '../../../../../core/utils/dimension';
import {fontSize14} from '../../../../../core/fontSize';

const styles = StyleSheet.create({
  search: {

    flexDirection: 'row',
    paddingHorizontal: heightToDP(20),
    alignItems: 'center',
    paddingTop: heightToDP(10),
  },

  textInput: {
    flex: 1,
    height: heightToDP(36),
    paddingLeft: heightToDP(20),
    fontSize: fontSize14,
    color: '#ffffff',
  },

  titleTabBar: {
    fontSize: fontSize14,
    color: '#ffffff',
    // paddingHorizontal: heightToDP(2),
    // borderBottomWidth: 2,
  },
});

export default styles;
