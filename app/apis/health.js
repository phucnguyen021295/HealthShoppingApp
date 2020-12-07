/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/7/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import axios from 'axios';

import {DOMAIN} from './server';
import global from '../global';

// 1. Đăng nhập
export const loginApi = (username, password, success, failure) => {
  const options = {
    method: 'post',
    data: {
      User: username,
      Pass: password,
    },
    url: `${DOMAIN}/api/auth`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 2. Xác thực mã OTP
export const verifyOTPApi = (Otp, success, failure) => {
  const options = {
    method: 'post',
    data: {
      Otp: Otp,
    },
    url: `${DOMAIN}/api/verifyotp`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 3. Lấy thông tin người dùng
export const getUserApi = (membercode, success, failure) => {
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/user/${membercode}`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 4. Xác nhận token
export const verifyTokenApi = (token, success, failure) => {
  const options = {
    method: 'post',
    data: {
      Token: token,
    },
    url: `${DOMAIN}/api/verify`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 5. Lấy về trạng thái active(trả về OTP cho người dùng)
export const getActiveApi = (success, failure) => {
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/getactive`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 6. Cập nhật thông tin cá nhân
export const updateUserApi = (data, success, failure) => {
  // data gồm: City, Address, State, Postalcode
  const {token} = global;
  const options = {
    method: 'post',
    headers: {
      'x-token': token,
    },
    data: data,
    url: `${DOMAIN}/api/user`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 7. Yêu cầu sinh mã OTP
export const getOTPCodeApi = (success, failure) => {
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/otpcode`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 8. Chuyển tiền
export const transferApi = (data, success, failure) => {
  // data gồm: Membercode, Amount, Reason
  const {token} = global;
  const options = {
    method: 'post',
    headers: {
      'x-token': token,
    },
    data: data,
    url: `${DOMAIN}/api/transfer`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 9. Lấy về lịch sử giao dịch
export const getEarningApi = (type = 'all', pageno = 1, success, failure) => {
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/earning/${type}/${pageno}`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 10. Lấy về tài khoản người dùng
export const getBalanceApi = (success, failure) => {
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/balance`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 11. Lấy về thống kế
export const getReportApi = (type, success, failure) => {
  // type: 0 - ngày, 1 - tuần, 2 - tháng
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/report/overview`,
    timeout: 10000,
  };
  axios(options).then((response) => {
    if (response.status === 200 && response.data.isOk === true) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};
