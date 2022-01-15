/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 15/01/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {defineMessages} from 'react-intl';

export default defineMessages({
  titleHeader: {
    id: 'health.getPaid.titleHeader',
    defaultMessage: 'RÚT TIỀN',
  },

  bank: {
    id: 'health.getPaid.bank',
    defaultMessage: 'Tên ngân hàng:',
  },

  accountnumber: {
    id: 'health.getPaid.accountnumber',
    defaultMessage: 'Số tài khoản:',
  },

  balance: {
    id: 'health.getPaid.balance',
    defaultMessage: 'Số dư tài khoản:',
  },

  amount: {
    id: 'health.getPaid.amount',
    defaultMessage: 'Số tiền:',
  },

  amountEnter: {
    id: 'health.getPaid.amountEnter',
    defaultMessage: 'Nhập số tiền',
  },

  amount1: {
    id: 'health.getPaid.amount1',
    defaultMessage: 'Phí rút tiền(5%):',
  },

  total: {
    id: 'health.getPaid.total',
    defaultMessage: 'Tổng cộng:',
  },

  balanceAfter: {
    id: 'health.getPaid.balanceAfter',
    defaultMessage: 'Số dư sau khi rút tiền:',
  },

  btngetPaid: {
    id: 'health.getPaid.btngetPaid',
    defaultMessage: 'Rút tiền',
  },

  notification: {
    id: 'health.getPaid.notification',
    defaultMessage: 'Thông báo',
  },

  description: {
    id: 'health.getPaid.description',
    defaultMessage:
      'Bạn cần phải đăng kí tài khoản ngân hàng thì mới rút tiền được.',
  },

  btnClose: {
    id: 'health.getPaid.btnClose',
    defaultMessage: 'Đóng',
  },

  description1: {
    id: 'health.getPaid.description1',
    defaultMessage: 'Số tiền bạn rút ít nhất là 50$',
  },

  btnRetry: {
    id: 'health.getPaid.btnRetry',
    defaultMessage: 'Nhập lại',
  },

  title1: {
    id: 'health.getPaid.title1',
    defaultMessage: 'Rút tiền thành công',
  },

  description2: {
    id: 'health.getPaid.description2',
    defaultMessage: 'Gửi yêu cầu rút tiền thành công',
  },

  title2: {
    id: 'health.getPaid.title2',
    defaultMessage: 'Rút tiền thất bại',
  },

  description3: {
    id: 'health.getPaid.description3',
    defaultMessage: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
  },

  btnRetry1: {
    id: 'health.getPaid.btnRetry1',
    defaultMessage: 'Thử lại',
  },
});
