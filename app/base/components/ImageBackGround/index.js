/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/6/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {ImageBackground, View} from 'react-native';

// Styles
import styles from './styles/index.css';

function ImageBackgroundBase(props) {
  const {children, style, source, ...otherProps} = props;
  return (
    <ImageBackground
      style={[styles.container, style]}
      source={source}
      resizeMode={'cover'}
      {...otherProps}>
      {children}
    </ImageBackground>
  );
}

ImageBackgroundBase.defaultProps = {
  style: {},
};

export default ImageBackgroundBase;
