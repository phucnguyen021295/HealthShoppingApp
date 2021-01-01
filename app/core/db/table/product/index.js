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
  productid: 'productid',
  title: 'title',
  des: 'des',
  quality: 'quality',
  image: 'image',
  pv: 'pv',
  brief: 'brief',
  priceusd: 'priceusd',
  image150: 'image150',
  image500: 'image500',
};

export const replaceProduct = (
  product,
  success = () => {},
  failure = () => {},
) => {
  const query =
    'REPLACE INTO product(productid, title, des, quality, image, pv, brief, priceusd, image150, image500) VALUES (?,?,?,?,?,?,?,?,?,?);';
  const values = [
    product.productid,
    product.title,
    product.des,
    product.quality,
    product.image,
    product.pv,
    product.brief,
    product.priceusd,
    product.image150,
    product.image500,
  ];
  replaceDataBase(query, values, success, failure);
};

export const getProducts = (success = () => {}, failure = () => {}) => {
  const query = 'SELECT * FROM product';
  getDatabase(query, success, failure);
};
