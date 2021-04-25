/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 04/04/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {defineMessages} from 'react-intl';

export default defineMessages({
  verifyOTP: {
    id: 'health.verifyPin.verifyPinHeader',
    defaultMessage: 'Xác thực mã PIN',
  },
  importPin: {
    id: 'health.verifyPin.importPinHeader',
    defaultMessage: 'Nhập mã PIN',
  },
  firstLogin: {
    id: 'health.verifyPin.firstLogin',
    defaultMessage:
      'Đăng nhập lần đầu. Vui lòng đặt mã Pin để tiếp tục đăng nhập.',
  },
});
