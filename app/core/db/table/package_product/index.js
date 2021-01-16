/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 1/2/21.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {replaceDataBase, getDatabase} from '../../Sqlitedb';

export const package_product = {
  packid: 'packid',
  title: 'title',
  productid: 'productid',
  quantity: 'quantity',
  type: 'type',
  countryid: 'countryid',
  membertype: 'membertype',
  bonus: 'bonus',
  onlinequota: 'onlinequota',
  packpriceusd: 'packpriceusd',
  packpv: 'packpv',
};

export const replacePackageProduct = (
  package_product,
  success = () => {},
  failure = () => {},
) => {
  const query =
    'REPLACE INTO package_product(packid, title, productid, quantity, type, countryid, membertype, bonus, onlinequota, packpriceusd, packpv) VALUES (?,?,?,?,?,?,?,?,?,?,?);';
  const values = [
    package_product.packid,
    package_product.title,
    package_product.productid,
    package_product.quantity,
    package_product.type,
    package_product.countryid,
    package_product.membertype,
    package_product.bonus,
    package_product.onlinequota,
    package_product.packpriceusd,
    package_product.packpv,
  ];
  replaceDataBase(query, values, success, failure);
};

export const getPackageProduct = (success = () => {}, failure = () => {}) => {
  const query = 'SELECT * FROM package_product';
  getDatabase(query, success, failure);
};

export const getPackageByProductId = (
  productid,
  oderType,
  success = () => {},
  failure = () => {},
) => {
  const query = `SELECT * FROM package_product WHERE productid = ${productid} AND type = ${oderType}`;
  getDatabase(query, success, failure);
};
