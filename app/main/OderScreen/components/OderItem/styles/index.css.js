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
import * as fontSize from '../../../../../core/fontSize';
import {color} from '../../../../../core/color';

const {width} = Dimensions.get('window');
const WIDTH_IMAGE = width / 2 - 40;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2,
    // alignItems: 'center',
    // borderColor: '#dddddd',
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  image: {
    width: WIDTH_IMAGE,
    height: WIDTH_IMAGE,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 5,
  },

  title: {
    color: '#7a7a7a',
    paddingTop: 12,
    fontSize: fontSize.small,
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
  },

  price: {
    color: '#000000',
    fontSize: fontSize.normal,
  },
});

export default styles;
