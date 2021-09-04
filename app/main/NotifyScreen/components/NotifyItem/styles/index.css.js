/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 07/02/2021.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../../core/fontSize';
import {heightToDP} from '../../../../../core/utils/dimension';

const styles = StyleSheet.create({
  imageRow: {
    paddingVertical: heightToDP(6),
    marginBottom: 10,
  },

  icon: {
    height: heightToDP(15),
    width: heightToDP(15)
  },

  image150: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: heightToDP(20),
  },

  image: {
    paddingHorizontal: heightToDP(8),
    paddingTop: heightToDP(8)
  },

  iconDot: {
    paddingLeft: heightToDP(20),
    paddingRight: heightToDP(4)
  },

  image500: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },

  date: {
    color: '#ffffff',
    fontSize: fontSize.fontSize14,
    paddingTop: 10,
    paddingHorizontal: heightToDP(20),
  },

  viewHours: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightToDP(15),
    marginLeft: heightToDP(20),
    marginRight: heightToDP(10)
  },

  hours: {
    color: '#cfcfcf',
    fontSize: fontSize.fontSize14,
    paddingLeft: heightToDP(8),
    flex: 1
  },

  title: {
    color: '#373737',
    fontSize: fontSize.normal,
    paddingVertical: heightToDP(12),
    paddingHorizontal: heightToDP(20)
  },

  des: {
    color: '#6c6c6c',
    fontSize: fontSize.normal,
    paddingHorizontal: heightToDP(20),
    paddingBottom: heightToDP(20)
  }
});

export default styles;
