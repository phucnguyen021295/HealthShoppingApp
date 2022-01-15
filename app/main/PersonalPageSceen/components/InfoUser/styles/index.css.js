/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 14/01/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {StyleSheet} from 'react-native';
import {widthToDP} from '../../../../../core/utils/dimension';
import {large} from '../../../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    paddingBottom: widthToDP(20),
  },

  rowFullName: {
    paddingBottom: widthToDP(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  fullName: {
    fontSize: large,
    color: '#fff',
  },
});

export default styles;
