

import {getDatabase, replaceDataBase} from '../../Sqlitedb';

export const transaction_history = {
  transactionId: 'transactionId',
  description: 'description',
  totalPrice: 'totalPrice',
  accountBalance: 'accountBalance',
  time: 'time',
};

export const addTransactionHistory = (
  data,
  success = () => {},
  failure = () => {},
) => {
  const query =
    'INSERT INTO transaction_history(transactionId, description, totalPrice, accountBalance, time) VALUES (?,?,?,?,?);';
  const values = [
    data.transactionId,
    data.description,
    data.totalPrice,
    data.accountBalance,
    data.time,
  ];
  replaceDataBase(query, values, success, failure);
};

export const getListTransactionHistory = (
  success = () => {},
  failure = () => {},
) => {
  const query = 'SELECT * FROM transaction_history';
  getDatabase(query, success, failure);
};
