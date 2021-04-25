/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 06/04/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {defineMessages} from 'react-intl';

export default defineMessages({
  language: {
    id: 'health.loginPinCode.language',
    defaultMessage: 'Tiếng Việt',
  },

  insertPinCode: {
    id: 'health.loginPinCode.insertPinCode',
    defaultMessage: 'Nhập mã pin',
  },

  login: {
    id: 'health.loginPinCode.login',
    defaultMessage: 'Đăng nhập',
  },

  btnCloseModal: {
    id: 'health.loginPinCode.btnCloseModal',
    defaultMessage: 'Đóng',
  },

  btnActive: {
    id: 'health.loginPinCode.btnActive',
    defaultMessage: 'Kích hoạt',
  },

  btnTransfer: {
    id: 'health.loginPinCode.btnTransfer',
    defaultMessage: 'Chuyển tiền',
  },

  titleModal: {
    id: 'health.loginPinCode.titleModal',
    defaultMessage: 'Thông báo',
  },

  tokenExpired: {
    id: 'health.loginPinCode.tokenExpired',
    defaultMessage:
      'Phiên đăng nhập của bạn đã hết hạn, vui lòng đăng nhập lại.',
  },

  btnAgree: {
    id: 'health.loginPinCode.btnAgree',
    defaultMessage: 'Đồng ý',
  },

  pinCodeVerifyTitle: {
    id: 'health.loginPinCode.pinCodeVerifyTitle',
    defaultMessage: 'Xác thực mã pin',
  },

  pinCodeVerifyDes: {
    id: 'health.loginPinCode.pinCodeVerifyDes',
    defaultMessage: 'Vui lòng xác thực mã pin để được kích hoạt tính năng này',
  },

  pinCodeVerifyText: {
    id: 'health.loginPinCode.pinCodeVerifyText',
    defaultMessage: 'Mã pin xác thực không đúng',
  },

  btnCancel: {
    id: 'health.loginPinCode.btnCancel',
    defaultMessage: 'Hủy',
  },

  btnVerify: {
    id: 'health.loginPinCode.btnVerify',
    defaultMessage: 'Xác thực',
  },

  sensorDescription: {
    id: 'health.loginPinCode.sensorDescription',
    defaultMessage: 'Chạm vào cảm biến vân tay',
  },

  sensorErrorDescription: {
    id: 'health.loginPinCode.sensorErrorDescription',
    defaultMessage: 'Xác thực thất bại',
  },

  btnClosed: {
    id: 'health.loginPinCode.closed',
    defaultMessage: 'Đóng',
  },

  fallbackLabel: {
    id: 'health.loginPinCode.fallbackLabel',
    defaultMessage: 'Hiển thị mật mã',
  },

  requireFinIOS: {
    id: 'health.loginPinCode.requireFinIOS',
    defaultMessage: 'Yêu cầu xác thực vân tay',
  },

  requireFinAndroid: {
    id: 'health.loginPinCode.requireFinAndroid',
    defaultMessage: 'Xác thực bằng vân tay, vui lòng chạm vào cảm biến vân tay',
  },

  activeFaceID: {
    id: 'health.loginPinCode.activeFaceID',
    defaultMessage: 'Kích hoạt tính năng nhận diện khuân mặt?',
  },

  activeTouch: {
    id: 'health.loginPinCode.activeTouch',
    defaultMessage: 'Kích hoạt tính năng vân tay?',
  },
});
