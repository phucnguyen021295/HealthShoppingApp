/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 03/01/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {StyleSheet} from 'react-native';
import {normal, small} from '../../../../../core/fontSize';
import {widthToDP} from '../../../../../core/utils/dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  info: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: widthToDP(40),
  },

  bottom: {
    paddingVertical: widthToDP(12),
    backgroundColor: '#000',
    paddingHorizontal: widthToDP(10),
  },

  title: {
    fontSize: normal,
    color: '#fff',
    paddingBottom: widthToDP(12),
  },

  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingRight: widthToDP(20),
    paddingBottom: widthToDP(6),
  },

  dot: {
    width: widthToDP(14),
    height: widthToDP(14),
    borderRadius: widthToDP(7),
  },

  population: {
    fontSize: small,
    color: '#fff',
    paddingHorizontal: widthToDP(8),
  },

  name: {
    fontSize: small,
    color: '#fff',
  },
});

export default styles;
