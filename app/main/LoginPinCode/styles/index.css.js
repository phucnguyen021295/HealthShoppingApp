/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 05/03/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import {smaller} from '../../../core/fontSize';
import {blue_bluezone, color, transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';
import {isIphoneX} from '../../../core/utils/isIphoneX';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  language: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  changeLanguage: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthToDP(20),
    paddingVertical: heightToDP(10)
  },

  btnNotify: {
    paddingHorizontal: widthToDP(15),
    paddingVertical: heightToDP(10)
  },

  textLanguage: {
    fontSize: smaller,
    color: '#ffffff',
    paddingLeft: 8
  },

  body: {
    paddingHorizontal: widthToDP(20),
    paddingTop: heightToDP(35),
  },

  btnButtonStyle: {
    paddingVertical: heightToDP(12),
    marginHorizontal: widthToDP(10),
    backgroundColor: transparent,
  },

  btnLogin: {
    flex: 1,
    paddingLeft: widthToDP(10),
    paddingRight: widthToDP(16),
  },

  btnTouchId: {
    paddingHorizontal: 10
  },

  imageTouchId: {
    height: heightToDP(36),
    width: heightToDP(36)
  },

  buttonStyleModal: {
    backgroundColor: color,
    borderRadius: 0,
    borderTopColor: color,
    borderTopWidth: 1,
    borderBottomRightRadius: 14
  },

  buttonStyleModal1: {
    backgroundColor: color,
    borderRadius: 0,
    borderTopColor: color,
    borderTopWidth: 1,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },

  buttonStyleModal2: {
    backgroundColor: '#ffffff',
    borderRadius: 0,
    borderTopColor: color,
    borderTopWidth: 0.5,
    borderBottomLeftRadius: 14,
  },

  logoContainer: {
    alignItems: 'center'
  },

  image: {
    height: heightToDP(120.4),
    width: heightToDP(204.8)
  },

  avatar: {
    width: heightToDP(55),
    height: heightToDP(55),
    marginTop: heightToDP(15)
  },

  utilities: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 150,
  }
});

export default styles;
