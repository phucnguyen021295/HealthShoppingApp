/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/6/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet, Platform} from 'react-native';
import * as fontSize from '../../../core/fontSize';
import {color, transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';
import {isIphoneX} from '../../../core/utils/isIphoneX';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  btnBottom: {
    position: 'absolute',
    bottom: isIphoneX ? 34 : 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },

  titleShopping: {
    fontSize: fontSize.normal,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#d7e5fa',
    color: '#666666',
  },

  textName: {
    fontSize: fontSize.normal,
    paddingHorizontal: 20,
    paddingTop: 8,
    color: '#666666',
  },

  btnButtonStyle: {
    paddingVertical: 12,
    backgroundColor: transparent,
    marginHorizontal: 10,
  },

  total: {
    paddingBottom: heightToDP(15),
    paddingTop: heightToDP(8),
    fontSize: fontSize.normal,
  },

  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#838383',
    paddingHorizontal: 12,
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 12,
    ...Platform.select({
      android: {
        height: 40,
      }
    })
  },

  inputStyle: {
    fontSize: fontSize.normal,
  },

  image: {
    width: 50,
    height: 50,
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
    marginLeft: 30,
    lineHeight: 22
  },

  priceContainer: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 12,
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

  titleStyle: {color: '#015cd0', fontSize: fontSize.small},

  textTotalPrice: {
    color: '#000000',
    fontSize: fontSize.normal,
    lineHeight: 25,
  },

  containerStyle: {
    paddingHorizontal: 0,
    flex: 1,
    paddingVertical: 0,
  }
});

export default styles;
