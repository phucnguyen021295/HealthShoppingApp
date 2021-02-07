/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 03/02/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {SafeAreaView} from 'react-native';

// Components
import LinearGradient from '../LinearGradient';
import ModalBase from '../ModalBase';

function SafeAreaViewBase(props) {
  const {children} = props;
  return (
    <LinearGradient>
      <SafeAreaView style={props.style} />
    </LinearGradient>
  );
}

SafeAreaViewBase.defaultProps = {
  style: {},
};

export default SafeAreaViewBase;
