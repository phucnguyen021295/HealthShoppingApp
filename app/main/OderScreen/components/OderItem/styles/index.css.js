/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/28/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet, Dimensions} from 'react-native';
import * as fontSize from '../../../../../core/fontSize';
import {color} from '../../../../../core/color';

const {width} = Dimensions.get('window');
const WIDTH_IMAGE = width / 2 - 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: Dimensions.get('window').width / 2,
    // alignItems: 'center',
    borderRightColor: '#dddddd',
    borderRightWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1
  },

  imageContainer: {
    alignItems: 'center'
  },

  image: {
    width: WIDTH_IMAGE,
    height: WIDTH_IMAGE,
    // borderColor: '#dddddd',
    // borderWidth: 1,
    // borderRadius: 5,
  },

  title: {
    color: '#7a7a7a',
    paddingTop: 12,
    fontSize: fontSize.smaller,
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
  },

  price: {
    color: '#1c1c1c',
    fontSize: fontSize.fontSize14,
  },
});

export default styles;
