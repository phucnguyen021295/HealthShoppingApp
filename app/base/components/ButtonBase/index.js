/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 10/4/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {Button} from 'react-native-elements';

// Components
import LinearGradient from '../LinearGradient';

function ButtonBase(props) {
  const {styleLinearGradient, colors, ...otherProps} = props;
  return (
    <LinearGradient
      style={[{borderRadius: 8}, styleLinearGradient]}
      colors={colors}>
      <Button {...otherProps} titleStyle={{fontFamily: 'OpenSans-Regular'}} />
    </LinearGradient>
  );
}

export default ButtonBase;
