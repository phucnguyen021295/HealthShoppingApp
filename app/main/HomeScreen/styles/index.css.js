/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/20/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import * as fontSize from '../../../core/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoUser: {
    position: 'absolute',
    left: 20,
    top: 50,
    zIndex: 100,
  },
  fullName: {
    paddingLeft: 20,
  },

  info: {
    backgroundColor: '#00000059',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
  },
  name: {color: '#ffffff', fontSize: fontSize.normal, lineHeight: 30},

  viewRow: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 20,
    marginBottom: 20,
  },

  viewChart: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 20,
    marginBottom: 20,
  },

  textReport: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: fontSize.large,
    lineHeight: 30,
    paddingHorizontal: 12,
    paddingBottom: 16
    // backgroundColor: 'rgba(256,256,256,0.3)'
  },

  account: {
    color: '#ffffff', fontSize: fontSize.large, lineHeight: 30
  }
});

export default styles;
