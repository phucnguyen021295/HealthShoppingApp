/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/6/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import FastImage from 'react-native-fast-image';

// Styles
import styles from './styles/index.css';

function Logo(props) {
  const {style} = props;
  return (
    <FastImage
      source={require('./styles/images/logo.png')}
      style={[{width: 250, height: 250}, style]}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}

Logo.defaultProps = {
  style: {},
};

export default Logo;
