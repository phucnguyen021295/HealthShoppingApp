

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
  setLanguage,
  setTokenFirebase,
} from './core/storage';

import {
  loginApi,
  getUserApi,
  updateUserApi,
  verifyTokenApi,
  registerPushApi,
} from './apis/health';
import {getTokenFirebase, registerTokenRefresh, setChanel} from './core/fcm';
import {Language} from './const/storage';

const global = {
  balance: 0,
  token: '',
  membercode: '',
  isActiveBiometry: false,
  Language: 'vi',
  tokenFirebase: '',
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
  TimeCountDownOTP: 120,
};

const initGlobal = async () => {
  multiGet([
    'token',
    'membercode',
    'infoUser',
    'pinCode',
    'isActiveBiometry',
    'tokenFirebase',
    'Language',
  ]).then((results) => {
    const {
      token,
      membercode,
      infoUser,
      pinCode,
      isActiveBiometry,
      tokenFirebase,
      Language,
    } = results;
    Object.assign(
      global,
      {
        token,
        membercode,
        pinCode,
        isActiveBiometry,
        tokenFirebase,
        Language,
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

const setLanguageGlobal = (_language = '') => {
  global.Language = _language;
  setLanguage(_language);
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
      const {} = data;
      Object.assign(global, data);
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
  // TODO can update them su dung job
  const {tokenFirebase} = global;
  // Get the device token
  getTokenFirebase((tokenFirebaseNew) => {
    console.log('getTokenFirebase', tokenFirebaseNew);
    if (tokenFirebase !== tokenFirebaseNew) {
      registerPushApi(tokenFirebaseNew, tokenFirebase, () => {
        setTokenFirebase(tokenFirebaseNew);
      });
    }
  });

  // TODO can update them su dung job
  // Listen to whether the token changes
  registerTokenRefresh((tokenFirebaseNew) => {
    console.log('registerTokenRefresh', tokenFirebaseNew);
    if (tokenFirebase !== tokenFirebaseNew) {
      registerPushApi(tokenFirebaseNew, tokenFirebase, () => {
        setTokenFirebase(tokenFirebaseNew);
      });
    }
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
  setLanguageGlobal,
};
