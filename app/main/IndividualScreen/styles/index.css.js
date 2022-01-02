/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 05/09/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet, Dimensions} from 'react-native';
import {color} from '../../../core/color';
import {normal, small, fontSize14} from '../../../core/fontSize';
import {heightToDP} from '../../../core/utils/dimension';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  backGround: {
    flex: 1,
    backgroundColor: 'rgba(1, 23, 34, 0.7)',
  },

  styleHeader: {
    backgroundColor: color,
  },

  textNote: {
    fontSize: normal,
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
    lineHeight: 25,
  },

  imageRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 12,
    marginBottom: 10,
  },

  tabBar: {
    flexDirection: 'row',
    height: heightToDP(52),
  },

  tabItem: {
    backgroundColor: 'transparent',
    height: heightToDP(52),
    justifyContent: 'flex-end',
    // borderTopWidth: 0,
    elevation: 0,
  },

  titleTabBar: {
    fontSize: fontSize14,
    color: '#ffffff',
    // paddingHorizontal: heightToDP(2),
    // borderBottomWidth: 2,
  },

  edit: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: heightToDP(20),
    paddingVertical: heightToDP(10),
    alignItems: 'center',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },

  editRight: {
    paddingLeft: heightToDP(12),
  },

  fullName: {
    fontSize: fontSize14,
    lineHeight: fontSize14 * 1.43,
  },

  editInfo: {
    fontSize: fontSize14,
    lineHeight: fontSize14 * 1.43,
    color: '#949494',
  },

  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: heightToDP(20),
    paddingVertical: heightToDP(12),
    alignItems: 'center',
    marginTop: heightToDP(8),
    // borderBottomColor: '#dddddd',
    // borderBottomWidth: 1,
    // borderTopColor: '#dddddd',
    // borderTopWidth: 1
  },

  textRow: {
    paddingLeft: heightToDP(12),
    fontSize: fontSize14,
    flex: 1,
    lineHeight: fontSize14 * 1.43,
  },

  row1: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingRight: heightToDP(20),
    paddingLeft: heightToDP(36),
    paddingVertical: heightToDP(10),
    alignItems: 'center',
  },
});

export default styles;
