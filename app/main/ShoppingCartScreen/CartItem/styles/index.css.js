/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/4/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet, Dimensions} from 'react-native';
import * as fontSize from '../../../../core/fontSize';
import {color, transparent} from '../../../../core/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  image: {
    width: 70,
    height: 70,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 5,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    color: '#000000',
    fontSize: fontSize.small,
  },

  nameProduct: {
    color: '#000000',
    fontSize: fontSize.small,
    lineHeight: fontSize.small * 1.7
  },

  priceContainer: {
    flex: 1,
    paddingTop: 8,
    paddingLeft: 8,
    fontSize: fontSize.small,
  },

  price: {
    color: '#000000',
    fontSize: fontSize.small,
    paddingLeft: 20,
    paddingVertical: 8,
  },

  textUpdate: {
    paddingVertical: 8,
    color: '#015cd0',
    fontSize: fontSize.small,
  },

  buttonStyle: {
    backgroundColor: transparent,
    borderColor: '#dddddd',
    borderWidth: 1,
    paddingVertical: 6,
    width: 36,
    height: 36,
  },

  buttonStyleModal: {
    backgroundColor: color,
    borderRadius: 0,
    borderTopColor: color,
    borderTopWidth: 1,
    borderBottomLeftRadius: 14,
  },

  buttonStyleModal2: {
    backgroundColor: '#ffffff',
    borderRadius: 0,
    borderTopColor: color,
    borderTopWidth: 1,
    borderBottomRightRadius: 14,
  },

  buttonStyleModal45: {
    backgroundColor: '#ffffff',
    borderRadius: 0,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },

  titleStyle: {color: '#015cd0', fontSize: fontSize.small},

  textSelect: {
    fontSize: fontSize.smaller,
    paddingHorizontal: 20,
    textAlign: 'center',
    paddingBottom: 10,
    color: '#015cd0'
  }
});

export default styles;
