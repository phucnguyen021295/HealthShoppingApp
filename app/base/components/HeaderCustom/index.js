/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/20/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';

import AppHeader from '../AppHeader';
import LinearGradient from '../LinearGradient';

function HeaderCustom(props) {
  const {title, color, showBack, ...otherProps} = props;
  return (
    <LinearGradient>
      <AppHeader
        title={title}
        color={color}
        showBack={showBack}
        {...otherProps}
      />
    </LinearGradient>
  );
}

export default HeaderCustom;
