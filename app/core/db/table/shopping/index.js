/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 10/4/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {getDatabase, replaceDataBase, deleteDataBase} from '../../Sqlitedb';

export const shopping = {
  packid: 'packid',
  productid: 'productid',
  nameProduct: 'nameProduct',
  namePack: 'namePack',
  type: 'type',
  packpriceusd: 'packpriceusd',
  image: 'image',
  quantity: 'quantity',
  total: 'total',
};

export const replaceShopping = (
  shopping,
  success = () => {},
  failure = () => {},
) => {
  const query =
    'REPLACE INTO shopping(packid, productid, nameProduct, namePack, type, packpriceusd, image, quantity, total) VALUES (?,?,?,?,?,?,?,?,?);';
  const values = [
    shopping.packid,
    shopping.productid,
    shopping.nameProduct,
    shopping.namePack,
    shopping.type,
    shopping.packpriceusd,
    shopping.image,
    shopping.quantity,
    shopping.total,
  ];
  replaceDataBase(query, values, success, failure);
};

export const getListCarts = (success = () => {}, failure = () => {}) => {
  const query = 'SELECT * FROM shopping';
  getDatabase(query, success, failure);
};

export const getCartItem = (
  packId,
  productId,
  success = () => {},
  failure = () => {},
) => {
  const query = `SELECT * FROM shopping where productid = ${productId} AND packid = ${packId}`;
  getDatabase(query, success, failure);
};

export const deleteShoppingItem = (
  packId,
  productId,
  success = () => {},
  failure = () => {},
) => {
  const query = `DELETE FROM shopping WHERE productid = ${productId} AND packid = ${packId}`;
  deleteDataBase(query, success, failure);
};

export const deleteShopping = (success = () => {}, failure = () => {}) => {
  const query = 'DELETE FROM shopping';
  deleteDataBase(query, success, failure);
};
