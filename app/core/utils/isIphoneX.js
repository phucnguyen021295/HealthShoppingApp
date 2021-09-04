/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 12/6/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {Dimensions, Platform} from 'react-native';

const {height: H_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

let isIphoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIphoneX =
    H_HEIGHT === 700 ||
    W_WIDTH === 700 ||
    H_HEIGHT === 812 ||
    W_WIDTH === 812 ||
    H_HEIGHT === 844 ||
    W_WIDTH === 844 ||
    H_HEIGHT === 896 ||
    W_WIDTH === 896 ||
    H_HEIGHT === 926 ||
    W_WIDTH === 926;
}

export {isIphoneX};
