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

function stripBOM(content) {
  content = content.toString();
  console.log('content', content);
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }
  return content;
}

function jsonParse(content) {
  if (typeof content === 'object') {
    return content;
  }
  return JSON.parse(stripBOM(content));
}

const isResponseSuccess = (response) => {
  const data = jsonParse(response.data);
  return response.status === 200 && data.errorcode === 0;
};

// 1. Đăng nhập
export const loginApi = (username, password, success, failure) => {
  const options = {
    method: 'post',
    data: {
      user: username,
      pass: password,
    },
    url: `${DOMAIN}/api/auth`,
  };
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(jsonParse(response.data));
      } else {
        failure(response);
      }
    },
    (error) => failure(error),
  );
};

// 2. Xác thực mã OTP
export const verifyOTPApi = (otp, success, failure) => {
  const {token} = global;
  const options = {
    method: 'post',
    data: {
      otp: otp,
    },
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/verifyotp`,
    timeout: 10000,
  };
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(jsonParse(response.data));
      } else {
        failure(response);
      }
    },
    (error) => {
      failure(error);
    },
  );
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
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(jsonParse(response.data));
      } else {
        failure(response);
      }
    },
    (error) => {
      failure(error);
    },
  );
};

// 4. Xác nhận token
export const verifyTokenApi = (
  token,
  success = () => {},
  failure = () => {},
) => {
  const options = {
    method: 'post',
    data: {
      token: token,
    },
    url: `${DOMAIN}/api/verify`,
    timeout: 10000,
  };
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(jsonParse(response.data));
      } else {
        failure(response);
      }
    },
    (error) => {
      failure(error);
    },
  );
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
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(response);
      } else {
        failure(response);
      }
    },
    (error) => {
      failure(error);
    },
  );
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
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(jsonParse(response.data));
      } else {
        failure(response);
      }
    },
    (error) => {
      failure(error);
    },
  );
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
    if (isResponseSuccess(response)) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 8. Chuyển tiền
export const transferApi = (data, success = () => {}, failure = () => {}) => {
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
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(response);
      } else {
        failure(response);
      }
    },
    (error) => failure(error),
  );
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
    if (isResponseSuccess(response)) {
      success(response);
    } else {
      failure(response);
    }
  }, failure());
};

// 10. Lấy về tài khoản người dùng
export const getBalanceApi = (success = () => {}, failure = () => {}) => {
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/balance`,
    timeout: 10000,
  };
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(jsonParse(response.data));
      } else {
        failure(response);
      }
    },
    (error) => failure(error),
  );
};

// 11. Lấy về thống kế
export const getReportApi = (_type, success = () => {}, failure = () => {}) => {
  // type: 0 - ngày, 1 - tuần, 2 - tháng
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/report/overview${_type}`,
    timeout: 10000,
  };
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(jsonParse(response.data));
      } else {
        failure(response);
      }
    },
    (error) => failure(error),
  );
};

// 12. Lấy về danh sách sản phẩm
export const getProductsApi = (success = () => {}, failure = () => {}) => {
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/products`,
    timeout: 10000,
  };
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(jsonParse(response.data));
      } else {
        failure(response);
      }
    },
    (error) => failure(error),
  );
};

// 12. Lấy về danh sách gói sản phẩm
export const getPackageProductsApi = (
  orderType,
  success = () => {},
  failure = () => {},
) => {
  // ordertype: 0: Mua hàng lần đầu, 1: Mua hàng nâng cấp, 2: Mua hàng active
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    url: `${DOMAIN}/api/chooseproduct/${orderType}`,
    timeout: 10000,
  };
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(jsonParse(response.data));
      } else {
        failure(response);
      }
    },
    (error) => failure(error),
  );
};

// 12. Lấy về danh sách gói sản phẩm
export const oderApi = (
  membercode,
  receiver,
  paymenttype,
  receivingtype,
  cart,
  success = () => {},
  failure = () => {},
) => {
  // ordertype: 0: Mua hàng lần đầu, 1: Mua hàng nâng cấp, 2: Mua hàng active
  const {token} = global;
  const options = {
    method: 'get',
    headers: {
      'x-token': token,
    },
    data: {
      membercode: membercode,
      receiver: receiver,
      paymenttype: paymenttype,
      receivingtype: receivingtype,
      cart: cart,
    },
    url: `${DOMAIN}/api/order`,
    timeout: 10000,
  };
  axios(options).then(
    (response) => {
      if (isResponseSuccess(response)) {
        success(response.data);
      } else {
        failure(response);
      }
    },
    (error) => failure(error),
  );
};
