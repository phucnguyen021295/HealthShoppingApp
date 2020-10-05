/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/4/20.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {getDatabase, replaceDataBase, deleteDataBase} from '../../Sqlitedb';

export const shopping = {
  productId: 'productId',
  name: 'name',
  price: 'price',
  image: 'image',
  total: 'total',
};

export const replaceShopping = (
  shopping,
  success = () => {},
  failure = () => {},
) => {
  const query =
    'REPLACE INTO shopping(productId, name, price, image, total) VALUES (?,?,?,?,?);';
  const values = [
    shopping.productId,
    shopping.name,
    shopping.price,
    shopping.image,
    shopping.total,
  ];
  replaceDataBase(query, values, success, failure);
};

export const getListCarts = (success = () => {}, failure = () => {}) => {
  const query = 'SELECT * FROM shopping';
  getDatabase(query, success, failure);
};

export const getCartItem = (
  productId,
  success = () => {},
  failure = () => {},
) => {
  const query = `SELECT * FROM shopping where productId = ${productId}`;
  getDatabase(query, success, failure);
};

export const deleteShoppingItem = (
  productId,
  success = () => {},
  failure = () => {},
) => {
  const query = `DELETE FROM shopping WHERE productId = ${productId}`;
  deleteDataBase(query, success, failure);
};
