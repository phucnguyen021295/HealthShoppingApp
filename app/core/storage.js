

import AsyncStorage from '@react-native-community/async-storage';

import {
  CheckIntroduce,
  CheckVerifyOTP,
  AccountBalance,
  Token,
  MemberCode,
  InfoUser,
  PinCode,
  InfoLogin,
  IsActiveBiometry,
    TokenFirebase,
  Language
} from '../const/storage';

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

const multiGet = async (keys) => {
  const _keys = await AsyncStorage.multiGet(keys);
  const result = {};
  _keys.forEach((item) => {
    Object.assign(result, {[item[0]]: _processOutput(item[1])});
  });

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

const getToken = async () => {
  const result = await AsyncStorage.getItem(Token);
  return _processOutput(result);
};

const setToken = (_Token = '') => {
  const _resource = _processInput(_Token);
  AsyncStorage.setItem(Token, _resource);
};

const getMemberCode = async () => {
  const result = await AsyncStorage.getItem(MemberCode);
  return _processOutput(result);
};

const setMemberCode = (_MemberCode = '') => {
  const _resource = _processInput(_MemberCode);
  AsyncStorage.setItem(MemberCode, _resource);
};

const setInfoUser = (_InfoUser = {}) => {
  const _resource = _processInput(_InfoUser);
  AsyncStorage.setItem(InfoUser, _resource);
};

const getPinCode = async () => {
  const result = await AsyncStorage.getItem(PinCode);
  return _processOutput(result);
};

const setPinCode = (_PinCode = '') => {
  const _resource = _processInput(_PinCode);
  AsyncStorage.setItem(PinCode, _resource);
};

const setInfoLogin = (_InfoLogin = {}) => {
  const _resource = _processInput(_InfoLogin);
  AsyncStorage.setItem(InfoLogin, _resource);
};

const clearData = async () => {
  await AsyncStorage.clear();
};

const setIsActiveBiometry = (_IsActiveBiometry = {}) => {
  const _resource = _processInput(_IsActiveBiometry);
  AsyncStorage.setItem(IsActiveBiometry, _resource);
};

const getTokenFirebase = async () => {
  const result = await AsyncStorage.getItem(TokenFirebase);
  return _processOutput(result);
};

const setTokenFirebase = (_TokenFirebase = '') => {
  const _resource = _processInput(_TokenFirebase);
  AsyncStorage.setItem(TokenFirebase, _resource);
};

const getLanguage = async () => {
  const result = await AsyncStorage.getItem(Language);
  return _processOutput(result);
};

const setLanguage = (_Language = '') => {
  const _resource = _processInput(_Language);
  AsyncStorage.setItem(Language, _resource);
};

export {
  multiGet,
  getCheckIntroduce,
  setCheckIntroduce,
  getCheckVerifyOTP,
  setCheckVerifyOTP,
  getAccountBalance,
  setAccountBalance,
  getToken,
  setToken,
  getMemberCode,
  setMemberCode,
  setInfoUser,
  getPinCode,
  setPinCode,
  setInfoLogin,
  clearData,
  setIsActiveBiometry,
  getTokenFirebase,
  setTokenFirebase,
  getLanguage,
  setLanguage
};
