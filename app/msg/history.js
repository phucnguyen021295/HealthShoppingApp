/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 28/04/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {defineMessages} from 'react-intl';

export default defineMessages({
  titleHeader: {
    id: 'health.history.titleHeader',
    defaultMessage: 'Lịch sử giao dịch',
  },
  notHistory: {
    id: 'health.history.notHistory',
    defaultMessage: 'Chưa có giao dịch nào.',
  },
  date: {
    id: 'health.history.date',
    defaultMessage: 'Ngày mua hàng:',
  },
  type: {
    id: 'health.history.type',
    defaultMessage: 'Loại giao dịch:',
  },
  transfer: {
    id: 'health.history.transfer',
    defaultMessage: 'Lý do chuyển:',
  },
  total: {
    id: 'health.history.total',
    defaultMessage: 'Tổng tiền:',
  },
  balance: {
    id: 'health.history.balance',
    defaultMessage: 'Số dư trong tài khoản:',
  },
});
