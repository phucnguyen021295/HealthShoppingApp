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

import {RFValue} from 'react-native-responsive-fontsize';

const STANDARD_SCREEN_HEIGHT = 720; // Kích thước phông chữ được tính bằng tỷ lệ phần trăm của chiều cao (chiều rộng ở chế độ ngang) của thiết bị.

export const smallest = RFValue(10, STANDARD_SCREEN_HEIGHT);

export const small = RFValue(12, STANDARD_SCREEN_HEIGHT);

export const smaller = RFValue(13, STANDARD_SCREEN_HEIGHT);

export const normal = RFValue(16, STANDARD_SCREEN_HEIGHT);

export const large = RFValue(18, STANDARD_SCREEN_HEIGHT);

export const huge = RFValue(20, STANDARD_SCREEN_HEIGHT);

export const bigger = RFValue(24, STANDARD_SCREEN_HEIGHT);

export const biggest = RFValue(30, STANDARD_SCREEN_HEIGHT);
