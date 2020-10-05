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

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

function LinearGradientBase(props) {
  const {children, style, ...otherProps} = props;
  return (
    <LinearGradient
      colors={['#597f42', '#247f24']}
      start={{x: 0, y: 0}}
      end={{x: 1.0, y: 1.0}}
      style={style}
      {...otherProps}>
      {children}
    </LinearGradient>
  );
}

export default LinearGradientBase;
