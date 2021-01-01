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
import {color, transparent} from '../../../core/color';
import {heightToDP, widthToDP} from '../../../core/utils/dimension';

const {width} = Dimensions.get('window');
const HEIGHT_IMAGE = (width * 2) / 3;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},

  image: {
    width: width,
    height: HEIGHT_IMAGE,
  },

  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    color: '#000000',
    fontSize: fontSize.normal,
    marginRight: widthToDP(20),
  },

  price: {color: '#000000', fontSize: fontSize.normal},

  description: {
    color: '#000000',
    fontSize: fontSize.normal,
    marginBottom: heightToDP(12),
  },

  detail: {
    fontSize: fontSize.smaller,
    lineHeight: heightToDP(22),
  },

  btnAddShopping: {
    position: 'absolute',
    bottom: heightToDP(34),
    right: 0,
    left: 0,
    paddingHorizontal: widthToDP(20),
  },

  btnButtonStyle: {
    paddingVertical: heightToDP(12),
    backgroundColor: transparent,
    marginHorizontal: widthToDP(10),
  },

  buttonStyle: {
    backgroundColor: '#00000073',
    borderRadius: heightToDP(20),
  },

  containerStyle: {
    position: 'absolute',
    top: heightToDP(30),
    left: widthToDP(20),
  },

  textStyle: {
    fontSize: fontSize.normal,
  },
});

export const CUSTOM_STYLES = {
  p: {
    color: '#000',
    fontSize: fontSize.large,
    lineHeight: fontSize.large * 1.6,
    fontFamily: 'Roboto-Regular',
    marginBottom: heightToDP(7),
  },
  br: {
    display: 'none',
  },
  strong: {
    // lineHeight: 32,
    fontFamily: 'Roboto-Medium',
  },
  h1: {
    marginBottom: heightToDP(10),
    color: '#000',
    fontSize: fontSize.huge,
    lineHeight: fontSize.huge * 1.38,
  },
  h2: {
    marginBottom: heightToDP(7),
    color: '#000',
    fontSize: fontSize.huge,
    lineHeight: fontSize.huge * 1.38,
  },

  h3: {
    marginBottom: heightToDP(7),
    fontSize: fontSize.huge,
    lineHeight: fontSize.huge * 1.38,
  },
  h4: {
    marginBottom: heightToDP(7),
    fontSize: fontSize.huge,
    lineHeight: fontSize.huge * 1.38,
  },
  ul: {
    paddingLeft: 5,
  },
  li: {
    lineHeight: fontSize.normal * 1.53,
    color: '#000',
    fontSize: fontSize.normal,
  },
  a: {
    fontSize: fontSize.normal,
  },

  figure: {
    marginVertical: heightToDP(6),
  },

  img: {
    marginBottom: 5,
    borderRadius: heightToDP(15),
  },

  i: {
    fontFamily: 'OpenSans-Italic',
  },
};

export default styles;
