/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 1/18/21.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {processColor} from 'react-native';

export const labels = {
    'Weak Leg': 'Thu nhập nhánh yếu',
    Direct: 'Thu nhập trực tiếp',
    Mega: 'Thu nhập lãnh đạo',
    F1: processColor('yellow'),
    Level: 'Thu nhập đều tầng',
    Bonus: 'Thưởng lãnh đạo',
    'Leadership Bonus': 'Thưởng lãnh đạo cấp cao',
    Order: 'Đât hàng',
    Transfer: 'Chuyển tiền',
    Total: 'Tổng thu nhập',
};
