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
