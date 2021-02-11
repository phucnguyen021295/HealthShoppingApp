/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 08/02/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import * as fontSize from '../../../../../core/fontSize';

const styles = StyleSheet.create({
  imageRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 12,
    marginBottom: 12,
  },

  image150: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  body: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center'
  },

  image500: {
    width: '100%',
    height: 180,
    borderRadius: 6,
  },

  date: {
    color: '#ffffff',
    fontSize: fontSize.normal,
    paddingTop: 8,
  },

  title: {
    color: '#ffffff',
    fontSize: fontSize.large,
  },

  des: {
    color: '#ffffff',
    fontSize: fontSize.normal,
  },
});

export default styles;
