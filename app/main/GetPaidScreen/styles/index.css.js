/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/09/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {Platform, StyleSheet} from 'react-native';
import * as fontSize from '../../../core/fontSize';
import {transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthToDP(20),
    paddingTop: heightToDP(50),
  },
  textInfo: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: fontSize.huge,
    paddingTop: heightToDP(12),
    paddingBottom: heightToDP(50),
  },
  textRow: {
    color: '#ffffff',
    fontSize: fontSize.normal,
  },

  btnButtonStyle: {
    paddingVertical: 12,
    backgroundColor: transparent,
  },

  btnButtonCheckStyle: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: transparent,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 6,
  },

  btnTitleCheckStyle: {
    fontSize: fontSize.normal,
  },

  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: 'transparent',
    paddingHorizontal: heightToDP(14),
    borderRadius: heightToDP(8),
    height: heightToDP(40)
  },

  inputStyle: {
    color: '#ffffff',
    fontSize: fontSize.normal,
  },

  item: {marginBottom: heightToDP(30)},

  inputContainerStyleNote: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff52',
    paddingHorizontal: widthToDP(12),
    borderRadius: heightToDP(8),
    paddingVertical: heightToDP(6),
  },

  containerStyleNote: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },

  backGround: {
    flex: 1,
    backgroundColor: 'rgba(1, 23, 34, 0.7)',
  },

  viewRowName: {
    backgroundColor: '#ffffff52',
    borderRadius: heightToDP(6),
    marginTop: heightToDP(8),
    height: heightToDP(40),
    justifyContent: 'center'
  },

  textRowName: {
    color: '#ffffff',
    fontSize: fontSize.normal,
    paddingVertical: heightToDP(8),
    paddingHorizontal: heightToDP(14),
  },

  btnContainerStyle: {
    marginBottom: heightToDP(34),
    marginHorizontal: heightToDP(20),
    marginTop: heightToDP(10)
  },

  descriptionModalStyle: {
    fontSize: fontSize.normal,
    paddingVertical: heightToDP(10),
  },

  btnStyles: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },

  border: {
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd',
    height: '100%'
  },
});

export default styles;
