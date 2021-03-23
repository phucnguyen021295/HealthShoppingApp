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

import {
  setAccountBalance,
  getAccountBalance,
  setToken,
  getToken,
  multiGet,
  setMemberCode,
  setInfoUser,
  setInfoLogin,
  setIsActiveBiometry,
  setPinCode,
} from './core/storage';

import {
  loginApi,
  getUserApi,
  updateUserApi,
  verifyTokenApi,
} from './apis/health';
import {getTokenFirebase, registerTokenRefresh, setChanel} from "./core/fcm";

const global = {
  balance: 0,
  token: '',
  membercode: '',
  isActiveBiometry: false,
  dataIntroduce: [
    {
      id: '1',
      title: 'Thực phẩm chức năng cung cấp vô vàn lợi ích cho làn da',
      description: 'Thực phẩm chức năng cung cấp vô vàn lợi ích cho làn da',
      logo: '',
      backgroundColor: '#97CAE5',
    },
    {
      id: '2',
      title:
        'Thực phẩm chức năng đóng vai trò vô cùng quan trọng trong việc ngăn ngừa lão hóa',
      description:
        'Thực phẩm chức năng đóng vai trò vô cùng quan trọng trong việc ngăn ngừa lão hóa',
      logo: '',
      backgroundColor: '#97CAE5',
    },
    {
      id: '3',
      title:
        'Bất kể chế độ ăn uống của bạn lành mạnh thế nào, vẫn tồn tại một số chất dinh dưỡng không có trong thức ăn của bạn',
      description:
        'Bất kể chế độ ăn uống của bạn lành mạnh thế nào, vẫn tồn tại một số chất dinh dưỡng không có trong thức ăn của bạn',
      logo: '',
      backgroundColor: '#92BBD9',
    },
  ],
};

const initGlobal = async () => {
  multiGet([
    'token',
    'membercode',
    'infoUser',
    'pinCode',
    'isActiveBiometry',
  ]).then((results) => {
    const {token, membercode, infoUser, pinCode, isActiveBiometry} = results;
    Object.assign(
      global,
      {
        token: token,
        membercode: membercode,
        pinCode: pinCode,
        isActiveBiometry: isActiveBiometry,
      },
      infoUser,
    );
  });
};

const getAccountBalanceGlobal = async () => {
  const _AccountBalance = await getAccountBalance();
  global.balance = parseInt(_AccountBalance || '0');
};

const setAccountBalanceGlobal = (_AccountBalance = 0) => {
  global.balance = _AccountBalance;
  setAccountBalance(_AccountBalance);
};

const getTokenGlobal = async () => {
  const _token = await getToken();
  global.token = _token;
};

const setTokenGlobal = (_token = '') => {
  global.token = _token;
  setToken(_token);
};

const setMemberCodeGlobal = (_membercode = '') => {
  global.membercode = _membercode;
  setMemberCode(_membercode);
};

const setActiveBiometryGlobal = (_activeBiometry = '') => {
  global.ísActiveBiometry = _activeBiometry;
  setIsActiveBiometry(_activeBiometry);
};

const setPinCodeGlobal = (_pinCode = '') => {
  global.pinCode = _pinCode;
  setPinCode(_pinCode);
};

const loginUser = (username, password, success, failure) => {
  loginApi(
    username,
    password,
    (response) => {
      const data = response.data;
      Object.assign(global, data);
      setTokenGlobal(data.token);
      setInfoLogin(data);
      // TODO: Set tạm số tiến
      setAccountBalanceGlobal(data.balance);
      success();
    },
    failure,
  );
};

const getUserGlobal = (membercode, success, failure) => {
  getUserApi(
    membercode,
    (response) => {
      const data = response.data;
      Object.assign(global, data);
      setInfoUser(data);
      success();
    },
    failure,
  );
};

const updateUSer = (data, success, failure) => {
  updateUserApi(
    data,
    (response) => {
      success();
    },
    failure,
  );
};

const verifyTokenGlobal = (token, success, failure) => {
  verifyTokenApi(
    token,
    (response) => {
      const data = response.data;
      Object.assign(global, data);
      setInfoLogin(data);
      success();
    },
    failure,
  );
};

function requestTokenFirebase() {
  setChanel()
  // TODO can update them su dung job
  // Get the device token
  getTokenFirebase((token) =>{
    console.log('getTokenFirebase', token)
  });

  // TODO can update them su dung job
  // Listen to whether the token changes
  registerTokenRefresh((token) => {
    console.log('registerTokenRefresh', token)
  });
}

export default global;

export {
  verifyTokenGlobal,
  initGlobal,
  loginUser,
  getUserGlobal,
  getAccountBalanceGlobal,
  setAccountBalanceGlobal,
  getTokenGlobal,
  setTokenGlobal,
  setMemberCodeGlobal,
  updateUSer,
  setActiveBiometryGlobal,
  setPinCodeGlobal,
  requestTokenFirebase,
};
