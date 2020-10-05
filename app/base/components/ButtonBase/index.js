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
import {Button} from 'react-native-elements';

// Components
import LinearGradient from '../LinearGradient';

function ButtonBase(props) {
  const {styleLinearGradient, ...otherProps} = props;
  return (
    <LinearGradient style={[{borderRadius: 8}, styleLinearGradient]}>
      <Button {...otherProps} />
    </LinearGradient>
  );
}

export default ButtonBase;
