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

import {replaceDataBase, getDatabase} from '../../Sqlitedb';

export const product = {
  productId: 'productId',
  name: 'name',
  description: 'description',
  price: 'price',
  image: 'image',
  total: 'total',
};

export const replaceProduct = (
  product,
  success = () => {},
  failure = () => {},
) => {
  const query =
    'REPLACE INTO product(productId, name, description, price, image, total) VALUES (?,?,?,?,?,?);';
  const values = [
    product.productId,
    product.name,
    product.description,
    product.price,
    product.image,
    product.total,
  ];
  replaceDataBase(query, values, success, failure);
};

export const getProducts = (success = () => {}, failure = () => {}) => {
  const query = 'SELECT * FROM product';
  getDatabase(query, success, failure);
};
