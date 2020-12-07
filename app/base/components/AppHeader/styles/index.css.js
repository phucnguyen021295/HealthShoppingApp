/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/8/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet, Platform} from 'react-native';
import * as fontSize from '../../../../core/fontSize';
import {heightToDP, widthToDP} from '../../../../core/utils/dimension';

export const ICON_SIZE = heightToDP(28);

const styles = StyleSheet.create({
  container: {
    height: heightToDP(50),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  btnBack: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    height: heightToDP(50),
    justifyContent: 'center',
    zIndex: 99,
  },
  textTitle: {
    fontSize: fontSize.huge,
    textAlign: 'center',
    color: '#000',
  },
  icon: {
    paddingLeft: widthToDP(20),
    paddingRight: widthToDP(30),
    ...Platform.select({
      ios: {
        // paddingTop: 5,
      },
    }),
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
