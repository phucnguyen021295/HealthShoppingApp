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
} from './core/storage';

import {
  loginApi,
  getUserApi,
  updateUserApi,
  verifyTokenApi,
} from './apis/health';

const global = {
  AccountBalance: 0,
  token: '',
  membercode: '',
};

const initGlobal = async () => {
  multiGet(['token', 'membercode', 'infoUser', 'pinCode']).then((results) => {
    const {token, membercode, infoUser, pinCode} = results;
    Object.assign(
      global,
      {
        token: token,
        membercode: membercode,
        pinCode: pinCode,
      },
      infoUser,
    );
  });
};

const getAccountBalanceGlobal = async () => {
  const _AccountBalance = await getAccountBalance();
  global.AccountBalance = parseInt(_AccountBalance || '0');
};

const setAccountBalanceGlobal = (_AccountBalance = 0) => {
  global.AccountBalance = _AccountBalance;
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

const loginUser = (username, password, success, failure) => {
  loginApi(
    username,
    password,
    (response) => {
      const data = response.data;
      Object.assign(global, data);
      setInfoLogin(data);
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
};
