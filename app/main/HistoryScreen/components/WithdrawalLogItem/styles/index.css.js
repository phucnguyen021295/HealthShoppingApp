/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 15/01/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../../core/fontSize';
import {widthToDP} from '../../../../../core/utils/dimension';
import {color} from '../../../../../core/color';
import {small} from '../../../../../core/fontSize';

const styles = StyleSheet.create({
  imageRow: {
    paddingVertical: widthToDP(6),
    // marginBottom: widthToDP(6),
  },

  icon: {
    height: widthToDP(15),
    width: widthToDP(15),
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
    marginHorizontal: widthToDP(20),
    paddingHorizontal: widthToDP(12),
    paddingVertical: widthToDP(12),
  },

  image: {
    paddingHorizontal: widthToDP(8),
    paddingTop: widthToDP(8),
  },

  iconDot: {
    paddingLeft: widthToDP(20),
    paddingRight: widthToDP(4),
  },

  image500: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },

  date: {
    color: '#ffffff',
    fontSize: fontSize.fontSize14,
    paddingTop: widthToDP(6),
    paddingHorizontal: widthToDP(20),
    // backgroundColor: 'green'
  },

  viewHours: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: widthToDP(15),
    marginLeft: widthToDP(20),
    marginRight: widthToDP(10),
  },

  hours: {
    color: '#cfcfcf',
    fontSize: fontSize.fontSize14,
    paddingLeft: widthToDP(8),
    flex: 1,
  },

  title: {
    color: '#373737',
    fontSize: fontSize.normal,
    paddingVertical: widthToDP(12),
    paddingHorizontal: widthToDP(20),
  },

  des: {
    color: '#6c6c6c',
    fontSize: fontSize.normal,
    paddingHorizontal: widthToDP(20),
    paddingBottom: widthToDP(20),
  },

  brief: {
    color: '#000000',
    fontSize: fontSize.fontSize14,
    lineHeight: fontSize.fontSize14 * 1.43,
  },

  btn: {
    paddingVertical: widthToDP(6),
    borderColor: color,
    borderWidth: 1,
    paddingHorizontal: widthToDP(30),
    borderRadius: widthToDP(20)
  },
  textBtn: {
    color: color,
    fontSize: small
  }
});

export default styles;
