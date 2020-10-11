/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 9/20/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import AsyncStorage from '@react-native-community/async-storage';

import {CheckIntroduce, CheckVerifyOTP, AccountBalance} from '../const/storage';

const _processInput = (input) => {
  if (input instanceof Date) {
    return JSON.stringify(input.getTime());
  }
  return JSON.stringify(input);
};

const _processOutput = (output) => {
  if (output === null) {
    return output;
  }
  let result;
  try {
    result = JSON.parse(output);
  } catch (e) {
    result = output;
  }
  return result;
};

const getCheckIntroduce = async () => {
  const result = await AsyncStorage.getItem(CheckIntroduce);
  return _processOutput(result);
};

const setCheckIntroduce = (_checkIntroduce = {}) => {
  const _resource = _processInput(_checkIntroduce);
  AsyncStorage.setItem(CheckIntroduce, _resource);
};

const getCheckVerifyOTP = async () => {
  const result = await AsyncStorage.getItem(CheckVerifyOTP);
  return _processOutput(result);
};

const setCheckVerifyOTP = (_checkVerifyOTP = {}) => {
  const _resource = _processInput(_checkVerifyOTP);
  AsyncStorage.setItem(CheckVerifyOTP, _resource);
};

const getAccountBalance = async () => {
  const result = await AsyncStorage.getItem(AccountBalance);
  return _processOutput(result);
};

const setAccountBalance = (_AccountBalance = 0) => {
  const _resource = _processInput(_AccountBalance);
  AsyncStorage.setItem(AccountBalance, _resource);
};

export {
  getCheckIntroduce,
  setCheckIntroduce,
  getCheckVerifyOTP,
  setCheckVerifyOTP,
  getAccountBalance,
  setAccountBalance,
};
