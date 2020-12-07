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

import {setAccountBalance, getAccountBalance, setToken, getToken} from './core/storage';

const global = {
  AccountBalance: 0,
  token: '',
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

export default global;

export {getAccountBalanceGlobal, setAccountBalanceGlobal, getTokenGlobal, setTokenGlobal};
