/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/28/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet, Dimensions} from 'react-native';
import * as fontSize from '../../../core/fontSize';

const {width} = Dimensions.get('window');
const HEIGHT_IMAGE = (width * 2) / 3;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},

  image: {
    width: width,
    height: HEIGHT_IMAGE,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },

  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  title: {color: '#000000', fontSize: fontSize.normal, marginRight: 20},

  price: {color: '#000000', fontSize: fontSize.normal},

  description: {
    color: '#000000',
    fontSize: fontSize.normal,
    marginBottom: 12,
  },

  detail: {
    fontSize: fontSize.smaller,
    lineHeight: 22,
  },
});

export default styles;
