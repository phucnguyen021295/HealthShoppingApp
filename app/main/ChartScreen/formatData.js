/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 1/18/21.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
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
    Order: 'Đặt hàng',
    Transfer: 'Chuyển tiền',
    Total: 'Tổng thu nhập',
};

export const labelsEn = {
    'Weak Leg': 'Weak branch income',
    Direct: 'Direct income',
    Mega: 'Leadership income',
    F1: processColor('yellow'),
    Level: 'The income is flat',
    Bonus: 'Leadership Rewards',
    'Leadership Bonus': 'Senior leadership Rewards',
    Order: 'Oder',
    Transfer: 'Transfer',
    Total: 'Total income',
};
