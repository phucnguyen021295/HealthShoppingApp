/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/5/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';
import {huge} from '../../../core/fontSize';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20
  },
  text: {
    marginTop: 100,
    color: '#000000',
    fontSize: huge,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  btnContainerStyle: {
    position: 'absolute',
    bottom: 60,
    right: 30,
  },

  buttonStyle: {
    backgroundColor: '#2b7f4b',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
});

export default styles;
