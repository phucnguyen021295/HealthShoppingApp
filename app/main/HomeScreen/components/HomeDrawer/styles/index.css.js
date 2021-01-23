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
import * as fontSize from '../../../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullName: {
    paddingLeft: 20,
  },

  info: {
    backgroundColor: 'rgba(0,0,0,0.49)',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 12,
  },
  name: {color: '#ffffff', fontSize: fontSize.normal, lineHeight: 30},

  chart: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.49)',
  },
});

export default styles;
