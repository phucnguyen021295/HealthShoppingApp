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

import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './styles/index.css';

const ThinText = ({text, style, children, ...otherProps}) => {
  return (
    <Text
      style={[styles.fontSkin, style]}
      allowFontScaling={false}
      {...otherProps}>
      {text ? text : children}
    </Text>
  );
};

ThinText.propTypes = {
  text: PropTypes.string || PropTypes.number,
  style: PropTypes.object || PropTypes.array,
  children: PropTypes.any,
};

export default ThinText;
